var controller = new ScrollMagic.Controller();

var horizontalSlide = new TimelineMax()
    .to(".timeline", 1, { x: "-20%" })
    .to(".timeline", 1, { x: "-40%" })
    .to(".timeline", 1, { x: "-60%" })
    .to(".timeline", 1, { x: "-80%" })

new ScrollMagic.Scene({
    triggerElement: ".timeline-container",
    triggerHook: 0.2,
    duration: "200%"
})
    .setPin(".timeline-container")
    .setTween(horizontalSlide)
    .addTo(controller);

ScrollTrigger.defaults({
    markers: false,
    scrub: 1,
});

// let tl = gsap.timeline({
//     scrollTrigger: {
//         markers: false,
//     }
// });

// tl.to("#l0", { y: -250 })
//     .to("#l0-2", { y: -200 })
//     .to("#l1", { y: -175 })
//     .to("#l2", { y: -150 })
//     .to("#l3", { y: -125 })
//     .to("#l4", { y: -100 })
//     .to("#l5", { y: -75 })
//     .to("#l6", { y: -50 });

gsap.to("#l0", {
    scrollTrigger: {
        markers: false,
    },
    y: 300,
});

gsap.to("#l0-2", {
    scrollTrigger: {
        markers: false,
    },
    y: 175,
});

gsap.to("#l1", {
    scrollTrigger: {
        markers: false,
    },
    y: -225,
});

gsap.to("#l2", {
    scrollTrigger: {
        markers: false,
    },
    y: 150,
});

gsap.to("#l3", {
    scrollTrigger: {
        markers: false,
    },
    y: -150,
});

gsap.to("#l4", {
    scrollTrigger: {
        markers: false,
    },
    y: 150,
});

gsap.to("#l5", {
    scrollTrigger: {
        markers: false,
    },
    y: 0,
});

gsap.to("#l6", {
    scrollTrigger: {
        markers: false,
    },
    y: 200,
});

gsap.to(".title-nld-bgRed", {
    scrollTrigger: {
        trigger: ".title-nld-bgRed",
        toggleActions: "restart pause reverse pause",
        start: "top 75%",
        end: "top 30%",
        id: "header",
    },
    x: '50%',
    opacity: 1,
});

gsap.to(".text1-nld-bgRed", {
    scrollTrigger: {
        trigger: ".text1-nld-bgRed",
        toggleActions: "restart pause reverse pause",
        start: "top 75%",
        end: "+=400",
        id: "text",
    },
    x: '40%',
    opacity: 1,
});

gsap.to(".nldessysimg", {
    scrollTrigger: {
        trigger: ".nldessysimg",
        toggleActions: "restart pause reverse pause",
        start: "top 75%",
        end: "+=300",
        id: "img",
    },
    x: '-50%',
    opacity: 1,
});

gsap.to(".line1", {
    scrollTrigger: {
        trigger: ".nldessysimg",
        toggleActions: "restart pause reverse pause",
        start: "top 70%",
        end: "+=800",
        id: "line1",
    },
    attr: {
        "stroke-dasharray": 1000,
        "stroke-dashoffset": 0
    },
});

gsap.to(".line2", {
    scrollTrigger: {
        trigger: ".nldessysimg",
        toggleActions: "restart pause reverse pause",
        start: "top 50%",
        end: "+=600",
        id: "line2",
    },
    attr: {
        "stroke-dasharray": 1000,
        "stroke-dashoffset": 0
    },
});

gsap.to(".text2-nld", {
    scrollTrigger: {
        trigger: ".text2-nld",
        toggleActions: "restart pause reverse pause",
        start: "top 80%",
        end: "+=600",
        id: "textp1",
    },
    y: 0,
    opacity: 1,
});

gsap.to(".text3-nld", {
    scrollTrigger: {
        trigger: ".text3-nld",
        toggleActions: "restart pause reverse pause",
        start: "top 70%",
        end: "+=600",
        id: "textp2",
    },
    y: '-100%',
    opacity: 1,
});

gsap.to(".quote", {
    scrollTrigger: {
        trigger: ".text3-nld",
        toggleActions: "restart pause reverse pause",
        start: "top 60%",
        end: "+=100",
        id: "quote",
    },
    x: '130%',
    y: '200%',
    opacity: 1,
});

gsap.to(".text4-nld", {
    scrollTrigger: {
        trigger: ".text4-nld",
        toggleActions: "restart pause reverse pause",
        start: "top 90%",
        end: "+=600",
        id: "textp3",
    },
    y: '-50%',
    opacity: 1,
});

gsap.to(".line3", {
    scrollTrigger: {
        trigger: ".text3-nld",
        toggleActions: "restart pause reverse pause",
        start: "middle 25%",
        end: "+=1500",
        id: "line3",
        scrub: 1,
    },
    strokeDashoffset: 0,
});

gsap.to(".line4", {
    scrollTrigger: {
        trigger: ".text3-nld",
        toggleActions: "restart pause reverse pause",
        start: "middle 25%",
        end: "+=1400",
        id: "line4",
        scrub: 2,
    },
    strokeDashoffset: 0,
});

gsap.to(".title-pcss", {
    scrollTrigger: {
        trigger: ".title-pcss",
        toggleActions: "restart pause reverse pause",
        start: "top 75%",
        end: "top 30%",
        id: "header",
    },
    x: '25%',
    opacity: 1,
});

gsap.to(".text1-pcss-bgRed", {
    scrollTrigger: {
        trigger: ".text1-pcss-bgRed",
        toggleActions: "restart pause reverse pause",
        start: "top 40%",
        end: "+=200",
        id: "text",
    },
    x: '-100%',
    y: '70%',
    opacity: 1,
});

gsap.to(".pcssimg", {
    scrollTrigger: {
        trigger: ".pcssimg",
        toggleActions: "restart pause reverse pause",
        start: "top 75%",
        end: "+=600",
        id: "img",
    },
    // x: '-50%',
    opacity: 1,
});

gsap.to(".text2-pcss", {
    scrollTrigger: {
        trigger: ".text2-pcss",
        toggleActions: "restart pause reverse pause",
        start: "middle 90%",
        end: "+=400",
        id: "textp1",
    },
    transform: "translateY(400%) translateX(0%)",
    opacity: 1,
});

gsap.to(".text3-pcss", {
    scrollTrigger: {
        trigger: ".text3-pcss",
        toggleActions: "restart pause reverse pause",
        start: "middle 90%",
        end: "+=400",
        id: "textp2",
    },
    transform: "translateY(650%) translateX(0%)",
    opacity: 1,
});

gsap.to(".text4-pcss", {
    scrollTrigger: {
        trigger: ".text4-pcss",
        toggleActions: "restart pause reverse pause",
        start: "top 90%",
        end: "+=400",
        id: "textp3",
    },
    transform: "translateY(650%) translateX(0%)",
    opacity: 1,
});

function updateClock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    var timeString = '⇜' + hours + ':' + minutes + ':' + seconds + ' :)⇝';

    document.getElementById('clock').textContent = timeString;
}

setInterval(updateClock, 1000);