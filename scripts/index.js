let slideNum = 1;
const slideShowImages = ["/images/desktop-image-hero-1.jpg","/images/desktop-image-hero-2.jpg","/images/desktop-image-hero-3.jpg"]
let leftToggleButton = document.getElementById('left-toggle');
let rightToggleButton = document.getElementById('right-toggle');
let slideshow = document.getElementById('slideshow');

leftToggleButton.addEventListener('click', ()=> {
        if (slideNum == 1){
            slideshow.children[0].style.display = 'none';
            slideNum=slideShowImages.length;
            slideshow.children[slideNum-1].style.display = 'block';
        }
        else{
            slideshow.children[slideNum-1].style.display = 'none';
            slideNum--;
            slideshow.children[slideNum-1].style.display = 'block';
        }
    }
)

rightToggleButton.addEventListener('click', ()=> {
        if (slideNum == slideShowImages.length){
            slideshow.children[slideShowImages.length-1].style.display = 'none';
            slideNum=1;
            slideshow.children[slideNum-1].style.display = 'block';
        }
        else{
            slideshow.children[slideNum-1].style.display = 'none';
            slideNum++;
            slideshow.children[slideNum-1].style.display = 'block';
        }
    }
)