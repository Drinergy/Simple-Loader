/*=============== ANIMATED DOTS JS ===============*/
const dots = document.querySelector(".loading__dots")

const addAnimate = () => {
    // add animate
    dots.classList.add('animate')

    setTimeout(() => {
        // remove animate class
        dots.classList.remove('animate')

        setTimeout(() => {
            // run the function again
            addAnimate()
        }, 100)

    }, 2600)
}

addAnimate()