+++
title = "Metis Linux Installation Guide"
description = "How to install metis linux? A complete beginner friendly installation guide for metis linux!"
page_template = "page.html"
+++
This document is a guide for installing <span>Metis Linux</span> using the live system booted from an installation medium made from an official installation image. We currently support command line installation using our custom designed installer.
<!-- more -->

<hr>
<div class="features">
    <p class="installation-guide">
        <h3>Pre-installation</h3>
        <p>
            Note: Metis Linux installation images do not support Secure Boot. You will need to disable Secure Boot to boot the installation medium.
        </p>
        <p>
            Download Metis Linux from our <a href="/download">Download Page</a>.
        </p>
        <p>Flash the Metis OS image in a usb stick. Plug it in your machine and live boot from the USB stick.
        </p>
        <h3>Preparation For Installation</h3>
        <h4>Verify the boot mode</h4>
        <p>To verify the boot mode uefi or legacy, list the efivars directory:</p>
        <code># ls /sys/firmware/efi/efivars</code>
        <p>
            If the command shows the directory without error, then the system is booted in UEFI mode. If the directory does not exist, the system may be booted in BIOS (or CSM) mode. If the system did not boot in the mode you desired, refer to your motherboard's manual.
        </p>
        <p><span>Note1: For UEFI Systems, you must create a boot partition of at least 300 MBs (512 MBs recommended) for grub installation during the installation process. Skip for legacy systems.</span></p>
        <p><span>Note2: Legacy installation only supports limited filesystem types like ext4, xfs. It doesnot support btrfs file system.</span></p>
        <h4>Connect to the internet</h4>
        <p><li>
            To set up a network connection in the live environment, go through the following steps: 
        </li></p>
        <code># ip link</code>
        <p>
            <li>
                For wireless and WWAN, make sure the card is not blocked with <a href="https://wiki.archlinux.org/title/Rfkill" target="_blank" rel="noopener noreferrer"></a> rfkill.
            </li>
        </p>
        <p><li>Connect to the network:
            <ul>Ethernet—plug in the cable.</ul>
            <ul>You can either use <a href="https://man.archlinux.org/man/nmcli.1.en" target="_blank" rel="noopener noreferrer">nmcli</a> or <a href="https://man.archlinux.org/man/nmtui.1" target="_blank" rel="noopener noreferrer">nmtui</a> to connect to the wifi networks.</ul>
        </li></p>
        <p><li>The connection may be verified with ping: </li></p>
        <code># ping -c 3 metislinux.org</code>
        <p></p>
        <h4>Installation Process Using metis-sideload</h4>
        <p>Execute the command metis-sideload and follow the instructions: </p>
        <code># metis-sideload</code>
        <h4>Login after successful installation</h4>
        <p>After completing installation, select xinitrc in the login screen and then enter your username and password to login.</p>
        <p><img src="/assets/images/pages/installation-guide/metis-login-screen.png" alt="selecting-xinitrc-in-metis-linux-login-screen"></p>
        <h5>Here is a installation tutorial video made by one of the metis linux user!</h5>
        <div class="tutorial">
            <iframe src="https://www.youtube-nocookie.com/embed/3nPmJmD8FX8" title="YouTube video player" frameborder="0" class="tutorial-video"></iframe>
        </div>
    </p>
</div>
<hr>
<div class="home">
    <center>
        <a href="/" title="Metis Home">Back</a>
        <a href="/key-bindings" title="Default Key Bindings in Metis">Key-Bindings</a>
    </center>
</div>