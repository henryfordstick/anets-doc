module.exports = {
  title: "Anets 动画库",
  description: "基于 canvas 的 ppt 动画",
  markdown: {
    lineNumbers: true,
  },
  head: [["link", { rel: "icon", href: "/pic.png" }]],
  themeConfig: {
    repo: "henryfordstick",
    nav: [
      {
        text: "中文文档",
        link: "/docs/",
      },
    ],
    sidebar: {
      "/docs/": [
        {
          title: "简介",
          collapsable: false,
          children: ["intention", "add", "quick-start"],
        },
        {
          title: "基础教程",
          collapsable: false,
          children: [],
        },
        {
          title: "API 手册",
          collapsable: false,
          children: [],
        },
      ],
    },
    lastUpdated: "更新时间",
    docsDir: "docs",
    editLinks: true,
    editLinkText: "本文源码地址",
  },
  plugins: [
    [
      "@vuepress/pwa",
      {
        serviceWorker: true,
        updatePopup: true,
      },
    ],
    ["@vuepress/medium-zoom", true],
    ["@vuepress/back-to-top", true],
  ],
};
