var BGvideo = document.getElementById("BGvideo");


function dark(){  
    document.body.className = "darkmode";
    window.localStorage.setItem("darkmode",1); 
    BGvideo.src = "bgDarkMode.mp4";
    loading();
}
function white(){
    document.body.className = "body";
    window.localStorage.setItem("darkmode",0);
    BGvideo.src = "bgWhiteMode.mp4";
    loading();
}




const DMode = localStorage.getItem("darkmode");
if (DMode == 1){
    dark();
}else {
    white();
}

// loader 

window.addEventListener("load",loading())

function loading(){
    const loader = document.getElementById("loader");
    loader.classList = "loader";
    setTimeout(function Loader(){
        loader.classList ="loader-hidden";
    },1000)
}