
const modal = document.querySelector(`.modal`)
const btnOpen = document.querySelector(`.btn-open`)

btnOpen.addEventListener(`click`, () => {
    modal.classList.add(`modal-open`)
})

modal.addEventListener(`click`, (event) => {
    if (event.target && event.target.classList.contains(`modal-open`) || event.target.classList.contains(`modal__close-btn`)){
        modal.classList.remove(`modal-open`)
    }
        
})