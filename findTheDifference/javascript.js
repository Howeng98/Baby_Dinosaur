var random_question = 0;
$('.right_selection').click(function(){
    $('.left_selection').fadeTo('slow',0);    
    $('.right_selection').fadeTo('slow',0);
    $('.information_box').fadeTo('slow',1);    
    $('#subtitle_text_01').fadeTo('slow',1);
    $('#button_01').fadeTo('slow',1);
    $('#button_02').fadeTo('slow',0);
    $('#button_03').fadeTo('slow',0);
    $('#button_01').css("z-index", "5");
    $('#button_02').css("z-index", "0");
    $('#button_03').css("z-index", "0");
    $('#fTD_question').fadeTo('slow',0);
    $('#fTD_question2').fadeTo('slow',0);
    $('#fTD_question').css("z-index", "0");
    $('#fTD_question2').css("z-index", "0");
});

/* 我知道了 */
$('#button_01').click(function(){
    $('#subtitle_text_01').fadeTo('slow',0);    
    $('#subtitle_text_02').fadeTo('slow',1);
    $('#button_01').fadeTo('slow',0);
    $('#button_02').fadeTo('slow',1);
    $('#button_03').fadeTo('slow',0);
    $('#button_01').css("z-index", "0");
    $('#button_02').css("z-index", "5");
    $('#button_03').css("z-index", "0");
    $('#ass_dinasour').fadeTo('slow',0);
    $('.information_box').fadeTo('slow',1);    
    $('#findTheDifference').fadeTo('slow',1);
    $('#findTheDifference').css("z-index","30");
    $('#jumpJumpGame').fadeTo('slow',1);
    $('#fTD_question').fadeTo('slow',0);
    $('#fTD_question2').fadeTo('slow',0);
    $('#fTD_question').css("z-index", "0");
    $('#fTD_question2').css("z-index", "0");
});

/* 返回　*/
$('#button_02').click(function(){
    $('#subtitle_text_02').fadeTo('slow',0);
    $('.information_box').fadeTo('slow',0);
    $('#ass_dinasour').fadeTo('slow',1);
    $('.left_selection').fadeTo('slow',1);
    $('.right_selection').fadeTo('slow',1);
    $('#button_01').fadeTo('slow',0);
    $('#button_02').fadeTo('slow',0);
    $('#button_03').fadeTo('slow',0);
    $('#button_01').css("z-index", "0");
    $('#button_02').css("z-index", "0");
    $('#button_03').css("z-index", "0");
    $('#findTheDifference').fadeTo('slow',0);
    $('#jumpJumpGame').fadeTo('slow',0);
    $('#fTD_question').fadeTo('slow',0);
    $('#fTD_question2').fadeTo('slow',0);
    $('#fTD_question').css("z-index", "0");
    $('#fTD_question2').css("z-index", "0");
    
    
});

$('#findTheDifference').click(function(){    
    $('#findTheDifference').fadeTo('slow',0);
    $('#jumpJumpGame').fadeTo('slow',0);
    $('.information_box').fadeTo('slow',1);
    $('#subtitle_text_03').fadeTo('slow',1);        
    $('#button_01').fadeTo('slow',0);
    $('#button_02').fadeTo('slow',0);
    $('#button_03').fadeTo('slow',1);
    $('#button_01').css("z-index", "0");
    $('#button_02').css("z-index", "0");
    $('#button_03').css("z-index", "5");
    if(random_question == 0){
        $('#fTD_question').fadeTo('slow',1);
        $('#fTD_question').css("z-index", "5");
        $('#fTD_question').css("width", "80vw");
        
        random_question = 1;
    }
    else{
        $('#fTD_question2').fadeTo('slow',1);
        $('#fTD_question2').css("z-index", "5");
        $('#fTD_question2').css("width", "80vw");
        
        random_question = 0;
    }
});

$('#button_03').click(function(){    
    $('.information_box').fadeTo('slow',0);
    $('#subtitle_text_03').fadeTo('slow',0);    
    $('#fTD_question').fadeTo('slow',0);
    $('.left_selection').fadeTo('slow',1);    
    $('.right_selection').fadeTo('slow',1);    
    $('#ass_dinasour').fadeTo('slow',1);
    $('#button_01').fadeTo('slow',0);
    $('#button_02').fadeTo('slow',0);
    $('#button_03').fadeTo('slow',0);
    $('#button_01').css("z-index", "0");
    $('#button_02').css("z-index", "0");
    $('#button_03').css("z-index", "0");
    $('#fTD_question').css("width", "1vw");
    $('#fTD_question2').css("width", "1vw");
    
});
