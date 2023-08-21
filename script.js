let tl = gsap.timeline();

tl.from('.background .viewport_header .nav', {
    y: -50,
    opacity: 0,
    duration: 1.5,
    stagger: true
})

tl.from('.background .viewport_header .content .heading', {
    x: -200,
    duration: 2,
    opacity: 0,
    color: 'red'
})

tl.from('.background .viewport_header .content .common_para', {
    y: 100,
    duration: 1,
    opacity: 0,
    color: 'red'
})

tl.from('.background .viewport_header1 .main_box .leftsides', {
    x: -100,
    duration: 1.2,
    opacity: 0,
    scale: 0,
    scrollTrigger: {
        trigger: ".background .viewport_header1 .main_box",
        scroller: "body",
        start: "top 60%",
        end: "top 10%",
        scrub: 5,
    }
});

tl.from('.background .viewport_header1 .main_box .rightsides .heading_1', {
    y: 100,
    duration: 5,
    opacity: 0,
    scrollTrigger: {
        trigger: ".background .viewport_header1 .main_box",
        scroller: "body",
        start: "top 60%",
        end: "top 10%",
        scrub: 2,
    }
})

tl.from('.background .viewport_header1 .main_box .rightsides .s-2-p', {
    y: 50,
    duration: 5,
    opacity: 0,
    scrollTrigger: {
        trigger: ".background .viewport_header1 .main_box",
        scroller: "body",
        start: "top 10%",
        end: "top -10%",
        scrub: 2,
    }
})

tl.from('.background .viewport_header1 .main_box .rightsides .my-btn-2', {
    y: 50,
    duration: 1,
    opacity: 0,
    scrollTrigger: {
        trigger: ".background .viewport_header1 .main_box",
        scroller: "body",
        start: "top -10%",
        end: "top -20%",
        scrub: 2,
    }
})

tl.from('.background .viewport_header .third_section .third_box .h-3', {
    y: 100,
    duration: 1,
    opacity: 0,
    stagger: 0.3,
    scrollTrigger: {
        trigger: ".background .viewport_header .third_section",
        scroller: "body",
        start: "top 30%",
        end: "top 30%",
        scrub: 5,
    }
})

tl.from('.background .viewport_header .third_section .cards-1 .cards_list', {
    x: -100,
    duration: .5,
    opacity: 0,
    stagger: 1,
    scrollTrigger: {
        trigger: ".background .viewport_header .third_section",
        scroller: "body",
        start: "top 0%",
        end: "top -5%",
        scrub: 5,
        pin: true
    }
})

tl.from('.background .viewport_header .third_section .cards-2 .cards_list', {
    x: -100,
    duration: .5,
    opacity: 0,
    stagger: 1,
    scrollTrigger: {
        trigger: ".background .viewport_header .third_section .cards-1",
        scroller: "body",
        start: "top -20%",
        end: "top -30%",
        scrub: 5,
    }
})

tl.from('.background .viewport_header1 .dummy-m .leftsides_1 .heading_1', {
    y: 100,
    duration: .5,
    opacity: 0,
    scrollTrigger: {
        trigger: ".background .viewport_header1 .dummy-m",
        scroller: "body",
        start: "top 10%",
        end: "top 0%",
        scrub: 5,
        pin: true
    }
})

tl.from('.background .viewport_header1 .dummy-m .leftsides_1 .common_para1', {
    y: 100,
    duration: 5,
    opacity: 0,
    scrollTrigger: {
        trigger: ".background .viewport_header1 .dummy-m .leftsides_1",
        scroller: "body",
        start: "top 10%",
        end: "top 0%",
        scrub: 5,
    }
})

tl.from('.background .viewport_header1 .dummy-m .leftsides_1 .common_btn1', {
    y: 100,
    duration: 1,
    opacity: 0,
    scrollTrigger: {
        trigger: ".background .viewport_header1 .dummy-m .leftsides_1 .common_para1",
        scroller: "body",
        start: "top 30%",
        end: "top 20%",
        scrub: 5,
    }
})

tl.from('.background .viewport_header1 .dummy-m .rightsides_1', {
    y: 100,
    duration: 1,
    opacity: 0,
    scale: 0,
    scrollTrigger: {
        trigger: ".background .viewport_header1 .dummy-m",
        scroller: "body",
        start: "top 0%",
        end: "top -10%",
        scrub: 5,
    }
})

tl.from('.background .viewport_header1 .fifth_section .heading_5', {
    y: 50,
    duration: 1,
    opacity: 0,
    scale: 0,
    scrollTrigger: {
        trigger: ".background .viewport_header1 .fouth_section .c",
        scroller: "body",
        start: "top 0%",
        end: "top 0%",
        scrub: 5,
    }
})

tl.from('.background .viewport_header1 .fifth_section .common_para5', {
    y: 50,
    duration: 1,
    opacity: 0,
    scale: 0,
    scrollTrigger: {
        trigger: ".background .viewport_header1 .fouth_section .c",
        scroller: "body",
        start: "top 0%",
        end: "top 0%",
        scrub: 5,
    }
})

tl.from('.background .viewport_header1 .fifth_section .mysterybox_images', {
    y: 50,
    duration: 1,
    rotation: 360,
    opacity: 0,
    scale: 0,
    scrollTrigger: {
        trigger: ".background .viewport_header1 .fifth_section",
        scroller: "body",
        start: "top 0%",
        end: "top 0%",
        scrub: 5,
    }
})

tl.from('.background .viewport_header1 .six_section .six_box', {
    y: 100,
    duration: 1,
    opacity: 0,
    scale:0,
    scrollTrigger: {
        trigger: ".background .viewport_header1 .six_section .six_box",
        scroller: "body",
        start: "top 90%",
        end: "top 40%",
        scrub: 5,
    }
})

tl.from('.background .viewport_footer .footer_section .logo', {
    y: 100,
    duration: 1,
    opacity: 0,
    scale:0,
    scrollTrigger: {
        trigger: ".background .viewport_footer .footer_section .logo",
        scroller: "body",
        start: "top 90%",
        end: "top 40%",
        scrub: 5,
    }
})

tl.from('.background .viewport_footer .footer_section .common_para9', {
    y: 100,
    duration: 1,
    opacity: 0,
    scale:0,
    scrollTrigger: {
        trigger: ".background .viewport_footer .footer_section .logo",
        scroller: "body",
        start: "top 90%",
        end: "top 80%",
        scrub: 5,
    }
})

tl.from('.background .viewport_footer .footer_section .socials_link img', {
    y: 100,
    duration: 1,
    opacity: 0,
    scale:0,
    stagger:.5,
    scrollTrigger: {
        trigger: ".background .viewport_footer .footer_section .socials_link",
        scroller: "body",
        start: "top 90%",
        end: "top 88%",
        scrub: 5,
    }
})

tl.from('.background .viewport_footer .f', {
    y: 50,
    duration: 1,
    opacity: 0,
    scale:0,
    stagger:.5,
    scrollTrigger: {
        trigger: ".background .viewport_footer .footer_section .socials_link",
        scroller: "body",
        start: "top 100%",
        end: "top 100%",
        scrub: 5,
        markers: true,
    }
})