window.addEventListener('load', function(){document.body.classList.remove('loading')})
document.querySelector('.icon_nav').onclick=function(){
    document.querySelector('.first_line').classList.toggle('first_line_transform');
    document.querySelector('.third_line').classList.toggle('third_line_transform');
    document.querySelector('.second_line').classList.toggle('second_line_transform');
}

const icon_nav=document.querySelector('.icon_nav');
const menu=document.querySelector('.menu');
const test1=document.querySelector('.test1');
const test2=document.querySelector('.test2');
const test3=document.querySelector('.test3');

icon_nav.addEventListener("click",menu_nhide);
function menu_nhide() {
    menu.classList.toggle('menu_vis');
    test1.classList.toggle('test_vis');
    test2.classList.toggle('test_vis');
    test3.classList.toggle('test_vis');
}

const list = document.querySelectorAll(".testol");

for(let navitem of list){
    navitem.addEventListener('click',function(){
        list.classList.toggle('test_vis');
    })
}

$(window).scroll(function() {

	var st = $(this).scrollTop() /25;

	$(".scroll").css({
		"transform" : "translate3d(0px, " + -st  + "%, 20px)",
		"-webkit-transform" : "translate3d(0px, " + -st  + "%, 20px)"
	});

}); 





console.log('not problem');

 
