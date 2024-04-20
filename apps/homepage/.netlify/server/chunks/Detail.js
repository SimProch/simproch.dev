import { c as create_ssr_component, e as escape } from "./ssr.js";
/* empty css                                         */
import "./client.js";
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
const footer = {
  title: "Simon Prochazka",
  subtitle: "Cracking business puzzles through software craftsmanship.",
  socials: [
    {
      name: "github-white",
      linkTo: "https://github.com/SimProch"
    },
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
  footer,
  GFA,
  LOGEX,
  LEVEL
};
const css = {
  code: "@media(max-width: 1080px){}",
  map: `{"version":3,"file":"TitleBlock.svelte","sources":["TitleBlock.svelte"],"sourcesContent":["<script lang=\\"ts\\">import MouseIndicator from \\"../MouseIndicator.svelte\\";\\nexport let data;\\nexport let id = \\"home\\";\\n<\/script>\\n\\n<template lang=\\"pug\\">\\n\\tsection(class=\\"home flex-col flex-col--center\\" id=\\"{id}\\")\\n\\t\\tdiv(class=\\"wrapper flex-col flex-col--center\\")\\n\\t\\t\\tdiv(class=\\"home__title flex-col flex-col--center\\")\\n\\t\\t\\t\\t+if('data.breadcrumbs')\\n\\t\\t\\t\\t\\th3 { data.breadcrumbs }\\n\\t\\t\\t\\th1 { data.title }\\n\\t\\t\\t\\tp { data.subtitle }\\n\\t\\t\\tdiv(class=\\"home__mouse\\")\\n\\t\\t\\t\\tMouseIndicator\\n</template>\\n\\n<style lang=\\"scss\\">p {\\n  font-size: 2rem;\\n  line-height: 1.2;\\n}\\n\\nh3 {\\n  opacity: 0.5;\\n  margin-bottom: 10px;\\n}\\n\\n.home {\\n  background-color: #fff;\\n  min-height: 50vh;\\n  padding: 5vh 0;\\n}\\n.home .wrapper {\\n  flex-grow: 1;\\n  width: 80%;\\n}\\n.home .wrapper .home__title {\\n  margin-top: auto;\\n  margin-bottom: auto;\\n}\\n.home .wrapper .home__mouse {\\n  margin-top: auto;\\n  margin-bottom: 2rem;\\n}\\n@media (max-width: 1080px) {\\n  .home .wrapper .home__mouse {\\n    display: none;\\n  }\\n}</style>\\n"],"names":[],"mappings":"AA4CA,MAAO,YAAY,MAAM,CAAE,CAI3B"}`
};
const TitleBlock = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let { id = "home" } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  $$result.css.add(css);
  return `<template lang="pug">section(class=&quot;home flex-col flex-col--center&quot; id=&quot;${escape(id)}&quot;)
		div(class=&quot;wrapper flex-col flex-col--center&quot;)
			div(class=&quot;home__title flex-col flex-col--center&quot;)
				+if(&#39;data.breadcrumbs&#39;)
					h3 ${escape(data.breadcrumbs)}
				h1 ${escape(data.title)}
				p ${escape(data.subtitle)}
			div(class=&quot;home__mouse&quot;)
				MouseIndicator
</template>`;
});
const Detail = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<template lang="pug">section(class=&quot;flex-col flex-col--center wrapper&quot;)
		div(class=&quot;base-width flex-col&quot;)
			div(class=&quot;flex-col overview&quot;)
				h2 ${escape(data.overview.title)}
				div(class=&quot;overview__text&quot;)
					+each(&#39;data.overview.textBlocks as textBlock&#39;)
						p ${escape(textBlock)}

			div(class=&quot;flex-col skills&quot;)
				h3 ${escape(data.skills.title)}
				div(class=&quot;skill__list&quot;)
					+each(&#39;data.skills.skills as skill&#39;)
						SkillButton(name=&quot;${escape(skill.name)}&quot; linkTo=&quot;${escape(skill.linkTo)}&quot;)

			div(class=&quot;flex-row&quot;)
				+each(&#39;data.actions as action&#39;)
					LinkButton(name=&quot;${escape(action.name)}&quot; linkTo=&quot;${escape(action.linkTo)}&quot;)
</template>`;
});
export {
  Contents as C,
  Detail as D,
  TitleBlock as T
};
