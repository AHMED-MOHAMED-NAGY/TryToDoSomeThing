var BGvideo = document.getElementById("BGvideo");


function dark(){  
    document.body.className = "darkmode";
    window.localStorage.setItem("darkmode",1); 
    BGvideo.src = "bgDarkMode.mp4";
}
function white(){
    document.body.className = "body";
    window.localStorage.setItem("darkmode",0);
    BGvideo.src = "bgWhiteMode.mp4";
}




const DMode = localStorage.getItem("darkmode");
if (DMode == 1){
    dark();
}else {
    white();
}