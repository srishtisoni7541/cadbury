
const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)


function loaderAnimation(){
  
var tl=gsap.timeline()
tl.to(' .container .loaderimg4',{
  x:'20vw',
  delay:.5,
},'same')

tl.to(' .container .loaderimg3',{
  x:'25vw',
  delay:.5,
},'same')
tl.to(' .container .loaderimg3',{
  x:'45vw',
  delay:1,
},'same1')


tl.to(' .container .loaderimg2',{
  x:'31vw',

  delay:1,
  
},'same1')


tl.to(' .container .loaderimg2',{
  x:'51vw',
  delay:1,
},'same2')


tl.to(' .container .loaderimg1',{
  x:'45vw',

  delay:1,
  
},'same2')
tl.to('.film',{
  opacity:0,
  duration:.5,
  scale:0,
})


tl.to('.loadertext .loaderimg',{
  y:-300,
  duration:.5,
  zIndex:999,
  ease:'expo.Inout'
})

tl.to('.loader .loaderimgcontainersimg',{
  y:-130,
  duration:.7,
  ease:'expo.Inout',
  transform:'rotate(-20deg)',
})

tl.to('.loader',{
  opacity:0,
  duration:.7,
  ease:'expo.Inout',
  delay:.5,
})
}


loaderAnimation();


function page2Animation(){
  var tl2=gsap.timeline({
    scrollTrigger:{
      trigger:'.page2',
      scroll:'body',
      scrub:true,
      // start:'top 50%',
      // pin:true,
    }
  })
  tl2.to('.page2left .h21left',{
    x:-50,
    duration:.1,
   
  },'same')

  tl2.to('.page2right .h21right',{
    x:50,
    duration:.1,

  },'same')


  tl2.to('.page2left .h22left',{
    x:-50,
    duration:.1,
   
  },'same1')

  tl2.to('.page2right .h22right',{
    x:50,
    duration:.1

  },'same1')
  tl2.to('.page2left .h21left',{
    x:0,
    duration:.1,
   
  },'same1')

  tl2.to('.page2right .h21right',{
    x:0,
    duration:.1

  },'same1')




  tl2.to('.page2left .h23left',{
    x:-50,
    duration:.1,
   
  },'same2')

  tl2.to('.page2right .h23right',{
    x:50,
    duration:.1

  },'same2')
  tl2.to('.page2left .h22left',{
    x:0,
    duration:.1,
   
  },'same2')

  tl2.to('.page2right .h22right',{
    x:0,
    duration:.1,

  },'same2')





  

  tl2.to('.page2left .h24left',{
    x:-50,
    duration:.1,
   
  },'same3')

  tl2.to('.page2right .h24right',{
    x:50,
    duration:.1,

  },'same3')
  tl2.to('.page2left .h23left',{
    x:0,
    duration:.1,
   
  },'same3')

  tl2.to('.page2right .h23right',{
    x:0,
    duration:.1,

  },'same3')




  

  tl2.to('.page2left .h25left',{
    x:-50,
    duration:.1,
   
  },'same4')

  tl2.to('.page2right .h25right',{
    x:50,
    duration:.1,

  },'same4')
  tl2.to('.page2left .h24left',{
    x:0,
    duration:.1,
   
  },'same4')

  tl2.to('.page2right .h24right',{
    x:0,
    duration:.1,

  },'same4')





  

  tl2.to('.page2left .h26left',{
    x:-50,
    duration:.1,
   
  },'same5')

  tl2.to('.page2right .h26right',{
    x:50,
    duration:.1,

  },'same5')
  tl2.to('.page2left .h25left',{
    x:0,
    duration:.1,
   
  },'same5')

  tl2.to('.page2right .h25right',{
    x:0,
    duration:.1,

  },'same5')




  
  tl2.to('.page2left .h27left',{
    x:-50,
    duration:.1,
   
  },'same6')

  tl2.to('.page2right .h27right',{
    x:50,
    duration:.1,

  },'same6')
  tl2.to('.page2left .h26left',{
    x:0,
    duration:.1,
   
  },'same6')

  tl2.to('.page2right .h26right',{
    x:0,
    duration:.1,

  },'same6')


  
  
  tl2.to('.page2left .h28left',{
    x:-50,
    duration:.1,
   
  },'same7')

  tl2.to('.page2right .h28right',{
    x:50,
    duration:.1,

  },'same7')
  tl2.to('.page2left .h27left',{
    x:0,
    duration:.1,
   
  },'same7')

  tl2.to('.page2right .h27right',{
    x:0,
    duration:.1,

  },'same7')
  
}

page2Animation();

