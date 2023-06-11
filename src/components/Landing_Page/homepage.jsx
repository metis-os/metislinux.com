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
		img.src ="/slideshow/"+imageUrls[current];
		current = (current+1) % imageUrls.length;
                console.log(current);
	},4000)

}//slideshow


createEffect(slideshow)

	
  return (
    <div id="homepage">

			<div id="wrapper">

					<header id="header" class="alt">
						<span class="logo"><img height="170" src={"/logo.gif"} alt="" /></span>
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
          <p>
          MetisLinux is a Linux distribution built on top of Artix Linux. It utilizes lightweight window managers and applications, resulting in exceptional speed and performance. With pre-configured settings, MetisLinux offers a seamless out-of-the-box window manager experience.
          </p>
          <ul class="actions">
          <li>
          <a href="/docs/quickstart/install" class="linkStyles">
          <div class="button">Install</div>
          </a>
          </li>
          </ul>
          </div>
          <span class="image">
          <img height="100%" id="slideshow" src={base+"/slideshow/1.png"} alt="" />
          </span>
          </div>
          </section>
<section id="first" class="main special">
  <header class="major">
    <h2>Features</h2>
  </header>
  <ul class="features">
    <li>
      <span class="icon solid major style1 fa-clone"></span>
      <h3>Tiling Windows</h3>
      <p>
        MetisLinux is a minimal and lightweight distribution that utilizes window managers and lightweight applications. It runs efficiently with memory usage as low as 500MB.
      </p>
    </li>
    <li>
      <span class="icon solid major style3 fa-bolt"></span>
      <h3>Stunning Visuals</h3>
      <p>
        MetisLinux boasts a clean and minimal aesthetic with flat and pastel colors. The UI elements exhibit consistent design, and a variety of themes are available, creating a stunning visual experience.
      </p>
    </li>
    <li>
      <span class="icon solid major style5 fa-cog"></span>
      <h3>Powerful Performance</h3>
      <p>
        Equipped with the latest software and built-in support for AUR (Arch User Repository), MetisLinux empowers you to accomplish any task on your Linux PC. Its lightweight nature ensures optimal performance.
      </p>
    </li>
  </ul>
</section>
</div>

<footer id="footer">
  <section>
    <h2>Donate</h2>
    <p>If you are enjoying MetisLinux, please consider supporting us. Your donation will help MetisLinux improve, grow, and ensure its maintenance, updates, and continuous development.</p>
    <ul class="actions">
      <li><a href="/docs/donate" class="button">Donate Now</a></li>
    </ul>
  </section>
  <section>
    <h2>Important Links</h2>
    <p>Here are some important links related to MetisLinux:</p>
    <ul class="icons">
      <li><a href="https://github.com/metis-os" target="_blank" class="icon brands fa-github alt"><span class="label">MetisLinux GitHub</span></a></li>
      <li><a href="https://github.com/metis-os/metis-repo" target="_blank" class="icon solid fa-code alt"><span class="label">Repository</span></a></li>
      <li><a href="https://github.com/metis-os/skeleton" target="_blank" class="icon solid fa-folder-open alt"><span class="label">Skeleton</span></a></li>
      <li><a href="https://github.com/metis-os/metislinux/issues" target="_blank" class="icon solid fa-bug alt"><span class="label">Issues</span></a></li>
      <li><a href="https://github.com/pwnwriter" target="_blank" class="icon solid fa-user alt"><span class="label">PwnWriter's GitHub</span></a></li>
    </ul>
  </section>
  <h2 class="copyright">
    <script>
      document.write(new Date().getFullYear());
    </script>
          &nbsp;
    &copy; METIS Linux  // <a href="https://github.com/pwnwriter" target="_blank">PwnWriter</a>
  </h2>
</footer>

</div>


</div>

  );
}
export default Homepage;
export {base}
