const pc=window.matchMedia('(min-width:768px)')
const notpc=window.matchMedia('(max-width:768px)')
const notpct=window.matchMedia('(max-width:360px)')


var anima= document.querySelector(".anima")
var polygon=document.querySelector(".polygon")
var bt=document.querySelector(".bgimage")
var t=window.scrollY
gsap.registerPlugin(ScrollTrigger)


//---------------------------------------------Page 1----------------------------------------//
window.addEventListener("scroll", ()=>{
    var t=window.scrollY
    var g=window.scrollY
    if(pc.matches){ 
        if(t>10)
        {
            
            bt.style.opacity="1"
            anima.style.opacity="0"
            anima.style.transition="1s ease-in-out"
            bt.classList.add('ddimg')
            bt.style.transition="1s ease-in-out"
            bt.classList.remove('ddimgp')
           gsap.to(".bgimage",{
            scrollTrigger:{
                trigger:".bgimage",
                scrub:1
                }, 
                y:20,
                duration:0.6})
       
        }
        else 
        {   
            bt.classList.remove('ddimgp')
            anima.style.opacity="1"
            bt.style.opacity="0"
            gsap.to(".bgimage",{
                scrollTrigger:{
                    trigger:".bgimage",
                    scrub:1
            },
            y:-60,
            duration:0.8})
            bt.style.transition="0.5s ease-in-out"

        }
    }
    else 
        {   
            if(g>0){
                polygon.style.opacity="0"
                polygon.style.transition="1s ease-in-out"
                bt.style.opacity="1"
                bt.classList.add('ddimgp')
                bt.classList.remove('ddimg')
                bt.style.transition="1s ease-in-out"
            }
            else
            {
                polygon.style.opacity="1"
                bt.classList.remove('ddimg')
                bt.style.opacity="0"
                bt.style.transition="0.5s ease-in-out"
            }
        }

})

TweenMax.fromTo(".name",1,{
    y:-20,
    duration:0.8
},{
    y:0,
    duration:1
} )

//---------------------------------------------Page 2----------------------------------------//

var ab=document.querySelector(".aboutme")
var about=document.querySelector(".aboutpara")
var msk=document.querySelector(".msk")


window.addEventListener("scroll",()=>{
    var a=window.scrollY
    var b=window.scrollY
    if(pc.matches)
    { 
        if(a>800){
        
           ab.style.opacity=1
           ab.style.transition="1s ease-in-out"
           gsap.to(".myph",1,{y:35,x:-15})
           gsap.to(".about",1,{y:0,x:-20})
           gsap.to(".aboutpara",1,{y:15,x:-5})
            
        }
        else{
            ab.style.opacity=0
            gsap.to(".myph",1,{y:-15,x:20})
            gsap.to(".about",1,{y:0,x:20})
            gsap.to(".aboutpara",1,{y:-10,x:5})

        }

    }
    else
    {
        if(a>510){
        
            ab.style.opacity=1
            ab.style.transition="1s ease-in-out"
            gsap.to(".about",2,{y:-15})
            gsap.to(".aboutpara",2,{y:-10})

         }
         else{
            ab.style.opacity=0
            gsap.to(".about",2,{y:5})
            gsap.to(".aboutpara",2,{y:5})

         }

    }





})


//---------------------------------------------Page 3----------------------------------------//
window.addEventListener("scroll",()=>{
    var a=window.scrollY
    var b=window.scrollY
    if(pc.matches){
        if(a>2000){
            msk.style.opacity=1
            msk.style.transition="1s ease-in-out"
            gsap.to(".html",2,{x:0})
            gsap.to(".css",2,{x:0})
            if(a>2100)
            {gsap.to(".js",2,{x:0})}
            if(a>2200)
            {gsap.to(".reactjs",2,{x:0})}
            if(a>2300)
            {gsap.to(".java",2,{x:0})}
            if(a>2400)
            {gsap.to(".sql",2,{x:0})}
            if(a>2500)
            {gsap.to(".ps",2,{x:0})}
            if(a>2600)
            {gsap.to(".il",2,{x:0})}
            if(a>2700)
            {gsap.to(".xs",2,{x:0})}
        }
        else{
            msk.style.opacity=0
            gsap.to(".html",2,{x:-142})
            gsap.to(".css",2,{x:142})
            gsap.to(".js",2,{x:-142})
            gsap.to(".reactjs",2,{x:142})
            gsap.to(".java",2,{x:-142})
            gsap.to(".sql",2,{x:142})
            gsap.to(".ps",2,{x:-142})
            gsap.to(".il",2,{x:142})
            gsap.to(".xs",2,{x:-142})
        }
    }
    else{
        if(a>1290){
            msk.style.opacity=1
            msk.style.transition="1s ease-in-out"
            gsap.to(".html",2,{x:0})
            gsap.to(".css",2,{x:0})
            gsap.to(".js",2,{x:0})
            gsap.to(".reactjs",2,{x:0})
            gsap.to(".java",2,{x:0})
            gsap.to(".sql",2,{x:0})
            gsap.to(".ps",2,{x:0})
            gsap.to(".il",2,{x:0})
            gsap.to(".xs",2,{x:0})
        }
        else{
            msk.style.opacity=0
            gsap.to(".html",2,{x:-42})
            gsap.to(".css",2,{x:42})
            gsap.to(".js",2,{x:-42})
            gsap.to(".reactjs",2,{x:42})
            gsap.to(".java",2,{x:-42})
            gsap.to(".sql",2,{x:42})
            gsap.to(".ps",2,{x:-42})
            gsap.to(".il",2,{x:42})
            gsap.to(".xs",2,{x:-42})
        }

    }
})


