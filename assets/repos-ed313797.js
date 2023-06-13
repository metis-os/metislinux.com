import{b as n,v as c,g as t,t as o}from"./entry-client-95b0c7d2.js";import{M as l}from"./index-5ff2be6d.js";const s=o("<br>",1);function a(r){const e=Object.assign({h1:"h1",p:"p",ol:"ol",li:"li",a:"a",ul:"ul",pre:"pre",code:"code",span:"span",blockquote:"blockquote",h2:"h2",em:"em"},l(),r.components);return[n(e.h1,{children:"METIS Linux repository structure"}),`
`,n(e.p,{children:"METIS Linux currently ships three repos,"}),`
`,n(e.ol,{get children(){return[`
`,n(e.li,{get children(){return[n(e.a,{href:"https://github.com/metis-os/repo-andromeda",children:"Andromeda"})," -> METIS System packages."]}}),`
`,n(e.li,{get children(){return[n(e.a,{href:"https://github.com/metis-os/repo-cosmic",children:"Cosmic"})," -> Extra packages for the system."]}}),`
`,n(e.li,{get children(){return[n(e.a,{href:"https://github.com/metis-os/repo-recon",children:"Recon"})," -> Hacking tools for metislinux."]}}),`
`]}}),`
`,n(e.p,{get children(){return["All the pkgbuild scripts are available ",n(e.a,{href:"https://github.com/metis-os/metis-pkgs",children:"here"})]}}),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{children:"The repo structure // servers are very simple,"}),`
`]}}),`
`,n(e.pre,{get children(){return n(e.code,{className:"hljs language-bash",get children(){return["Server = https://metis-os.github.io/repo-(repo-name)/",n(e.span,{className:"hljs-variable",children:"$repo"}),"/os/",n(e.span,{className:"hljs-variable",children:"$arch"}),`>

substitute `,n(e.span,{className:"hljs-keyword",children:"for"})," `andromeda,cosmic ,recon`\n"]}})}}),`
`,t(s),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{children:"Pacman should look for the repo something like below"}),`
`]}}),`
`,n(e.pre,{get children(){return n(e.code,{className:"hljs language-bash",get children(){return[n(e.span,{className:"hljs-comment",children:"# /etc/pacman.conf"}),`
[andromeda] 
SigLevel = Optional TrustAll
Include = /etc/pacman.d/metis-mirrorlist-andromeda
`]}})}}),`
`,t(s),`
`,n(e.pre,{get children(){return n(e.code,{className:"hljs language-bash",get children(){return[n(e.span,{className:"hljs-comment",children:"# /etc/pacman.d/metis-mirrorlist-andromeda "}),`
`,n(e.span,{className:"hljs-comment",children:"# main server"}),`
Server = https://metis-os.github.io/repo-andromeda/`,n(e.span,{className:"hljs-variable",children:"$repo"}),"/os/",n(e.span,{className:"hljs-variable",children:"$arch"}),`
`]}})}}),`
`,t(s),`
`,n(e.blockquote,{get children(){return[`
`,n(e.p,{children:"Andromeda is an example, the same way goes to other 2s"}),`
`]}}),`
`,n(e.h2,{children:"Adding new packages"}),`
`,n(e.p,{children:"If you want to contribute to the repo, just follow the below steps"}),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{get children(){return["Fork a repo, for example ",n(e.em,{get children(){return n(e.code,{children:"repo-recon"})}})]}}),`
`]}}),`
`,n(e.pre,{get children(){return n(e.code,{className:"hljs language-bash",get children(){return["$ git ",n(e.span,{className:"hljs-built_in",children:"clone"}),` git@github.com:<your-username>/repo-recon
$ git pull `,n(e.span,{className:"hljs-comment",children:"# just to make sure everything is up to date"}),`
$ add your pkgname.pkg.tar.zst `,n(e.span,{className:"hljs-keyword",children:"in"}),` repo-recon/recon/os/x86_64

`]}})}}),`
`,t(s),`
`,n(e.pre,{get children(){return n(e.code,{className:"hljs language-bash",get children(){return["$ run ./repo_updater.sh -c -u -g ",n(e.span,{className:"hljs-comment",children:"# respectively. it will ask for a commit message and give a precise commit message, done "}),`
`]}})}})]}function m(r={}){const{wrapper:e}=Object.assign({},l(),r.components);return e?n(e,c(r,{get children(){return n(a,r)}})):a(r)}export{m as default};
