function locomotiveAnimation(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});


// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
locomotiveAnimation();


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
    t1.from("#hero1 h1, #page2",{
        opacity:0,

    },"-=1.2");

}
loadingAnimation();

function customCursorAnimation(){
    Shery.mouseFollower({
    skew: true,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
    });
    // make magnet effect on nav using shery.js
    // Shery.makeMagnet("#nav-part2 h4");

    Shery.makeMagnet("#nav-part2 h4" /* Element to target.*/, {
    //Parameters are optional.
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
    });

    var video_container = document.querySelector("#video_container");
    var video = document.querySelector("#video_container video");
    video_container.addEventListener("mouseenter",function(){
        video_container.addEventListener("mousemove",function(dets){
            gsap.to(".mouseFollower",{
                opacity:0,
            })
            gsap.to("#video_cursor",{
                left:dets.x - 440,
                y:dets.y - 190,
            });
        });
    });
    video_container.addEventListener("mouseleave",function(){
        gsap.to(".mouseFollower",{
            opacity:1,
        })
        gsap.to("#video_cursor",{
            left:"70%",
            top:"-15%"
        });
    });

    var flag = 0;
    video_container.addEventListener("click",function(){
        if(flag == 0){
        video.play();
        video.style.opacity="1";
        document.querySelector("#video_cursor").innerHTML = `<i class="ri-pause-mini-fill"></i>`;
        gsap.to("#video_cursor",{
            scale:0.5,
        })
        flag = 1
    }else{
        video.pause();
        video.style.opacity="0";
        document.querySelector("#video_cursor").innerHTML = `<i class="ri-play-mini-fill"></i>`;
        gsap.to("#video_cursor",{
            scale:1,
        })
        flag = 0

       }
    })
}
customCursorAnimation();

function sheryAnimation(){
    Shery.imageEffect(".image-div",{
        style:5,
        config:{"a":{"value":2,"range":[0,30]},"b":{"value":0.66,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.724163774061218},"ignoreShapeAspect":{"value":false},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.58,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":false},"onMouse":{"value":1},"noise_speed":{"value":1.07,"range":[0,10]},"metaball":{"value":0.49,"range":[0,2]},"discard_threshold":{"value":0.48,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":9.16,"range":[0,100]}},
        gooey:true
    })
    
}
sheryAnimation();

// function textillatejs(){
//     var h1 = document.querySelector("#footer h1");
//     h1.addEventListener("mouseover",function(){
//         gsap.from("#footer h1",{
//         opacity:1,
//         delay:0.5,
//         duration:1,
//         onStart:function(){
//             $('#footer h1').textillate({ in: { effect: 'rollIn' } });
//         },
//      })
//     })
// }
// textillatejs();

function flag(){
    document.addEventListener("mouseover",function(dets){
        gsap.to("#flag",{
            x:dets.x,
            y:dets.y
        })
    })
    document.querySelector('#hero3').addEventListener("mouseenter",function(){
        gsap.to("#flag",{
            opacity:1
        })
    })
    document.querySelector('#hero3').addEventListener("mouseleave",function(){
        gsap.to("#flag",{
            opacity:0
        })
    })
}
flag();

function footerAnimation() {

  var clutter = ""
  var clutter2 = ""
  document.querySelector("#footer h1").textContent.split("").forEach(function (elem) {
    clutter += `<span>${elem}</span>`
  })
  document.querySelector("#footer h1").innerHTML = clutter
  document.querySelector("#footer h2").textContent.split("").forEach(function (elem) {
    clutter2 += `<span>${elem}</span>`
  })
  document.querySelector("#footer h2").innerHTML = clutter2


  document.querySelector("#footer-text").addEventListener("mouseenter", function () {
    gsap.to("#footer h1 span", {
      opacity: 0,
      stagger: 0.05
    })
    gsap.to("#footer h2 span", {
      delay: 0.35,
      opacity: 1,
      stagger: 0.1
    })
  })
  document.querySelector("#footer-text").addEventListener("mouseleave", function () {
    gsap.to("#footer h1 span", {
      opacity: 1,
      stagger: 0.1,
      delay: 0.35,

    })
    gsap.to("#footer h2 span", {
      opacity: 0,
      stagger: 0.05
    })
  })
}
footerAnimation();