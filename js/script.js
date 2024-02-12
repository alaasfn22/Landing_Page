let progressSpans = document.querySelectorAll(".skills .span");
let section = document.querySelector(".our-skills");


window.onscroll=function(){

    if(window.scrollY >= section.offsetTop){
        console.log("done")
        progressSpans.forEach((span)=>{
            span.style.width=span.dataset.width;
        })
    }
}