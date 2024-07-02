const toggle_icon = document.getElementById("toggle-icon");
const home_p = document.getElementById("home-p")
const about_p = document.getElementById("about-p")
const cv_btn = document.getElementById("cv-btn")

let body = document.body;

toggle_icon.addEventListener("click",()=>{
    body.classList.toggle("dark-mode")
    if(body.classList.contains("dark-mode"))
        {
            toggle_icon.src = "img/moon.png";
             home_p.style.color = "black";
             about_p.style.color = "black";
            
        }
        else{
            toggle_icon.src = "img/sun.png";
            home_p.style.color = "white";
            
           
           
        }
})