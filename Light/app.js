const whybtn = document.getElementById("nav-btn-link")
const aslide1 = document.getElementById("aslide1")
const menuCheck = document.getElementById("menu-check")
const body = document.querySelector("body")
const appear = document.getElementById("appear")
const slide1 = document.getElementById("slide1")
const per = document.getElementById("per")
const next = document.getElementById("next")
let i = 0
let scrollable = true
let count = 0

whybtn.addEventListener("click", why)
menuCheck.addEventListener("click", menuFix)
window.addEventListener("scroll", scroller)
per.addEventListener("click", pslide)
next.addEventListener("click", nslide)
setInterval(bann2, 4000)

function why(){
    console.log(whybtn)
    whybtn.textContent = "Why you click on me!"
}

function bann2(){
    aslide1.style.setProperty("margin-left", "calc(-100vw * " + i +")")
    i++
    if(i > 3)
    i = 0;
}

function menuFix(){
    if(scrollable){
        body.style.setProperty("overflow", "hidden")
        scrollable = false
    }
    else{
        body.style.removeProperty("overflow")
        scrollable = true
    }
}

function scroller(){
    if(window.scrollY >= appear.getBoundingClientRect().bottom + 400){
        appear.style.setProperty("filter", "opacity(1)")
        appear.style.setProperty("transform", "translateY(0)")
    }
    else{
        appear.style.setProperty("filter", "opacity(0)")
        appear.style.setProperty("transform", "translateY(150px)")
    }
}

function nslide(){
    if(window.innerWidth > 800){
        if(count > 3)
        return;
        slide1.style.setProperty("margin-left", "calc(-50vw + -50vw * " + count + ")")
        count++
    }
    else{
        if(count > 10)
        return;
        slide1.style.setProperty("margin-left", "calc(-100vw + -100vw * " + count + ")")
        count++
    }
}

function pslide(){
    if(window.innerWidth > 800){
        if(count <= 0)
        return;
        slide1.style.setProperty("margin-left", "calc(50vw + -50vw * " + count + ")")
        count--
    }
    else{
        if(count <= 0)
        return;
        slide1.style.setProperty("margin-left", "calc(100vw + -100vw * " + count + ")")
        count--
    }
}