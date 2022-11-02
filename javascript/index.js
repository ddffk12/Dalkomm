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

/* ====================first==================== */

let num = 0, inter, fadeFun;
$('.first figure').not(':first').hide();
fadeFun = function(param){
    $('.first figure').eq(num).fadeOut(1000);
    num++;
    if(param == '처음') {
        $('.first figure').eq(0).fadeIn(1000);
    }
    else if(param == '가운데') {
        $('.first figure').eq(1).fadeIn(1000);
    }
    else if(param == '마지막') {
        $('.first figure').eq(2).fadeIn(1000);
    }
    else if(num == 3) {
        num = 0;
        $('.first figure').eq(num).fadeIn(1000);
    }
    else {
        $('.first figure').eq(num).fadeIn(1000);
    }
}

inter = setInterval(fadeFun,5000,);

$('.fade-btn')
.on('mouseenter', function(){
    clearInterval(inter);
})
.on('mouseleave', function(){
    inter = setInterval(fadeFun,3000);
});

$('.fade-btn button').on('click', function(){
    let idx = $(this).index();
    if(idx == 0) {
        fadeFun('처음');
    }
    else if(idx == 1) {
        fadeFun('가운데')
    }
    else {
        fadeFun('마지막');
    }
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
    const elThirdUl = document.querySelector('.third ul');
    let sd = {y:0, y2:0, state:true}
    let offset3;

    offset3 = elThirdUl.offsetTop - window.innerHeight * 0.9;

    window.addEventListener('scroll',function(){
        sd.y = window.pageYOffset     
        sd.state = (sd.y > sd.y2) ?  true : false;
        sd.y2 = sd.y;
        if(sd.state) {
            if(window.pageYOffset > offset3) {
                elThirdUl.classList.add('active')
            }
        }
        else {
            if(window.pageYOffset < offset3) {
                elThirdUl.classList.remove('active')
            }
        }
    })
}
window.addEventListener('load', Third)

/* forth */

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

let num2 = 0;
$('.top_ft li').on('click',function(){
    let idx2 = $(this).index();
    if(num2 != idx2) {
        $('.top_ft .txt').slideUp();
    }
    $(this).find('.txt').slideToggle();
    num2=idx2
});