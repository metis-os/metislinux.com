import{b as t,v as g,g as n,i as o,t as r}from"./entry-client-1b766ab0.js";import{M as m}from"./index-790ebfdd.js";const u=r('<div><img src="/installation/calamares/welcome.png" alt="calamares initial"><img src="/installation/calamares/901886.png" alt="calamares initial"></div>',4),l=r("<br>",1),c=r("<b></b>",2),y=r('<div style="display: flex; justify-content: center;"><img src="/installation/calamares/131632.png" alt="select locale" height="80%" width="80%"></div>',3),p=r('<div style="display: flex; justify-content: center;"><img src="/installation/calamares/328809.png" alt="select locale" height="80%" width="80%"></div>',3),f=r('<div style="display: flex; justify-content: center;"><img src="/public/installation/calamares/850438.png" alt="select locale" height="80%" width="80%"></div>',3),w=r('<div style="display: flex; justify-content: center;"><img src="/installation/calamares/987809.png" alt="calamares form" height="80%" width="80%"></div>',3),b=r('<div style="display: flex; justify-content: center;"><img src="/installation/calamares/930781.png" alt="calamares install" height="80%" width="80%"></div>',3),x=r('<div style="display: flex; justify-content: center;"><img src="/installation/calamares/257681.png" alt="processeding" height="80%" width="80%"></div>',3),v=r("<b><b></b></b>",4),_=r('<div style="display: flex; justify-content: center;"><img src="/installation/calamares/203090.png" alt="calamares finish" height="80%" width="80%"></div>',3);function h(s){const e=Object.assign({h1:"h1",p:"p",h2:"h2",a:"a",strong:"strong",code:"code",em:"em",h3:"h3",blockquote:"blockquote"},m(),s.components);return[t(e.h1,{children:"Install METIS with Calamares"}),`
`,t(e.p,{children:"This is a straightforward guide for beginners and Linux newcomers to install MetisLinux on their system without encountering any issues. In this guide, I will provide instructions for installing MetisLinux on a UEFI system. However, the process remains the same if you are using BIOS. Please follow the steps outlined below to successfully install MetisLinux."}),`
`,t(e.h2,{children:"Preliminary Steps"}),`
`,t(e.p,{get children(){return["Assuming that you have already created a ",t(e.a,{href:"https://metislinux.org/docs/quickstart/welcome",children:"bootable"}),` USB with Metislinux ISO, boot system with it and select Boot Metislinux.
Select `,t(e.strong,{children:"LAUNCH INSTALLER"})," to start the installer."]}}),`
`,"<!>",(()=>{const i=n(u),a=i.firstChild,d=a.nextSibling;return i.style.setProperty("display","flex"),i.style.setProperty("justifyContent","space-between"),a.style.setProperty("width","45%"),a.style.setProperty("height","auto"),d.style.setProperty("width","45%"),d.style.setProperty("height","auto"),d.style.setProperty("objectFit","contain"),i})(),`
`,n(l),`
`,t(e.p,{get children(){return["Now select your ",t(e.strong,{children:"Region, Time Zone, System Locale"})," etc and click on ",(()=>{const i=n(c);return o(i,t(e.code,{children:"Next"})),i})(),". ",t(e.em,{get children(){return t(e.code,{children:"If you are connected to internet this will show automatically"})}}),"."]}}),`
`,n(y),`
`,n(l),`
`,t(e.p,{get children(){return["Select your ",t(e.strong,{children:"Keyboard Layout"})," and click ",(()=>{const i=n(c);return o(i,t(e.code,{children:"Next"})),i})(),". ",t(e.em,{get children(){return t(e.code,{children:"The keyboard layout is automatically adjusted to selected system locale"})}}),"."]}}),`
`,n(p),`
`,n(l),`
`,t(e.h3,{children:"Partitioning"}),`
`,t(e.blockquote,{get children(){return[`
`,t(e.p,{get children(){return["Note ",t(e.strong,{children:"In this guide, All partitioning are performed on an empty disk."})]}}),`
`]}}),`
`,t(e.p,{get children(){return["Now, here comes the ",t(e.strong,{children:"critical"})," stage where many Linux beginners make ",t(e.strong,{children:"mistakes"}),". Take care and ensure that you are well-informed before engaging in any system partitioning. Understanding the partition scheme is strongly recommended to avoid complications. If you are a beginner you can just stick with ",t(e.em,{get children(){return t(e.code,{children:"Erase"})}}),` disk, which will
erase your disk and install Metislinux.`]}}),`
`,n(l),`
`,n(f),`
`,n(l),`
`,t(e.h2,{children:"Completing"}),`
`,t(e.p,{get children(){return["Create a ",t(e.strong,{children:"user account"})," for you, using the simple form, and click ",(()=>{const i=n(c);return o(i,t(e.code,{children:"Next"})),i})()]}}),`
`,n(w),`
`,n(l),`
`,t(e.p,{get children(){return["Here's the installation summary, including the changes you've made and the upcoming actions by the installer. Take a moment to review it, and once you're content, ",(()=>{const i=n(c);return o(i,t(e.code,{children:"Next"})),i})(),"."]}}),`
`,n(b),`
`,n(l),`
`,t(e.p,{get children(){return["The installation process has ",t(e.strong,{children:"commenced"}),". It may take a few minutes, so feel free to glance through the slides or take a short break, perhaps grabbing a coffee."]}}),`
`,n(x),`
`,n(l),`
`,t(e.p,{get children(){return["When It's done, click ",(()=>{const i=n(v),a=i.firstChild;return o(a,t(e.code,{children:"restart now"})),i})()," to reboot the system instantly."]}}),`
`,n(_),`
`,n(l),`
`,t(e.p,{get children(){return t(e.em,{get children(){return t(e.strong,{get children(){return["Well, That's the Metislinux installation using ",t(e.strong,{children:"Calamares"}),", Enjoy!"]}})}})}})]}function j(s={}){const{wrapper:e}=Object.assign({},m(),s.components);return e?t(e,g(s,{get children(){return t(h,s)}})):h(s)}export{j as default};
