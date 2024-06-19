var tablinks = document.getElementsByClassName("tab-links");
var tabcontants = document.getElementsByClassName("tab-contants");
function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontant of tabcontants){
        tabcontant.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}