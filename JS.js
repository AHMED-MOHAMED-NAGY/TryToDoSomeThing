function dark(){  
    document.body.className = "darkmode";
    window.localStorage.setItem("darkmode",1); 
}
function white(){
    document.body.className = "";
    window.localStorage.setItem("darkmode",0);
}




const DMode = localStorage.getItem("darkmode");
if (DMode == 1){
    dark();
}else {
    white();
}