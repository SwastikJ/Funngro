const easeFunction = "cubic-bezier(.67,.64,1,.03)";
const notbg = document.querySelectorAll(".notbg");
const nav = document.querySelectorAll(".nav");
const topbar = document.querySelectorAll("#topbar");


let timeline = gsap.timeline();

notbg.forEach((el) => {
  timeline.from(el, {
    top: `${el.offsetHeight / 2 }px`,
    opacity: 0,
    ease: easeFunction,
    duration: 0.6
  }, "0")
})

nav.forEach((el) => {
  timeline.from(el, {
    opacity: 0,
    ease: "power4.easeOut",
    duration: 0.6
  }, "0.1")
})

topbar.forEach((el) => {
    timeline.from(el, {
      opacity: 0,
      ease: "power4.easeOut",
      duration: 1
    }, "1.2")
  })

const handleOnMouseMove = e => {
    const{currentTarget: target} = e;
    const rect = target.getBoundingClientRect(),
    x = e.clientX - rect.left,
    y = e.clientY - rect.top;
    target.style.setProperty( "--mouse-x" , `${x}px`);
    target.style.setProperty("--mouse-y" , `${y}px`);
}

for(const card of document.querySelectorAll(".card")) {
    card.onmousemove = e => handleOnMouseMove(e);}

