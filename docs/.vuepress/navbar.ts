import { navbar } from "vuepress-theme-hope";

// 精选图标：https://theme-hope.vuejs.press/zh/guide/interface/icon.html#iconfont-%E7%B2%BE%E9%80%89%E5%9B%BE%E6%A0%87
export default navbar([
  { text: "博客", icon: "blog", link: "/blog" },
  {
    text: "代码",
    icon: "code",
    prefix: "/",
    children: [
      "code/Markdown",
      "code/AutoHotkey",
      "code/Electron",
      {
        text: "页面开发",
        icon: "vue",
        prefix: "",
        children: ["web/VuePress", "web/docsify", "deploy/VPS"],
      },
    ],
  },
  {
    text: "Contact",
    icon: "advance",
    children: [
      { text: "微信", icon: "wechat", link: "https://tc.seoipo.com/wechat.svg" },
      { text: "Discord", icon: "group", link: "#" },
      { text: "RSS", icon: "rss", link: "#" },
    ],
  },
  { text: "工具收藏", icon: "tool", link: "#" },
]);
