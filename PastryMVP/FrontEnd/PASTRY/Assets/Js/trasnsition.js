window.addEventListener("scroll", function(){
    const logo1=this.document.getElementById("logo_img");
    const logo2=this.document.getElementById("logo_letra");
    var header = document.querySelector("header");
    header.classList.toggle("abajo",window.scrollY>0);
    if(window.scrollY>0){
        logo1.style.display="none";
        logo2.style.display="block";
    }
    else{
        logo2.style.display="none";
        logo1.style.display="block";
    }
})