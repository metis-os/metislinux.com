import{b as n,v as a,g as i,t}from"./entry-client-71f5dbb5.js";import{M as c}from"./index-f1c5a8ae.js";const s=t("<br>",1),d=t('<a href="http://smarden.org/runit"> Official runit documentation</a>',2),o=t('<a href="https://docs.voidlinux.org/config/services/index.html"> Void linux handbook on runit </a>',2),h=t('<a href="https://wiki.artixlinux.org/Main/Runit"> Artix linux runit wiki </a>',2);function l(r){const e=Object.assign({h1:"h1",p:"p",strong:"strong",ul:"ul",li:"li",h2:"h2",code:"code",pre:"pre",span:"span"},c(),r.components);return[n(e.h1,{children:"The runit init system"}),`
`,n(e.p,{children:"An init system is a critical component of an operating system that handles the starting and management of software processes. Think of it as the conductor of an orchestra, ensuring all the different components work together smoothly."}),`
`,n(e.p,{children:"Now, let's zoom in on Runit. Runit is a specific init system commonly used in Unix-like operating systems. It stands out for its lightweight nature, meaning it doesn't consume a lot of system resources. It's designed to be simple and reliable, reducing the likelihood of encountering issues or complications."}),`
`,n(e.p,{get children(){return["In simple terms, Runit is a suite of tools that provides an init ",n(e.strong,{children:"(PID 1)"})," and a process supervision framework compatible with daemontools. It also includes utilities that simplify the creation and maintenance of services."]}}),`
`,n(e.p,{children:"To put it in everyday language:"}),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{children:"Runit automatically starts services when the system boots up."}),`
`,n(e.li,{children:"It also keeps an eye on services, automatically restarting them if they stop unexpectedly, ensuring they keep running smoothly."}),`
`]}}),`
`,n(e.p,{get children(){return["The main components of ",n(e.strong,{children:"runit"})," init system."]}}),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{children:"runsv"}),`
`,n(e.li,{children:"runsvdir"}),`
`,n(e.li,{children:"sv"}),`
`]}}),`
`,n(e.h2,{children:"Installation"}),`
`,n(e.p,{get children(){return["Install the ",n(e.code,{children:"runit"}),` package. It contains the necessary service files, for example
for `,n(e.code,{children:"openssh"}),", you want to install ",n(e.code,{children:"openssh-runit"}),"."]}}),`
`,n(e.h2,{children:"Installation of services"}),`
`,n(e.p,{get children(){return["runit service packages are named ",n(e.code,{children:"package_name-runit"})," and, when installed, will be available in ",n(e.code,{children:"/etc/runit/sv."})]}}),`
`,n(e.h2,{children:"Programs"}),`
`,n(e.p,{children:"Runit has several programs, but usually you will only ineract directly with one program only."}),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{get children(){return[n(e.code,{children:"sv"})," - used for controlling services, getting status of services, and dependency checking."]}}),`
`,n(e.li,{get children(){return[n(e.code,{children:"chpst"})," - control of a process environment, including memory caps, limits on cores, data segments, environments, user/group privileges, and more."]}}),`
`,n(e.li,{get children(){return[n(e.code,{children:"runsv"})," - supervises a process, and optionally a log service for that process."]}}),`
`,n(e.li,{get children(){return[n(e.code,{children:"svlogd"})," - a simple but powerful logger, includes auto-rotation based on different methods (time, size, etc), post-processing, pattern matching, and socket (remote logging) options."]}}),`
`,n(e.li,{get children(){return[n(e.code,{children:"runsvchdir"})," - changes service levels (runlevels, see below)"]}}),`
`,n(e.li,{get children(){return[n(e.code,{children:"runsvdir"})," - starts a supervision tree"]}}),`
`,n(e.li,{get children(){return[n(e.code,{children:"runit-init"})," - PID 1, does almost nothing besides being the init"]}}),`
`]}}),`
`,n(e.h2,{children:"Files"}),`
`,n(e.p,{get children(){return["There are several files that will be installed by ",n(e.strong,{get children(){return[n(e.code,{children:"runit"}),"."]}})]}}),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{get children(){return[n(e.code,{children:"/etc/runit/1"})," - stage 1, system’s one-time initialization tasks"]}}),`
`,n(e.li,{get children(){return[n(e.code,{children:"/etc/runit/2"})," - stage 2, Normally runs runsvdir, should not return until the system is going to halt or reboot."]}}),`
`,n(e.li,{get children(){return[n(e.code,{children:"/etc/runit/3"})," - stage 3, system’s shutdown tasks"]}}),`
`,n(e.li,{get children(){return[n(e.code,{children:"/etc/runit/ctrlaltdel"})," - Runit will execute this when receiving a SIGINT signal"]}}),`
`,n(e.li,{get children(){return[n(e.code,{children:"/etc/runit/runsvdir/*"})," - Runlevels"]}}),`
`,n(e.li,{get children(){return[n(e.code,{children:"/etc/runit/sv/*"})," - directory containing subdirectories of available service files"]}}),`
`,n(e.li,{get children(){return[n(e.code,{children:"/run/runit/service"})," - always symlinked to active runlevel, sv will search for running service here ",i(s)," ",i(s),`
However, since `,n(e.code,{children:"runit"})," itself depends on ",n(e.code,{children:"runit-rc"}),", there will be several extra rc files installed, most contained in ",n(e.code,{children:"/etc/rc"})," and ",n(e.code,{children:"/usr/lib/rc"}),"."]}}),`
`]}}),`
`,n(e.h2,{children:"Basic usage"}),`
`,n(e.p,{get children(){return["Unlike other distros using runit, Metis doesn’t store its service directory in ",n(e.code,{children:"/var/service"})," or ",n(e.code,{children:"/service"}),", but in ",n(e.code,{children:"/run/runit/service"})," instead."]}}),`
`,n(e.h2,{children:"Service supervision"}),`
`,n(e.p,{get children(){return["By default services provided by Metis packages aren't in the ",n(e.code,{children:"svdir"})," and can't be started or managed by any tool. To do so it is needed to link the service directories into the desired runlevel directory. For example, the following command allows to supervise a service in the current runlevel:"]}}),`
`,n(e.pre,{get children(){return n(e.code,{className:"hljs language-bash",get children(){return[n(e.span,{className:"hljs-built_in",children:"ln"}),` -s ../../sv/service_name /run/runit/service
`]}})}}),`
`,n(e.p,{children:"If the service isn't going to be used anymore, the previously created symbolic link has to be removed from the runlevel directory. For example, the following command disables supervision on a service in the current runlevel:"}),`
`,n(e.pre,{get children(){return n(e.code,{className:"hljs language-bash",get children(){return[n(e.span,{className:"hljs-built_in",children:"unlink"}),` /run/runit/service/service_name
`]}})}}),`
`,n(e.h2,{children:"Disable service"}),`
`,n(e.p,{get children(){return["It can be needed to be able to manage a service but not to start it at boot time, to do so it is possible to disable it by adding an empty file named ",n(e.code,{children:"down"})," into the service's directory. Keep in mind that if a service has to be enabled in a runlevel but not in another runlevel, you have to duplicate the directory in ",n(e.code,{children:"/etc/runit/sv"}),", to setup the two service directories differently and to manage symbolic links accordingly. For example the following command disables a service that is supervised in the current runlevel:"]}}),`
`,n(e.pre,{get children(){return n(e.code,{className:"hljs language-bash",get children(){return[n(e.span,{className:"hljs-built_in",children:"touch"}),` /run/runit/service/service_name/down
`]}})}}),`
`,n(e.p,{children:"To enable the service again the file has to be removed. For example the following command enables a service supervised in the current runlevel:"}),`
`,n(e.pre,{get children(){return n(e.code,{className:"hljs language-bash",get children(){return[n(e.span,{className:"hljs-built_in",children:"unlink"}),` /run/runit/service/service_name/down
`]}})}}),`
`,n(e.h2,{children:"Managing services"}),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{get children(){return["Start   ->	",n(e.code,{children:"sv up service_name"})," or ",n(e.code,{children:"sv start service_name"})]}}),`
`,n(e.li,{get children(){return["Stop    -> ",n(e.code,{children:"sv down service_name"})," or ",n(e.code,{children:"sv stop service_name"})]}}),`
`,n(e.li,{get children(){return["Restart -> ",n(e.code,{children:"sv restart service_name"})]}}),`
`,n(e.li,{get children(){return["Send SIGHUP -> ",n(e.code,{children:"sv hup service_name"})]}}),`
`,n(e.li,{get children(){return["Check status -> ",n(e.code,{children:"sv status service_name"})]}}),`
`]}}),`
`,n(e.p,{get children(){return["Note that the two methods to start/stop services aren't equivalent and that other signals can be sent, read ",n(e.code,{children:"sv(8)"})," for more details."]}}),`
`,n(e.h2,{children:"Runlevels"}),`
`,n(e.p,{get children(){return["By default, runit has 2 runlevels, ",n(e.code,{children:"default"})," and ",n(e.code,{children:"single"}),". New runlevels can be created by creating a new folder in ",n(e.code,{children:"/etc/runit/runsvdir/"})," and symlinking your desired service to that runlevel"]}}),`
`,n(e.pre,{get children(){return n(e.code,{className:"hljs language-bash",get children(){return[n(e.span,{className:"hljs-built_in",children:"ln"}),` -s ../../sv/service /etc/runit/runsvdir/runlevel
`]}})}}),`
`,i(s),`
`,n(e.p,{get children(){return["To switch runlevel use the ",n(e.code,{children:"runsvchdir"})," program. Note that when switching, all services are stopped then restarted if enabled in the new runlevel."]}}),`
`,n(e.pre,{get children(){return n(e.code,{className:"hljs language-bash",children:`runsvchdir runlevel
`})}}),`
`,n(e.h2,{children:"Service directory structure"}),`
`,n(e.p,{get children(){return["This is a tree of a complete service directory structure (aka ",n(e.code,{children:"/etc/runit/sv/servicedir"}),"), in some run scripts, typically only ",n(e.code,{children:"run"})," will be available as usually it's the only file needed."]}}),`
`,n(e.pre,{get children(){return n(e.code,{className:"hljs language-bash",get children(){return[` servicedir
 ├── run (755)
 ├── check (755)
 ├── conf (644)
 ├── finish (755)
 └── `,n(e.span,{className:"hljs-built_in",children:"log"}),` (directory)
     ├── config (644)
     └── run (755)

`]}})}}),`
`,n(e.p,{get children(){return["A runit (or any daemontools-compatible) service directory contains at least one executable file, named ",n(e.code,{children:"run"}),", which runs process in the ",n(e.strong,{children:"foreground"}),"."]}}),`
`,n(e.p,{children:"This means that:"}),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{get children(){return["The",n(e.code,{children:"run"})," file must be a symlink to the service executable, or a script that eventually ",n(e.code,{children:"exec"}),"'s into it."]}}),`
`,n(e.li,{get children(){return["The service executable must not run in the background, otherwise runit will lose track of its state. If necessary, the ",n(e.code,{children:"run"})," script should pass flags to the service executable that prevent this behavior (such as enabling debug mode)."]}}),`
`]}}),`
`,n(e.p,{get children(){return["The service directory may also contain executables like ",n(e.code,{children:"finish"})," and ",n(e.code,{children:"check"}),". ",n(e.code,{children:"finish"})," will be executed when a service is stopped, and ",n(e.code,{children:"check"})," will be executed (if exists) by ",n(e.code,{children:"sv check"})," or ",n(e.code,{children:"sv status"}),"."]}}),`
`,n(e.p,{get children(){return["Some ",n(e.code,{children:"run"})," scripts can source variables and additional commands from a user-supplied ",n(e.code,{children:"conf"})," file (which should be created in the service directory, and is not executable). Usually, a ",n(e.code,{children:"run"})," shell script that supports a ",n(e.code,{children:"conf"})," file has the line ",n(e.code,{children:"[ -r ./conf ] && . ./conf"}),"."]}}),`
`,n(e.p,{get children(){return["If a service directory contains another directory named ",n(e.code,{children:"log"}),", the output of the ",n(e.code,{children:"run"})," process in the service directory will be piped to the input of the ",n(e.code,{children:"run"})," process in the log directory. If the log service uses ",n(e.code,{children:"svlogd"}),", it may be configured by using the file ",n(e.code,{children:"config"}),". How ",n(e.code,{children:"svlogd"})," can be configured is explained in the ",n(e.code,{children:"svlogd(1)"})," manpage."]}}),`
`,n(e.h2,{children:"Service dependencies"}),`
`,n(e.p,{get children(){return["Some services may depend on other services. For example, ",n(e.code,{children:"NetworkManager"})," depends on ",n(e.code,{children:"dbus"}),". To ensure that required dependencies are satisfied, check the service's ",n(e.code,{children:"run"})," file. For example, for NetworkManager:"]}}),`
`,n(e.pre,{get children(){return n(e.code,{className:"hljs language-bash",get children(){return[n(e.span,{className:"hljs-comment",children:"# /etc/runit/sv/NetworkManager/run"}),`
 sv check dbus >/dev/null || `,n(e.span,{className:"hljs-built_in",children:"exit"}),` 1
`]}})}}),`
`,n(e.p,{get children(){return["This means you have to enable ",n(e.code,{children:"dbus"})," for NetworkManager to start."]}}),`
`,n(e.h2,{children:"Runit for user-services"}),`
`,n(e.p,{get children(){return["To use runit to manage services at a user level, you will need to create a running runit user instance for your user. This instance will need it's own directory in which it can operate. It is recommended that this instance be managed by the system's runit instance. The way this is setup is by creating a runit service with the following ",n(e.code,{children:"run"})," file:"]}}),`
`,n(e.pre,{get children(){return n(e.code,{className:"hljs language-bash",get children(){return[n(e.span,{className:"hljs-meta",children:"#!/bin/sh"}),`

`,n(e.span,{className:"hljs-built_in",children:"export"})," USER=",n(e.span,{className:"hljs-string",children:'"your-username"'}),`
`,n(e.span,{className:"hljs-built_in",children:"export"})," HOME=",n(e.span,{className:"hljs-string",get children(){return['"/home/',n(e.span,{className:"hljs-variable",children:"$USER"}),'"']}}),`

`,n(e.span,{className:"hljs-built_in",children:"groups"}),"=",n(e.span,{className:"hljs-string",get children(){return['"',n(e.span,{className:"hljs-subst",get children(){return["$(id -Gn ",n(e.span,{className:"hljs-string",get children(){return['"',n(e.span,{className:"hljs-variable",children:"$USER"}),'"']}})," | tr ' ' ':')"]}}),'"']}}),`
svdir=`,n(e.span,{className:"hljs-string",get children(){return['"',n(e.span,{className:"hljs-variable",children:"$HOME"}),'/.service"']}}),`

`,n(e.span,{className:"hljs-built_in",children:"exec"})," chpst -u ",n(e.span,{className:"hljs-string",get children(){return['"',n(e.span,{className:"hljs-variable",children:"$USER"}),":",n(e.span,{className:"hljs-variable",children:"$groups"}),'"']}})," runsvdir ",n(e.span,{className:"hljs-string",get children(){return['"',n(e.span,{className:"hljs-variable",children:"$svdir"}),'"']}}),`
`]}})}}),`
`,n(e.p,{get children(){return["The ",n(e.code,{children:"svdir"})," can be changed to a directory of your liking and the ",n(e.code,{children:"USER"})," must be changed to a user for which you want to setup user-services. Any new user service can be added to a configuration directory (i.e. ",n(e.code,{children:"~/.config/sv"}),") from which they can be symlinked into the ",n(e.code,{children:"svdir"})," directory (similarly to how ",n(e.code,{children:"/etc/runit/sv/example-service"})," gets symlinked to ",n(e.code,{children:"/run/runit/service"}),")."]}}),`
`,n(e.h2,{children:"See also"}),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{get children(){return[`
`,i(d),`
`]}}),`
`,n(e.li,{get children(){return[`
`,i(o),`
`]}}),`
`,n(e.li,{get children(){return[`
`,i(h),`
`]}}),`
`]}})]}function p(r={}){const{wrapper:e}=Object.assign({},c(),r.components);return e?n(e,a(r,{get children(){return n(l,r)}})):l(r)}export{p as default};
