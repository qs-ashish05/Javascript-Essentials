// Access all the HTML elements 

const alert_btn = document.getElementById("alert_btn")
const open_window_btn = document.getElementById("open_window_btn")
const navigate_back_btn = document.getElementById("navigate_back_btn")
const chnage_url_btn = document.getElementById("chnage_url_btn")


alert_btn.addEventListener('click', () => {
    window.alert("Hello alert button is presses");
})

open_window_btn.addEventListener('click', () => {
    window.open('https://www.google.com');
})

navigate_back_btn.addEventListener('click', () => {
    history.back();
})


chnage_url_btn.addEventListener('click', ()=>{
    location.href = "https:/youtube.com"
})