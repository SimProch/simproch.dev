import { c as create_ssr_component, e as escape } from "./ssr.js";
import { C as Contents } from "./05-node-based-data-structures2.js";
const _05_node_based_data_structures = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const contents = Contents;
  if ($$props.contents === void 0 && $$bindings.contents && contents !== void 0)
    $$bindings.contents(contents);
  return `<h1>${escape(Contents.title)}</h1> <p>${escape(contents.subtitle)}</p> <h2 data-svelte-h="svelte-1j1kxdd"><a href="#intro">Introduction</a><span id="intro"></span></h2> <p data-svelte-h="svelte-1htqiyt">Hello again!</p> <p data-svelte-h="svelte-s6igl">So, in the last chapter, I’ve gone through recursion, specifically quickselect and quicksort.
I’ll revisit these at the end of algorithms, as there is more to it.</p> <p data-svelte-h="svelte-kzxh2r">For the time being, we’ve learned recursion thanks to these two. So, let’s hop right on something more daunting!</p> <h2 data-svelte-h="svelte-njr6w9"><a href="#node-based-ds">Node-based Data Structures</a><span id="node-based-ds"></span></h2> <p data-svelte-h="svelte-4t5cis">When talking about node-based data structures, we don’t mean those that are specifically in NodeJS.</p> <p data-svelte-h="svelte-1fb9lt1">But, it has some ideas to do with JS! Because in JS everything is an object. And we’ll be using objects a lot in here.</p> <p data-svelte-h="svelte-1ue07es">In this part, I’ll be talking about linked lists. They are very similar to arrays. In fact, I’ve previously used arrays for queues.
Here, I might get funky and use linked lists!</p> <h2 data-svelte-h="svelte-1r0npa8"><a href="#linked-list">Linked list</a><span id="linked-list"></span></h2> <p data-svelte-h="svelte-f3hjvz">In this part, I’ll create a <a href="https://www.freecodecamp.org/news/implementing-a-linked-list-in-javascript/" rel="nofollow">Linked List</a>. But first, some terminology:</p> <ul data-svelte-h="svelte-1br8taj"><li>When we’re talking about the <strong>START</strong> of linked list, we’re talking about <strong>HEAD</strong>.</li> <li>When we’re talking about the <strong>END</strong> of linked list, we’re talking about <strong>TAIL</strong>.</li></ul> <p data-svelte-h="svelte-s9g44f">A linked list is fairly simple - it’s values leading one to another:</p> <pre class="language-js"><!-- HTML_TAG_START -->${`<code class="language-js"><span class="token keyword">const</span> linkedList <span class="token operator">=</span> <span class="token punctuation">&#123;</span>
    <span class="token literal-property property">head</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token literal-property property">next</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
            <span class="token literal-property property">next</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
                <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
                <span class="token literal-property property">next</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
                    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">next</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
                        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">5</span>
                        <span class="token literal-property property">next</span><span class="token operator">:</span> <span class="token keyword">null</span>
                    <span class="token punctuation">&#125;</span>
                <span class="token punctuation">&#125;</span>
            <span class="token punctuation">&#125;</span>
        <span class="token punctuation">&#125;</span>
    <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`}<!-- HTML_TAG_END --></pre> <p data-svelte-h="svelte-10zc2eq">Now, that looks horrible. However, there are some benefits to it.</p> <ul data-svelte-h="svelte-9atxbo"><li>During addition or removal, we do not need to reorganize the entire data structure</li> <li>We only need to link 2 elements together</li></ul> <p data-svelte-h="svelte-14d5xap">Now, that’s an important benefit. Remember when I was talking about queues? There, adding to queue is O(N) because we need to
shift all elements. However, in here, we can just remove the first element and link it to the HEAD. That’d be O(1)!</p> <p data-svelte-h="svelte-1ntayuu">But, as is always the case, there’s quite a bit of disadvantages:</p> <ul data-svelte-h="svelte-hjlsv5"><li>Search operations are slow - there is no random access (imagine sorting it)</li> <li>Uses more memory due to pointers (memory is spread all over the computer)</li></ul> <p data-svelte-h="svelte-m50ak2">So, let’s quickly create one. For clarity, I’ll use TypeScript in this part.</p> <pre class="language-ts"><!-- HTML_TAG_START -->${`<code class="language-ts"><span class="token keyword">class</span> <span class="token class-name">LinkedListNode</span> <span class="token punctuation">&#123;</span>
    nextNode<span class="token operator">:</span> LinkedListNode<span class="token punctuation">;</span>
    data<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">;</span>

    <span class="token function">constructor</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>data <span class="token operator">=</span> data<span class="token punctuation">;</span>
    <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`}<!-- HTML_TAG_END --></pre> <p data-svelte-h="svelte-1xpznln">Now, this is the smallest building block. Individiual nodes all have these values. The interesting part are the operations.</p> <ul data-svelte-h="svelte-1saeepn"><li>Reading a specific node (e.g. nth node)</li> <li>Finding a specific node (i.e. retrieving the index)</li> <li>Insertion &amp; Deletion</li></ul> <p data-svelte-h="svelte-1e97l1v">So, let’s create a Linked List using nodes!</p> <pre class="language-ts"><!-- HTML_TAG_START -->${`<code class="language-ts"><span class="token keyword">class</span> <span class="token class-name">LinkedList</span> <span class="token punctuation">&#123;</span>
    head<span class="token operator">:</span> LinkedListNode
    <span class="token function">constructor</span><span class="token punctuation">(</span>firstNode<span class="token operator">:</span> LinkedListNode<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">=</span> firstNode
    <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`}<!-- HTML_TAG_END --></pre> <p data-svelte-h="svelte-1ngkhw4">It’s as simple as that. Now, to allow for some reading or finding, let’s insert some nodes! Keep in mind 2 things:</p> <ul data-svelte-h="svelte-10bp2oy"><li>We can insert the node anywhere. So we’ll be inserting to an index</li> <li>We can also insert to the start. A linked list is created by default with a <strong>head</strong> node.</li></ul> <pre class="language-ts"><!-- HTML_TAG_START -->${`<code class="language-ts"><span class="token keyword">function</span> <span class="token function">insert</span><span class="token punctuation">(</span>index<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> dataToAdd<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">const</span> nodeToAdd <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LinkedListNode</span><span class="token punctuation">(</span>dataToAdd<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
        nodeToAdd<span class="token punctuation">.</span>nextNode <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">=</span> noteToAdd
        <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">&#125;</span>
    <span class="token keyword">let</span> currentNode <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>firstNode<span class="token punctuation">;</span>
    <span class="token keyword">let</span> index <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>currentIndex <span class="token operator">&lt;</span> indexToFind<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
        currentNode <span class="token operator">=</span> currentNode<span class="token punctuation">.</span>nextNode<span class="token punctuation">;</span>
        currentIndex<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>currentNode <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">&#125;</span>
    nodeToAdd<span class="token punctuation">.</span>nextNode <span class="token operator">=</span> currentNode<span class="token punctuation">.</span>nextNode<span class="token punctuation">;</span>
    currentNode<span class="token punctuation">.</span>nextNode <span class="token operator">=</span> nodeToAdd<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span></code>`}<!-- HTML_TAG_END --></pre> <p data-svelte-h="svelte-srnaen">Cool! We’ve managed to do an insertion! Let’s go through it:</p> <ul data-svelte-h="svelte-gcrmwh"><li>First, we need to see if the index is 0. If we want to insert to the head, we’re changing the only reference
in the class (<strong>head</strong>). We need to do it separately</li> <li>In other case, we’ll move through the entire Linked List and find the position. If the index is bigger than length, we don’t add anything</li> <li>Finally, the addition of the node is just setting the links <code>nextNode</code> on current and next node</li></ul> <p data-svelte-h="svelte-1oryp4q">There are 2 very important bits to remember:</p> <ul data-svelte-h="svelte-17tcmj5"><li>search for node using while loop</li> <li>changing the links rather than nodes themselves (except for <strong>head</strong>)</li></ul> <p data-svelte-h="svelte-1xv5050">So! Now that we can insert to it, we can perform some reading! Let’s print all our nodes!</p> <pre class="language-ts"><!-- HTML_TAG_START -->${`<code class="language-ts"><span class="token keyword">function</span> <span class="token function">printAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">let</span> node <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>nextNode<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>data<span class="token punctuation">)</span>
        node <span class="token operator">=</span> node<span class="token punctuation">.</span>nextNode
    <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`}<!-- HTML_TAG_END --></pre> <p data-svelte-h="svelte-u7xci8">Now, similarly, we can retrieve only the last node!</p> <pre class="language-ts"><!-- HTML_TAG_START -->${`<code class="language-ts"><span class="token keyword">function</span> <span class="token function">getLast</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">let</span> node <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>nextNode<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>nextNode <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> node<span class="token punctuation">.</span>data
    <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`}<!-- HTML_TAG_END --></pre> <p data-svelte-h="svelte-stzxyd">Fantastic! We’re now able to insert and traverse. We can also get the last node! But what if we want to:</p> <ul data-svelte-h="svelte-1uhzcev"><li>retrieve node by value</li> <li>retrieve node by index</li></ul> <p data-svelte-h="svelte-egaosm">Well, let’s quickly do these, it will be similar:</p> <pre class="language-ts"><!-- HTML_TAG_START -->${`<code class="language-ts"><span class="token keyword">function</span> <span class="token function">read</span><span class="token punctuation">(</span>indexToFind<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">let</span> node <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">;</span>
    <span class="token keyword">let</span> index <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>index <span class="token operator">&lt;</span> indexToFind<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
        node <span class="token operator">=</span> node<span class="token punctuation">.</span>nextNode
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>node<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">null</span>
    <span class="token punctuation">&#125;</span>
    <span class="token keyword">return</span> node<span class="token punctuation">.</span>data
<span class="token punctuation">&#125;</span>

<span class="token keyword">function</span> <span class="token function">findIndex</span><span class="token punctuation">(</span>itemToFind<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">let</span> node <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">;</span>
    <span class="token keyword">let</span> index <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>data <span class="token operator">!==</span> itemToFind<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
        node <span class="token operator">=</span> node<span class="token punctuation">.</span>nextNode<span class="token punctuation">;</span>
        index<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>node<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">&#125;</span>
    <span class="token keyword">return</span> index<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span></code>`}<!-- HTML_TAG_END --></pre> <p data-svelte-h="svelte-aa5rf7">Great! We can do that as well! As we see, it’s pretty much the same thing, just different condition. Let’s recap:</p> <ul data-svelte-h="svelte-zswz1z"><li>Insertion</li> <li>Traversing</li> <li>Deletion</li></ul> <p data-svelte-h="svelte-vyinyf">Soo, we’re missing deletion! Let’s deal with that as well. Remember - we’re only changing links!</p> <pre class="language-ts"><!-- HTML_TAG_START -->${`<code class="language-ts"><span class="token keyword">function</span> <span class="token keyword">delete</span><span class="token punctuation">(</span>indexToDelete<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span> 
        <span class="token keyword">this</span><span class="token punctuation">.</span>firstNode <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>firstNode<span class="token punctuation">.</span>nextNode<span class="token punctuation">;</span>
        <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">&#125;</span>

    <span class="token keyword">let</span> index <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>index <span class="token operator">&lt;</span> indexToDelete <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
        currentNode <span class="token operator">=</span> currentNode<span class="token punctuation">.</span>nextNode<span class="token punctuation">;</span>
        index<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>currentNode<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">&#125;</span>
    currentNode<span class="token punctuation">.</span>nextNode <span class="token operator">=</span> currentNode<span class="token punctuation">.</span>nextNode<span class="token punctuation">.</span>nextNode
<span class="token punctuation">&#125;</span></code>`}<!-- HTML_TAG_END --></pre> <p data-svelte-h="svelte-htwy27">Note specifically the last line. To delete a node, we need to start from the one BEFORE</p> <ul data-svelte-h="svelte-5oyu9c"><li>We want to just change “unlink” the element to delete</li> <li>We can’t do that from within the deleted node</li></ul> <h2 data-svelte-h="svelte-8o6k0g"><a href="#linked-list-code">Linked List Full Code</a><span id="linked-list-code"></span></h2> <p data-svelte-h="svelte-suew5k">Below, the entire code together can be seen:</p> <pre class="language-ts"><!-- HTML_TAG_START -->${`<code class="language-ts"><span class="token keyword">class</span> <span class="token class-name">LinkedListNode</span> <span class="token punctuation">&#123;</span>
  data<span class="token operator">:</span> <span class="token builtin">unknown</span><span class="token punctuation">;</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span>data<span class="token operator">:</span> <span class="token builtin">unknown</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>data <span class="token operator">=</span> data<span class="token punctuation">;</span>
  <span class="token punctuation">&#125;</span>

  nextNode<span class="token operator">:</span> LinkedListNode<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">class</span> <span class="token class-name">LinkedList</span> <span class="token punctuation">&#123;</span>
  firstNode<span class="token operator">:</span> LinkedListNode<span class="token punctuation">;</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span>firstNode<span class="token operator">:</span> LinkedListNode<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>firstNode <span class="token operator">=</span> firstNode<span class="token punctuation">;</span>
  <span class="token punctuation">&#125;</span>

  <span class="token function">read</span><span class="token punctuation">(</span>indexToFind<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">let</span> currentNode <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>firstNode<span class="token punctuation">;</span>
    <span class="token keyword">let</span> currentIndex <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>currentIndex <span class="token operator">&lt;</span> indexToFind<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
      currentNode <span class="token operator">=</span> currentNode<span class="token punctuation">.</span>nextNode<span class="token punctuation">;</span>
      currentIndex<span class="token operator">++</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>currentNode<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">&#125;</span>
    <span class="token keyword">return</span> currentNode<span class="token punctuation">.</span>data<span class="token punctuation">;</span>
  <span class="token punctuation">&#125;</span>

  <span class="token function">findIndex</span><span class="token punctuation">(</span>itemTofind<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">let</span> currentNode <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>firstNode<span class="token punctuation">;</span>
    <span class="token keyword">let</span> currentIndex <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>currentNode<span class="token punctuation">.</span>data <span class="token operator">!==</span> itemTofind<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
      currentNode <span class="token operator">=</span> currentNode<span class="token punctuation">.</span>nextNode<span class="token punctuation">;</span>
      currentIndex<span class="token operator">++</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>currentNode<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">&#125;</span>
    <span class="token keyword">return</span> currentIndex<span class="token punctuation">;</span>
  <span class="token punctuation">&#125;</span>

  <span class="token function">insert</span><span class="token punctuation">(</span>indexToFind<span class="token punctuation">,</span> dataToAdd<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">const</span> nodeToAdd <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LinkedListNode</span><span class="token punctuation">(</span>dataToAdd<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>indexToFind <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
      nodeToAdd<span class="token punctuation">.</span>nextNode <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>firstNode<span class="token punctuation">;</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>firstNode <span class="token operator">=</span> nodeToAdd<span class="token punctuation">;</span>
      <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">&#125;</span>
    <span class="token keyword">let</span> currentNode <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>firstNode<span class="token punctuation">;</span>
    <span class="token keyword">let</span> currentIndex <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>currentIndex <span class="token operator">&lt;</span> indexToFind<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
      currentNode <span class="token operator">=</span> currentNode<span class="token punctuation">.</span>nextNode<span class="token punctuation">;</span>
      currentIndex<span class="token operator">++</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>currentNode<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">&#125;</span>
    nodeToAdd<span class="token punctuation">.</span>nextNode <span class="token operator">=</span> currentNode<span class="token punctuation">.</span>nextNode<span class="token punctuation">;</span>
    currentNode<span class="token punctuation">.</span>nextNode <span class="token operator">=</span> nodeToAdd<span class="token punctuation">;</span>
  <span class="token punctuation">&#125;</span>

  <span class="token keyword">delete</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>firstNode <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>firstNode<span class="token punctuation">.</span>nextNode<span class="token punctuation">;</span>
      <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">&#125;</span>
    <span class="token keyword">let</span> currentNode <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>firstNode<span class="token punctuation">;</span>
    <span class="token keyword">let</span> currentIndex <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>currentIndex <span class="token operator">&lt;</span> index <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
      currentNode <span class="token operator">=</span> currentNode<span class="token punctuation">.</span>nextNode<span class="token punctuation">;</span>
      currentIndex<span class="token operator">++</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>currentNode<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">&#125;</span>
    <span class="token keyword">const</span> nodeAfterDeletedNode <span class="token operator">=</span> currentNode<span class="token punctuation">.</span>nextNode<span class="token operator">?.</span>nextNode<span class="token punctuation">;</span>
    currentNode<span class="token punctuation">.</span>nextNode <span class="token operator">=</span> nodeAfterDeletedNode<span class="token punctuation">;</span>
  <span class="token punctuation">&#125;</span>

  <span class="token function">printAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">let</span> currentNode <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>firstNode<span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>currentNode<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
      <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>currentNode<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
      currentNode <span class="token operator">=</span> currentNode<span class="token punctuation">.</span>nextNode<span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>currentNode<span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">&#125;</span>
  <span class="token punctuation">&#125;</span>

  <span class="token function">findLast</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">let</span> currentNode <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>firstNode<span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>currentNode<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
      currentNode <span class="token operator">=</span> currentNode<span class="token punctuation">.</span>nextNode<span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>currentNode<span class="token punctuation">.</span>nextNode<span class="token punctuation">)</span> <span class="token keyword">return</span> currentNode<span class="token punctuation">.</span>data<span class="token punctuation">;</span>
    <span class="token punctuation">&#125;</span>
  <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`}<!-- HTML_TAG_END --></pre> <p data-svelte-h="svelte-fmeico">Note one thing. With the current insertion, we can only insert into a body. We’d need a separate function to insert to the tail.</p> <h2 data-svelte-h="svelte-1oy4j2a"><a href="#linked-list-reverse">Reversing</a><span id="linked-list-reverse"></span></h2> <p data-svelte-h="svelte-1yimy4a">We’ve got one last thing to cover - reversing the linked list. If you think about it, reversing should be really hard, right?</p> <p data-svelte-h="svelte-fi5iy8">Well, it’s actually fairly easy. We are still just changing the links. So, we’ll slowly push the head to the end!</p> <pre class="language-ts"><!-- HTML_TAG_START -->${`<code class="language-ts"><span class="token keyword">function</span> <span class="token function">reverse</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">let</span> currentNode <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>firstNode<span class="token punctuation">;</span>
    <span class="token keyword">let</span> prevNode<span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>currentNode<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
        <span class="token keyword">const</span> nextNode <span class="token operator">=</span> currentNode<span class="token punctuation">.</span>nextNode<span class="token punctuation">;</span>
        currentNode<span class="token punctuation">.</span>nextNode <span class="token operator">=</span> previousNode<span class="token punctuation">;</span>
        previousNode <span class="token operator">=</span> currentNode<span class="token punctuation">;</span>
        currentNode <span class="token operator">=</span> nextNode<span class="token punctuation">;</span>
    <span class="token punctuation">&#125;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>firstNode <span class="token operator">=</span> prevNode<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span></code>`}<!-- HTML_TAG_END --></pre> <p data-svelte-h="svelte-1rd2oex">Now, to reverse it, we’ll basically:</p> <ul data-svelte-h="svelte-rjrvhw"><li>Store temporarily the next node</li> <li>Set the next node as previous node (undefined the first time)</li> <li>Define the previous node as current node</li> <li>Set the current node as next node</li></ul> <p data-svelte-h="svelte-s1odg3">So, we’ll basically reverse it!</p> <h2 data-svelte-h="svelte-1czcxv7"><a href="#doubly-linked-list">Doubly linked list</a><span id="doubly-linked-list"></span></h2> <p data-svelte-h="svelte-1hg9fl0">Now that we’ve gone through a linked list, we’ve found that having a two-way link would be beneficial. Luckily, that’s easy.</p> <p data-svelte-h="svelte-15dio3x">Because it’s all just reference of pointers in memory, we do not need to allocate any more memory. The doubly linked list can have following nodes:</p> <pre class="language-js"><!-- HTML_TAG_START -->${`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">LinkedListNode</span> <span class="token punctuation">&#123;</span>
    __nextNode<span class="token punctuation">;</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>data <span class="token operator">=</span> data<span class="token punctuation">;</span>
    <span class="token punctuation">&#125;</span>

    <span class="token keyword">get</span> <span class="token function">nextNode</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span> 
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>__nextNode<span class="token punctuation">;</span>
    <span class="token punctuation">&#125;</span>
    <span class="token keyword">set</span> <span class="token function">nextNode</span><span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>__nextNode <span class="token operator">=</span> val<span class="token punctuation">;</span>
        val<span class="token punctuation">.</span>previousNode <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
    <span class="token punctuation">&#125;</span>
    previousNode<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span></code>`}<!-- HTML_TAG_END --></pre> <p data-svelte-h="svelte-16ie1q6">Now that we have link to both nodes, deletion may be faster. However, we can also start from the end! In this case, that’s when
tail comes in play!</p> <ul data-svelte-h="svelte-15taok5"><li>We can keep a reference to the end</li> <li>Addition to both start and end is O(1)</li> <li>Searching is O(N / 2) if we know the index (we can go from start to end, or from end to start)</li> <li>Reversing is not an issue because we can go both ways!</li></ul> <p data-svelte-h="svelte-5u1o1d">And now, finally, putting it all together, we can do a simple queue with this doubly linked list!</p> <pre class="language-js"><!-- HTML_TAG_START -->${`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">Queue</span> <span class="token punctuation">&#123;</span>
    queue

    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>queue <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DoublyLinkedList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">&#125;</span>

    <span class="token function">enqueue</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>queue<span class="token punctuation">.</span><span class="token function">insertAtEnd</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
    <span class="token punctuation">&#125;</span>

    <span class="token function">dequeue</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>queue<span class="token punctuation">.</span><span class="token function">deleteFromStart</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">&#125;</span>

    <span class="token function">read</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>queue<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`}<!-- HTML_TAG_END --></pre> <h2 data-svelte-h="svelte-1gat2or"><a href="#summary">Summary</a><span id="summary"></span></h2> <p data-svelte-h="svelte-1mxo8a5">In this part, I’ve gone through a linked list. We’ve found that it’s very similar to arrays, if we forget how they look like in JS</p> <ul data-svelte-h="svelte-1n8suey"><li>Both can form queues</li> <li>Linked list can form an even more effective queue</li> <li>Linked list takes more memory</li></ul> <p data-svelte-h="svelte-1dnw2t">None the less, this traversing of nodes will soon prove to be extremely useful, as we’re slowly moving towards trees and graphs!</p> <h2 data-svelte-h="svelte-153vzkz"><a href="#references">References</a><span id="references"></span></h2> <ul data-svelte-h="svelte-i72qmn"><li><a href="https://www.amazon.com/Common-Sense-Guide-Data-Structures-Algorithms/dp/1680502441" rel="nofollow">A Common-Sense Guide to Data Structures and Algorithms</a></li> <li><a href="https://www.freecodecamp.org/news/implementing-a-linked-list-in-javascript/" rel="nofollow">Linked List in JS</a></li></ul>`;
});
export {
  _05_node_based_data_structures as default
};
