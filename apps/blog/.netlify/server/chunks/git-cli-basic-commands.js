import { c as create_ssr_component } from "./ssr.js";
import { C as Contents } from "./git-cli-basic-commands2.js";
const Git_cli_basic_commands = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const contents = Contents;
  if ($$props.contents === void 0 && $$bindings.contents && contents !== void 0)
    $$bindings.contents(contents);
  return `<h1 data-svelte-h="svelte-eg373e">Git CLI basic commands</h1> <p data-svelte-h="svelte-tis6fo">A cheat sheet curated by yours truly</p> <h2 data-svelte-h="svelte-1j1kxdd"><a href="#intro">Introduction</a><span id="intro"></span></h2> <p data-svelte-h="svelte-l0ni1a">I’ve been doing this development thing for quite some time now, and every now and then, I run into an obnoxious git issue,
or I just forget how to delete branch on remote. Luckily, I didn’t need to use any additional commands other than those listed below.</p> <p data-svelte-h="svelte-10dpado">I’d strongly encourage anyone looking to understand git a little more to investigate <a href="https://www.youtube.com/watch?v=1ffBJ4sVUb4" rel="nofollow">git for ages 4 and up</a>
as it extremely helped me.</p> <h2 data-svelte-h="svelte-g44iaa"><a href="#cheat-sheet">Cheat-sheet</a><span id="cheat-sheet"></span></h2> <pre class="language-bash"><!-- HTML_TAG_START -->${`<code class="language-bash"><span class="token function">git</span> status <span class="token comment"># Shows the current branch and state</span>
<span class="token function">git</span> branch <span class="token comment"># Shows the local branches</span>
<span class="token function">git</span> checkout <span class="token parameter variable">-b</span> <span class="token operator">&lt;</span>branch_name<span class="token operator">></span> <span class="token comment"># Creates a new branch</span>
<span class="token function">git</span> push <span class="token parameter variable">-u</span> origin <span class="token operator">&lt;</span>branch_name<span class="token operator">></span> <span class="token comment"># Creates a new branch on origin based on the one you’re currently at</span>
<span class="token function">git</span> push <span class="token comment"># Pushes the current changes to currently tracked branch on remote</span>
<span class="token function">git</span> push <span class="token parameter variable">-d</span> origin branch_name<span class="token operator">></span> <span class="token comment"># Deletes a branch on remote</span>
<span class="token function">git</span> branch <span class="token parameter variable">-d</span> branch_name<span class="token operator">></span> <span class="token comment"># Deletes a branch</span>
<span class="token function">git</span> checkout <span class="token operator">&lt;</span>branch_name<span class="token operator">></span> <span class="token comment"># Moves to a specific branch</span>
<span class="token function">git</span> checkout <span class="token operator">&lt;</span>commit_hash<span class="token operator">></span> <span class="token comment"># Moves to a specific commit</span>
<span class="token function">git</span> merge <span class="token operator">&lt;</span>branch_name<span class="token operator">></span> <span class="token comment"># merges another branch into the current one</span>
<span class="token function">git</span> reset <span class="token parameter variable">--soft</span> <span class="token operator">&lt;</span>commit_hash<span class="token operator">></span> <span class="token comment"># Resets to a specific commit while keeping the changes done (can be used to squash commits)</span>
<span class="token function">git</span> reset <span class="token parameter variable">--hard</span> <span class="token operator">&lt;</span>commit_hash<span class="token operator">></span> <span class="token comment"># Resets to a specific commit while discarding the changes</span>
<span class="token function">git</span> log <span class="token parameter variable">--oneline</span> <span class="token comment"># Shows the commits and their messages</span>
<span class="token function">git</span> log <span class="token parameter variable">-p</span> -- path-to-file <span class="token comment"># Shows the changes in a specific file</span>
<span class="token function">git</span> push origin <span class="token parameter variable">-d</span> <span class="token operator">&lt;</span>branch_name<span class="token operator">></span> <span class="token comment"># Deletes a branch on remote</span>
<span class="token function">git</span> show <span class="token operator">&lt;</span>commit_hash<span class="token operator">></span> <span class="token comment"># Shows changes in a specific commit</span>
<span class="token function">git</span> show <span class="token operator">&lt;</span>commit_hash<span class="token operator">></span> <span class="token operator">|</span> <span class="token function">git</span> apply <span class="token comment"># Applies changes from a specific commit to current working directory</span>
<span class="token function">git</span> revert <span class="token operator">&lt;</span>commit_hash<span class="token operator">></span> <span class="token comment"># Reverts a specific commit</span>
<span class="token function">git</span> cat-file <span class="token parameter variable">-p</span> <span class="token operator">&lt;</span>commit_hash<span class="token operator">></span> <span class="token comment"># Shows the metadata of specific commit, e.g. to see parents</span>
<span class="token function">git</span> <span class="token function">rm</span> <span class="token parameter variable">-r</span> <span class="token parameter variable">--cached</span> <span class="token builtin class-name">.</span> <span class="token comment"># Resets git cache. Extremely useful when renaming uppercase to lowercase</span></code>`}<!-- HTML_TAG_END --></pre> <h2 data-svelte-h="svelte-153vzkz"><a href="#references">References</a><span id="references"></span></h2> <ul data-svelte-h="svelte-pwhz8a"><li><a href="https://www.youtube.com/watch?v=1ffBJ4sVUb4" rel="nofollow">git for ages 4 and up</a></li></ul>`;
});
export {
  Git_cli_basic_commands as default
};
