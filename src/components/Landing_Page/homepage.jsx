import { A } from "@solidjs/router";

// import styles from "../../assets/css/main.module.css"
import {  createEffect } from "solid-js";

import  "../../css/main.css"
import base from "../../configs"

function Homepage(){

  	const linkStyles = "vertCentered bg-onedark w-fit p-3 pl-10 pr-10 px-4 rounded-6";
	
	function slideshow(){
	var imageUrls = ["1.png","3.png","4.png","5.png"]
	var img = document.getElementById("slideshow")
	// img.src ="slideshow/"+ imageUrls[0]
	let current = 1;
	for(let i=1;i<imageUrls.length;i++){
		const tempImg = new Image();
		tempImg.src = imageUrls[i];
	}
	
	setInterval(()=>{
		img.src =base+"/slideshow/"+imageUrls[current];
		current = (current+1) % imageUrls.length;
	},4000)

}//slideshow


createEffect(slideshow)

	
  return (
    <div id="homepage">

			<div id="wrapper">

					<header id="header" class="alt">
						<span class="logo"><img height="170" src={base+"/logo.gif"} alt="" /></span>
						<h1>METIS Linux</h1>
						<p> Sleek. Potent and beautiful Runit-driven linux distribution </p>
					</header>

			
					<div id="main">

							<section id="intro" class="main">
								<div class="spotlight">
									<div class="content">
										<header class="major">
											<h2>What is MetisLinux?</h2>
										</header>
										<p>MetisLinux is just another Linux distribution, made on top of Artix Linux.
										It uses window managers and lightweight applications, which makes it super fast.
										With pre-configured settings, Metislinux provides you the best out of the box window manager experience.</p>
										<ul class="actions">
											 <A href="/docs/quickstart/install" class={linkStyles}>
        <div class="button"> Install </div>
      </A>
										</ul>
									</div>
									<span class="image"><img height={"100%"} id="slideshow" src={base+"/slideshow/1.png"} alt="" /></span>
								</div>
							</section>

							<section id="first" class="main special">
								<header class="major">
									<h2>Features</h2>
								</header>
								<ul class="features">
									<li>
										<span class="icon solid major style1 fa-clone"></span>
										<h3>Tiling windows</h3>
										<p>MetisLinux is very minimal and lightweight.
										It can run under 500Mb of memory as it only uses window managers and some lightweight applications.</p>
									</li>
									<li>
										<span class="icon solid major style3 fa-bolt"></span>
										<h3>Stunning</h3>
										<p>Flat and pastel colors, the consistency among all the UI elements,
										And various themes make Metislinux look very clean, minimal and Stunning.</p>
									</li>
									<li>
										<span class="icon solid major style5 fa-cog"></span>
										<h3>Powerful</h3>
										<p>With latest softwares and built-in support for AUR, and being lightweight,
										MetisLinux gives you the power to do whatever you want on your Linux PC.</p>
									</li>
								</ul>
							</section>

							<section id="second" class="main special" >
								<header class="major">
									<h2>Communities</h2>
								</header>
								<p id="community">Join the official communities of MetisLinux, A bunch of friendly places to discuss issues, share experience, etc.</p>
								<ul class="statistics">
									<li class="style1">
										<a href="https://github.com/metis-os" target="_blank"><span class="icon brands fa-github"></span>
										<strong>Github</strong> Repo</a>
									</li>
									<li class="style2">
										<a href="https://discord.com/metis" target="_blank"><span class="icon brands fa-discord"></span>
										<strong>Discord</strong> Server</a>
									</li>
									<li class="style3">
										<a href="https://t.me/metislinux" target="_blank"><span class="icon brands fa-telegram"></span>
										<strong>Telegram</strong> Group</a>
									</li>
									<li class="style4">
										<a href="https://www.youtube.com/@metislinux" target="_blank"><span class="icon  brands fa-youtube"></span>
										<strong>Youtube</strong> Channel</a>
									</li>
									
								</ul>
							</section>

						

					</div>

					<footer id="footer">
						<section>
							<h2>Donate</h2>
							<p>If you are enjoying MetisLinux, Please consider supporting us.
							Your donation will help Metis to improve and grow and your support will keep it maintained, updated and alive.</p>
							<ul class="actions">
								<li><A href="/docs/donate" class="button">Donate Now</A></li>
							</ul>
						</section>
						<section>
							<h2>Important Links</h2>
							<p>Links to Metislinux's github page, ISO source, Releases, Issues, and my github profile respectively. Make sure you hit the star on Metislinux repositories.</p>
							<ul class="icons">
								{/* <i class="fa-github"></i> */}
								<li><a href="https://github.com/metis-os" target="_blank" class="icon brands fa-github alt"><span class="label">MetisLinux</span></a></li>
								<li><a href="https://github.com/metis-os/metis-repo" target="_blank" class="icon solid fa-code alt"><span class="label">Repository</span></a></li>
								<li><a href="https://github.com/metis-os/skeleton" target="_blank" class="icon solid fa-folder-open alt"><span class="label">Skelton</span></a></li>
								<li><a href="https://github.com/metis-os/metislinux/issues" target="_blank" class="icon solid fa-bug alt"><span class="label">Issues</span></a></li>
								<li><a href="https://github.com/pwnwriter" target="_blank" class="icon solid fa-user alt"><span class="label">pwnwriter</span></a></li>
							</ul>
						</section>
						<h2 class="copyright"> 2023 METIS Linux (c) // <a href="https://github.com/pwnwriter" target="_blank">PwnWriter</a></h2>
					</footer>

			</div>

	
	</div>
  );
}

export default Homepage;
export {base}
