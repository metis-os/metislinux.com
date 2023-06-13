import{b as e,v as c,g as a,t as i}from"./entry-client-95b0c7d2.js";import{M as t}from"./index-5ff2be6d.js";const l=i("<br>",1);function r(s){const n=Object.assign({h1:"h1",p:"p",a:"a",em:"em",code:"code",h2:"h2",ul:"ul",li:"li",pre:"pre",span:"span"},t(),s.components);return[e(n.h1,{children:"PwnVim (neovim) guide."}),`
`,e(n.p,{get children(){return[e(n.a,{href:"https://github.com/metis-os/pwnvim",children:"Pwnvim"}),` is a neovim framework for metislinux. It used to be my personal config as the name suggests
but later i descided to move the repo to metislinux and improve it for the overall community. In this guide i'll be explaining how we can
add `,e(n.em,{get children(){return e(n.code,{children:"language servers"})}}),"  and ",e(n.em,{get children(){return e(n.code,{children:"Debug adapters"})}})," in our config to use it."]}}),`
`,e(n.h2,{children:"Installing a language tresitter"}),`
`,e(n.ul,{get children(){return[`
`,e(n.li,{get children(){return["Tresitter parsers are basically for code highlights, normally colors add white blocks to your code. So, to install a ",e(n.code,{children:"tresitter"}),`
we can    Run `,e(n.code,{children:":TSInstall [language]"})," to install the [tree-sitter][tree-sitter] parser for the given language."]}}),`
`]}}),`
`,e(n.h2,{children:"Installing a language server"}),`
`,e(n.ul,{get children(){return[`
`,e(n.li,{get children(){return["To install a language server, we can use ",e(n.code,{children:"mason"}),`,  and yeah it's already configured inside the neovim.
just run `,e(n.code,{children:":MasonInstall [language server]"})," eg. ",e(n.code,{children:"MasonInstall rust-analyzer"})]}}),`
`]}}),`
`,e(n.p,{get children(){return["See [",e(n.code,{children:":help lspconfig-all"}),`][lspconfig-all] to get an understanding of how
you would setup a language server protocol.`]}}),`
`,e(n.pre,{get children(){return e(n.code,{className:"hljs language-lua",get children(){return["  ",e(n.span,{className:"hljs-comment",children:"-- settings/servers.lua"}),`
  `,e(n.span,{className:"hljs-keyword",children:"local"})," lspconfig = ",e(n.span,{className:"hljs-built_in",children:"require"}),"(",e(n.span,{className:"hljs-string",children:'"lspconfig"'}),`)

  `,e(n.span,{className:"hljs-comment",children:"-- $ rustup component add rust-analyzer"}),`
  lspconfig.rust_analyzer.setup({
    cmd = { `,e(n.span,{className:"hljs-string",children:'"rustup"'}),", ",e(n.span,{className:"hljs-string",children:'"run"'}),", ",e(n.span,{className:"hljs-string",children:'"stable"'}),", ",e(n.span,{className:"hljs-string",children:'"rust-analyzer"'}),` },
  })
`]}})}}),`
`,a(l),`
`,e(n.ul,{get children(){return[`
`,e(n.li,{get children(){return[`
`,e(n.p,{get children(){return["View ",e(n.a,{href:"https://github.com/jose-elias-alvarez/null-ls.nvim/blob/main/doc/BUILTINS.md",children:"the docs"}),` to figure out how you are expected to
configure a source.`]}}),`
`,e(n.pre,{get children(){return e(n.code,{className:"hljs language-lua",get children(){return[e(n.span,{className:"hljs-comment",children:"-- settings/sources.lua"}),`
`,e(n.span,{className:"hljs-keyword",children:"local"})," null = ",e(n.span,{className:"hljs-built_in",children:"require"}),"(",e(n.span,{className:"hljs-string",children:'"null-ls"'}),`)

`,e(n.span,{className:"hljs-comment",children:"-- $ cargo install stylua"}),`
null.register(null.builtins.formatting.stylua)
`]}})}}),`
`]}}),`
`]}}),`
`,a(l),`
`,e(n.ul,{get children(){return[`
`,e(n.li,{get children(){return["Check out ",e(n.a,{href:"https://github.com/mfussenegger/nvim-dap/wiki/Debug-Adapter-installation",children:"the wiki"}),` for further information on setting up a
debug adapter and configuring it.`]}}),`
`]}}),`
`,e(n.pre,{get children(){return e(n.code,{className:"hljs language-lua",get children(){return["    ",e(n.span,{className:"hljs-comment",children:"-- settings/adapters.lua"}),`
    `,e(n.span,{className:"hljs-keyword",children:"local"})," dap = ",e(n.span,{className:"hljs-built_in",children:"require"}),"(",e(n.span,{className:"hljs-string",children:'"dap"'}),`)

    `,e(n.span,{className:"hljs-comment",children:"-- https://github.com/vadimcn/codelldb"}),`
    dap.adapters.codelldb = {
      `,e(n.span,{className:"hljs-built_in",children:"type"})," = ",e(n.span,{className:"hljs-string",children:'"server"'}),`,
      port = `,e(n.span,{className:"hljs-string",children:'"${port}"'}),`,
      executable = {
        command = vim.fs.normalize(`,e(n.span,{className:"hljs-string",children:'"/path/to/codelldb/extension/adapter/codelldb"'}),`),
        args = { `,e(n.span,{className:"hljs-string",children:'"--port"'}),", ",e(n.span,{className:"hljs-string",children:'"${port}"'}),` },
      },
    }
`]}})}}),`
`,a(l),`
`,e(n.pre,{get children(){return e(n.code,{className:"hljs language-json",get children(){return[e(n.span,{className:"hljs-comment",children:"// ${workspaceFolder}/.vscode/launch.json"}),`
`,e(n.span,{className:"hljs-punctuation",children:"{"}),`
    `,e(n.span,{className:"hljs-attr",children:'"version"'}),e(n.span,{className:"hljs-punctuation",children:":"})," ",e(n.span,{className:"hljs-string",children:'"0.2.0"'}),e(n.span,{className:"hljs-punctuation",children:","}),`
    `,e(n.span,{className:"hljs-attr",children:'"configurations"'}),e(n.span,{className:"hljs-punctuation",children:":"})," ",e(n.span,{className:"hljs-punctuation",children:"["}),`
        `,e(n.span,{className:"hljs-punctuation",children:"{"}),`
            `,e(n.span,{className:"hljs-attr",children:'"type"'}),e(n.span,{className:"hljs-punctuation",children:":"})," ",e(n.span,{className:"hljs-string",children:'"codelldb"'}),e(n.span,{className:"hljs-punctuation",children:","}),`
            `,e(n.span,{className:"hljs-attr",children:'"request"'}),e(n.span,{className:"hljs-punctuation",children:":"})," ",e(n.span,{className:"hljs-string",children:'"launch"'}),e(n.span,{className:"hljs-punctuation",children:","}),`
            `,e(n.span,{className:"hljs-attr",children:'"name"'}),e(n.span,{className:"hljs-punctuation",children:":"})," ",e(n.span,{className:"hljs-string",children:'"Debug"'}),e(n.span,{className:"hljs-punctuation",children:","}),`
            `,e(n.span,{className:"hljs-attr",children:'"cwd"'}),e(n.span,{className:"hljs-punctuation",children:":"})," ",e(n.span,{className:"hljs-string",children:'"${workspaceFolder}"'}),e(n.span,{className:"hljs-punctuation",children:","}),`
            `,e(n.span,{className:"hljs-attr",children:'"program"'}),e(n.span,{className:"hljs-punctuation",children:":"})," ",e(n.span,{className:"hljs-string",children:'"${workspaceFolder}/path/to/program"'}),e(n.span,{className:"hljs-punctuation",children:","}),`
            `,e(n.span,{className:"hljs-attr",children:'"args"'}),e(n.span,{className:"hljs-punctuation",children:":"})," ",e(n.span,{className:"hljs-punctuation",children:"["}),e(n.span,{className:"hljs-punctuation",children:"]"}),`
        `,e(n.span,{className:"hljs-punctuation",children:"}"}),`
    `,e(n.span,{className:"hljs-punctuation",children:"]"}),`
`,e(n.span,{className:"hljs-punctuation",children:"}"}),`
`]}})}}),`
`,a(l),`
`,e(n.ul,{get children(){return[`
`,e(n.li,{get children(){return["Set ",e(n.code,{children:"NVIM_DEV"})," environment variable to modify where ",e(n.a,{href:"https://github.com/folke/lazy.nvim",children:"lazy.nvim"}),`
should look for `,e(n.code,{children:"dev = true"})," plugins."]}}),`
`]}})]}function d(s={}){const{wrapper:n}=Object.assign({},t(),s.components);return n?e(n,c(s,{get children(){return e(r,s)}})):r(s)}export{d as default};
