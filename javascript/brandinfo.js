/* =====================header================= */

const elbtn2 = document.querySelector('button');
const elNav2 = document.querySelector('header > .nav');
const elUl2 = document.querySelector('header > .nav > ul');

elbtn2.addEventListener('click',function(){
    elbtn2.classList.toggle('active');
    elNav2.classList.toggle('active');
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

/* =======bar====== */

const elBar = document.querySelector('main .bar');

window.addEventListener('load',function(){
    elBar.classList.add('active');
});

/* =====Second====== */
function Second(){
    const elSecond2 = document.querySelector('main .second');
    let sd = {y:0,y2:0,state:true}
    let offset;

    console.log((elSecond2.offsetTop + 200) - window.innerHeight * 0.9)
    offset = (elSecond2.offsetTop + 200) - window.innerHeight * 0.9;

    window.addEventListener('scroll', function(){
        sd.y = window.pageYOffset;
        sd.state = (sd.y > sd.y2) ? true : false
        sd.y2 = sd.y
        if(sd.state) {
            if(this.window.pageYOffset > offset) {
                elSecond2.classList.add('active')
            }
        }
        else {
            if(window.pageYOffset < offset) {
                elSecond2.classList.remove('active')
            }
        }
    })
}
window.addEventListener('load',Second);

/* ======third======= */

function Third2() {
    const elSection = document.querySelectorAll('.third section')
    let sd = {y:0, y2:0, state:true}
    let offset = [];

    elSection.forEach((ele)=>{
        offset.push(ele.offsetTop - window.innerHeight * 0.9)
    })

    window.addEventListener('scroll',function(){
        sd.y = window.pageYOffset;
        sd.state = (sd.y > sd.y2) ? true : false;
        sd.y2 = sd.y;
        if(sd.state) {
            elSection.forEach((ele,idx)=>{
                if(window.pageYOffset > offset[idx]) {
                    elSection[idx].classList.add('active');
                }
            })
        }
        else {
            elSection.forEach((ele,idx)=>{
                if(window.pageYOffset < offset[idx]) {
                    elSection[idx].classList.remove('active');
                }
            })
        }
    })
}
window.addEventListener('load', Third2);

/* ======forth====== */

function Forth2(){
    const elForthH1 = document.querySelector('.forth h1')
    let sd = {y:0, y2:0, state:true}
    let offset;

    offset = elForthH1.offsetTop - window.innerHeight * 0.9;

    window.addEventListener('scroll',function(){
        sd.y = window.pageYOffset;
        sd.state = (sd.y > sd.y2) ? true : false;
        sd.y2 = sd.y;
        if(sd.state) {
            if(window.pageYOffset > offset) {
                elForthH1.classList.add('active')
            }
        }
        else {
            if(window.pageYOffset < offset) {
                elForthH1.classList.remove('active')
            }
        }
    })
    const elForthLi = document.querySelectorAll('.forth li')
    let sd2 = {y:0, y2:0, state:true}
    let offset2 = [];
    
    elForthLi.forEach((ele)=>{
        offset2.push(ele.offsetTop - window.innerHeight * 0.9)
    })
    
    window.addEventListener('scroll',function(){
        sd2.y = window.pageYOffset;
        sd2.state = (sd2.y > sd2.y2) ? true : false;
        sd2.y2 = sd2.y;
        if(sd2.state) {
            elForthLi.forEach((ele,idx)=>{
                if(window.pageYOffset > offset2[idx]) {
                    elForthLi[idx].classList.add('active')
                }
            })
        }
        else {
            elForthLi.forEach((ele,idx)=>{
                if(window.pageYOffset < offset2[idx]) {
                    elForthLi[idx].classList.remove('active')
                }
            })
        }
    })
}
window.addEventListener('load', Forth2);
