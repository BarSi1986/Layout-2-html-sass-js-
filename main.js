// enter nav menu

const readMore = document.querySelector('.readMore')
const videoWrap = document.querySelector('.videoWrap')
const yellowHero = document.querySelector('.yellowHero')
const logo = document.querySelector('.logo a')
const topLineP = document.querySelector('.topLine p')
const heroText = document.querySelector('.yellowHeroTxt')
const readArticle = document.querySelector('#readMore')
const backToMain = document.querySelector('#readMore i')

const navLinks = document.querySelectorAll('nav ul li a');

const backButtons = [backToMain];

readMore.addEventListener('click',()=>{
    videoWrap.style.opacity = 0;
    yellowHero.classList.remove('back');
    yellowHero.classList.add('readMore');
    logo.classList.add('lightLogo')
    topLineP.style.display = 'none';
    heroText.style.opacity = 0;
    readArticle.classList.add('active')
})


backButtons.forEach(button=>{
    button.addEventListener('click',()=>{
        videoWrap.style.opacity = 1;
        yellowHero.classList.remove('readMore');
        yellowHero.classList.add('back');
        logo.classList.remove('lightLogo')
        topLineP.style.display = "initial";
        heroText.style.opacity = 1;
        readArticle.classList.remove('active')
        burger.classList.remove('opacity')
    })
})

// burger menu control
const burger = document.querySelector('.burger')
const ul = document.querySelector('nav ul')

burger.addEventListener('click', function(){
    ul.classList.toggle('active');
    burger.classList.toggle('clicked')
})

// navLinks.forEach(link=>{
//     link.addEventListener('click', function(){
//         ul.classList.remove('active')
//         burger.classList.remove('clicked')
        
//         })
//     })
for(i=0; i<navLinks.length; i++){
    navLinks[i].addEventListener('click',()=>{
        ul.classList.remove('active')
        burger.classList.remove('clicked')
    })
}

readMore.addEventListener('click',()=>{
    burger.classList.add('opacity')
})
