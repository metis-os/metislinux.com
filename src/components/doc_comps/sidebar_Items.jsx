const sidebar_Items = [


          {

    label: ["Install", "i-mingcute:safe-flash-fill"],
    items: [

      ["Welcome", "install/welcome"],
      ["Beginner", "instal/beginner"],
      ["1337", "quickstart /cli-install"],
    ],
  },




  {
    label: ["Features", "i-mdi:atom-variant"],
    items: [
      ["Terminal", "walkthrough/terminal"],
    //  ["Snippets", "walkthrough/snippets"],
    //  ["Manage Plugins", "walkthrough/plugins"],
    //  ["Syntax highlighting", "walkthrough/syntax"],
    //  ["LSP walkthroughuration", "config/lsp"],
    //  ["Format & Lint", "walkthrough/format_lint"],
    //  ["Mappings", "walkthrough/mappings"],
    //  ["UI Customization", "walkthrough/metis_ui"],
    //  ["Customize colors", "walkthrough/theming"],
    ],
  },


  {
    label:["KeyBindings","i-tabler:server-cog"],
    items:[
      ["dwm","keybindings/dwm"],
      ["bspwm","keybindings/bspwm"],
      ["EWM", "keybindings/ewm"],
    ]
  },
  ["The Init", "theinit", " i-mdi-cog"],
  // ["Features", "features", ""],
  // ["Debug config", "debugging-config", "i-ri-bug-line"],
  ["Contributing", "contribute", "i-mdi-github"],
  ["Donate", "donate", "i-line-md:heart"],
];

export default sidebar_Items;
