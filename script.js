




var t1 = gsap.timeline();;
t1.from(".line h1, .line h2",{
    y:150,
    stagger:0.3,
    opacity:0,
    duration:0.6,
    delay:0.5
})
// t1.from("#line1-part1, .line h2",{
//     opacity:0,
//     duration:0.4,

// })

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
    delay:3.5
})
//remove loader
var load = document.querySelector("#loader")
setTimeout(function(){
    load.style.top = "-100%"
},6500)