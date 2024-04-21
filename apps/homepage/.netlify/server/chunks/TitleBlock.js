import { c as create_ssr_component, b as add_attribute, e as escape, v as validate_component } from "./ssr.js";
import "./client.js";
/* empty css                                     */
const css$3 = {
  code: 'a.svelte-11qq3b5{position:relative;margin-top:4px;margin-right:4px;padding:8px 16px;text-align:center;font-size:1.2rem;letter-spacing:1px;text-decoration:none;color:rgb(255, 255, 255);background:rgb(0, 0, 0);border:4px solid rgb(0, 0, 0);cursor:pointer;transition:ease-out 0.5s;-webkit-transition:ease-out 0.5s;-moz-transition:ease-out 0.5s}a.svelte-11qq3b5::after,a.svelte-11qq3b5::before{position:absolute;content:"";width:0;height:0;transition:0.5s}a.svelte-11qq3b5::after{top:-2px;left:-2px;border-top:2px solid transparent;border-left:2px solid transparent}a.svelte-11qq3b5::before{bottom:-2px;right:-2px;border-bottom:2px solid transparent;border-right:2px solid transparent}a.svelte-11qq3b5:hover,a.svelte-11qq3b5:focus{color:rgb(255, 255, 255)}a.svelte-11qq3b5:hover::after,a.svelte-11qq3b5:hover::before,a.svelte-11qq3b5:focus::after,a.svelte-11qq3b5:focus::before{width:calc(100% + 2px);height:calc(100% + 2px);border-color:rgb(255, 255, 255)}',
  map: '{"version":3,"file":"LinkButton.svelte","sources":["LinkButton.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { goto } from \\"$app/navigation\\";\\nexport let name;\\nexport let linkTo;\\nconst onClick = (e) => {\\n  e.preventDefault();\\n  if (linkTo === \\"https://simproch.dev/\\") {\\n    goto(\\"/\\");\\n    return false;\\n  }\\n  if (linkTo.startsWith(\\"http\\")) {\\n    window.open(linkTo, \\"_blank\\");\\n    return false;\\n  }\\n  goto(linkTo);\\n  return false;\\n};\\n<\/script>\\n\\n<a href={linkTo} on:click={onClick}>{name}</a>\\n\\n<style lang=\\"scss\\">a {\\n  position: relative;\\n  margin-top: 4px;\\n  margin-right: 4px;\\n  padding: 8px 16px;\\n  text-align: center;\\n  font-size: 1.2rem;\\n  letter-spacing: 1px;\\n  text-decoration: none;\\n  color: rgb(255, 255, 255);\\n  background: rgb(0, 0, 0);\\n  border: 4px solid rgb(0, 0, 0);\\n  cursor: pointer;\\n  transition: ease-out 0.5s;\\n  -webkit-transition: ease-out 0.5s;\\n  -moz-transition: ease-out 0.5s;\\n}\\na::after, a::before {\\n  position: absolute;\\n  content: \\"\\";\\n  width: 0;\\n  height: 0;\\n  transition: 0.5s;\\n}\\na::after {\\n  top: -2px;\\n  left: -2px;\\n  border-top: 2px solid transparent;\\n  border-left: 2px solid transparent;\\n}\\na::before {\\n  bottom: -2px;\\n  right: -2px;\\n  border-bottom: 2px solid transparent;\\n  border-right: 2px solid transparent;\\n}\\na:hover, a:focus {\\n  color: rgb(255, 255, 255);\\n}\\na:hover::after, a:hover::before, a:focus::after, a:focus::before {\\n  width: calc(100% + 2px);\\n  height: calc(100% + 2px);\\n  border-color: rgb(255, 255, 255);\\n}</style>\\n"],"names":[],"mappings":"AAoBmB,gBAAE,CACnB,QAAQ,CAAE,QAAQ,CAClB,UAAU,CAAE,GAAG,CACf,YAAY,CAAE,GAAG,CACjB,OAAO,CAAE,GAAG,CAAC,IAAI,CACjB,UAAU,CAAE,MAAM,CAClB,SAAS,CAAE,MAAM,CACjB,cAAc,CAAE,GAAG,CACnB,eAAe,CAAE,IAAI,CACrB,KAAK,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CACzB,UAAU,CAAE,IAAI,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CACxB,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAC9B,MAAM,CAAE,OAAO,CACf,UAAU,CAAE,QAAQ,CAAC,IAAI,CACzB,kBAAkB,CAAE,QAAQ,CAAC,IAAI,CACjC,eAAe,CAAE,QAAQ,CAAC,IAC5B,CACA,gBAAC,OAAO,CAAE,gBAAC,QAAS,CAClB,QAAQ,CAAE,QAAQ,CAClB,OAAO,CAAE,EAAE,CACX,KAAK,CAAE,CAAC,CACR,MAAM,CAAE,CAAC,CACT,UAAU,CAAE,IACd,CACA,gBAAC,OAAQ,CACP,GAAG,CAAE,IAAI,CACT,IAAI,CAAE,IAAI,CACV,UAAU,CAAE,GAAG,CAAC,KAAK,CAAC,WAAW,CACjC,WAAW,CAAE,GAAG,CAAC,KAAK,CAAC,WACzB,CACA,gBAAC,QAAS,CACR,MAAM,CAAE,IAAI,CACZ,KAAK,CAAE,IAAI,CACX,aAAa,CAAE,GAAG,CAAC,KAAK,CAAC,WAAW,CACpC,YAAY,CAAE,GAAG,CAAC,KAAK,CAAC,WAC1B,CACA,gBAAC,MAAM,CAAE,gBAAC,MAAO,CACf,KAAK,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAC1B,CACA,gBAAC,MAAM,OAAO,CAAE,gBAAC,MAAM,QAAQ,CAAE,gBAAC,MAAM,OAAO,CAAE,gBAAC,MAAM,QAAS,CAC/D,KAAK,CAAE,KAAK,IAAI,CAAC,CAAC,CAAC,GAAG,CAAC,CACvB,MAAM,CAAE,KAAK,IAAI,CAAC,CAAC,CAAC,GAAG,CAAC,CACxB,YAAY,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CACjC"}'
};
const LinkButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { name } = $$props;
  let { linkTo } = $$props;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.linkTo === void 0 && $$bindings.linkTo && linkTo !== void 0)
    $$bindings.linkTo(linkTo);
  $$result.css.add(css$3);
  return `<a${add_attribute("href", linkTo, 0)} class="svelte-11qq3b5">${escape(name)}</a>`;
});
const css$2 = {
  code: '.button.svelte-1nxpid2{position:relative;display:flex;align-items:center;margin-top:4px;margin-right:4px;padding:8px 16px;text-align:center;letter-spacing:1px;text-decoration:none;color:rgba(0, 0, 0, 0.6);background:#fff;border:2px solid #fff;cursor:pointer;transition:ease-out 0.5s;-webkit-transition:ease-out 0.5s;-moz-transition:ease-out 0.5s}.button.svelte-1nxpid2::after,.button.svelte-1nxpid2::before{position:absolute;content:"";width:0;height:0;transition:0.5s}.button.svelte-1nxpid2::after{top:-2px;left:-2px;border-top:2px solid transparent;border-left:2px solid transparent}.button.svelte-1nxpid2::before{bottom:-2px;right:-2px;border-bottom:2px solid transparent;border-right:2px solid transparent}.button.svelte-1nxpid2:hover,.button.svelte-1nxpid2:focus{color:rgba(0, 0, 0, 0.9)}.button.svelte-1nxpid2:hover::after,.button.svelte-1nxpid2:hover::before,.button.svelte-1nxpid2:focus::after,.button.svelte-1nxpid2:focus::before{width:calc(100% + 2px);height:calc(100% + 2px);border-color:rgba(0, 0, 0, 0.9)}',
  map: '{"version":3,"file":"SkillButton.svelte","sources":["SkillButton.svelte"],"sourcesContent":["<script lang=\\"ts\\">export let name;\\nexport let linkTo;\\n<\/script>\\n\\n<a href={linkTo} target=\\"_blank\\" class=\\"button\\">{name}</a>\\n\\n<style lang=\\"scss\\">.button {\\n  position: relative;\\n  display: flex;\\n  align-items: center;\\n  margin-top: 4px;\\n  margin-right: 4px;\\n  padding: 8px 16px;\\n  text-align: center;\\n  letter-spacing: 1px;\\n  text-decoration: none;\\n  color: rgba(0, 0, 0, 0.6);\\n  background: #fff;\\n  border: 2px solid #fff;\\n  cursor: pointer;\\n  transition: ease-out 0.5s;\\n  -webkit-transition: ease-out 0.5s;\\n  -moz-transition: ease-out 0.5s;\\n}\\n.button::after, .button::before {\\n  position: absolute;\\n  content: \\"\\";\\n  width: 0;\\n  height: 0;\\n  transition: 0.5s;\\n}\\n.button::after {\\n  top: -2px;\\n  left: -2px;\\n  border-top: 2px solid transparent;\\n  border-left: 2px solid transparent;\\n}\\n.button::before {\\n  bottom: -2px;\\n  right: -2px;\\n  border-bottom: 2px solid transparent;\\n  border-right: 2px solid transparent;\\n}\\n.button:hover, .button:focus {\\n  color: rgba(0, 0, 0, 0.9);\\n}\\n.button:hover::after, .button:hover::before, .button:focus::after, .button:focus::before {\\n  width: calc(100% + 2px);\\n  height: calc(100% + 2px);\\n  border-color: rgba(0, 0, 0, 0.9);\\n}</style>\\n"],"names":[],"mappings":"AAMmB,sBAAQ,CACzB,QAAQ,CAAE,QAAQ,CAClB,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,UAAU,CAAE,GAAG,CACf,YAAY,CAAE,GAAG,CACjB,OAAO,CAAE,GAAG,CAAC,IAAI,CACjB,UAAU,CAAE,MAAM,CAClB,cAAc,CAAE,GAAG,CACnB,eAAe,CAAE,IAAI,CACrB,KAAK,CAAE,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,CACzB,UAAU,CAAE,IAAI,CAChB,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,CACtB,MAAM,CAAE,OAAO,CACf,UAAU,CAAE,QAAQ,CAAC,IAAI,CACzB,kBAAkB,CAAE,QAAQ,CAAC,IAAI,CACjC,eAAe,CAAE,QAAQ,CAAC,IAC5B,CACA,sBAAO,OAAO,CAAE,sBAAO,QAAS,CAC9B,QAAQ,CAAE,QAAQ,CAClB,OAAO,CAAE,EAAE,CACX,KAAK,CAAE,CAAC,CACR,MAAM,CAAE,CAAC,CACT,UAAU,CAAE,IACd,CACA,sBAAO,OAAQ,CACb,GAAG,CAAE,IAAI,CACT,IAAI,CAAE,IAAI,CACV,UAAU,CAAE,GAAG,CAAC,KAAK,CAAC,WAAW,CACjC,WAAW,CAAE,GAAG,CAAC,KAAK,CAAC,WACzB,CACA,sBAAO,QAAS,CACd,MAAM,CAAE,IAAI,CACZ,KAAK,CAAE,IAAI,CACX,aAAa,CAAE,GAAG,CAAC,KAAK,CAAC,WAAW,CACpC,YAAY,CAAE,GAAG,CAAC,KAAK,CAAC,WAC1B,CACA,sBAAO,MAAM,CAAE,sBAAO,MAAO,CAC3B,KAAK,CAAE,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAC1B,CACA,sBAAO,MAAM,OAAO,CAAE,sBAAO,MAAM,QAAQ,CAAE,sBAAO,MAAM,OAAO,CAAE,sBAAO,MAAM,QAAS,CACvF,KAAK,CAAE,KAAK,IAAI,CAAC,CAAC,CAAC,GAAG,CAAC,CACvB,MAAM,CAAE,KAAK,IAAI,CAAC,CAAC,CAAC,GAAG,CAAC,CACxB,YAAY,CAAE,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CACjC"}'
};
const SkillButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { name } = $$props;
  let { linkTo } = $$props;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.linkTo === void 0 && $$bindings.linkTo && linkTo !== void 0)
    $$bindings.linkTo(linkTo);
  $$result.css.add(css$2);
  return `<a${add_attribute("href", linkTo, 0)} target="_blank" class="button svelte-1nxpid2">${escape(name)}</a>`;
});
const css$1 = {
  code: ".mouse.svelte-1or0y8x.svelte-1or0y8x{width:25px;height:45px;border:2px solid black;border-radius:15px;position:relative;text-align:center}.mouse.svelte-1or0y8x .mouse__wheel.svelte-1or0y8x{height:8px;margin:2px auto 0;display:block;width:4px;background-color:black;border-radius:50%;animation:2s ease infinite svelte-1or0y8x-wheel-up-down}@keyframes svelte-1or0y8x-wheel-up-down{0%{margin-top:6px;opacity:0}30%{opacity:1}50%{margin-top:14px;opacity:0}100%{margin-top:14px;opacity:0}}",
  map: '{"version":3,"file":"MouseIndicator.svelte","sources":["MouseIndicator.svelte"],"sourcesContent":["<div class=\\"mouse\\">\\n\\t<span class=\\"mouse__wheel\\"></span>\\n</div>\\n\\n<style lang=\\"scss\\">.mouse {\\n  width: 25px;\\n  height: 45px;\\n  border: 2px solid black;\\n  border-radius: 15px;\\n  position: relative;\\n  text-align: center;\\n}\\n.mouse .mouse__wheel {\\n  height: 8px;\\n  margin: 2px auto 0;\\n  display: block;\\n  width: 4px;\\n  background-color: black;\\n  border-radius: 50%;\\n  animation: 2s ease infinite wheel-up-down;\\n}\\n\\n@keyframes wheel-up-down {\\n  0% {\\n    margin-top: 6px;\\n    opacity: 0;\\n  }\\n  30% {\\n    opacity: 1;\\n  }\\n  50% {\\n    margin-top: 14px;\\n    opacity: 0;\\n  }\\n  100% {\\n    margin-top: 14px;\\n    opacity: 0;\\n  }\\n}</style>\\n"],"names":[],"mappings":"AAImB,oCAAO,CACxB,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,KAAK,CACvB,aAAa,CAAE,IAAI,CACnB,QAAQ,CAAE,QAAQ,CAClB,UAAU,CAAE,MACd,CACA,qBAAM,CAAC,4BAAc,CACnB,MAAM,CAAE,GAAG,CACX,MAAM,CAAE,GAAG,CAAC,IAAI,CAAC,CAAC,CAClB,OAAO,CAAE,KAAK,CACd,KAAK,CAAE,GAAG,CACV,gBAAgB,CAAE,KAAK,CACvB,aAAa,CAAE,GAAG,CAClB,SAAS,CAAE,EAAE,CAAC,IAAI,CAAC,QAAQ,CAAC,4BAC9B,CAEA,WAAW,4BAAc,CACvB,EAAG,CACD,UAAU,CAAE,GAAG,CACf,OAAO,CAAE,CACX,CACA,GAAI,CACF,OAAO,CAAE,CACX,CACA,GAAI,CACF,UAAU,CAAE,IAAI,CAChB,OAAO,CAAE,CACX,CACA,IAAK,CACH,UAAU,CAAE,IAAI,CAChB,OAAO,CAAE,CACX,CACF"}'
};
const MouseIndicator = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div class="mouse svelte-1or0y8x" data-svelte-h="svelte-1kljr47"><span class="mouse__wheel svelte-1or0y8x"></span> </div>`;
});
const main = {
  title: "Hi, I’m Simon",
  subtitle: "I crack business puzzles through software craftsmanship."
};
const about = {
  title: "About me",
  sections: {
    whoAmI: {
      title: "Get to know me",
      blocks: [
        "I'm an enthusiastic programmer with an academic background in information management and economics. Beyond my passion for technology and data, I enjoy personal challenges like obstacle courses, marathons, and bouldering. I come from the village of Sloup in Czechia and have called Brno home since 2018.",
        "I specialize in JavaScript for web and mobile development, focusing on various development methodologies, including behavior-driven and test-driven approaches. The Feynman technique inspired me to start blogging about my career and hobbies, sharing my experiences and knowledge."
      ]
    },
    skills: {
      title: "Skills",
      blocks: [
        {
          type: "Web development",
          list: [
            {
              name: "Angular",
              linkTo: "https://angular.io/"
            },
            {
              name: "CSS",
              linkTo: "https://developer.mozilla.org/en-US/docs/Web/CSS"
            },
            {
              name: "Cypress",
              linkTo: "https://www.cypress.io/"
            },
            {
              name: ".NET Core",
              linkTo: "https://learn.microsoft.com/en-us/dotnet/core/introduction"
            },
            {
              name: "expressjs",
              linkTo: "https://expressjs.com/"
            },
            {
              name: "HTML",
              linkTo: "https://developer.mozilla.org/en-US/docs/Web/HTML"
            },
            {
              name: "JavaScript",
              linkTo: "https://www.ecma-international.org/"
            },
            {
              name: "Jest",
              linkTo: "https://jestjs.io/"
            },
            {
              name: "Nest JS",
              linkTo: "https://nestjs.com/"
            },
            {
              name: "Node.JS",
              linkTo: "https://nodejs.org/en"
            },
            {
              name: "React",
              linkTo: "https://react.dev/"
            },
            {
              name: "react-native",
              linkTo: "https://reactnative.dev/"
            },
            {
              name: "RxJS",
              linkTo: "https://rxjs.dev/"
            },
            {
              name: "Sass",
              linkTo: "https://sass-lang.com/"
            },
            {
              name: "TypeScript",
              linkTo: "https://www.typescriptlang.org/"
            }
          ]
        },
        {
          type: "Database",
          list: [
            {
              name: "WebScale",
              linkTo: "https://www.mongodb.com/"
            },
            {
              name: "MS-SQL",
              linkTo: "https://www.microsoft.com/en-us/sql-server"
            },
            {
              name: "MySQL",
              linkTo: "https://www.mysql.com/"
            },
            {
              name: "Prisma",
              linkTo: "https://www.prisma.io/"
            },
            {
              name: "TypeORM",
              linkTo: "https://typeorm.io/"
            }
          ]
        },
        {
          type: "Other",
          list: [
            {
              name: "Atlassian tools",
              linkTo: "https://www.atlassian.com/"
            },
            {
              name: "AWS",
              linkTo: "https://aws.amazon.com/"
            },
            {
              name: "CircleCI",
              linkTo: "https://circleci.com/"
            },
            {
              name: "Cucumber",
              linkTo: "https://cucumber.io/"
            },
            {
              name: "Git",
              linkTo: "https://git-scm.com/"
            },
            {
              name: "GitHub",
              linkTo: "https://github.com/"
            },
            {
              name: "Microsoft Azure",
              linkTo: "https://azure.microsoft.com/en-us"
            },
            {
              name: "Miro",
              linkTo: "https://miro.com/"
            },
            {
              name: "Netlify",
              linkTo: "https://www.netlify.com/"
            },
            {
              name: "Notion",
              linkTo: "https://www.notion.so/"
            }
          ]
        }
      ]
    }
  }
};
const experience = {
  title: "My experience",
  blocks: [
    {
      identifier: "level-works",
      companyName: "Level.works",
      content: "Level.works, a Dutch-based company, functions as a vital intermediary, connecting adept, flexible workers with enterprises offering opportunities in the blue-collar job sector. Their core mission revolves around establishing a seamless bridge between the diverse skills of their labor force and the specific demands of these businesses, nurturing a dynamic and harmonious employment ecosystem."
    },
    {
      identifier: "logex-solution-centre",
      companyName: "LOGEX Solution Centre",
      content: "LOGEX Healthcare Analytics is a Dutch company specializing in healthcare analytics and solutions. They provide software and services designed to help healthcare organizations and professionals make data-driven decisions to improve the quality and efficiency of healthcare delivery."
    },
    {
      identifier: "green-fox-academy",
      companyName: "Green Fox Academy",
      content: "Green Fox Academy is a Hungarian-based coding bootcamp and tech education provider known for offering intensive coding courses in various programming languages, with an emphasis on practical skills and project-based learning. They provide job placement support and offer flexible learning options, including in-person, online, and part-time courses."
    }
  ]
};
const GFA = {
  breadcrumbs: "Experience",
  title: "Green fox academy",
  subtitle: "A tale of a software bootcamp mentor",
  detail: {
    overview: {
      title: "Role description",
      textBlocks: [
        "My journey at Green Fox Academy began after receiving constructive feedback from my previous job. I recognized a need to enhance my knowledge-sharing abilities and proactively started mentoring students to improve.",
        "During my year at Green Fox Academy, I taught software craftsmanship to seven students. I stood out among the mentors as all students passed the final exam and landed software development jobs within two weeks of completing the course.",
        "In the program, I took on various roles, such as a product owner, scrum master, and tech lead. I shared insights on agile development and the importance of feedback loops in immersive sessions. I also guided students in developing a comprehensive project from technical and business perspectives."
      ]
    },
    skills: {
      title: "Technologies used",
      skills: [
        {
          name: "Angular",
          linkTo: "https://angular.io/"
        },
        {
          name: "Atlassian tools",
          linkTo: "https://www.atlassian.com/"
        },
        {
          name: "CircleCI",
          linkTo: "https://circleci.com/"
        },
        {
          name: "Cucumber",
          linkTo: "https://cucumber.io/"
        },
        {
          name: "CSS",
          linkTo: "https://developer.mozilla.org/en-US/docs/Web/CSS"
        },
        {
          name: "Git",
          linkTo: "https://git-scm.com/"
        },
        {
          name: "GitHub",
          linkTo: "https://github.com/"
        },
        {
          name: "Heroku",
          linkTo: "https://www.heroku.com/"
        },
        {
          name: "JavaScript",
          linkTo: "https://www.ecma-international.org/"
        },
        {
          name: "Jest",
          linkTo: "https://jestjs.io/"
        },
        {
          name: "MySQL",
          linkTo: "https://www.mysql.com/"
        },
        {
          name: "Ts.ED",
          linkTo: "https://tsed.io/"
        },
        {
          name: "TypeORM",
          linkTo: "https://typeorm.io/"
        },
        {
          name: "TypeScript",
          linkTo: "https://www.typescriptlang.org/"
        }
      ]
    },
    actions: [
      {
        name: "Company page",
        linkTo: "https://www.greenfoxacademy.cz/en/home"
      },
      {
        name: "Go back",
        linkTo: "https://simproch.dev/"
      }
    ]
  }
};
const LOGEX = {
  breadcrumbs: "Experience",
  title: "LOGEX Solution Centre",
  subtitle: "From intern to tech lead, from startup to corporate",
  detail: {
    overview: {
      title: "Role description",
      textBlocks: [
        "LOGEX has been central to my career since early college, launching a transformative journey. I joined just a year after its inception, tasked with modernizing legacy AngularJS code.",
        "In my first year, I served as a technical lead for one of the company's products, learning the value of the Minimum Viable Product (MVP) approach and scalable code craftsmanship.",
        "Next, I led the development of a foundational custom framework, taking on diverse responsibilities like internationalization, rebranding, and test automation, as well as keeping the mantle of product tech lead.",
        "Beyond development, I was also active in HR department as I designed the interview process, as well as being responsible for onboarding and mentoring new developers",
        "During my tenure, LOGEX expanded from 40 to 300 employees across six countries, and I was part of the core team driving these changes, gaining invaluable insights."
      ]
    },
    skills: {
      title: "Technologies used",
      skills: [
        {
          name: ".NET Core",
          linkTo: "https://learn.microsoft.com/en-us/dotnet/core/introduction"
        },
        {
          name: "Angular",
          linkTo: "https://angular.io/"
        },
        {
          name: "Atlassian tools",
          linkTo: "https://www.atlassian.com/"
        },
        {
          name: "CSS",
          linkTo: "https://developer.mozilla.org/en-US/docs/Web/CSS"
        },
        {
          name: "Cypress",
          linkTo: "https://www.cypress.io/"
        },
        {
          name: "Git",
          linkTo: "https://git-scm.com/"
        },
        {
          name: "GitHub",
          linkTo: "https://github.com/"
        },
        {
          name: "JavaScript",
          linkTo: "https://www.ecma-international.org/"
        },
        {
          name: "Jest",
          linkTo: "https://jestjs.io/"
        },
        {
          name: "Microsoft Azure",
          linkTo: "https://azure.microsoft.com/en-us"
        },
        {
          name: "MS-SQL",
          linkTo: "https://www.microsoft.com/en-us/sql-server"
        },
        {
          name: "Node.JS",
          linkTo: "https://nodejs.org/en"
        },
        {
          name: "RxJS",
          linkTo: "https://rxjs.dev/"
        },
        {
          name: "Sass",
          linkTo: "https://sass-lang.com/"
        },
        {
          name: "TypeScript",
          linkTo: "https://www.typescriptlang.org/"
        }
      ]
    },
    actions: [
      {
        name: "Company page",
        linkTo: "https://www.workwithlogex.com/"
      },
      {
        name: "Go back",
        linkTo: "https://simproch.dev/"
      }
    ]
  }
};
const LEVEL = {
  breadcrumbs: "Experience",
  title: "Level.works",
  subtitle: "Where development just works.",
  detail: {
    overview: {
      title: "Role description",
      textBlocks: [
        "I became part of Level.works just six months after its inception in the Czech Republic, thanks to a recommendation from my previous employer, who recognized my potential.",
        "Upon joining, I noticed a strong emphasis on rapidly delivering features for their Minimum Viable Product (MVP) to drive revenue, with less attention to architectural considerations.",
        "I assumed a key role in revitalizing the frontend, steering the backend toward a domain-driven design approach, and actively contributing to mobile app development. In addition to that, I implemented a structured onboarding program and served as the face of the company at public events.",
        "At Level, a departing colleague paid me the highest compliment, saying, 'Among all the developers I've worked with, Šimon undoubtedly possesses the deepest JavaScript knowledge."
      ]
    },
    skills: {
      title: "Technologies used",
      skills: [
        {
          name: "Atlassian tools",
          linkTo: "https://www.atlassian.com/"
        },
        {
          name: "AWS",
          linkTo: "https://aws.amazon.com/"
        },
        {
          name: "Cucumber",
          linkTo: "https://cucumber.io/"
        },
        {
          name: "CSS",
          linkTo: "https://developer.mozilla.org/en-US/docs/Web/CSS"
        },
        {
          name: "Cypress",
          linkTo: "https://www.cypress.io/"
        },
        {
          name: "expressjs",
          linkTo: "https://expressjs.com/"
        },
        {
          name: "Git",
          linkTo: "https://git-scm.com/"
        },
        {
          name: "GitHub",
          linkTo: "https://github.com/"
        },
        {
          name: "JavaScript",
          linkTo: "https://www.ecma-international.org/"
        },
        {
          name: "Jest",
          linkTo: "https://jestjs.io/"
        },
        {
          name: "Maestro",
          linkTo: "https://maestro.mobile.dev/platform-support/react-native/"
        },
        {
          name: "Miro",
          linkTo: "https://miro.com/"
        },
        {
          name: "MySQL",
          linkTo: "https://www.mysql.com/"
        },
        {
          name: "Nest JS",
          linkTo: "https://nestjs.com/"
        },
        {
          name: "Node.JS",
          linkTo: "https://nodejs.org/en"
        },
        {
          name: "Notion",
          linkTo: "https://www.notion.so/"
        },
        {
          name: "Prisma",
          linkTo: "https://www.prisma.io/"
        },
        {
          name: "React",
          linkTo: "https://react.dev/"
        },
        {
          name: "react-native",
          linkTo: "https://reactnative.dev/"
        },
        {
          name: "TypeScript",
          linkTo: "https://www.typescriptlang.org/"
        },
        {
          name: "WebScale",
          linkTo: "https://www.mongodb.com/"
        }
      ]
    },
    actions: [
      {
        name: "Company page",
        linkTo: "https://nl.level.works/"
      },
      {
        name: "Go back",
        linkTo: "https://simproch.dev/"
      }
    ]
  }
};
const Contents = {
  main,
  about,
  experience,
  GFA,
  LOGEX,
  LEVEL
};
const css = {
  code: "p.svelte-qckvnw.svelte-qckvnw{font-size:2rem;line-height:1.2}h3.svelte-qckvnw.svelte-qckvnw{opacity:0.5;margin-bottom:10px}.home.svelte-qckvnw.svelte-qckvnw{background-color:#fff;min-height:50vh;padding:5vh 0}.home.svelte-qckvnw .wrapper.svelte-qckvnw{flex-grow:1;width:80%}.home.svelte-qckvnw .wrapper .home__title.svelte-qckvnw{margin-top:auto;margin-bottom:auto}.home.svelte-qckvnw .wrapper .home__mouse.svelte-qckvnw{margin-top:auto;margin-bottom:2rem}@media(max-width: 1080px){.home.svelte-qckvnw .wrapper .home__mouse.svelte-qckvnw{display:none}}",
  map: '{"version":3,"file":"TitleBlock.svelte","sources":["TitleBlock.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { MouseIndicator } from \\"@simproch-dev/ui\\";\\nexport let data;\\nexport let id = \\"home\\";\\n<\/script>\\n\\n<section class=\\"home flex-col flex-col--center\\" {id}>\\n\\t<div class=\\"wrapper flex-col flex-col--center\\">\\n\\t\\t<div class=\\"home__title flex-col flex-col--center\\">\\n\\t\\t\\t{#if data.breadcrumbs}\\n\\t\\t\\t\\t<h3>{data.breadcrumbs}</h3>\\n\\t\\t\\t{/if}\\n\\t\\t\\t<h1>{data.title}</h1>\\n\\t\\t\\t<p>{data.subtitle}</p>\\n\\t\\t</div>\\n\\t\\t<div class=\\"home__mouse\\">\\n\\t\\t\\t<MouseIndicator />\\n\\t\\t</div>\\n\\t</div>\\n</section>\\n\\n<style lang=\\"scss\\">p {\\n  font-size: 2rem;\\n  line-height: 1.2;\\n}\\n\\nh3 {\\n  opacity: 0.5;\\n  margin-bottom: 10px;\\n}\\n\\n.home {\\n  background-color: #fff;\\n  min-height: 50vh;\\n  padding: 5vh 0;\\n}\\n.home .wrapper {\\n  flex-grow: 1;\\n  width: 80%;\\n}\\n.home .wrapper .home__title {\\n  margin-top: auto;\\n  margin-bottom: auto;\\n}\\n.home .wrapper .home__mouse {\\n  margin-top: auto;\\n  margin-bottom: 2rem;\\n}\\n@media (max-width: 1080px) {\\n  .home .wrapper .home__mouse {\\n    display: none;\\n  }\\n}</style>\\n"],"names":[],"mappings":"AAoBmB,6BAAE,CACnB,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,GACf,CAEA,8BAAG,CACD,OAAO,CAAE,GAAG,CACZ,aAAa,CAAE,IACjB,CAEA,iCAAM,CACJ,gBAAgB,CAAE,IAAI,CACtB,UAAU,CAAE,IAAI,CAChB,OAAO,CAAE,GAAG,CAAC,CACf,CACA,mBAAK,CAAC,sBAAS,CACb,SAAS,CAAE,CAAC,CACZ,KAAK,CAAE,GACT,CACA,mBAAK,CAAC,QAAQ,CAAC,0BAAa,CAC1B,UAAU,CAAE,IAAI,CAChB,aAAa,CAAE,IACjB,CACA,mBAAK,CAAC,QAAQ,CAAC,0BAAa,CAC1B,UAAU,CAAE,IAAI,CAChB,aAAa,CAAE,IACjB,CACA,MAAO,YAAY,MAAM,CAAE,CACzB,mBAAK,CAAC,QAAQ,CAAC,0BAAa,CAC1B,OAAO,CAAE,IACX,CACF"}'
};
const TitleBlock = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let { id = "home" } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  $$result.css.add(css);
  return `<section class="home flex-col flex-col--center svelte-qckvnw"${add_attribute("id", id, 0)}><div class="wrapper flex-col flex-col--center svelte-qckvnw"><div class="home__title flex-col flex-col--center svelte-qckvnw">${data.breadcrumbs ? `<h3 class="svelte-qckvnw">${escape(data.breadcrumbs)}</h3>` : ``} <h1>${escape(data.title)}</h1> <p class="svelte-qckvnw">${escape(data.subtitle)}</p></div> <div class="home__mouse svelte-qckvnw">${validate_component(MouseIndicator, "MouseIndicator").$$render($$result, {}, {}, {})}</div></div> </section>`;
});
export {
  Contents as C,
  LinkButton as L,
  SkillButton as S,
  TitleBlock as T
};
