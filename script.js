let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let thumbnails = document.querySelectorAll('.thumbnail .item');

// config param
let countItem = items.length;
let itemActive = 0;
// event next click
next.onclick = function(){
    itemActive = itemActive + 1;
    if(itemActive >= countItem){
        itemActive = 0;
    }
    showSlider();
}
//event prev click
prev.onclick = function(){
    itemActive = itemActive - 1;
    if(itemActive < 0){
        itemActive = countItem - 1;
    }
    showSlider();
}
// auto run slider
let refreshInterval = setInterval(() => {
    next.click();
}, 5000)
function showSlider(){
    // remove item active old
    let itemActiveOld = document.querySelector('.slider .list .item.active');
    let thumbnailActiveOld = document.querySelector('.thumbnail .item.active');
    itemActiveOld.classList.remove('active');
    thumbnailActiveOld.classList.remove('active');

    // active new item
    items[itemActive].classList.add('active');
    thumbnails[itemActive].classList.add('active');

    // clear auto time run slider
    clearInterval(refreshInterval);
    refreshInterval = setInterval(() => {
        next.click();
    }, 5000)
}

// click thumbnail
thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        itemActive = index;
        showSlider();
    })
})
const testimonials = document.querySelectorAll('.testimonial');
let currentSlide = 0;

function showSlide() {
    testimonials.forEach(testimonial => {
        testimonial.style.display = 'none';
    });
    testimonials[currentSlide].style.display = 'block';
}

function nextSlide() {
    currentSlide++;
    if (currentSlide >= testimonials.length) {
        currentSlide = 0;
    }
    showSlide();
}

// Show the initial slide
showSlide();

// Click event to switch to the next testimonial immediately for each card
testimonials.forEach((testimonial, index) => {
    testimonial.addEventListener('click', () => {
        currentSlide = index;
        nextSlide();
    });
});


