let slideNum = 1;
const numSlides = 3
let leftToggleButton = document.getElementById('left-toggle');
let rightToggleButton = document.getElementById('right-toggle');
let slideshow = document.getElementById('slideshow');
let device;
//let slideShowImage = document.getElementsByClassName('left-hero')

leftToggleButton.addEventListener('click', ()=> {
        if (slideNum == 1){
            slideshow.children[0].style.display = 'none';
            slideNum=numSlides;
            slideshow.children[slideNum-1].style.display = 'block';
            if(device=='mobile'){
                document.getElementsByClassName('left-hero')[0].style.backgroundImage = `url('/images/mobile-image-hero-${slideNum}.jpg')`;
            }
            else{
                document.getElementsByClassName('left-hero')[0].style.backgroundImage = `url('/images/desktop-image-hero-${slideNum}.jpg')`;
            }
      
        }
        else{
            slideshow.children[slideNum-1].style.display = 'none';
            slideNum--;
            slideshow.children[slideNum-1].style.display = 'block';
            if(device=='mobile'){
                document.getElementsByClassName('left-hero')[0].style.backgroundImage = `url('/images/mobile-image-hero-${slideNum}.jpg')`;
            }
            else{
                document.getElementsByClassName('left-hero')[0].style.backgroundImage = `url('/images/desktop-image-hero-${slideNum}.jpg')`;
            }
        }
    }
)

rightToggleButton.addEventListener('click', ()=> {
        if (slideNum == numSlides){
            slideshow.children[numSlides-1].style.display = 'none';
            slideNum=1;
            slideshow.children[slideNum-1].style.display = 'block';
            if(device=='mobile'){
                document.getElementsByClassName('left-hero')[0].style.backgroundImage = `url('/images/mobile-image-hero-${slideNum}.jpg')`;
            }
            else{
                document.getElementsByClassName('left-hero')[0].style.backgroundImage = `url('/images/desktop-image-hero-${slideNum}.jpg')`;
            }
      
        }
        else{
            slideshow.children[slideNum-1].style.display = 'none';
            slideNum++;
            slideshow.children[slideNum-1].style.display = 'block';
            if(device=='mobile'){
                document.getElementsByClassName('left-hero')[0].style.backgroundImage = `url('/images/mobile-image-hero-${slideNum}.jpg')`;
            }
            else{
                document.getElementsByClassName('left-hero')[0].style.backgroundImage = `url('/images/desktop-image-hero-${slideNum}.jpg')`;
            }
      
        }
    }
)

const checkScreenSize = () =>{
    //let screenWidth = screen.width;
    if(screen.width <= 1100){
        return 'mobile';
    }
    return 'desktop';
}

const checkScreenSizeInterval = () =>{
    device = checkScreenSize()
}

setInterval(checkScreenSizeInterval,10);
