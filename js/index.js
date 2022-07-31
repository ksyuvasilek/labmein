function slider() {
    const indicator = document.body.querySelectorAll(".swiper__block")
    const btnNext = document.body.querySelector(".swiper__button-next")
    const btnPrev = document.body.querySelector(".swiper__button-prev")
    const items = document.body.querySelectorAll(".accelerator__item")
    const images = document.body.querySelectorAll(".accelerator__img")
    let current = 0
    const length = items.length

    function changeClassname(n) {
        items[current].classList.remove("accelerator__opacity")
        images[current].classList.remove("accelerator__opacity")
        indicator[current].classList.remove("swiper__block--active")
        current = n
        items[current].classList.add("accelerator__opacity")
        images[current].classList.add("accelerator__opacity")
        indicator[current].classList.add("swiper__block--active")
    }

    btnNext.addEventListener('click', evt => {
        evt.preventDefault()
        changeClassname((current + 1) % length)
    })

    btnPrev.addEventListener('click', evt => {
        evt.preventDefault()
        changeClassname(current == 0 ? length - 1 : current - 1)
    })

    indicator.forEach((element) => {
        element.addEventListener('click', evt => {
            evt.preventDefault()
            var arr = Array.prototype.slice.call(indicator)
            changeClassname(arr.indexOf(element))
        })
    })
}

slider()