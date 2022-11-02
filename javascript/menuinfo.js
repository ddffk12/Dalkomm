/* =====================header================= */

const elbtn3 = document.querySelector('button');
const elNav3 = document.querySelector('header > .nav');
const elUl3 = document.querySelector('header > .nav > ul');

elbtn3.addEventListener('click',function(){
    elbtn3.classList.toggle('active');
    elNav3.classList.toggle('active');
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

/* =============bar / menubar============= */

const elBar = document.querySelector('main .bar')
const elMenuBar = document.querySelector('main .menubar')

window.addEventListener('load',function(){
    elBar.classList.add('active')
    elMenuBar.classList.add('active')
})

/* =============menu=============== */
function Menu(){
    const elMenu = document.querySelectorAll('main .menu li')
    let sd = {y:0, y2:0, state:true};
    let offset = [];

    elMenu.forEach((ele)=>{
        offset.push(ele.offsetTop - window.innerHeight * 0.8)
    })

    console.log(offset)
    
    $(window).on('scroll',function(){
        sd.y = window.pageYOffset;
        sd.state = (sd.y > sd.y2) ? true : false;
        sd.y2 = sd.y;
        if(sd.state) {
            elMenu.forEach((ele,idx)=>{
                if(window.pageYOffset > offset[idx]) {
                    elMenu[idx].classList.add('active')
                }
            })
        }
        else {
            elMenu.forEach((ele,idx)=>{
                if(window.pageYOffset < offset[idx]) {
                    elMenu[idx].classList.remove('active')
                }
            })
        }
    })
    elMenu.forEach((ele,idx)=>{
        if(window.pageYOffset > offset[idx]) {
            elMenu[idx].classList.add('active')
        }
    })
    
    $(window).trigger('scroll'); /* 중요!! */
}
window.addEventListener('load',Menu)

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
