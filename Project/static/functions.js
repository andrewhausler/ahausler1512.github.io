const toggleBar = document.getElementById("toggle-bar");
const sideContents = document.getElementById("navigation");
const navBars = document.getElementsByClassName("nav-bars");
const innerSideBar = document.getElementById("inner-side-bar");

toggleBar.addEventListener("click", () => {
    if(sideContents.style.display == "none") {
        sideContents.style.display = "";
        innerSideBar.style.flex = "";
        toggleBar.style.marginLeft = "";
        innerSideBar.style.padding = "";
        toggleBar.style.padding = "";
    }
    else {
        sideContents.style.display = "none";
        innerSideBar.style.flex = "0 0 5%";
        toggleBar.style.marginLeft = "0";
        innerSideBar.style.padding = "0";
        if (window.innerWidth <= 800) {
            toggleBar.style.paddingLeft = "5px";
            toggleBar.style.paddingRight = "5px";
        }
    }
});

function toggleChange() {
    if (window.innerWidth <= 800) {
        toggleBar.innerHTML = "-";
        toggleBar.style.paddingLeft = "5px";
        toggleBar.style.paddingRight = "5px";
        
    }
    else {
        toggleBar.innerHTML = "|";
    }
}

window.addEventListener("resize", toggleChange);