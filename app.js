var nav=document.getElementById('navbarnav');
window.onscroll=function(){
    if(window.pageYOffset > 80){
        
        nav.style.borderBottom= "2px solid #2b2c2f";
        nav.style.background= "rgba(1,1,1,.9)";
    }
    else{
        nav.style.background="transparent";
        nav.style.borderBottom="none";
    }
}
