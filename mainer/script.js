const back = document.getElementById("change");

const drop = document.getElementById("newpage");

const np2 = document.getElementById("2ndpage")

drop.addEventListener("click", ()=>{
    np2.scrollIntoView({behavior: "smooth"})
})
window.addEventListener("scroll", () => {
    const scrollTop = window.pageYOffset;
    const color1 = "#BF99FF"; // First color of the gradient
    const color2 = "#A362AB"; // Second color of the gradient
    console.log(scrollTop)
    if(scrollTop > 122 && scrollTop < 1400){
        back.style.background = `linear-gradient(to bottom, ${color1}, ${color2})`;
    }
    else if(scrollTop >= 1400 && scrollTop < 2500 ){
        back.style.background = "linear-gradient(to bottom, #C521FF, #FFD1FC)"
    }
    else if(scrollTop>= 2500 && scrollTop < 3500){
        back.style.background = "linear-gradient(to bottom, #4A00FF, #FF00ED)"
    }
    else if(scrollTop >= 3500){
        back.style.background = "linear-gradient(to bottom, #EB00EF, #A74FFF)"

    }
    else{
        back.style.background = "linear-gradient(to bottom, #7521FF, #524E5C)";
    }
    }
);

// lOGIN & Register
const main = document.getElementById("lo")
const logs = document.getElementById("login")
const reg = document.getElementById("register")
const bt = document.getElementById("btn")
const hid = document.querySelector(".close-btn")

function login(){
    main.style.display = 'block'
    logs.style.display = 'block'
    reg.style.display = 'none'
    bt.style.left = "0"
    document.querySelector('.container').classList.add("blur")
}

function register(){
    main.style.display = 'block'
    logs.style.display = 'none'
    reg.style.display = 'block'
    bt.style.left = "110px"
    document.querySelector('.container').classList.add("blur")

}

function hidelogin(){
    hid.addEventListener("click", ()=>{
        main.style.display = 'none'
        document.querySelector('.container').classList.remove("blur")
    })
}

// Auto slider
const cont = document.getElementById("conti");
let isDragging = false, timeoutId;
let startX, startScrollLeft;
let scrollDirection = 1; // 1 for left to right, -1 for right to left

const dragStart = (e) => {
    isDragging = true;
    cont.classList.add("dragging");
    startX = e.pageX;
    startScrollLeft = cont.scrollLeft;
}

const dragStop = () => {
    isDragging = false;
    startX = null;
    startScrollLeft = null;
    cont.classList.remove("dragging");
}

const autoplay = () => {
    if (window.innerWidth < 800) return;
    timeoutId = setTimeout(() => {
        cont.scrollLeft += scrollDirection;
        if (cont.scrollLeft >= cont.scrollWidth - cont.clientWidth || cont.scrollLeft <= 0) {
            scrollDirection *= -1; // Reverse the direction
        }
        autoplay();
    }, 10);
}

autoplay();

const dragging = (e) => {
    if (!isDragging) return;
    const diff = e.pageX - startX;
    cont.scrollLeft = startScrollLeft - diff;
}

cont.addEventListener("mousedown", dragStart);
cont.addEventListener("mouseup", dragStop);
cont.addEventListener("mousemove", dragging);

