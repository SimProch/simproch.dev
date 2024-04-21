import { c as create_ssr_component, e as escape } from "./ssr.js";
import { C as Contents } from "./07-heap2.js";
const _07_heap = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const contents = Contents;
  if ($$props.contents === void 0 && $$bindings.contents && contents !== void 0)
    $$bindings.contents(contents);
  return `<h1>${escape(Contents.title)}</h1> <p>${escape(contents.subtitle)}</p> <h2 data-svelte-h="svelte-1j1kxdd"><a href="#intro">Introduction</a><span id="intro"></span></h2> <p data-svelte-h="svelte-s2nj6y">When working with JavaScript, I’ve often seen the error <code>JavaScript Heap Out of Memory Error</code>. I’ve never known what a heap is.</p> <p data-svelte-h="svelte-5wkzns">In short, it’s a tree. Kind of.</p> <p data-svelte-h="svelte-hl3ykz">In previous part, we’ve had binary search tree - that is, a <strong>binary tree</strong> that is optimized for searching.</p> <ul data-svelte-h="svelte-1h9ft87"><li>Values in left children are lesser than current value</li> <li>Values in right children are greater than current value</li></ul> <p data-svelte-h="svelte-1iunjy6">Now, notice how I’ve emphasized the binary tree. Because BST is just a form of binary tree. Heap is another kind.</p> <p data-svelte-h="svelte-a6skht">A binary tree is in essence very simple:</p> <ul data-svelte-h="svelte-tretzx"><li>Has a root level</li> <li>Each node has 2 children</li></ul> <p data-svelte-h="svelte-1cqdlf">So, if we would have a completely balanced tree, we could have something like:</p> <ul data-svelte-h="svelte-htnxem"><li>first level - root - 1 node</li> <li>second level - root children - 2 nodes</li> <li>third level - 2 * 2 - 4 nodes</li></ul> <p data-svelte-h="svelte-73k2tv">You may see where I’m going with this. Binary tree has levels of power of 2. If a binary tree has 10 levels and is balanced,
it’ll have a maximum of 2^10 nodes (2^0, 2^1, 2^2, … 2^10)</p> <p data-svelte-h="svelte-l3897f">Now, another term for this is <strong>complete binary tree</strong>.</p> <img src="/images/data-structures-and-algorithms/bst-complete.png" alt="Complete BT" title="Complete BT" class="image" loading="lazy"> <p data-svelte-h="svelte-10ok9uz">In other words, if we go by leaves, we’ll see that there is no missing value. In the incomplete tree, we have a missing leaf 3.</p> <p data-svelte-h="svelte-1c910dk">How does this help us heaps and why should we care? Well, let’s investigate!</p> <h2 data-svelte-h="svelte-8g9o4t"><a href="#making-trees-into-arrays">Making trees into arrays</a><span id="making-trees-into-arrays"></span></h2> <p data-svelte-h="svelte-12zdk95">As the subtitle suggests, we’re not gonna use trees as we used to with BST. Instead, we’ll use an array. And here comes the important bit:</p> <p data-svelte-h="svelte-mkr42h"><strong>Heaps must be complete binary trees</strong></p> <p data-svelte-h="svelte-pofjmf">Now, consider you have the following array: <code>[1,2,3,4,5,6]</code></p> <p data-svelte-h="svelte-4heyc8">If you look at it, you could try to put it into a tree:</p> <ul data-svelte-h="svelte-455xxo"><li>1<ul><li>2<ul><li>4</li> <li>5</li></ul></li> <li>3<ul><li>6</li></ul></li></ul></li></ul> <p data-svelte-h="svelte-eh4399">And you would be right! That’s exactly what a heap is. The only difference is that we don’t do links between nodes, and
we effectively go by levels (note the number 4 is a child of 2)</p> <p data-svelte-h="svelte-1w1e7hg">So, let’s create a simple heap:</p> <pre class="language-js"><!-- HTML_TAG_START -->${`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">Heap</span> <span class="token punctuation">&#123;</span> 
    data <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token function-variable function">getRootNode</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span><span class="token function">at</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
    <span class="token function-variable function">getLastNode</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span><span class="token function">at</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span></code>`}<!-- HTML_TAG_END --></pre> <p data-svelte-h="svelte-1rpnu1x">Now, that’s a simple heap. It’s just a wrapper around array. But how does this help us?</p> <p data-svelte-h="svelte-1951yfy">Well, consider the array above:</p> <ul data-svelte-h="svelte-th2szz"><li>we are at the root - index 0</li> <li>we want to get to the left child - index 1</li></ul> <p data-svelte-h="svelte-1ixmla9">How do we do that? Well, we could increment it. But what if we want to go left even more? Think about the indices in the array</p> <p data-svelte-h="svelte-120wp0y"><code>[1,2,3,4,5,6,7,8,9]</code></p> <ul data-svelte-h="svelte-16ac2c1"><li>root - 0 (value 1)</li> <li>left child - 1 (value 2)</li> <li>lefter child - 3 (value 4)</li> <li>lefter lefter child - 7 (value 8)</li></ul> <p data-svelte-h="svelte-1yl9f9j">Now, we’re getting somewhere. Notice the pattern in there. Now, look at the question above and consider:</p> <ul data-svelte-h="svelte-cbnqkf"><li>we want to move from root level to 3th level</li> <li>The indices are 0, 1, 3, 7</li></ul> <p data-svelte-h="svelte-15dqr41">With the indices it’s a little harder to see, but we see the binary part. To get the left child, we just do <code>index * 2 + 1</code>!</p> <ul data-svelte-h="svelte-cd7ixb"><li>root level: 2 * 0 + 1 =&gt; 1</li> <li>1st level: 2 * 1 + 1 =&gt; 3</li> <li>2nd level: 2 * 3 + 1 =&gt; 7</li> <li>3rd level: 2 * 7 + 1 =&gt; 15</li></ul> <p data-svelte-h="svelte-yv176n">In fact, we can traverse the tree with simple multiplication! The same goes for right child - instead of <code>1</code>, we add <code>2</code>:</p> <ul data-svelte-h="svelte-187715t"><li>root level: 2 * 0 + 2  =&gt; 2</li> <li>1st level: 2 * 2 + 1 =&gt; 5</li> <li>2nd level: 2 * 5 + 1 =&gt; 11</li></ul> <p data-svelte-h="svelte-1i3b98g">Note that the above is moving only left/right. If we wanted to go left/right/left, we’d need the addition to be <code>1, 2, 1</code> respectively.</p> <p data-svelte-h="svelte-kf848y">And finally, how do we get the parent? Well, let’s take a look at the above example:</p> <ul data-svelte-h="svelte-1awe50g"><li>3rd level is 11</li> <li>2st level is 5</li> <li>1st level is 2</li> <li>root level is 1</li></ul> <p data-svelte-h="svelte-4ruzu6">Well, we’re again doubling - except backwards! We’re dividing by 2! If we divide 11 by 2, we get 5.5. Cut off the remainder and we have it!</p> <p data-svelte-h="svelte-1u69pwq">But wait, there’s one more trick here. Consideer the following heap: <code>[0,1,2,3,4,5,6,7,8,9,10,11,12]</code>. It’ll look like:</p> <ul data-svelte-h="svelte-108xszo"><li>0<ul><li>1<ul><li>3<ul><li>7</li> <li>8</li></ul></li> <li>4<ul><li>9</li> <li>10</li></ul></li></ul></li> <li>2<ul><li>5<ul><li>11</li> <li>12</li></ul></li> <li>6</li></ul></li></ul></li></ul> <p data-svelte-h="svelte-rmgxdy">If you take a look, it still works for 11. However, it doesn’t work for <code>10</code>. If you <code>Math.floor(10 / 2)</code>, you will still get 5.</p> <p data-svelte-h="svelte-11b2zcq">But as seen above, it’s actually 4. We need to have subtract one in here. The final function is:</p> <p data-svelte-h="svelte-1ulc0yb">So, the function here is <code>Math.floor((index - 1) / 2)</code></p> <p data-svelte-h="svelte-a3bl4z">So, let’s continue with our Heap!</p> <pre class="language-js"><!-- HTML_TAG_START -->${`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">Heap</span> <span class="token punctuation">&#123;</span> 
    data <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token function-variable function">getRootNode</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span><span class="token function">at</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
    <span class="token function-variable function">getLastNode</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span><span class="token function">at</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token function-variable function">getLeftChildIndex</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">parentIndex</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>parentIndex <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token function-variable function">getRightChildIndex</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">parentIndex</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>parentIndex <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">;</span>
    <span class="token function-variable function">getParentIndex</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">childIndex</span><span class="token punctuation">)</span> <span class="token operator">=></span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>childIndex <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span>
