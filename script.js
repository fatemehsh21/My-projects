// Script for navigation bar
let $ = document
let mainImg = $.getElementById('mainImg')
let smallImgs = $.querySelectorAll('.small-img')

smallImgs.forEach((img) => {
    img.addEventListener('click', () => {
        mainImg.src = img.src
    })

})