
$(document).ready(function(){

//히든메뉴
$('#ham_btn').click(function(){
    $('#hidden_menu_wrap').css({
        display: 'block',
    });
    $('body').css({
        position: 'fixed',
    });
});

$('#hidden_menu_box>button').click(function(){
    $('#hidden_menu_wrap').css({
        display:'none',
    });
    $('body').css({
        position: 'relative',
    });
});

$('#hidden_menu>li').click(function(){
    if($(this).children('.hidden_sub_menu').hasClass('hidden_sub_on')===true){
        $(this).children('.hidden_sub_menu').removeClass('hidden_sub_on');
    }else{
        $('.hidden_sub_menu').removeClass('hidden_sub_on');
        $(this).children('.hidden_sub_menu').addClass('hidden_sub_on');
    }
});


//to_the_top_btn

$('#top_btn').click(function(){
    $('html, body').animate({
        scrollTop: 0,
    },1000);
});


$(window).scroll(function(){
    var sct= $(window).scrollTop();
    var hh = $('header').height();

    if(sct>hh){
        $('#top_btn').css({
            opacity: 1,
        });
    }else if(sct<hh){
        $('#top_btn').css({
            opacity: 0,
        });
    }
});


//search_box PC ver.
var i = 0;

$('#search').click(function(){
   if(i==0){
        $('.search_box_wrap').animate({
            top:100
        });
        $('.sub_menu').css({
            display:'none'
        });
        i++;
   }else if(i==1){
        $('.search_box_wrap').animate({
            top:-250
        });
        $('.sub_menu').css({
            display:'block'
        });
        i=0;
   }
   
});



});//end