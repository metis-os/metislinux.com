// vite.config.js
import { defineConfig } from "file:///home/coded/metislinux.org/node_modules/vite/dist/node/index.js";
import unocss from "file:///home/coded/metislinux.org/node_modules/unocss/dist/vite.mjs";
import mdx from "file:///home/coded/metislinux.org/node_modules/@mdx-js/rollup/index.js";
import rehypeHighlight from "file:///home/coded/metislinux.org/node_modules/rehype-highlight/index.js";
import solid from "file:///home/coded/metislinux.org/node_modules/solid-start/vite/plugin.js";

// src/configs.jsx
var base = "/website";
var configs_default = base;

// vite.config.js
var vite_config_default = defineConfig({
  plugins: [
    unocss(),
    {
      ...await mdx({
        jsxImportSource: "solid-js",
        jsx: true,
        providerImportSource: "/node_modules/solid-mdx",
        rehypePlugins: [rehypeHighlight]
      }),
      enforce: "pre"
    },
    solid({
      adapter: (await import("file:///home/coded/metislinux.org/node_modules/solid-start-static/index.js")).default(),
      extensions: [".mdx"]
    })
  ],
  base: configs_default
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiLCAic3JjL2NvbmZpZ3MuanN4Il0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL2hvbWUvY29kZWQvbWV0aXNsaW51eC5vcmdcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9ob21lL2NvZGVkL21ldGlzbGludXgub3JnL3ZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL2NvZGVkL21ldGlzbGludXgub3JnL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcbmltcG9ydCB1bm9jc3MgZnJvbSBcInVub2Nzcy92aXRlXCI7XG5pbXBvcnQgbWR4IGZyb20gXCJAbWR4LWpzL3JvbGx1cFwiO1xuaW1wb3J0IHJlaHlwZUhpZ2hsaWdodCBmcm9tIFwicmVoeXBlLWhpZ2hsaWdodFwiO1xuaW1wb3J0IHNvbGlkIGZyb20gXCJzb2xpZC1zdGFydC92aXRlXCI7XG5pbXBvcnQgYmFzZSBmcm9tIFwiLi9zcmMvY29uZmlnc1wiO1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW1xuICAgIHVub2NzcygpLFxuICAgIHtcbiAgICAgIC4uLihhd2FpdCBtZHgoe1xuICAgICAgICBqc3hJbXBvcnRTb3VyY2U6IFwic29saWQtanNcIixcbiAgICAgICAganN4OiB0cnVlLFxuICAgICAgICBwcm92aWRlckltcG9ydFNvdXJjZTogXCIvbm9kZV9tb2R1bGVzL3NvbGlkLW1keFwiLFxuICAgICAgICByZWh5cGVQbHVnaW5zOiBbcmVoeXBlSGlnaGxpZ2h0XSxcbiAgICAgIH0pKSxcbiAgICAgIGVuZm9yY2U6IFwicHJlXCIsXG4gICAgfSxcbiAgICBzb2xpZCh7XG4gICAgICBhZGFwdGVyOiAoYXdhaXQgaW1wb3J0KFwic29saWQtc3RhcnQtc3RhdGljXCIpKS5kZWZhdWx0KCksXG4gICAgICBleHRlbnNpb25zOiBbXCIubWR4XCJdLFxuICAgIH0pLFxuICBdLFxuICBiYXNlOmJhc2Vcbn0pO1xuIiwgIlxuY29uc3QgYmFzZSA9IFwiL3dlYnNpdGVcIiAgLy9naXRodWIgcmVwbyBuYW1lXG5leHBvcnQgZGVmYXVsdCBiYXNlIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFnUSxTQUFTLG9CQUFvQjtBQUM3UixPQUFPLFlBQVk7QUFDbkIsT0FBTyxTQUFTO0FBQ2hCLE9BQU8scUJBQXFCO0FBQzVCLE9BQU8sV0FBVzs7O0FDSGxCLElBQU0sT0FBTztBQUNiLElBQU8sa0JBQVE7OztBRElmLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxJQUNQO0FBQUEsTUFDRSxHQUFJLE1BQU0sSUFBSTtBQUFBLFFBQ1osaUJBQWlCO0FBQUEsUUFDakIsS0FBSztBQUFBLFFBQ0wsc0JBQXNCO0FBQUEsUUFDdEIsZUFBZSxDQUFDLGVBQWU7QUFBQSxNQUNqQyxDQUFDO0FBQUEsTUFDRCxTQUFTO0FBQUEsSUFDWDtBQUFBLElBQ0EsTUFBTTtBQUFBLE1BQ0osVUFBVSxNQUFNLE9BQU8sNEVBQW9CLEdBQUcsUUFBUTtBQUFBLE1BQ3RELFlBQVksQ0FBQyxNQUFNO0FBQUEsSUFDckIsQ0FBQztBQUFBLEVBQ0g7QUFBQSxFQUNBLE1BQUs7QUFDUCxDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
