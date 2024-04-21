import { c as create_ssr_component, e as escape } from "./ssr.js";
import { C as Contents } from "./6-system-design-key-value-store2.js";
const _6_system_design_key_value_store = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const contents = Contents;
  if ($$props.contents === void 0 && $$bindings.contents && contents !== void 0)
    $$bindings.contents(contents);
  return `<h1>${escape(Contents.title)}</h1> <p>${escape(contents.subtitle)}</p> <h2 data-svelte-h="svelte-1j1kxdd"><a href="#intro">Introduction</a><span id="intro"></span></h2> <p data-svelte-h="svelte-12703sz">We’re slowly getting to designing for more specific use cases, but for the time being, let’s discuss one of the things before doing an entire system.</p> <p data-svelte-h="svelte-1xhesq0">This time, we’ll be looking into a <code>Key-Value store</code>. We’ve mentioned these previously with <code>Redis</code>, <code>Memcache</code> and other caches. We’ve also
dealt with them before when talking about consistent hashing - because the reason we’re hashing is mostly to save to a key value store.</p> <p data-svelte-h="svelte-mwvujp">So, without further ado, let’s talk about key-value stores.</p> <h2 data-svelte-h="svelte-1c48yu3"><a href="#what-is-key-value-store">What is Key-Value Store</a><span id="what-is-key-value-store"></span></h2> <p data-svelte-h="svelte-1a0nk2o">Most likely, all developers have already dealt with it in some shape or form. In data structures, a <code>hash-table</code> is a key-value store. In JS, any object is a key-value store.</p> <p data-svelte-h="svelte-1fpxbw1">Consider the following example:</p> <pre class="language-js"><!-- HTML_TAG_START -->${`<code class="language-js"><span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">&#123;</span><span class="token punctuation">&#125;</span><span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10_000_000</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    arr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span> <span class="token literal-property property">id</span><span class="token operator">:</span> i<span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    obj<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">&#123;</span> <span class="token literal-property property">id</span><span class="token operator">:</span> i<span class="token punctuation">&#125;</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span></code>`}<!-- HTML_TAG_END --></pre> <p data-svelte-h="svelte-38303g">In the code above, I’ve created a very simple array and a key-value store (or object, or hash-table - it’s all the same).</p> <p data-svelte-h="svelte-1rmy0zh">Now, when I want to get an item with index where <code>id == 5000</code>, I’d simply do:</p> <pre class="language-js"><!-- HTML_TAG_START -->${`<code class="language-js"><span class="token keyword">const</span> itemFromArray <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token parameter">i</span> <span class="token operator">=></span> i<span class="token punctuation">.</span>value <span class="token operator">===</span> <span class="token number">5000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> itemFromObj <span class="token operator">=</span> obj<span class="token punctuation">[</span><span class="token number">5000</span><span class="token punctuation">]</span></code>`}<!-- HTML_TAG_END --></pre> <p data-svelte-h="svelte-1hnebfc">Now, of course I could use direct index access on the array in the above example. But we’re not always able to ensure arrays are in order.
Furthermore, we’ve mentioned that unique identifiers, such as uuids, are used. We can’t use these as keys with arrays. However, with objects,
we can index by string.</p> <blockquote data-svelte-h="svelte-1ul695g"><p>Sidenote:<br>
Arrays can also have keys if you misuse them. I am aware of that fact.<br>
JS Arrays are objects deep down and can be treated as such. But that is not the point of this post.</p></blockquote> <p data-svelte-h="svelte-1w0x6di">In the above example, we’d have to iterate over the array, making the operation slower. With key-value stores, the complexity is <code>log(1)</code>. That is one of the reasons why key-value stores are so fast.</p> <p data-svelte-h="svelte-pr0cwm">Key-Value always have 2 components:</p> <ul data-svelte-h="svelte-1mw21i0"><li>Key - Unique identifier for the entire value.</li> <li>Value - The value correlating 1:1 with the key.</li></ul> <p data-svelte-h="svelte-1trpeib">NoSQL databases are basically enhanced key-value stores. That is also the reason why they are so fast for massive data that are not relational.</p> <p data-svelte-h="svelte-3uqghu">Key-Value stores often have 2 functions:</p> <ul data-svelte-h="svelte-1w9bj53"><li><code>get</code> function to retrieve a value</li> <li><code>put</code> function to set a value.</li></ul> <p data-svelte-h="svelte-1e2eez">The most basic Key-Value store was already used in previous chapter:</p> <pre class="language-js"><!-- HTML_TAG_START -->${`<code class="language-js"><span class="token keyword">const</span> keyValueStore <span class="token operator">=</span> <span class="token punctuation">&#123;</span><span class="token punctuation">&#125;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">get</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">id</span><span class="token punctuation">)</span> <span class="token operator">=></span> keyValueStore<span class="token punctuation">[</span>id<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">set</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">id<span class="token punctuation">,</span> value</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>keyValueStore<span class="token punctuation">[</span>id<span class="token punctuation">]</span> <span class="token operator">=</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token punctuation">&#123;</span> keyValueStore <span class="token punctuation">&#125;</span><span class="token punctuation">;</span></code>`}<!-- HTML_TAG_END --></pre> <p data-svelte-h="svelte-1hlcxsf">Or, <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map" rel="nofollow">JS Map</a> object is also a Key-Value store.</p> <p data-svelte-h="svelte-1wrplhk">In terms of system design, we are talking about the same thing. However, we scale it up. We scale it way up. Rather than from a single program,
we built entire caching and databases out of it. We use it for some form of data persistence or faster access. And as mentioned, examples include:</p> <ul data-svelte-h="svelte-1lkx0tn"><li><a href="https://redis.io/" rel="nofollow">Redis</a></li> <li><a href="https://memcached.org/" rel="nofollow">Memcached</a></li> <li><a href="https://aws.amazon.com/dynamodb/" rel="nofollow">DynamoDB</a></li> <li><a href="https://www.mongodb.com/databases/key-value-database" rel="nofollow">MongoDB</a></li></ul> <p data-svelte-h="svelte-x4d4m7">And because there are <a href="https://xkcd.com/927/" rel="nofollow">14 competing Key-Value stores</a>, let’s build one that will fit all purposes</p> <h2 data-svelte-h="svelte-1reylw9"><a href="#key-value-store-design">Key-Value store design</a><span id="key-value-store-design"></span></h2> <p data-svelte-h="svelte-lmdb3d">So, now that we established what a key value store is and how we can make a system out of it, let’s design a single server key value store!</p> <p data-svelte-h="svelte-1xfilb2">Oh wait, we’ve already done that. Because that is what we just did. A piece of code that lives on a server. The entire problem comes when we go distributed.</p> <p data-svelte-h="svelte-12y08rv">But why do we want to go distributed? Well, as mentioned before, you can only go so far until you run out of memory. So, having a distributed key value store allows for
more data.</p> <p data-svelte-h="svelte-yfb7h4">And to create a distributed store, as is the case always in system design, we need to make some tradeoffs.</p> <h3 data-svelte-h="svelte-isthf7"><a href="#cap">CAP theorem</a><span id="cap"></span></h3> <p data-svelte-h="svelte-1ne6kew">The <a href="https://en.wikipedia.org/wiki/CAP_theorem" rel="nofollow">CAP theorem</a> states that a distributed data store can provide only 2 of 3 guarantees:</p> <ul data-svelte-h="svelte-18b3mud"><li>Consistency (C)<ul><li>Every read receives most recent data (no stale data)</li></ul></li> <li>Availability (A)<ul><li>Every request receives a response, but not necessarily latest data</li></ul></li> <li>Partition Tolerance (P)<ul><li>System operates even though 2 partitions can’t communicate</li></ul></li></ul> <p data-svelte-h="svelte-1uekbm">So, we’ll always have either CA, or AP, or CP, but not all of them. Well, there are a bunch of choices!</p> <p data-svelte-h="svelte-tz3ucc">But are there? Because if you look at the partition tolerance, it basically states that it works if network is down. Which is impossible in system design across different countries.</p> <p data-svelte-h="svelte-15qxhfb">So, in the real world, we’ll always have to choose between availability and consistency, because we must never sacrifice partition tolerance.</p> <p data-svelte-h="svelte-1gh1h48">Let’s take a look at a specific example. Consider you are a bank. Now, ideally you want your system to be always available and consistent. But, if you have to choose only one, what would you choose?</p> <ul data-svelte-h="svelte-1kganu4"><li>If you want availability, then you sacrifice consistency.<ul><li>Your clients may try to work with money they don’t have because they still see old data</li></ul></li> <li>If consistency, then you sacrifice availability<ul><li>Your clients want to pay with money they have, but they temporarily can’t</li></ul></li></ul> <p data-svelte-h="svelte-19nc98d">Now, this is extremely simplified example, but if I consider myself as a client of such bank, I’d always want the consistency. I want to know how many funds I have at my disposal.
If I think I have way more money on my bank account than I have, I could do some serious damage to my finances because I could buy something I can’t afford. However,
if availability is sacrificed, I can’t buy the things now, but I’ll still be able to buy it in a couple hours.</p> <p data-svelte-h="svelte-wu6hj4">Let’s take a more technical look. Keep in mind we are talking about distributed systems.</p> <p data-svelte-h="svelte-1c64dmo">Consider that there are 3 different stores that contain the data, and 2 of these nodes receive a <code>write</code> request. When it is finished,
it is replicated to other nodes so that the data is consistent across all servers.</p> <p data-svelte-h="svelte-1n1f5gy">If consistency is chosen over availability, then all write oprations must be blocked until the last write operation has been processed. If there’s a network error,
subsequent operations are still blocked until the inconsistency has been resolved. This is where availability is sacrificed - The tools are not available because of ongoing operations.</p> <p data-svelte-h="svelte-1uwj86j">If availability is chosen over consistency, then you accept reads even though the data might not be up to date. This means that you perform write on 2 of the nodes, and read on a third one.
While previously you’d wait because you require consistency, in this case, you can return the stale data. An example of this can be facebook posts or google search results. While they are critical
in their business to have these available with the latest state, it’s not necessarily mission-critical to always see latest data.</p> <h3 data-svelte-h="svelte-1kv298l"><a href="#requirements">Key-Value Store Requirements</a><span id="requirements"></span></h3> <p data-svelte-h="svelte-rpl91v">Let’s put forth some requirements for our system:</p> <ul data-svelte-h="svelte-125abxh"><li>The size of a key-value pair is less than 10KB</li> <li>It is possible to store big data</li> <li>High availability</li> <li>High scalability</li> <li>Automatic scaling</li> <li>Tunable consistency</li> <li>Low latency</li></ul> <p data-svelte-h="svelte-1qz5van">To achieve these, we’ll need to understand core components and techniques used to build such a store:</p> <ul data-svelte-h="svelte-n5znk7"><li>Data partition</li> <li>Data replication</li> <li>Consistency</li> <li>Inconsistency resolution</li> <li>Handling failures</li> <li>System architecture diagram</li> <li>Write path</li> <li>Read Path</li></ul> <h4 data-svelte-h="svelte-1wl1y1z"><a href="#data-partition">Data partition</a><span id="data-partition"></span></h4> <p data-svelte-h="svelte-lelkz7">We’ve already discussed data partition in <a href="/posts/5-system-design-consistent-hashing#even-distribution">the previous chapter</a>. If you’d like, read on that there.</p> <p data-svelte-h="svelte-2otm72">The short story is that we define the data across multiple servers with abstract, virtual nodes, based on hash key. This allows for more even data distribution
and trustworthy system. It will also immediately solve scalability as we can add or remove servers as we go.</p> <h4 data-svelte-h="svelte-1qm7xic"><a href="#data-replication-inconsistency">Data replication &amp; Inconsistency</a><span id="data-replication-inconsistency"></span></h4> <p data-svelte-h="svelte-4dcly1">So, we want to have high availability and consistent data. But what if one of our servers goes down? If we remove it, we’ll just shuffle the data around, but
what if a server will go down unintentionally, we could lose some data. To deal with that, we’ll need to do replication.</p> <p data-svelte-h="svelte-20wwnu">We already know that:</p> <ul data-svelte-h="svelte-1bt52pe"><li>Key-Value stores use hashes to store data</li> <li>Hashes are defined so that they can be stored in a “Hash circle”</li> <li>Hash circle defines hash ranges upon which it stores data</li></ul> <p data-svelte-h="svelte-1worjjo">To remind ourselves, let me put the virtual node ring distribution:</p> <img src="/images/system-design/node-ring-distribution.png" alt="Ring distribution" title="Ring distribution" class="image" loading="lazy"> <p data-svelte-h="svelte-1xen935">Now, consider that data is stored to the <code>Node 3</code> in top right corner. Now, if the <code>Node 3</code> server fails, it means all red nodes are removed. So, for better reliability, we’d
replicate the data to the nearest <code>Nodes</code>. How many replicas do we create? Well, it depends on the tradeoff we want.</p> <ul data-svelte-h="svelte-h2gdon"><li>The more replicas we create, the more reliable the system is</li> <li>The more replicas we create, the less available the system is</li></ul> <p data-svelte-h="svelte-r3kdry">Usually the replicas are not added everywhere, but to a couple nearest nodes. If we replicated to all other nodes, then everything would have all data and it would be slow.</p> <p data-svelte-h="svelte-z0xx8a">Let’s put a couple definitions here to understand this better:</p> <ul data-svelte-h="svelte-1wwkiy0"><li><code>N</code> is the number of replicas</li> <li><code>W</code> is the number of write operations. A write operation is successful when it was acknowledged by W replicas.</li> <li><code>R</code> is the number of read operations. A read operation is considered successful when R replicas have acknowledged it.</li></ul> <p data-svelte-h="svelte-cr0zsk">This is called <strong>Quorum Consensus</strong> <span id="quorum-consensus"></span></p> <p data-svelte-h="svelte-1sov1v4">So, if the number of replicas is 3, then when we perform a write operation, it’s sent to 3 servers.</p> <ul data-svelte-h="svelte-vz4tgf"><li>If W is one, it means that write operation is performed on all 3 replicas, but it cares only about a single response</li> <li>If R is one, it means read operation is performed on all 3 replicas, but it only cares about a single response.</li></ul> <p data-svelte-h="svelte-zkivro">What does it mean? Well, we are going to write to 3 different key-value stores (or rather, a distributed key-value store).
If we’d wait for all of them to acknowledge the operation, it might take some time, but the latest data is on multiple nodes.</p> <p data-svelte-h="svelte-1ssmijf">We could simplify this to:</p> <ul data-svelte-h="svelte-k1n07z"><li>If R = 1 and W = N, then the system is optimized for fast read<ul><li>We care about the first read response, we don’t care about all servers together</li></ul></li> <li>If R = N and W = 1, then the system is optimized for fast write<ul><li>Once the first write is successful, we go back to working state. But for reading, we need all replicas responses</li></ul></li> <li>If W + R is greater than N, strong consistency is guaranteed<ul><li>If there are 3 replicas and we wait for 2 writes to finish, we wrote the data to multiple sources and we know it is consistent</li> <li>If there are 3 replaces and we wait for 2 reads to finish, we got result from multiple sources and we know it is consistent</li></ul></li> <li>If W + R is less than N, we can’t confirm strong consistency</li></ul> <p data-svelte-h="svelte-150cns">So, again, the number of replicas and read/write operations on multiple sources are tools we can use to achieve consistency, but it’s a tradeoff with latency.</p> <p data-svelte-h="svelte-188jddh">Going further, we can define 3 consitency models here:</p> <ul data-svelte-h="svelte-1aj2aru"><li>Strong consistency - Any read operation returns value corresponding to the latest write. No stale data.</li> <li>Weak consistency - Subsequent reads may not be the most up-to-date. Stale data are possible</li> <li>Eventual consistency - A form of weak consistency. With time, all updates are propagated and all replicas are consistent.</li></ul> <p data-svelte-h="svelte-hnwlao">The strong consistency, as mentioned before, will not accept additional reads/writes until all replicas have latest data (W = N).</p> <p data-svelte-h="svelte-1mb13ak">The weak consistency is again flipped around. These can be for fast reads.</p> <p data-svelte-h="svelte-v7zr6v">With the eventual consistency, we’ll again return stale data. However, we will have to perform inconsistency resolution. One of the techniques we can use is <code>versioning</code>.</p> <p data-svelte-h="svelte-1fpxbw1">Consider the following example:</p> <ul data-svelte-h="svelte-pmlvnk"><li>A user opens an application and changes his name.</li> <li>At the same time, the user changes his name from his mobile phone.</li></ul> <p data-svelte-h="svelte-13uzk2c">Now, both can hit different servers and both think their update is the correct one. A <a href="https://en.wikipedia.org/wiki/Vector_clock" rel="nofollow">vector clock</a> is a common technique used here.</p> <p data-svelte-h="svelte-1cq3og9">In short, a vector clock is a <code>(server, version)</code> pair. Basically, whenever a data is saved, we’ll also save information about which server it’s been saved to, and what version of the datum it is.</p> <ul data-svelte-h="svelte-18j2pip"><li>If only one server exists, every version would be simply increment of the previous version</li> <li>If multiple servers exist, then the clock value would increment the last version corresponding to the server.</li> <li>If the entry does not exist yet, create it with version 1</li></ul> <p data-svelte-h="svelte-1s2xlmj">So, with the original example, if it would be on a single server, then there is no inconsistency - last to be processed is the last one. However, with multiple servers, we don’t know which is the last one when we replicate the data.</p> <p data-svelte-h="svelte-1wmwgqa">Consider the following example - A user changes his name 3 times, with the last one being from multiple devices simultaneously</p> <ul data-svelte-h="svelte-7aqj68"><li>The first write is handled by <code>server 0</code>, defining <code>(s0, 1)</code> on the vector clock</li> <li>The second write is handled by <code>server 0</code>, defining <code>(s0, 2)</code> on the vector clock</li> <li>The third write is handled by <code>server 0</code> and <code>server 1</code>, defining:<ul><li><code>(s0, 3)</code> - note that <code>s1</code> is not present</li> <li><code>(s0, 2); (s1, 1)</code> - note the <code>s0</code> is present with its last state from this server PoV</li></ul></li> <li>The last 2 writes are reconciled (based on strategy defined by us, we could take either of them)</li> <li>A final write happens on <code>s0</code>, resulting in final state of <code>(s0, 4);(s1, 1)</code> (increment on <code>s0</code>)<ul><li>The final write could be done by <code>s1</code>, resulting in <code>(s0, 3);(s1, 2)</code> (increment on <code>s1</code> version)</li></ul></li></ul> <p data-svelte-h="svelte-7ex148">There are 2 major downsides to this approach</p> <ul data-svelte-h="svelte-1oq47uy"><li>Space limit - 3 writes caused more versioning on one server than the number of writes. This could get out of hand.<ul><li>To resolve this, we can set a threshold and reset versioning when we deem fit</li></ul></li> <li>The versioning itself doesn’t fix anything - we need to add complexity to reconcile the conflicts. It only gives us information with which we can resolve them.</li></ul> <h4 data-svelte-h="svelte-15rkt7z"><a href="#handling-failures">Handling failures</a><span id="handling-failures"></span></h4> <p data-svelte-h="svelte-qsgbgi">As is often the case, with large systems, failures are not inevitable but common. We need to handle them in a way that they can resolve from themselves and be able to detect them.</p> <p data-svelte-h="svelte-1yd9sbl">To detect a failure, we often do not trust monitoring from a single source.</p> <ul data-svelte-h="svelte-mn3i26"><li>Consider a node wants to save data to another node but can’t. However, the node is available, just for some reason the two can’t communicate together</li> <li>The node is accessible from another node, confirming it works</li> <li>The server is working, but a single link is broken</li> <li>We don’t want to make drastic changes because of a single link</li></ul> <p data-svelte-h="svelte-6xtn9b">To fix that, we could have all nodes talking to one another - <a href="https://en.wikipedia.org/wiki/Broadcast_domain" rel="nofollow">Broadcasting</a>. However, with many
servers, this might be too inefficient.</p> <p data-svelte-h="svelte-1tkdpr3">Another protocol we could use is the <a href="https://en.wikipedia.org/wiki/Gossip_protocol" rel="nofollow">Gossip Protocol</a> (or Epidemic Protocol).</p> <ul data-svelte-h="svelte-2mzkv0"><li>Each node has its own counter and increases it with time (<code>heartbeat</code>)</li> <li>The node sends this counter to other nodes, letting them know that it is working</li> <li>The other nodes receiving this information propagate it to next nodes</li> <li>If the heartbeat is not increased for a longer (predefined) time, multiple nodes will notice it and can flag that a specific node is down</li></ul> <p data-svelte-h="svelte-gkuous">Once it is confirmed a node is down, we can handle them.</p> <ul data-svelte-h="svelte-7z0755"><li>Strict way with higher consistency is that we’d block all changes made until the issue is resolved</li> <li>Sloppy way with higher availability is that the changes are temporarily taken by another node</li></ul> <p data-svelte-h="svelte-10abblk">The sloppy way is very similar to Master/Slave database handling. If the master database is down, a slave database takes its place and
performs the write operations. This is pretty much the same thing. At a later point, when the issues are resolved, the server is back online. We resolve inconsistencies and get to original working state.</p> <p data-svelte-h="svelte-1vbuqb5">However, this only works for temporary outages. What if the physical server was completely destroyed by natural disaster? To ensure that the data are not lost, it’s simple - replicate it to multiple servers.</p> <p data-svelte-h="svelte-fk6bve">But what if we wanted to replace the server with a completely new instance? Well, we would have to rebuild the data it used to contain.</p> <p data-svelte-h="svelte-1y108gy">In comes the <a href="https://www.influxdata.com/blog/eventual-consistency-anti-entropy/" rel="nofollow">Anti-Entropy protocol</a>.</p> <p data-svelte-h="svelte-1brydo3">In short, it’s used to compare pieces of data on each replicas and updating others with the latest data. One of the ways to do that is using
a <a href="https://en.wikipedia.org/wiki/Merkle_tree" rel="nofollow">Merkle tree</a> to detect inconsistency and minimize the amount of data transferred.</p> <p data-svelte-h="svelte-1gj8m5v">So, what inconsistency are we talking about? Well, let’s consider the example we’ve done before with the 3 writes. The last write is supposed to resolve the inconsistency.</p> <p data-svelte-h="svelte-yfs3xj">Now, what if the last write doesn’t happen? Then we have 2 sources that differ from one another. How do we find which of them are broken?</p> <ul data-svelte-h="svelte-nmwe9h"><li>We know the key space that that is used for the hashing function</li> <li>We know there are a lot of data in each server</li> <li>What do we do now?</li></ul> <p data-svelte-h="svelte-qrwrc2">Well, first, we take the keys available. Consider that there are 12 keys, one of which has inconsistency - for example, it’s missing</p> <p data-svelte-h="svelte-bgllq2">We’re gonna spread these keys into buckets:</p> <p data-svelte-h="svelte-loz9xe">For the first server, there will be all values. But for the second one, the key <code>8</code> will be missing</p> <p data-svelte-h="svelte-9pbgad"><strong>Server 1</strong></p> <table data-svelte-h="svelte-1wjehq1"><thead><tr><th>Bucket 1</th> <th>Bucket 2</th> <th>Bucket 3</th> <th>Bucket 4</th></tr></thead> <tbody><tr><td>1</td> <td>4</td> <td>7</td> <td>10</td></tr> <tr><td>2</td> <td>5</td> <td>8</td> <td>11</td></tr> <tr><td>3</td> <td>6</td> <td>9</td> <td>12</td></tr></tbody></table> <p data-svelte-h="svelte-jmjszy"><strong>Server 2</strong></p> <table data-svelte-h="svelte-1fnazup"><thead><tr><th>Bucket 1</th> <th>Bucket 2</th> <th>Bucket 3</th> <th>Bucket 4</th></tr></thead> <tbody><tr><td>1</td> <td>4</td> <td>7</td> <td>10</td></tr> <tr><td>2</td> <td>5</td> <td></td> <td>11</td></tr> <tr><td>3</td> <td>6</td> <td>9</td> <td>12</td></tr></tbody></table> <p data-svelte-h="svelte-89cttm">Now, we’ll hash all of these:</p> <p data-svelte-h="svelte-9pbgad"><strong>Server 1</strong></p> <table data-svelte-h="svelte-15672bm"><thead><tr><th>Bucket 1</th> <th>Bucket 2</th> <th>Bucket 3</th> <th>Bucket 4</th></tr></thead> <tbody><tr><td>41</td> <td>49</td> <td>71</td> <td>122</td></tr> <tr><td>82</td> <td>59</td> <td>81</td> <td>132</td></tr> <tr><td>44</td> <td>69</td> <td>91</td> <td>184</td></tr></tbody></table> <p data-svelte-h="svelte-jmjszy"><strong>Server 2</strong></p> <table data-svelte-h="svelte-g6uoz"><thead><tr><th>Bucket 1</th> <th>Bucket 2</th> <th>Bucket 3</th> <th>Bucket 4</th></tr></thead> <tbody><tr><td>41</td> <td>49</td> <td>71</td> <td>122</td></tr> <tr><td>82</td> <td>59</td> <td></td> <td>132</td></tr> <tr><td>44</td> <td>69</td> <td>91</td> <td>184</td></tr></tbody></table> <p data-svelte-h="svelte-o1iwtl">And finally, we’ll hash each bucket (e.g. by hashing the sum of hashes)</p> <p data-svelte-h="svelte-9pbgad"><strong>Server 1</strong></p> <table data-svelte-h="svelte-1vozk8g"><thead><tr><th>213</th> <th>232</th> <th>323</th> <th>421</th></tr></thead> <tbody><tr><td>41</td> <td>49</td> <td>71</td> <td>122</td></tr> <tr><td>82</td> <td>59</td> <td>81</td> <td>132</td></tr> <tr><td>44</td> <td>69</td> <td>91</td> <td>184</td></tr></tbody></table> <p data-svelte-h="svelte-jmjszy"><strong>Server 2</strong></p> <table data-svelte-h="svelte-ebqrek"><thead><tr><th>213</th> <th>232</th> <th>939</th> <th>421</th></tr></thead> <tbody><tr><td>41</td> <td>49</td> <td>71</td> <td>122</td></tr> <tr><td>82</td> <td>59</td> <td></td> <td>132</td></tr> <tr><td>44</td> <td>69</td> <td>91</td> <td>184</td></tr></tbody></table> <p data-svelte-h="svelte-wxceyc">Now, you can notice the the difference between both tables is:</p> <ul data-svelte-h="svelte-1uq4sy9"><li>The <strong>Bucket 3</strong> hash</li> <li>The <strong>Bucket 3 key 8</strong> hash</li></ul> <p data-svelte-h="svelte-vo6kx7">However, this would work for any nodes inside such a tree. If there were inconsistencies in all 4 buckets, the hash function would reveal them.</p> <p data-svelte-h="svelte-16fdqz1">So, what do we do with this information? Well, we will build a tree from it! And at its’ root, we’ll have a hash of all the buckets. Let’s hash those:</p> <ul data-svelte-h="svelte-m35gxz"><li>Server 1 total hash is <strong>4242</strong></li> <li>Server 2 total hash is <strong>2424</strong></li></ul> <p data-svelte-h="svelte-e1eot5">And how does this benefit is now? Well, consider the following:</p> <ul data-svelte-h="svelte-a2atmp"><li>If the 2 servers have same data, the total hash would be the same. Therefore, there are no inconsistencies to deal with</li> <li>If the 2 servers have different data, it’s immediately visible</li></ul> <p data-svelte-h="svelte-16mzse8">How do we build the tree? Well, it will basically be a tree of 3 levels!</p> <ul data-svelte-h="svelte-1f2h2uo"><li>Root<ul><li>Bucket 1<ul><li>Key 1</li> <li>Key 2</li></ul></li> <li>Bucket 2</li> <li>…</li> <li>Bucket n<ul><li>Key n - 1</li> <li>Key n</li></ul></li></ul></li></ul> <p data-svelte-h="svelte-1na1dn2">And by having the hashes, we can immediately see what’s wrong! With the above example, we know that <strong>Bucket 3</strong> hash is different, and <strong>Key 8</strong> hash is different</p> <p data-svelte-h="svelte-iwddxm">In the tree, when we go from the top level, we know which buckets are consistent, and which are not.</p> <p data-svelte-h="svelte-17yj5x6">Therefore, <strong>the number of data to be synchronized is proportional to the differences between replicas</strong>, not the data they contain.</p> <ul data-svelte-h="svelte-8c55x5"><li>in a real world scenario, the bucket size can be way bigger than 3. It can be thousands</li> <li>here can be million buckets for billion keys. With many users, it’s possible</li> <li>in such large data, we need to have a fast way to deal with it. The Merkle tree indicates it immediately</li></ul> <h4 data-svelte-h="svelte-1wg46ki"><a href="#sad">System Architecture Diagram</a><span id="sad"></span></h4> <p data-svelte-h="svelte-9vausl">Now we have gone through all the technical considerations. We have achieved consistency, we have learned how to deal with inconsistency, and
we found out the tradeoffs various approaches offer.</p> <p data-svelte-h="svelte-60clkl">Now, we’ve dealt with nodes for quite some time, but I initially mentioned that there is a web server above them. That’s why we needed to know
how to get the <code>serverIndex</code> in the previous chapter. So, let’s put it all together:</p> <img src="/images/system-design/key-value-store-diagram.png" alt="Key Value Store Diagram" title="Key Value Store Diagram" class="image" loading="lazy"> <ul data-svelte-h="svelte-1wci0ym"><li>We have a client that reads into the key-value store</li> <li>We have a coordinator who defines into which nodes the data should be written/from which to retrieve the data<ul><li>This coordinator also deals with <code>Acknowledgement</code>. This was discussed mostly in the <a href="#data-replication-inconsistency">Data Replication &amp; Inconsistency</a> part</li> <li>Once the coordinator is done, it returns a response to the client</li></ul></li></ul> <p data-svelte-h="svelte-179abro">To list all the features:</p> <ul data-svelte-h="svelte-1lh4c5a"><li>Clients communicate through a simple API <code>get(key)</code> and <code>put(key, value)</code></li> <li>Coordinator acts as a proxy between client and key-value store</li> <li>Nodes are distributed on ring using consistent hashing</li> <li>The system is decentralized and thanks to consistent hashing, servers can be added or removed automatically</li> <li>Data is replicated to multiple nodes</li> <li>There is no single point of failure</li></ul> <p data-svelte-h="svelte-c49iqk">The nodes themselves are fairly complex. Since they are decentralized, they perform a lot of operations, such as:</p> <ul data-svelte-h="svelte-1repwh2"><li>Replication</li> <li>Conflict (Inconsistency) resolution</li> <li>Replication</li> <li>Storage</li> <li>Failure detection &amp; Failure repair</li></ul> <h4 data-svelte-h="svelte-18dem6k"><a href="#write">Writing in the store</a><span id="write"></span></h4> <ul data-svelte-h="svelte-8tf1k1"><li>Whenever a request is received, the write request is persisted on a commit log file</li> <li>Data is saved in the memory cache</li> <li>When memory cache is full, data is flushed into a <a href="https://www.scylladb.com/glossary/sstable/" rel="nofollow">Sorted String Table</a>.<ul><li>We need to keep the data somewhere if they are not in the memory</li></ul></li></ul> <p data-svelte-h="svelte-1ff7lxp">The write can be visualized:</p> <img src="/images/system-design/sstable-diagram.webp" alt="Sorted String Table" title="Sorted String Table" class="image" loading="lazy"> <h4 data-svelte-h="svelte-17fa9r3"><a href="#read">Reading from the store</a><span id="read"></span></h4> <p data-svelte-h="svelte-l36f7k">Now, whenever we are reading from the table, we basically read from memory. However, as mentioned before, we sometimes need to read from disk.</p> <p data-svelte-h="svelte-mgrmas">Now, we’ve mentioned that it’s stored in a SSTable. While it’s a sorted string of key value pairs, we will have multiple of these, and we need to find
which table holds the key so we don’t need to iterate through all of them. <a href="https://www.geeksforgeeks.org/bloom-filters-introduction-and-python-implementation/" rel="nofollow">Bloom Filter</a>
can be used to deal with that.</p> <p data-svelte-h="svelte-8pqpcf">The final flow would be:</p> <ul data-svelte-h="svelte-174kmh4"><li>Read request comes</li> <li>First, memory is checked if it there is the result in memory</li> <li>If not, bloom filter is used to figure out which SSTable contains the key</li> <li>SSTable returns the result of the data set</li> <li>The result is returned back to the client</li></ul> <h2 data-svelte-h="svelte-1gat2or"><a href="#summary">Summary</a><span id="summary"></span></h2> <p data-svelte-h="svelte-3t2jbh">So, this was a long one! Let’s put it all together.</p> <ul data-svelte-h="svelte-niehu2"><li><del>It is possible to store big data</del> - Consistent hashing to spread load between servers</li> <li><del>High availability</del> - Data replication, multiple data centres</li> <li><del>High scalability</del> - Versioning and conflict resolution</li> <li><del>Automatic scaling</del> - Consistent hashing</li> <li><del>Tunable consistency</del> - <a href="#quorum-consensus">Quorum consensus</a></li> <li><del>Low latency</del> - Quorum consensus (optimize for read or write depending on what is desired)</li> <li><del>Handling failures</del> <ul><li>Sloppy quorum for temporary failures</li> <li>Merkle tree for permanent failures</li> <li>Cross-datacenter replication</li></ul></li></ul> <h1 data-svelte-h="svelte-uqufyh"><a href="#references">References</a><span id="references"></span></h1> <ul data-svelte-h="svelte-fwx12o"><li><a href="https://www.amazon.com/System-Design-Interview-insiders-Second/dp/B08CMF2CQF" rel="nofollow">System Design Interview book</a></li> <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map" rel="nofollow">The Map Object</a></li> <li><a href="https://redis.io/" rel="nofollow">Redis</a></li> <li><a href="https://memcached.org/" rel="nofollow">Memcached</a></li> <li><a href="https://aws.amazon.com/dynamodb/" rel="nofollow">DynamoDB</a></li> <li><a href="https://www.mongodb.com/databases/key-value-database" rel="nofollow">MongoDB</a></li> <li><a href="https://xkcd.com/927/" rel="nofollow">XKCD Standards</a></li> <li><a href="https://en.wikipedia.org/wiki/CAP_theorem" rel="nofollow">CAP theorem</a></li> <li><a href="https://en.wikipedia.org/wiki/Vector_clock" rel="nofollow">Inconsistency Resolution - Vector Clock</a></li> <li><a href="https://en.wikipedia.org/wiki/Broadcast_domain" rel="nofollow">Broadcasting</a></li> <li><a href="https://www.influxdata.com/blog/eventual-consistency-anti-entropy/" rel="nofollow">Anti-Entropy protocol</a></li> <li><a href="https://en.wikipedia.org/wiki/Merkle_tree" rel="nofollow">Merkle tree</a></li> <li><a href="https://www.geeksforgeeks.org/bloom-filters-introduction-and-python-implementation/" rel="nofollow">Bloom Filter</a></li></ul>`;
});
export {
  _6_system_design_key_value_store as default
};
