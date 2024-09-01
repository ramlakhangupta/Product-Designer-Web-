const scroll = new LocomotiveScroll({
    el: document.querySelector(`#main`),
    smooth: true
});

function firstPageAnim(){
    var tl = gsap.timeline();
    tl.from("#nav",{
        y: `-10`,
        opacity:0,
        duration: 1.5,
        ease: Expo.easeInOut
    })
    .to(".boundingelem",{
       y: 0,
       ease: Expo.easeInOut,
       duration: 2,
       dealy: -1,
       stagger: .2
    })
    .from("#herofooter",{
        y:-10,
        opacity:0,
        duration: 1.5,
        delay: -1,
        ease: Expo.easeInOut
    })
}

function circleChaptaKaro(){
    var xscale = 1;
    var yscale= 1;

    var cprev = 0;
    var yprev=0;

    window.addEventListener("mousemove",function(dets){
            xprev = dets.clientX;
            yprev = dets.clientY;

           xscale =  gsap.utils.clamp(.8,1.2, dets.clientX - xprev);
           yscale =  gsap.utils.clamp(.8,1.2,dets.clientY - yprev);
            
           
    })
}
circleChaptaKaro(); 

function circleMouseFollower(){
    window.addEventListener("mousemove", function(dets){
      document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px,${dets.clientY}px)`;
    })
}

circleMouseFollower();
firstPageAnim();
