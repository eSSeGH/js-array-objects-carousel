const slideObj = [
    {
        image: './img/01.webp',
        title: "Marvel's Spiderman Miles Morale",
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: './img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: './img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: './img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: './img/05.webp',
        title: "Marvel's Avengers",
        text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
    }
]


// INSERT SLIDES HTML
const carouselEl = document.getElementById("carousel")

slideObj.forEach(el => {

    if (el == slideObj[0]) {

        let singleSlideActiveEl = `
        <div class='slide active'>
            <div class="slide-overlay">
                <h3>${el.title}</h3>
                <p>${el.text}</p>
            </div>
            <img src="${el.image}" alt="">
        </div>
        `
        carouselEl.innerHTML += singleSlideActiveEl
    } else {

        let singleSlideEl = `
        <div class='slide'>
            <div class="slide-overlay">
                <h3>${el.title}</h3>
                <p>${el.text}</p>
            </div>
            <img src="${el.image}" alt="">
        </div>
        `
        carouselEl.innerHTML += singleSlideEl
    }
})

// recuperare gli elementi slide

const slideEls = document.querySelectorAll(".slide")

// recuperare le freccette
const arrowLeftEl = document.getElementById("arrow-left")
const arrowRightEl = document.getElementById("arrow-right")

// dichiarare un indice che tenga conto della slide su cui siamo 
// arrivati di volta in volta con le freccette
let indexSlide = 0

arrowRightEl.addEventListener("click", nextSlide)

function nextSlide () {
    console.log("next slide")

    // nascondere la slide corrente
    let currentSlide = slideEls[indexSlide]
    currentSlide.classList.remove("active")

    // controllo slide limite destro
    if (indexSlide < slideEls.length - 1) {
        indexSlide++
    } else {
        indexSlide = 0
    }

    // mostrare la slide successiva
    let nextSlide = slideEls[indexSlide]
    nextSlide.classList.add("active")

}

arrowLeftEl.addEventListener("click", precSlide)

function precSlide() {
    console.log("prec slide")

    // nascondere la slide corrente
    let currentSlide = slideEls[indexSlide]
    currentSlide.classList.remove("active")

    // controllo slide limite sinistro
    if (indexSlide > 0) {
        indexSlide--
    } else {
        indexSlide = slideEls.length - 1
    }

    // mostrare la slide precedente
    let precSlide = slideEls[indexSlide]
    precSlide.classList.add("active")

}

let autoplay = setInterval(nextSlide, 3000)
console.log(autoplay)

// clear interval autoplay

carouselEl.addEventListener("mouseenter", () => {
    console.log("mouseenter")

    clearInterval(autoplay)
    autoplay = undefined
})

carouselEl.addEventListener("mouseleave", () => {
    console.log("mouseleave")

    autoplay = setInterval(nextSlide, 3000)
})