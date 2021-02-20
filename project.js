var link1 = 'Project__Img/link1.png';
var link2 = 'Project__Img/link2.png';
var link3 = 'Project__Img/link3.png';
var link4 = 'Project__Img/link4.png';
var link5 = 'Project__Img/link5.png';
var link6 = 'Project__Img/link6.png';
var $ = document.querySelector.bind(document);

var icon_menu = $('.icon-menu');
var cancel__icon = $('#cancel-button');
var nav_menu = $('.nav__menu');
var body = $('body');

if(window.innerWidth > 739){
    var zs = document.querySelectorAll('.container__service-type');
    zs.forEach(function(z){
        z.onmouseover = function(){
            var value = z.querySelector('.container__service-type-icon');
            if(value.getAttribute('src')==link1){
                value.setAttribute('src',link2)
            }else if(value.getAttribute('src')==link3){
                value.setAttribute('src',link4)
            }else if(value.getAttribute('src')==link5){
                value.setAttribute('src',link6)
            }
        }
        z.onmouseleave = function(){
            var value = z.querySelector('.container__service-type-icon');
            if(value.getAttribute('src')==link2){
                value.setAttribute('src',link1)
            }else if(value.getAttribute('src')==link4){
                value.setAttribute('src',link3)
            }else if(value.getAttribute('src')==link6){
                value.setAttribute('src',link5)
            }
        }
        
    })
    window.onscroll = function(){
        var x = $('html,body').scrollTop;
        console.log(x)
        if(x > 300){
            $('.nav').classList.add('nav__menu-list-item-active');
        }
        else{
            $('.nav').classList.remove('nav__menu-list-item-active');
        }
        if(x>500){
            $('.container__service-introduce-img').classList.add('a')
        }
    }
}
if(window.innerWidth < 739){
    var img__last = $('#img-last');
    img__last.setAttribute('src',link6);
    window.onscroll = function(){
        var y = $('html,body').scrollTop;
        if(y>50){
            $('.container__service-introduce-img').classList.add('a')
        }
    }
}
var active_icon = $('.active-icon');
if(window.innerWidth < 739){
    active_icon.setAttribute('src',link6);
    document.querySelector('.container__service-type-last').querySelector('img').setAttribute('src',link2);
    var overplay = $('.overplay');
    function eventClick(element, transform, display){
        element.onclick = function (){
            nav_menu.style.transform = transform;
            overplay.style.display = display;
        }
    }
    eventClick(icon_menu, 'translateX(0)', 'block');
    eventClick(cancel__icon, 'translateX(110%)', 'none');
    eventClick(overplay, 'translateX(110%)', 'none');
}