<span class="token punctuation">&#125;</span></code>`}<!-- HTML_TAG_END --></pre> <p data-svelte-h="svelte-l8whli">And that’s it. We’ve created iur heap processing. But we still can’t insert or delete, can we?</p> <p data-svelte-h="svelte-101gii6">Well, we’re not done yet. The problem is - insertion and deletion depends on the type of heap.</p> <ul data-svelte-h="svelte-1dmhqwy"><li>Min Heap</li> <li>Max Heap</li></ul> <p data-svelte-h="svelte-176qm4m">Now, you can easily view this as a sorted array:</p> <ul data-svelte-h="svelte-jbhmbu"><li>min heap -&gt; node is lower than its children</li> <li>max heap -&gt; node is higher than its children</li></ul> <p data-svelte-h="svelte-1mnieua">To insert and delete, we’ll use a technique called <strong>trickling</strong>. Because of this, we’ll allow insertion and deletion to be
O(log N) rather than O(N) with regular arrays.</p> <h2 data-svelte-h="svelte-1o3g7tc"><a href="#trickling">Trickling</a><span id="trickling"></span></h2> <p data-svelte-h="svelte-bz4s3d">When we insert something in the table, we’re working cleverly with the indices. Consider the following heap:
<code>2,3,4,5,6,7,8,9,10</code></p> <p data-svelte-h="svelte-1odswxi">Now, this can we written also as:</p> <ul data-svelte-h="svelte-sn7f5a"><li>2<ul><li>3<ul><li>5<ul><li>9</li> <li>10</li></ul></li> <li>6</li></ul></li> <li>4<ul><li>7</li> <li>8</li></ul></li></ul></li></ul> <p data-svelte-h="svelte-qky3zp">But wait. There’s an issue here. Because the definition of min-heap is that the node is lower than its children. That’s an
<strong>invalid min-heap</strong>! While I call it a heap, we can’t use it for this example.</p> <p data-svelte-h="svelte-ac6ue8">Now that is important because of the insertion and deletion! Consider the following image:</p> <img src="/images/data-structures-and-algorithms/min-heap.jpeg" alt="Min Heap" title="Min Heap" class="image" loading="lazy"> <p data-svelte-h="svelte-1hgy6ye">If we insert at the end the value 19, we don’t need to move it anywhere. But if we insert a value 5, we need to move it to the top
and swap them all.</p> <p data-svelte-h="svelte-13i3bxu">So, to trickling:</p> <p data-svelte-h="svelte-173kl3u">So, we’ll trickle the node to the top! What do I mean by that? Well, let’s take a look:</p> <ul data-svelte-h="svelte-1cttsa5"><li>We take the node</li> <li>We know how we can get the parent</li> <li>While the parent is higher, we’ll be swapping the elements</li></ul> <p data-svelte-h="svelte-1ncuc5p">Let’s quickly create a min heap insertion:</p> <pre class="language-js"><!-- HTML_TAG_START -->${`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">MinHeap</span> <span class="token keyword">extends</span> <span class="token class-name">Heap</span> <span class="token punctuation">&#123;</span>
    <span class="token function">insert</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> index <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> parentIndex <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getParentIndex</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">[</span>parentIndex<span class="token punctuation">]</span> <span class="token operator">></span> <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
            <span class="token keyword">const</span> temp <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">[</span>parentIndex<span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">[</span>parentIndex<span class="token punctuation">]</span> <span class="token operator">=</span> temp<span class="token punctuation">;</span>
            index <span class="token operator">=</span> parentIndex<span class="token punctuation">;</span>
            parentIndex <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getParentIndex</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">&#125;</span>
    <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`}<!-- HTML_TAG_END --></pre> <p data-svelte-h="svelte-7rd7ph">Now, for max heap, it’s gonna be pretty much the same. The condition is going to be different:</p> <pre class="language-js"><!-- HTML_TAG_START -->${`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">MaxHeap</span> <span class="token keyword">extends</span> <span class="token class-name">Heap</span> <span class="token punctuation">&#123;</span>
    <span class="token function">insert</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> index <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> parentIndex <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getParentIndex</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">[</span>parentIndex<span class="token punctuation">]</span> <span class="token operator">&lt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
            <span class="token keyword">const</span> temp <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">[</span>parentIndex<span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">[</span>parentIndex<span class="token punctuation">]</span> <span class="token operator">=</span> temp<span class="token punctuation">;</span>
            index <span class="token operator">=</span> parentIndex<span class="token punctuation">;</span>
            parentIndex <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getParentIndex</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">&#125;</span>
    <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`}<!-- HTML_TAG_END --></pre> <p data-svelte-h="svelte-1qafkw7">If you look closely, both codes are exactly the same, with the condition being swapped.</p> <p data-svelte-h="svelte-1mpk00o">And that’s it for insertion!</p> <ul data-svelte-h="svelte-1vf377m"><li>Push to the end of array</li> <li>Get current index</li> <li>Get parent index</li> <li>While parent is greater than child, swap elements and calculate next index</li></ul> <h2 data-svelte-h="svelte-ze4s8v"><a href="#deletion">Deletion</a><span id="deletion"></span></h2> <p data-svelte-h="svelte-mkj1oe">Now, deletion is a little weird. To understand deletion, let’s talk a little about the use cases. Heaps are often used
