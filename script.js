
function loadingAnimation(){
    var t1 = gsap.timeline();;
    t1.from(".line h1, .line h2",{
        y:150,
        stagger:0.3,
        opacity:0,
        duration:0.6,
        delay:0.5
    })
    //0-100 timer
    t1.from("#line1-part1, .line h2",{
        opacity:0,
        duration:1.2,
        onStart:function(){
            var h5timer = document.querySelector("#line1-part1 h5");
            var grow = 0;
            setInterval(function(){
                if(grow<100){
                    h5timer.innerHTML = grow++
                }
                else{
                    h5timer.innerHTML=grow
                }
            },35);
        },
    });
    //down opacity loader
    t1.to("#loader",{
        opacity: 0,
        duration:0.3,
        delay:3.8
    })
    //remove loader
    var load = document.querySelector("#loader")
    setTimeout(function(){
        load.style.top = "-100%"
    },6500)

    //for hero animation

    t1.from("nav",{
        opacity:0,
        duration:0.8
    })
    t1.from("#hero1 h1, #hero2 h1, #hero3 h2, #hero4 h1",{
        y:120,
        stagger:0.2
    })
}
loadingAnimation();

function customCursor(){
    document.addEventListener("mousemove",function(dets){
        gsap.to("#cursor",{
            left:dets.x,
            top:dets.y
        })
    })
}
customCursor();
// make magnet effect on nav using shery.js
Shery.makeMagnet("#nav-part2 h4" /* Element to target.*/, {
  //Parameters are optional.
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 0.5,
});