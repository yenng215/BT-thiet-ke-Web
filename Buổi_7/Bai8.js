const navItemDropDownList = document.querySelectorAll('.nav-item-dropdown');
        const navTogglerOpen = document.querySelector('.navbar-toggler-open');
        const navTogglerClose = document.querySelector('.navbar-toggler-close');
        const navbarCollapseDiv = document.querySelector('.navbar-collapse');
        
        navItemDropDownList.forEach((navItem) => {
            navItem.addEventListener('click', () => {
                navItem.nextElementSibling.classList.toggle('show-dropdown');
                if(navItem.firstElementChild.className == "fas fa-chevron-down"){
                    navItem.firstElementChild.className = "fas fa-chevron-up";
                } else if(navItem.firstElementChild.className == "fas fa-chevron-up"){
                    navItem.firstElementChild.className = "fas fa-chevron-down";
                }
            });
        });
        
        navTogglerOpen.addEventListener('click', () =>{
            navbarCollapseDiv.classList.add('show-navbar');
        });
        
        navTogglerClose.addEventListener('click', () => {
            navbarCollapseDiv.classList.remove('show-navbar');
        });
        document.addEventListener("DOMContentLoaded", function(){
    var doituongmenutrai=document.querySelector(".shop");
    var doituongmenuphai=document.querySelector(".navbar-nav");
    var trangthai="duoi110";
    window.addEventListener("scroll", function(){
        console.log(window.pageYOffset);
        if(window.pageYOffset>110){
            if(trangthai=="duoi110"){
                console.log("ok ");
                trangthai="tren110";
                 doituongmenutrai.classList.add("nholaitrai");
                doituongmenuphai.classList.add("nholaiphai");
            }
          }
            else if(window.pageYOffset<=110){
                if(trangthai="tren110"){
                doituongmenutrai.classList.remove("nholaitrai");                
                doituongmenuphai.classList.remove("nholaiphai");
                trangthai="duoi110";
                }         
        }
    })
})