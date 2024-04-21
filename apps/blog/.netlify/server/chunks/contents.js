import { C as Contents$1 } from "./git-cli-basic-commands2.js";
import { C as Contents$2 } from "./lets-talk-promises-part-12.js";
import { C as Contents$3 } from "./lets-talk-promises-part-22.js";
import { C as Contents$4 } from "./x-ray-effect-with-html2.js";
import { C as Contents$5 } from "./multiple-window-scene2.js";
import { C as Contents$6 } from "./1-system-design-intro2.js";
import { C as Contents$7 } from "./2-system-design-tools2.js";
import { C as Contents$8 } from "./3-system-design-estimations2.js";
import { C as Contents$9 } from "./4-system-design-rate-limiter2.js";
import { C as Contents$a } from "./5-system-design-consistent-hashing2.js";
import { C as Contents$b } from "./6-system-design-key-value-store2.js";
import { C as Contents$c } from "./7-system-design-unique-id-generator2.js";
import { C as Contents$d } from "./8-system-design-url-shortener2.js";
import { C as Contents$e } from "./9-system-design-notification-system2.js";
import { C as Contents$f } from "./10-system-design-chat-service2.js";
import { C as Contents$g } from "./11-system-design-news-feed2.js";
import { C as Contents$h } from "./12-system-design-web-crawler2.js";
import { C as Contents$i } from "./13-system-design-autocomplete2.js";
import { C as Contents$j } from "./14-system-design-youtube2.js";
import { C as Contents$k } from "./15-system-design-google-drive2.js";
import { C as Contents$l } from "./16-system-design-afterword2.js";
import { C as Contents$m } from "./01-big-oh2.js";
import { C as Contents$n } from "./02-array-based-data-structures2.js";
import { C as Contents$o } from "./03-hash-maps2.js";
import { C as Contents$p } from "./04-recursion2.js";
import { C as Contents$q } from "./05-node-based-data-structures2.js";
import { C as Contents$r } from "./06-binary-search-trees2.js";
import { C as Contents$s } from "./07-heap2.js";
import { C as Contents$t } from "./08-trie2.js";
import { C as Contents$u } from "./09-graphs2.js";
const base = {
  home: {
    title: "Hi, I'm Simon"
  },
  development: {
    title: "Development"
  },
  "system-design": {
    title: "System Design"
  },
  "data-structures-and-algorithms": {
    title: "System Design"
  },
  tags: {
    title: "Tags",
    subtitle: "Filter on posts by tags"
  },
  footer: {
    title: "Simon Prochazka",
    subtitle: "Cracking business puzzles through software craftsmanship.",
    socials: [
      { name: "github-white", linkTo: "https://github.com/SimProch" },
      {
        name: "linkedin-white.ico",
        linkTo: "https://www.linkedin.com/in/simon-prochazka-profile/"
      },
      {
        name: "twitter.ico",
        linkTo: "https://twitter.com/SimProch"
      },
      {
        name: "stack-overflow.ico",
        linkTo: "https://www.linkedin.com/in/simon-prochazka-profile/"
      }
    ]
  }
};
const posts$3 = [
  Contents$1,
  Contents$2,
  Contents$3,
  Contents$4,
  Contents$5
];
const posts$2 = [
  Contents$6,
  Contents$7,
  Contents$8,
  Contents$9,
  Contents$a,
  Contents$b,
  Contents$c,
  Contents$d,
  Contents$e,
  Contents$f,
  Contents$g,
  Contents$h,
  Contents$i,
  Contents$j,
  Contents$k,
  Contents$l
];
const posts$1 = [
  Contents$m,
  Contents$n,
  Contents$o,
  Contents$p,
  Contents$q,
  Contents$r,
  Contents$s,
  Contents$t,
  Contents$u
];
const Contents = base;
base.development.posts = posts$3;
base["system-design"].posts = posts$2;
base["data-structures-and-algorithms"].posts = posts$1;
const posts = [posts$3, posts$2, posts$1];
const getTagsFromPosts = (posts2) => {
  return Array.from(
    new Set(
      posts2.flat().map((i) => i.tags).flat()
    )
  ).sort((x, y) => x.localeCompare(y));
};
const tags = getTagsFromPosts(posts);
base.home.posts = posts.flat();
const nav = [];
if (posts$3.length !== 0)
  nav.push({ path: "development", name: base.development.title });
if (posts$2.length !== 0) {
  nav.push({ path: "system-design", name: base["system-design"].title });
}
if (nav.length > 0)
  nav.push({ path: "tags", name: base.tags.title });
export {
  Contents as C,
  getTagsFromPosts as g,
  nav as n,
  posts as p,
  tags as t
};
