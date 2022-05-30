// Loader
const main = document.querySelector(".main");
const loader = document.querySelector("#loader");
const init = () => {
    main.style.opacity = 0;
    setTimeout(() => {
        loader.style.display = "none";
        main.style.display = "block";
        setContentHeight();
        setTimeout(() => {
            main.style.opacity = 1;
        }, 50);
    }, 8000);
};
init();
// Slide size

const sliderArea = document.getElementById("slider-area");
const slides = document.getElementsByClassName("slide");

const setContentHeight = () => {
    let slideAreaHeight = sliderArea.offsetHeight;
    for (let slide of slides) {
        slide.style.height = `${slideAreaHeight}px`;
        console.log(slide.style.height);
    }
};
window.addEventListener("load", setContentHeight);
window.addEventListener("resize", setContentHeight);

// Dropdown

const navBtn = document.getElementById("nav-btn");
const navBtnTop = document.getElementById("nav-btn__top");
const navBtnMid = document.getElementById("nav-btn__mid");
const navBtnBtm = document.getElementById("nav-btn__btm");
const dropdown = document.getElementById("dropdown-menu");

dropdown.classList.add("close-menu");

const toggleNavBtnAnimation = () => {
    navBtnTop.classList.toggle("top-animation");
    navBtnMid.classList.toggle("mid-animation");
    navBtnBtm.classList.toggle("btm-animation");
};
const toggleDropdown = () => {
    dropdown.classList.toggle("open-menu");
};

const handleNavClick = () => {
    toggleNavBtnAnimation();
    setTimeout(toggleDropdown, 400);
};
navBtn.addEventListener("click", handleNavClick);
dropdown.addEventListener("click", handleNavClick);

// Intersection Observer
const options = { threshold: 0.6 };
const watchList = document.querySelectorAll(".watch");

watchList.forEach((item) => {
    item.firstElementChild.lastElementChild.classList.add("hidden-left");
});

const intersectionCallback = (entries) => {
    const [entry] = entries;

    if (!entry.isIntersecting) {
        entry.target.firstElementChild.lastElementChild.classList.add(
            "hidden-left"
        );
        return false;
    }
    const curEntryName = entry.target.classList[0];
    const curEntry = document.querySelector(`.${curEntryName}`);

    curEntry.firstElementChild.lastElementChild.classList.remove("hidden-left");
    // observer.unobserve(entry.target);
};

let observer = new IntersectionObserver(intersectionCallback, options);
watchList.forEach((item) => {
    observer.observe(item);
});

// Form

const form = document.getElementById("form");
const handleSubmission = (e) => {
    e.preventDefault();
};
form.addEventListener("submit", handleSubmission);
