import{b as n,v as s,g as r,t as i}from"./entry-client-df68d362.js";import{M as l}from"./index-753e6b92.js";const a=i('<h1 align="center"><strong>METIS WIKI</strong></h1>',4),d=i('<p align="center"><strong>Your true source for the documentation and information about METIS Linux. </strong></p>',4),h=i("<br>",1);function o(t){const e=Object.assign({p:"p",a:"a",strong:"strong",em:"em",blockquote:"blockquote",h2:"h2",h3:"h3",ul:"ul",li:"li",pre:"pre",code:"code",span:"span",hr:"hr",ol:"ol"},l(),t.components);return[r(a),`
`,r(d),`
`,n(e.p,{get children(){return[n(e.a,{href:"https://metislinux.org",get children(){return n(e.strong,{children:"METIS Linux"})}})," is a linux distribution embodying the ",n(e.em,{children:"KISS"})," and ",n(e.em,{children:"unix"}),` philosophy. It uses simple
`,n(e.strong,{children:"init systems"})," instead of ",n(e.em,{children:"systemd"})," and super minimal ",n(e.strong,{children:"window managers"})," to level up your productivity. I, ",n(e.a,{href:"https://github.com/PwnWriter",get children(){return n(e.em,{children:"@PwnWriter"})}}),`
started this project as a hobby project but now it has been evolved into a full-fledged distro for both `,n(e.strong,{children:"beginner"})," and ",n(e.strong,{children:"advanced"})," users."]}}),`
`,n(e.blockquote,{get children(){return[`
`,n(e.p,{get children(){return["This wiki will cover ",n(e.em,{children:"METIS"})," related documentation from base install to configurating the overall distribution."]}}),`
`]}}),`
`,n(e.p,{get children(){return n(e.strong,{get children(){return["To get started, download the latest ISO of Metis Linux from its official ",n(e.a,{href:"https://github.com/metis-os/Releases",children:"releases"})," page, and then follow the instructions provided below."]}})}}),`
`,n(e.h2,{children:"Creating a bootable drive"}),`
`,n(e.h3,{children:"Using dd (linux)"}),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{get children(){return[`
`,n(e.p,{get children(){return[`Linux:
If you are already on `,n(e.em,{children:"Linux"}),` you can easily create a bootable USB for Metis Linux using the dd command.
This method is highly recommended due to its simplicity and universal availability. Here's how:`]}}),`
`,n(e.p,{children:"First find the usb to make it bootable. run"}),`
`,n(e.pre,{get children(){return n(e.code,{className:"hljs language-bash",children:`$  lsblk
NAME   MAJ:MIN RM   SIZE RO TYPE MOUNTPOINTS
sda      8:0    0 298.1G  0 disk
├─sda1   8:1    0     4G  0 part [SWAP]
├─sda2   8:2    0   512M  0 part /boot
└─sda3   8:3    0 293.6G  0 part /
sdb      8:16   1   31.7G  0 disk
`})}}),`
`,n(e.p,{get children(){return["For me, it's ",n(e.code,{children:"sdb"}),","]}}),`
`,n(e.pre,{get children(){return n(e.code,{className:"hljs language-bash",get children(){return["$ sudo ",n(e.span,{className:"hljs-built_in",children:"dd"})," ",n(e.span,{className:"hljs-keyword",children:"if"}),"=/path/to/metislinux.iso of=/dev/sdX bs=4M status=progress oflag=",n(e.span,{className:"hljs-built_in",children:"sync"}),`
`]}})}}),`
`,r(h),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{get children(){return["Make sure to replace path/to/metis.iso with the ",n(e.strong,{children:"METIS ISO"})," path and sdX with your USB device."]}}),`
`,n(e.li,{get children(){return["This will create a bootable Metislinux USB for both ",n(e.strong,{children:"BIOS and UEFI"}),"."]}}),`
`]}}),`
`]}}),`
`]}}),`
`,n(e.hr,{}),`
`,n(e.h3,{children:"Etcher (Linux, Windows & Macs)"}),`
`,n(e.p,{get children(){return[n(e.a,{href:"https://www.balena.io/etcher/",children:"Etcher"})," Etcher is an OS image flasher built with Node.js and Electron, capable of flashing an SDCard or USB drive. It protects you from accidentally writing to your hard-drives and ensures every byte of data was written correctly. Follow the steps below to create a bootable USB with Etcher"]}}),`
`,n(e.ol,{get children(){return[`
`,n(e.li,{get children(){return["Launch Etcher & ",n(e.strong,{children:"select"})," Metislinux ISO."]}}),`
`,n(e.li,{get children(){return["Select your USB drive, ",n(e.strong,{children:"Be careful here"})," and select the right one."]}}),`
`,n(e.li,{get children(){return["Click on ",n(e.strong,{children:"Flash!"})," and wait for it to finish."]}}),`
`,n(e.li,{get children(){return["This will create a bootable MetisLinux USB for both ",n(e.strong,{children:"BIOS and UEFI"}),"."]}}),`
`]}}),`
`,n(e.hr,{}),`
`,n(e.h3,{children:"Etchdroid (android)"}),`
`,n(e.p,{get children(){return["You can also create ",n(e.strong,{children:"Bootable"})," USB using your Android phone. All you need is to install ",n(e.a,{href:"https://play.google.com/store/apps/details?id=eu.depau.etchdroid&hl=en&gl=US",children:"Etchdroid"})," from playstore. Follow the steps below to create a bootable USB with Etchdroid"]}}),`
`,n(e.ol,{get children(){return[`
`,n(e.li,{get children(){return["Connect USB to your phone. Make sure your the OTG option is ",n(e.strong,{children:"On"}),"."]}}),`
`,n(e.li,{get children(){return["Launch Etchdroid & select the Metislinux ISO. Now click ",n(e.strong,{children:"flash!"})," and wait for finish."]}}),`
`,n(e.li,{get children(){return["This will create a bootable Metislinux USB for both ",n(e.strong,{children:"BIOS and UEFI"})," from your Android."]}}),`
`]}})]}function g(t={}){const{wrapper:e}=Object.assign({},l(),t.components);return e?n(e,s(t,{get children(){return n(o,t)}})):o(t)}export{g as default};
