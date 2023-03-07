

0// start settingboxx
// open and close setting-box/
let box = document.querySelector(".setting-box");
let icon = document.querySelector("body > div.setting-box > div.fatogger i");
icon.addEventListener("click",()=>{
    icon.classList.toggle("fa-spin")
    box.classList.toggle("open");
})

// end settingboxx




















// randomization of backgroundImg/
let spans = document.querySelectorAll(".yesorno span");
spans.forEach(sp =>{
sp.addEventListener("click",(e)=>{
    if(e.target.dataset.bg === "yes"){
        intervalimg = setInterval(()=>{
            let arrofimg = ["01.jpg","02.jpg","03.jpg","04.jpg","05.jpg"];
            let imgnum = Math.floor(Math.random() * arrofimg.length)
            let landing = document.querySelector(".landing-page");
            landing.style.backgroundImage = "url("+arrofimg[imgnum]+")"
            
        },1000)
        
    }else{
        clearInterval(intervalimg);
    }
    activation(e)
})
})
























// change color set in localstorage/

let lis = document.querySelectorAll(".setting-container li");

let localstorageofcolor = localStorage.getItem("localcolor");
if(localstorageofcolor !== ""){
    
    document.documentElement.style.setProperty("--main--color",localStorage.getItem("localcolor"))
}
lis.forEach(li=>{
    li.classList.remove("active");
    if(li.dataset.color ===localstorageofcolor ){
        li.classList.add("active")
    }
})

lis.forEach(li=>{
    li.addEventListener("click",(e)=>{
        document.documentElement.style.setProperty("--main--color",e.target.dataset.color)
        activation(e)        
         localStorage.setItem("localcolor",e.target.dataset.color)
    })
})




















// start skills
// make value of span appear by animation and js 

let skills =document.querySelector(".skills");
let span = document.querySelectorAll(".skills .container .section .skills-prog span");

 
window.onscroll = function(){
    let offTop = skills.offsetTop; 
    let offH = skills.offsetHeight;
    let windowH  = window.innerHeight;
    let windowy  = window.pageYOffset;
   

    if(windowy > (offTop + offH -windowH ) ){
        span.forEach((sp)=>{
        
            sp.style.width = `${sp.dataset.value}`;

        })
    }
   


}

// end skills












// make popup



let OurGallary = document.querySelectorAll(".gallary img");

OurGallary.forEach(img=>{
    img.addEventListener("click",(e)=>{
    let popoverlay = document.createElement("div");
        popoverlay.className = "popup-overlay"
        document.body.appendChild(popoverlay)
    let popbox = document.createElement("div");
        popbox.className = "pop-box";
        popoverlay.appendChild(popbox);
    let popimg = document.createElement("img")
    popimg.className = "pop-img";
    popimg.src = img.src    
    popbox.appendChild(popimg);
    console.log(img.alt)
    if(img.alt !=="" ){

        let p = document.createElement("p")
        ptext = document.createTextNode(img.alt)
        p.appendChild(ptext);
        popbox.appendChild(p)
    }
    // create span to close oevrlay
    let spn =document.createElement("span");
    spn.className = "close"
    spntxt =document.createTextNode("X");
    spn.appendChild(spntxt);
    popbox.appendChild(spn)

    spn.addEventListener("click",()=>{
        popoverlay.style.display = "none"
    })

    })
})



































// start bullet

let bs = document.querySelectorAll(".bullet");
let navBullet = document.querySelector(".nav-bullet")




bs.forEach(b=>{
    b.addEventListener("click",(e)=>{
        document.querySelector(e.target.dataset.sec).scrollIntoView({
            behavior :"smooth"
        })
    })
})






let bullets = document.querySelectorAll(".nav .control div");

let blocal = localStorage.getItem("localbullet");
if(blocal === "block"){
    document.querySelector(".control .no").classList.remove("active")
    
    navBullet.style.display="block"
    document.querySelector(".control .yes").classList.add("active")

}else{
    document.querySelector(".control .yes").classList.remove("active")
    navBullet.style.display="none"
    document.querySelector(".control .no").classList.add("active")
}

bullets.forEach(b=>{
    b.addEventListener("click",(e)=>{
        activation(e)

        if(e.target.dataset.bullet === "appear"){
            navBullet.style.display="block"
            localStorage.setItem("localbullet","block")
            
        }else{
            navBullet.style.display="none"
            localStorage.setItem("localbullet","none")
       
        }
    })
})












// end bullet 

/// function activation

 function activation(ev){
    ev.target.parentElement.querySelectorAll(".active").forEach(e =>{
        e.classList.remove("active")
        
    })
    ev.target.classList.toggle("active")
 }





// reset button 

document.querySelector(".reset").onclick = function(){
    localStorage.removeItem("localbullet");
    localStorage.removeItem("localcolor");
    window.location.reload()
}






let icn = document.querySelector("body > div.landing-page > div > div.container-links > button > i");
let linkss =document.querySelector("body > div.landing-page > div > div.container-links > ul")
icn.onclick = function(){
    linkss.classList.toggle("open");
}





















































