document.addEventListener('DOMContentLoaded', function() {
    //typewriter effect
  var typewriter = document.getElementById('typewriter');
  
  var typewriter = new Typewriter(typewriter, {
      loop: true
  });
  typewriter.typeString('Chilling?')
      .pauseFor(1500)
      .typeString('Nah')
      .pauseFor(1500)
      .deleteAll()
      .typeString('Learning ,Creating, Designing, Solving problem...')
      .pauseFor(2500)
      .typeString('<strong>I can do this All day</strong>')
      .pauseFor(2500)
      .start();

    //text animation
    gsap.registerPlugin(ScrollTrigger);

    const tl =gsap.timeline({defaults:{ease:'power1.out'}})
        //intro
       tl.fromTo('.hide-icon',{opacity:0},{opacity:1,duration:2})
       tl.fromTo('.hide-text',{opacity:0},{opacity:1,duration:1})
       tl.fromTo('.hide',{scale:1,opacity:1}, {scale:4,opacity:0, duration: 2, ease: "none"})

       tl.to ('.intro',{y:"-100%",ease:"bounce.out",duration:1},"-=0.5")
            //navbar
        tl.fromTo('.navbar',{opacity:0},{opacity:1,duration:1})
            //carousel-caption
        tl.fromTo('.carousel-caption',{opacity:0},{opacity:1,duration:0.5})

    if(window.innerWidth >800)
    {
 
        //about
        gsap.from('.person', {
            scrollTrigger: {
                trigger:'.person',
                toggleActions: "restart",
                start: "5px 50%",
                end:"+=100px",
                scrub: 1,
            },
            x: '100vh',
            rotation:360,
            opacity: 0,
            duration: 2
        });
        gsap.from('.abouttext', {
            scrollTrigger: {
                trigger:'.abouttext',
                toggleActions: "restart",
                start: "5px 50%",
                end:"+=100px",
                scrub: 1,
            },
            x: '-100vh',
            rotation:360,
            opacity: 0,
            duration: 2
        });
        //skill
        gsap.from('.software', {
            scrollTrigger: {
                trigger:'.software',
                toggleActions: "restart",
                start: "10px 50%",
                end:"+=100px",
                scrub: 1,
            },
            x: '-100vh',
            opacity: 0,
            duration: 2
        });
        gsap.from('.language', {
            scrollTrigger: {
                trigger:'.language',
                toggleActions: "restart",
                start: "30px 50%",
                end:"+=100px",
                scrub: 1,
            },
            x: '-100vh',
            opacity: 0,
            duration: 2,
        });
        gsap.from('.os', {
            scrollTrigger: {
                trigger:'.os',
                toggleActions: "restart",
                start: "30px 50%",
                end:"+=100px",
                scrub: 1,
            },
            x: '100vh',
            opacity: 0,
            duration: 2
        });
        gsap.from('.softskill', {
            scrollTrigger: {
                trigger:'.softskill',
                toggleActions: "restart",
                start: "10px 50%",
                end:"+=100px",
                scrub: 1,
            },
            x: '100vh',
            opacity: 0,
            duration: 2,
        });
        //project
        gsap.from('.pj1', {
            scrollTrigger: {
                trigger:'.pj1',
                toggleActions: "restart",
                start: "10px 50%",
                end:"+=100px",
                scrub: 1,
            },
            y: '-10vh',
            opacity: 0,
            duration: 2,
        });
        gsap.from('.pj2', {
            scrollTrigger: {
                trigger:'.pj2',
                toggleActions: "restart",
                start: "10px 70%",
                end:"+=100px",
                scrub: 1,
            },
            y: '10vh',
            opacity: 0,
            duration: 2,
        });
        gsap.from('.pj3', {
            scrollTrigger: {
                trigger:'.pj3',
                toggleActions: "restart",
                start: "10px 50%",
                end:"+=100px",
                scrub: 1,
            },
            y: '-10vh',
            opacity: 0,
            duration: 2,
        });
    }


  });