//---------------------------------------------Page 4----------------------------------------//
var proj=document.querySelector(".proj")

window.addEventListener("scroll",()=>{
    var a=window.scrollY
    var b=window.scrollY
    if(pc.matches){
        if(a>4750){
            proj.style.opacity=1
            proj.style.transition="1s ease"
            gsap.to(".mproj",{y:0,duration:1})
            gsap.to(".proj1",{x:0,duration:1.5})
            gsap.to(".proj2",{x:0,duration:1.5})
        }
        else{
            proj.style.opacity=0
            gsap.to(".mproj",{y:-40,duration:1})
            gsap.to(".proj1",{x:-60,duration:1.5})
            gsap.to(".proj2",{x:60,duration:1.5})

        }


    }
    else{
        if(a>2950){
            proj.style.opacity=1
            proj.style.transition="1s ease"
            gsap.to(".mproj",{y:0,duration:1})
            gsap.to(".proj1",{x:0,duration:1.5})
            gsap.to(".proj2",{x:0,duration:1.5})
        }
        else {
            proj.style.opacity=0
            gsap.to(".mproj",{y:-40,duration:1})
            gsap.to(".proj1",{x:-60,duration:1.5})
            gsap.to(".proj2",{x:60,duration:1.5})
        }
    }
    
})

//---------------------------------------------Page 5----------------------------------------//
var foot=document.querySelector(".foot")

window.addEventListener("scroll",()=>{
    var a=window.scrollY
    var b=window.scrollY
    if(pc.matches){
        if(a>5450){
            //links animate that aswell also a confetii thingi as well if needed
            foot.style.opacity=1
            foot.style.transition="0.5s ease"
            gsap.to(foot,{y:-10,duration:1})
            gsap.to(".if",{y:0,duration:1})
            gsap.to(".click",{y:0,duration:1})
            gsap.to(".abpg",{x:0,duration:1})
            gsap.to(".mskpg",{y:0,duration:1.5})
            gsap.to(".mppg",{x:0,duration:1.5})


        }
        else{
            foot.style.opacity=0
            gsap.to(foot,{y:0,duration:1})
            gsap.to(".if",{y:-20,duration:1})
            gsap.to(".click",{y:10,duration:1})
            gsap.to(".abpg",{x:10,duration:1})
            gsap.to(".mskpg",{y:30,duration:1.5})
            gsap.to(".mppg",{x:-10,duration:1.5})


        }
    }
    else{
        if(a>3950){
                //links animate that aswell also a confetii thingi as well if needed
                foot.style.opacity=1
                foot.style.transition="0.5s ease"
                gsap.to(foot,{y:-10,duration:1})
                gsap.to(".if",{y:0,duration:1})
                gsap.to(".click",{y:0,duration:1})
                gsap.to(".abpg",{x:0,duration:1})
                gsap.to(".mskpg",{y:0,duration:1.5})
                gsap.to(".mppg",{x:0,duration:1.5})
            }    
        else{
            foot.style.opacity=0
            gsap.to(foot,{y:0,duration:1})
            gsap.to(".if",{y:-20,duration:1})
            gsap.to(".click",{y:10,duration:1})
            gsap.to(".abpg",{x:10,duration:1})
            gsap.to(".mskpg",{y:30,duration:1.5})
            gsap.to(".mppg",{x:-10,duration:1.5})

        }
    }})


    //-------------------------------------------Transiition----------------------------------------//

    // $(function(){
    //     barba.init({
    //         sync:true,
    //         transition:[
    //             {
    //                 async leave(data){
    //                     const done=this.async()

    //                     pageTransition()
    //                     await DelayNode(1000)
    //                     done();
    //                 },
    //                 async enter(data){
    //                     contentAnimation()
    //                 },
    //                 async once(data){
    //                     contentAnimation()
    //                 }
    //             }
    //         ]
    //     })
    // })

    barba.init({
        transitions: [{
          name: 'opacity-transition',
          leave(data) {
            return gsap.to(data.current.container, {
              opacity: 0
            });
          },
          enter(data) {
            return gsap.from(data.next.container, {
              opacity: 0
            });
          }
        }]
      });