in priority queues. What that means is consider you have 80 tasks to do. Each has a priority. I can use a max heap for that:</p> <ul data-svelte-h="svelte-hgdf7m"><li>The task with highest priority will be the root of the heap</li> <li>The next highest priority  task will be moved to the top</li></ul> <p data-svelte-h="svelte-f4j4ft">So, when deleting from a heap, we’ll always remove from the top. We won’t be removing individual branches.</p> <p data-svelte-h="svelte-1su2cyd">Now, you could see this as removing from top of array, and that would be simple. But with heaps, we’re looking for a fast
solution. So, what we’ll do is - we will <strong>replace</strong> the top element, but not <strong>remove</strong> it.</p> <p data-svelte-h="svelte-hxct01">How will we do that? Well, remember trickling? We were moving upwards. We’ll do exactly the same in here.</p> <ul data-svelte-h="svelte-162hgt"><li>We will “remove” the last element</li> <li>We will trickle this last element up</li> <li>The first element will be effectively removed as it’s replaced with another value</li></ul> <p data-svelte-h="svelte-e3307p">Now, there’s one more step in here. We need to consider both parts of the node and moved that one up.</p> <p data-svelte-h="svelte-fxedsr">So, let’s quickly do that for min-heap:</p> <pre class="language-js"><!-- HTML_TAG_START -->${`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">MinHeap</span> <span class="token keyword">extends</span> <span class="token class-name">Heap</span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">delete</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
        <span class="token keyword">const</span> lastValue <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> index <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">=</span> lastValue <span class="token comment">// replace the first item, effectively removing it</span>
        <span class="token keyword">let</span> leftChildIndex <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getLeftChildIndex</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> rightChildIndex <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getRightChildIndex</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">[</span>leftChildIndex<span class="token punctuation">]</span> <span class="token operator">&lt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">||</span> 
            <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">[</span>rightChildIndex<span class="token punctuation">]</span> <span class="token operator">&lt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">[</span>index<span class="token punctuation">]</span>
        <span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
            <span class="token keyword">const</span> temp <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token keyword">const</span> lesserNodeIndex <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">[</span>leftChildIndex<span class="token punctuation">]</span> <span class="token operator">&lt;</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">[</span>rightChildIndex<span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token number">Infinity</span><span class="token punctuation">)</span>
                <span class="token operator">?</span> <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">[</span>leftChildIndex<span class="token punctuation">]</span> 
                <span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">[</span>rightChildIndex<span class="token punctuation">]</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">[</span>lesserNodeIndex<span class="token punctuation">]</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">[</span>lesserNodeIndex<span class="token punctuation">]</span> <span class="token operator">=</span> temp<span class="token punctuation">;</span>

            leftChildIndex <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getLeftChildIndex</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token punctuation">;</span>
            rightChildIndex <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getRightChildIndex</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">&#125;</span>
    <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`}<!-- HTML_TAG_END --></pre> <p data-svelte-h="svelte-1q1hgqn">And that’s pretty much it! We:</p> <ul data-svelte-h="svelte-1hcb49s"><li>compare left and right children to see where we’re going</li> <li>We swap the current node with smaller node</li> <li>We repeat until there are no lesser elements</li></ul> <p data-svelte-h="svelte-1sok8fv">Again, for max-heap, it’s exactly the same thing. The only difference is the condition!</p> <pre class="language-js"><!-- HTML_TAG_START -->${`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">MinHeap</span> <span class="token keyword">extends</span> <span class="token class-name">Heap</span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">delete</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
        <span class="token keyword">const</span> lastValue <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> index <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">=</span> lastValue<span class="token punctuation">;</span>
        <span class="token keyword">let</span> leftChildIndex <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getLeftChildIndex</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> rightChildIndex <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getRightChildIndex</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">[</span>leftChildIndex<span class="token punctuation">]</span> <span class="token operator">></span> <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">||</span>     <span class="token comment">// swapped condition</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">[</span>rightChildIndex<span class="token punctuation">]</span> <span class="token operator">></span> <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">[</span>index<span class="token punctuation">]</span>       <span class="token comment">// swapped condition</span>
        <span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
            <span class="token keyword">const</span> temp <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token keyword">const</span> lesserNodeIndex <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">[</span>leftChildIndex<span class="token punctuation">]</span> <span class="token operator">></span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">[</span>rightChildIndex<span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token operator">-</span><span class="token number">Infinity</span><span class="token punctuation">)</span> <span class="token comment">// - Infinity</span>
                <span class="token operator">?</span> <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">[</span>leftChildIndex<span class="token punctuation">]</span> 
                <span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">[</span>rightChildIndex<span class="token punctuation">]</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">[</span>lesserNodeIndex<span class="token punctuation">]</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">[</span>lesserNodeIndex<span class="token punctuation">]</span> <span class="token operator">=</span> temp<span class="token punctuation">;</span>

            leftChildIndex <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getLeftChildIndex</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token punctuation">;</span>
            rightChildIndex <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getRightChildIndex</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">&#125;</span>
    <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`}<!-- HTML_TAG_END --></pre> <h2 data-svelte-h="svelte-1gat2or"><a href="#summary">Summary</a><span id="summary"></span></h2> <p data-svelte-h="svelte-17j26t5">Heaps are very effective priority queues and in this part, we’ve investigated 2 of them:</p> <ul data-svelte-h="svelte-jrman0"><li>Min-Heap (all nodes are lesser than their descendants)</li> <li>Max-Heap (all nodes are greater than their descendants)</li></ul> <p data-svelte-h="svelte-j3x8ae">Thanks to the binary tree, we could keep the O(log N) properties of insertion and deletion within an array by clever index play</p> <h2 data-svelte-h="svelte-153vzkz"><a href="#references">References</a><span id="references"></span></h2> <ul data-svelte-h="svelte-k5dtaj"><li><a href="https://www.amazon.com/Common-Sense-Guide-Data-Structures-Algorithms/dp/1680502441" rel="nofollow">A Common-Sense Guide to Data Structures and Algorithms</a></li> <li><a href="https://www.geeksforgeeks.org/difference-between-min-heap-and-max-heap/" rel="nofollow">Min &amp; Max Heap - GeeksForGeeks</a></li></ul>`;
});
export {
  _07_heap as default
};
