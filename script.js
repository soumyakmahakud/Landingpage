
    gsap.to(".imageContainer",{
    
    ease:Expo.easeInOut,
    width:"100%",
    duration:2,
    stagger: 2,
    repeat:10,
    })

    gsap.to(".text h1",{
    
        ease:Expo.easeInOut,
        width:"100%",
        duration:2,
        stagger: 2,
        repeat:10,
        top: 0,
        })
        gsap.to(".text h1",{
           delay: 2,
            ease:Expo.easeInOut,
            width:"100%",
            duration:2,
            stagger: 2,
            top: "-100%",
            repeat:10,
            })
