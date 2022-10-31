/* =====================header================= */

const elbtn = document.querySelector('button');
const elNav = document.querySelector('header > .nav');
const elUl = document.querySelector('header > .nav > ul');

elbtn.addEventListener('click',function(){
    elbtn.classList.toggle('active');
    elNav.classList.toggle('active');
});

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
    elSecondP[0].addEventListener('scroll',function(){
        
    })
}
