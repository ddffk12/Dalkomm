/* =====================header================= */

const elbtn = document.querySelector('button');
const elNav = document.querySelector('header > .nav');
const elUl = document.querySelector('header > .nav > ul');

elbtn.addEventListener('click',function(){
    elbtn.classList.toggle('active');
    elNav.classList.toggle('active');
});

function Header() {
    const elHeader = document.querySelector('header');
    let sd = {y:0, y2:0, state:true}

    window.addEventListener('scroll',function(){
        sd.y = window.pageYOffset;
        sd.state = (sd.y > sd.y2) ? true : false;
        sd.y2 = sd.y;
        if(sd.state) {
            if(window.pageYOffset > 0) {
                elHeader.classList.add('active')
            }
        }
        else {
            if(window.pageYOffset < 100000) {
                elHeader.classList.remove('active')
            }
        }
    });
}

window.addEventListener('load',Header);

let num3 = 0;
$('.nav > li').on('click',function(){
    let idx2 = $(this).index();
    if(num3 != idx2) {
        $('.nav > li > ul').slideUp();
    }
    $(this).find('ul').slideToggle();
    num3=idx2
});


/* ====================first==================== */


var swiper = new Swiper(".fade", {
    spaceBetween: 30,
    effect: "fade",
    centeredSlides: true,
    slidesPerView: 1,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

/* ===================second================== */

function loading(){
    const elSecondP = document.querySelectorAll('.second p');
    const elSeconddiv = document.querySelectorAll('.second div')
    const elSecond = document.querySelector('.second');
    let sd = {y:0, y2:0, state:true}
    let offset = [];
    let offset2 = [];

    elSecondP.forEach((ele)=>{
        offset.push((ele.offsetTop + elSecond.offsetTop) - window.innerHeight * 0.9);
    })
    elSeconddiv.forEach((ele)=>{
        offset2.push((ele.offsetTop + elSecond.offsetTop) - window.innerHeight * 0.9);
    })

    window.addEventListener('scroll',function(){
        sd.y = window.pageYOffset     
        sd.state = (sd.y > sd.y2) ?  true : false;
        sd.y2 = sd.y;
        if(sd.state) {
            elSecondP.forEach((ele,idx)=>{
                if(window.pageYOffset > offset[idx]){
                    elSecondP[idx].classList.add('active');
                }
            })
            elSeconddiv.forEach((ele,idx)=>{
                if(window.pageYOffset > offset2[idx]){
                    elSeconddiv[idx].classList.add('active');
                }
            })
        }
        else{
            elSecondP.forEach((ele,idx)=>{
                if(window.pageYOffset < offset[idx]){
                    elSecondP[idx].classList.remove('active');
                }
            })
            elSeconddiv.forEach((ele,idx)=>{
                if(window.pageYOffset < offset2[idx]){
                    elSeconddiv[idx].classList.remove('active');
                }
            })
        }
    })
}
window.addEventListener('load',loading);

/* =================third================= */

function Third() {
    const elThirdUl = document.querySelectorAll('.third li');
    let sd = {y:0, y2:0, state:true}
    let offset3 = [];

    elThirdUl.forEach((ele)=>{
        offset3.push(ele.offsetTop - window.innerHeight * 0.9);
    })

    window.addEventListener('scroll',function(){
        sd.y = window.pageYOffset     
        sd.state = (sd.y > sd.y2) ?  true : false;
        sd.y2 = sd.y;
        if(sd.state) {
            elThirdUl.forEach((ele,idx)=>{
                if(window.pageYOffset > offset3[idx]) {
                    elThirdUl[idx].classList.add('active')
                }
            })
        }
        else {
            elThirdUl.forEach((ele,idx)=>{
                if(window.pageYOffset < offset3[idx]) {
                    elThirdUl[idx].classList.remove('active')
                }
            })
        }
    })
}
window.addEventListener('load', Third)

/* =============== forth ================*/

/* ==============fifth============ */

function Fifth() {
    const elFifthtxt = document.querySelector('.fifth .txt');
    let sd = {y:0, y2:0, state:true}
    let offset4;
    
    offset4 = elFifthtxt.offsetTop - window.innerHeight * 0.9;
    
    window.addEventListener('scroll',function(){
        sd.y = window.pageYOffset
        sd.state = (sd.y > sd.y2) ? true : false;
        sd.y2 = sd.y;
        if(sd.state) {
            if(window.pageYOffset > offset4) {
                elFifthtxt.classList.add('active')
            }
        }
        else {
            if(window.pageYOffset < offset4) {
                elFifthtxt.classList.remove('active')
            }
        }
    })
}

window.addEventListener('load',Fifth);

function FifthImage() {
    const FifthUl = document.querySelector('.fifth ul');
    const Fifth = document.querySelector('.fifth');
    let sd = {y:0, y2:0, state:true}
    let offset6;

    offset6 = (FifthUl.offsetTop + Fifth.offsetTop) - window.innerHeight * 0.5;

    window.addEventListener('scroll',function(){
        sd.y = window.pageYOffset
        sd.state = (sd.y > sd.y2) ? true : false;
        sd.y2 = sd.y;
        if(sd.state) {
            if(this.window.pageYOffset > offset6){
                FifthUl.classList.add('active')
            }
        }
        else {
            if(this.window.pageYOffset < offset6){
                FifthUl.classList.remove('active')
            }
        }
    })
}
window.addEventListener('load',FifthImage)

/* =============sixth================ */

function Sixth() {
    const elSixth = document.querySelector('.sixth');
    const elP = document.querySelectorAll('.sixth .txt p');
    let sd = {y:0, y2:0, state:true}
    let offset5 = [];

    elP.forEach((ele)=>{
        offset5.push((ele.offsetTop + elSixth.offsetTop) - window.innerHeight * 0.9);
    })
    
    window.addEventListener('scroll',function(){
        sd.y = window.pageYOffset;
        sd.state = (sd.y > sd.y2) ? true : false;
        sd.y2 = sd.y;
        if(sd.state) {
            elP.forEach((ele,idx)=>{
                if(window.pageYOffset > offset5[idx]){
                    elP[idx].classList.add('active');
                }
            })
        }
        else {
            elP.forEach((ele,idx)=>{
                if(window.pageYOffset < offset5[idx]){
                    elP[idx].classList.remove('active');
                }
            })
        }
    });
}

window.addEventListener('load',Sixth);


/* =================footer============== */

$(window).resize(function(){
    if(window.innerWidth < 751) {
        let num2 = 0;
        $('.top_ft li').on('click',function(){
            let idx2 = $(this).index();
            if(num2 != idx2) {
                $('.top_ft .txt').slideUp();
            }
            $(this).find('.txt').slideToggle();
            num2=idx2
        });
    }
}).resize();