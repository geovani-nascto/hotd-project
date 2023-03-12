const btnsCarousel = document.querySelectorAll('.btn');
const imgsCarousel = document.querySelectorAll('.img-carousel');

btnsCarousel.forEach((button, index) => {
    button.addEventListener('click', () => {
        
        disabledBtnSelected(button);

        button.classList.add('btn-selected');

        hideImgActive();

        imgsCarousel[index].classList.add('active');
    })
})

function hideImgActive() {
    const imgActive = document.querySelector('.active');
    imgActive.classList.remove('active');
}

function disabledBtnSelected(button) {
    const btnSelected = document.querySelector('.btn-selected');
    btnSelected.classList.remove('btn-selected');
}
