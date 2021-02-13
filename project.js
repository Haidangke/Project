var link1 = 'http://mina.kenzap.com/wp-content/uploads/2017/03/face-icon.png';
var link2 = 'http://mina.kenzap.com/wp-content/uploads/2017/03/face-icon-hover.png';
var link3 = 'http://mina.kenzap.com/wp-content/uploads/2017/03/eye-icon.png';
var link4 = 'http://mina.kenzap.com/wp-content/uploads/2017/03/eye-icon-hover.png';
var link5 = 'http://mina.kenzap.com/wp-content/uploads/2017/03/hair-icon.png';
var link6 = 'http://mina.kenzap.com/wp-content/uploads/2017/03/hair-icon-hover.png';


var icon_menu = document.querySelector('.icon-menu');
var cancel__icon = document.querySelector('#cancel-button');
var nav_menu = document.querySelector('.nav__menu');
var body = document.querySelector('body');



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
        var x = document.querySelector('html,body').scrollTop;
        console.log(x)
        if(x > 300){
            document.querySelector('.nav').classList.add('nav__menu-list-item-active');
        }
        else{
            document.querySelector('.nav').classList.remove('nav__menu-list-item-active');
        }
        if(x>500){
            document.querySelector('.container__service-introduce-img').classList.add('a')
        }
    }
}
if(window.innerWidth < 739){
    var img__last = document.querySelector('#img-last');
    img__last.setAttribute('src',link6);
    window.onscroll = function(){
        var y = document.querySelector('html,body').scrollTop;
        if(y>50){
            document.querySelector('.container__service-introduce-img').classList.add('a')
        }
    }
}
var active_icon = document.querySelector('.active-icon');
if(window.innerWidth < 739){
    active_icon.setAttribute('src',link6);
    document.querySelector('.container__service-type-last').querySelector('img').setAttribute('src',link2)
    var boolen = false;
    icon_menu.addEventListener('click',function(){
        if(boolen == false){
            nav_menu.style.transform = 'translateX(0)';
            boolen = true;
        }
    })
    cancel__icon.onclick = function(){
        if(boolen == true){
            
            nav_menu.style.transform = 'translateX(110%)';
            boolen = false;
        }
    }

}



