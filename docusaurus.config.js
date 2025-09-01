// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Insight Jainism",
  tagline: "Get true insights of Jainism",
  url: "https://insightjainism.vercel.app",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  staticDirectories: ["public", "static"],
  organizationName: "sohamsshah",
  projectName: "insight-jainism",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
        },

        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Insight Jainism",
        logo: {
          alt: "Logo",
          src: "img/insight_jainism_logo.svg",
        },
        items: [
          {
            to: "/docs/category/concepts",
            label: "Concepts",
            position: "left",
          },
          {
            to: "/docs/category/insights",
            label: "Insights",
            position: "left",
          },
          {
            type: "dropdown",
            label: "Know more",
            position: "left",
            items: [
              {
                to: "/docs/category/scriptures",
                label: "Scriptures",
              },
              {
                to: "/docs/category/biographies",
                label: "Biographies",
              },
              {
                to: "/docs/category/poems",
                label: "Poems",
              },
              {
                to: "/docs/category/stories",
                label: "Stories",
              },
              {
                to: "/docs/category/summaries",
                label: "Summaries",
              },
              {
                to: "/docs/category/write-ups",
                label: "Write ups",
              },
              {
                to: "/docs/category/scriptures",
                label: "Scriptures",
              },
              {
                to: "/docs/category/LCPA",
                label: "LCPA",
              },
            ],
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Socials",
            items: [
              {
                label: "Instagram",
                href: "https://www.instagram.com/cyf_42/",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Insight Jainism, ✍️ Shuddhatma (Soham Shah)`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),

  themes: [
    [
      // @ts-ignore
      "@easyops-cn/docusaurus-search-local",
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      // @ts-ignore
      ({
        hashed: true,
        language: ["en"],
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
        indexBlog: false,
      }),
    ],
  ],
};

module.exports = config;
