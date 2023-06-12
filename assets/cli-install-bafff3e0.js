import{b as n,v as a,g as t,t as l}from"./entry-client-df68d362.js";import{M as o}from"./index-753e6b92.js";const i=l("<br>",1),c=l('<div style="display: flex; justify-content: center;"><img src="/installation/cli/303293.png" alt="Chroot initial" height="80%" width="80%"></div>',3),h=l('<div style="display: flex; justify-content: center;"><img src="/installation/cli/172619.png" alt="Chroot initial" height="80%" width="80%"></div>',3),d=l('<div style="display: flex; justify-content: center;"><img src="/installation/cli/191267.png" alt="Chroot initial" height="80%" width="80%"></div>',3),u=l('<div style="display: flex; justify-content: center;"><img src="/installation/cli/218213.png" alt="Chroot initial" height="80%" width="80%"></div>',3),m=l('<div style="display: flex; justify-content: center;"><img src="/installation/cli/336479.png" alt="Chroot initial" height="80%" width="80%"></div>',3);function s(r){const e=Object.assign({h1:"h1",p:"p",strong:"strong",em:"em",code:"code",blockquote:"blockquote",h2:"h2",pre:"pre",span:"span",ul:"ul",li:"li",a:"a"},o(),r.components);return[n(e.h1,{children:"Install METIS the chroot way"}),`
`,n(e.p,{get children(){return[n(e.strong,{children:"METIS Linux"})," is so much minimal that you can even install it using the standard ",n(e.em,{get children(){return n(e.code,{children:"chroot"})}})," method, similar to distributions such as ",n(e.em,{get children(){return[n(e.code,{children:"Arch"})," / ",n(e.code,{children:"Artix."})]}}),`
I personally use this method because it allows you to customize your overall installation process, choose a different `,n(e.strong,{children:"kernel"})," and stuffs like that."]}}),`
`,n(e.blockquote,{get children(){return[`
`,n(e.p,{children:"It is not recommended for individuals who are new to Linux to install METIS Linux using the chroot method. Instead, they are advised to utilize the user-friendly Calamares installer."}),`
`]}}),`
`,n(e.p,{get children(){return["In this guide i'll be installing ",n(e.strong,{children:"METIS"})," on ",n(e.em,{children:"UEFI"})," system, the process goes the same to ",n(e.em,{children:"BIOS"})]}}),`
`,n(e.p,{get children(){return["Assuming you are aleady booted into ",n(e.em,{children:"metislinux"})," ISO and the internet is working fine."]}}),`
`,n(e.p,{get children(){return["Open ",n(e.strong,{children:"terminal"})," with ",n(e.em,{children:"(super + enter)"})," and follow along the below guide."]}}),`
`,n(e.h2,{children:"Initializing the disk"}),`
`,n(e.p,{get children(){return["Once you booted into the iso, do ",n(e.code,{children:"lsblk"})," and see on which disk to install metislinux on. I'll be installing on my ",n(e.code,{children:"nvme0n1"})," drive."]}}),`
`,n(e.pre,{get children(){return n(e.code,{className:"hljs language-bash",get children(){return[`$ lsblk
NAME      MAJ:MIN RM   SIZE    RO TYPE MOUNTPOINTS
sda       8:0     0    931.5G  0                                `,n(e.span,{className:"hljs-comment",children:"# Hard drive "}),`
sdb       8:16    1    29.3G   0                                `,n(e.span,{className:"hljs-comment",children:"# pendrive of metislinux"}),`
nvme0n1   259:0   0    119.2G  0 disk                           `,n(e.span,{className:"hljs-comment",children:"# installation drive"}),`
`]}})}}),`
`,n(e.h2,{children:"Creating partitions"}),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{get children(){return["Use ",n(e.code,{children:"fdisk"})," to create two partition out of the disk, and format the boot partition with ",n(e.code,{children:"mkfs.vfat -F32"})," and another with ",n(e.code,{children:"mkfs.ext4"})]}}),`
`,n(e.li,{get children(){return["Now, mount the ",n(e.code,{children:"root partition"}),"  to ",n(e.code,{children:"/mnt"}),"."]}}),`
`,n(e.li,{get children(){return["Create a ",n(e.code,{children:"boot"})," directory inside ",n(e.code,{children:"/mnt"})," (You can also use ",n(e.code,{children:"/boot/efi"}),")."]}}),`
`,n(e.li,{get children(){return["Mount the boot partition to ",n(e.code,{children:"/mnt/boot"}),". (if you have made a ",n(e.code,{children:"/boot/efi"})," directory mount it there but it doesn't really matter)."]}}),`
`]}}),`
`,t(i),`
`,t(c),`
`,t(i),`
`,n(e.h2,{children:"Install base system"}),`
`,n(e.p,{get children(){return["Now, it's time to install the ",n(e.code,{children:"base"})," packages from the ",n(e.code,{children:"repo"}),`.
run`]}}),`
`,n(e.pre,{get children(){return n(e.code,{className:"hljs language-bash",children:`$ basestrap /mnt base base-devel runit elogind-runit linux-hardened intel-ucode linux-hardened-headers neovim linux-firmware metis-fonts nerd-fonts-jetbrains-mono eww-x11 xclip tmux paru xorg-xinit metis-dwm zathura zathura-pdf-poppler git fzf doas zsh xwallpaper python3 python-pip python-pywal fontconfig xorg-mkfontscale zsh-autosuggestions zsh-syntax-highlighting  zsh-completions xdg-utils xdg-user-dirs zoxide
libnotify grub mpv ffmpeg pipewire pipewire-pulse wireplumber rustup metis-grub-theme neworkmanager networkmanager-runit efibootmgr
`})}}),`
`,t(i),`
`,t(h),`
`,t(i),`
`,n(e.blockquote,{get children(){return[`
`,n(e.p,{children:"Note, I've installed the very basic packages , you can even filter out on this and choose which to install !!"}),`
`]}}),`
`,n(e.h2,{children:"Generate fstab"}),`
`,n(e.p,{get children(){return["Now, it's time to generate ",n(e.code,{children:"fstab"})," of our system."]}}),`
`,n(e.pre,{get children(){return n(e.code,{className:"hljs language-bash",children:`$ fastabgen -U /mnt /mnt/etc/fstab 
`})}}),`
`,t(i),`
`,t(d),`
`,t(i),`
`,n(e.p,{children:"If you want to create a swap partition, then run"}),`
`,n(e.pre,{get children(){return n(e.code,{className:"hljs language-bash",get children(){return["$ ",n(e.span,{className:"hljs-built_in",children:"dd"})," ",n(e.span,{className:"hljs-keyword",children:"if"}),`=/dev/zero of=/swapfile bs=1G count=2 status=progress
`]}})}}),`
`,t(i),`
`,n(e.p,{get children(){return["It will create a swapfile of ",n(e.code,{children:"2GIB"}),`, you can adjust by increasing // decreasing the bs,count value.
After creating the swapfile, we need to add into our fstab file so that every time we boot into our system, it automatically detects the partition to mount.
to do so, just exit out the shell and run`]}}),`
`,n(e.pre,{get children(){return n(e.code,{className:"hljs language-bash",children:`$ fastabgen -U /mnt /mnt/etc/fstab && metis-chroot /mnt
`})}}),`
`,n(e.h2,{children:"Chroot into the system"}),`
`,n(e.p,{get children(){return["Now, ",n(e.code,{children:"chroot into the new system"})]}}),`
`,n(e.pre,{get children(){return n(e.code,{className:"hljs language-bash",get children(){return["$ metis-chroot /mnt /bin/bash ",n(e.span,{className:"hljs-comment",children:"# this will open a bash(chroot) instance of newly installed system. you can switch to another shell also."}),`
`]}})}}),`
`,n(e.h2,{children:"Setup time zone"}),`
`,n(e.p,{get children(){return["Now, ",n(e.code,{children:"symlink"})," your localtime and ",n(e.code,{children:"hardwareclock"})," as follows"]}}),`
`,t(i),`
`,t(u),`
`,t(i),`
`,n(e.pre,{get children(){return n(e.code,{className:"hljs language-bash",get children(){return["$ ",n(e.span,{className:"hljs-built_in",children:"ln"}),` -sf /usr/share/zoneinfo/Asia/kathmandu/  /etc/localtime
`]}})}}),`
`,n(e.p,{get children(){return["here,  ",n(e.code,{children:"writer"})," is my machine name and ",n(e.code,{children:"Asia/kathmandu"})," is my localtime."]}}),`
`,n(e.h2,{children:"Install bootloader"}),`
`,n(e.p,{get children(){return["After doing this, we can install the ",n(e.code,{children:"grub"})," bootloader as below."]}}),`
`,t(i),`
`,t(m),`
`,t(i),`
`,n(e.h2,{children:"Adding users"}),`
`,n(e.p,{children:`After installing grub, we can add a normal user and give a password to it .
to add a normal user run`}),`
`,n(e.pre,{get children(){return n(e.code,{className:"hljs language-bash",get children(){return["$ useradd -mG wheel,video,audio,power,dbus,storage <username> ",n(e.span,{className:"hljs-comment",children:"#the groups listed here are most necessary ones"}),`
`]}})}}),`
`,n(e.p,{children:"now, run"}),`
`,n(e.pre,{get children(){return n(e.code,{className:"hljs language-bash",children:`$ passwd root 
$ passwd <normal_user>
`})}}),`
`,n(e.p,{get children(){return["to set password of users and now we can give ",n(e.em,{get children(){return n(e.strong,{children:"sudo privilege to wheel group users"})}}),` by running the following and uncommenting the line
`,n(e.code,{children:"%wheel ALL=(ALL) ALL"})]}}),`
`,n(e.pre,{get children(){return n(e.code,{className:"hljs language-bash",children:`$ EDITOR=nvim visudo  

`})}}),`
`,t(i),`
`,n(e.p,{children:`and
Now, we can simply reboot the system by unmounting the drives as follows. If everything went well, you'll see a grub menu to select
metislinux to boot.`}),`
`,n(e.pre,{get children(){return n(e.code,{className:"hljs language-bash",get children(){return["$ ",n(e.span,{className:"hljs-built_in",children:"exit"}),` 
$ umount -Rl /mnt
`]}})}}),`
`,n(e.h1,{children:"Setting up services"}),`
`,n(e.p,{get children(){return[`Runit system is a lil' bit different than other, it uses symlinking feature to enable services in the system. after exiting out of the system, go and login into your newly
installed system. if it was an another init system, we could be just enabling the services right after the base install but in `,n(e.code,{children:"runit"}),`,
we actually symlink the services from `,n(e.code,{children:"/etc/runit/sv/<service_name>"})," to ",n(e.code,{children:"/run/runit/service/<service_name>"}),", eg ",n(e.code,{children:"NetworkManager"})]}}),`
`,n(e.p,{get children(){return["To enable ",n(e.code,{children:"NetworkManager"})," we can do the following"]}}),`
`,n(e.pre,{get children(){return n(e.code,{className:"hljs language-bash",get children(){return["$ sudo ",n(e.span,{className:"hljs-built_in",children:"ln"}),` -s /etc/runit/service/NetworkManager /run/runit/service/NetworkManager
`]}})}}),`
`,n(e.p,{children:"It goes similar to any other services"}),`
`,n(e.h2,{children:"Read more"}),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{get children(){return n(e.a,{href:"https://metislinux.org/docs/theinit",children:"The runit init (metislinux docx)"})}}),`
`]}})]}function b(r={}){const{wrapper:e}=Object.assign({},o(),r.components);return e?n(e,a(r,{get children(){return n(s,r)}})):s(r)}export{b as default};
