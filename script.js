
let tl = gsap.timeline()

gsap.from('.page1', {
    opacity:0,
    duration:5
})

tl.from('.logo-name',{
    y:-50,
    opacity:0,
    duration:0.5
})

tl.from('.nav-right ul li',{
    y:-20,
    opacity:0,
    duration:0.5,
    stagger:0.2
})


tl.from('.page1 h3',{
    y:30,
    duration:1,
    opacity:0
})

gsap.from('.page2', {
    y: 100,
    duration: 3,
    opacity:0,
    scrollTrigger: {
        trigger:'.page2',
        scroller: 'body',
        // markers: true,
        start: 'top 80%'
    }
})

gsap.from('.page3 img', {
    y:50,
    duration:0.5,
    opacity:0,
    scrollTrigger: {
        trigger:'.page3 img',
        scroller: 'body',
        // markers: true,
        start: 'top 80%'
    },
    stagger:0.3
})