function page4Animation(){
  var tl4=gsap.timeline(
 {
  scrollTrigger:{
    trigger:'.page4',
    scroller:'body',
  }
 }
  );
  tl4.to('.container4',{
    x:'-60vw',
    duration:1,
    ease:'expo.Inout',
    delay:1,
  },'same')
 
 tl4.to('.page4 h1',{
  
  color:'white',
 duration:1,
 delay:1,
},'same')
  tl4.to('#one',{
    rotate:'-13deg',
    scale:.6,
    ease:'expo.Inout',
    delay:1,
    duration:1,
  },'same')
  tl4.to('#two',{
    rotate:'13deg',
    scale:1.1,
    ease:'expo.Inout',
    delay:1,
    duration:1,
  },'same')
 
  tl4.to('.container4',{
  
    ease:'expo.Inout',
  delay:1,
},'same')

  tl4.to('.container4',{
    x:'-110vw',
    duration:1,
    ease:'expo.Inout',
  delay:1,
  },'same2')
  tl4.to('#two',{
    rotate:'-4deg',
    scale:.6,
    ease:'expo.Inout',
    delay:1,
    duration:1,
  },'same2')
  tl4.to('#three',{
    rotate:'8deg',
    scale:1.1,
    ease:'expo.Inout',
    delay:1,
    duration:1,
  },'same2')
 
  
  tl4.to('#three',{
    rotate:'-13deg',
    scale:.6,
    ease:'expo.Inout',
    delay:1,
    duration:1,
  },'same3')
  tl4.to('.container4',{
    x:'-161vw',
    duration:1,
    ease:'expo.Inout',
    delay:1
  },'same3')
  
  tl4.to('#four',{
    rotate:'13deg',
    scale:'1.2',

    ease:'expo.Inout',
    delay:1,
    duration:1,
  },'same3')
 
    tl4.to('.page4 h1',{
      color:'#f7f2f5',
      duration:1,
      delay:1,
    },'same3')
  
}
page4Animation();

function page4Animation2(){

document.addEventListener("DOMContentLoaded", () => {
  const boxes = document.querySelectorAll('.page5_container_box');

  function applyRandomRotation() {
      boxes.forEach(box => {
          const randomRotation = Math.random() * 20 - 10; // Generates a random number between -10 and 10
          box.style.transform = `rotate(${randomRotation}deg)`;
      });
  }

  applyRandomRotation();

  setInterval(applyRandomRotation, 3000); // 3000 milliseconds = 3 seconds
});
}
page4Animation2()
function page5Animation1(){
  var t = gsap.timeline();

var h1 = document.querySelector(".page5_text h1");
var texh1 = h1.textContent;
var splited = texh1.split("");
console.log(splited);
var clutter = "";
splited.forEach(function (elem) {
  clutter += `<span class='inline-block'>${elem === ' ' ? `&nbsp;` : elem}</span>`;
  console.log(clutter);

})
h1.innerHTML = clutter;
t.to(".page5_text h1>span", {
  y: -70,
  // opacity: 0,
  duration: .3,
  delay:.1,
  stagger: 0.1
})
}
page5Animation1();



function page5Animation() {
const container = document.querySelector('.container4');

function handleMouseMove(event) {
  const { clientX: x, clientY: y } = event;
  const { innerWidth: width, innerHeight: height } = window;
  const rotateY = ((x / width) * 2) - 1; // Very subtle 3D tilt (1 degree)
  const rotateX = ((y / height) * -2) + 1; // Very subtle 3D tilt (1 degree)

  gsap.to(container, {
    rotationY: rotateY,
    rotationX: rotateX,
    ease: 'power4.out', // Smooth easing
    duration: 1, // Smooth transition
    transformPerspective: 800,
    transformOrigin: 'center center'
  });
}

window.addEventListener('mousemove', handleMouseMove);
}

page5Animation();



function page7Animation(){
  gsap.to('.text7container h1',{
    y:-180,
    duration:.8,
    ease:'expo.Inout',
    scrollTrigger:{
      trigger:'.page7',
     
    }
  })

  var page7 =document.querySelector('.page7');
  page7.addEventListener('mousemove',function(){
    gsap.to('.page7coach',{
      opacity:1,
      duration:.5,
      ease:'expo.Inout',
      zIndex:9999,

    })
  })


  gsap.to('.page7 img',{
    y:-170,
    duration:.5,
    scrollTrigger:{
      trigger:'.page7',
      scroller:'body',
      scrub:true
    }
  })
}


page7Animation();

function page8Animation(){
  gsap.to('.text8container h1',{
    y:-180,
    duration:.8,
    ease:'expo.Inout',
    scrollTrigger:{
      trigger:'.page8',
     
    }
  })

  gsap.to('.page8 img',{
    y:-170,
    duration:.5,
    scrollTrigger:{
      trigger:'.page8',
      scroller:'body',
      scrub:true
    }
  })

  var page8=document.querySelector('.page8');
  page8.addEventListener('mousemove',function(){
    gsap.to('.page8coach',{
      opacity:1,
      duration:.5,
      ease:'expo.Inout',
      zIndex:9999,

    })
  })

  gsap.to('.page8',{
    y:-700,
    duration:.5,
    scrollTrigger:{
      trigger:'.page7',
      pin:true,
      scrub:true,
    }
  })
}

page8Animation();
