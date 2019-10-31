function openNav() {
    if(document.getElementsByClassName("sidebar-container")[0].style.maxWidth == "0%" || document.getElementsByClassName("sidebar-container")[0].style.maxWidth == ""){
        
        document.getElementsByClassName("sidebar-container")[0].style.maxWidth = "40%";
        document.getElementsByClassName("content-container")[0].style.paddingLeft = "40%";
    }else{
        
        document.getElementsByClassName("sidebar-container")[0].style.maxWidth = "0%";
        document.getElementsByClassName("content-container")[0].style.paddingLeft = "0%";
    }
      }