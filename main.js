const d = document;
const w = window;

const gbLeft = d.querySelector(".gb-left")

d.addEventListener("mouseover", e => {

    if (e.target.matches(".bar") || e.target.matches(".percentaje")) {

        gbLeft.classList.remove("hidden")
        
    } else {
        gbLeft.classList.add("hidden")
    }

})