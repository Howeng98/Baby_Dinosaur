var random_question = 0;
$('.right_selection').click(function(){    
    $('#left_leaf').animate({left:-200, opacity:"0"}, 500);
    $('#mission_logo').animate({left:-200, opacity:"0"}, 500);
    $('#mission_text').animate({left:-200, opacity:"0"}, 500);
    $('#right_leaf').animate({right: -200, opacity:"0"}, 500);
    $('#training_logo').animate({right: -200, opacity:"0"}, 500);
    $('#training_text').animate({right: -200, opacity:"0"}, 500);
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
    $('#black_cover').fadeTo('slow',1);
});

/* 我知道了 */
$('#button_01').click(function(){
    $('#subtitle_text_01').fadeTo('slow',0);    
    $('#subtitle_text_02').fadeTo('slow',1);
    $('#black_cover').fadeTo('slow',0);
    $('#button_01').fadeTo('slow',0);
    $('#button_02').fadeTo('slow',1);
    $('#button_03').fadeTo('slow',0);
    $('#button_01').css("z-index", "0");
    $('#button_02').css("z-index", "5");
    $('#button_03').css("z-index", "0");
    $('#ass_dinasour').fadeTo('slow',0);
    // $('.information_box').animate({bottom:"-2.5vh",opacity:"1"});    
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
    $('#left_leaf').animate({left: "0vw", opacity:"1"}, 500);
    $('#mission_logo').animate({left: "11vw", opacity:"1"}, 500);
    $('#mission_text').animate({left: "9vw", opacity:"1"}, 500);
    $('#right_leaf').animate({right: "0vw", opacity:"1"}, 500);
    $('#training_logo').animate({right: "9.5vw", opacity:"1"}, 500);
    $('#training_text').animate({right: "7.8vw", opacity:"1"}, 500);
    
});

/* 找茬 */ 
$('#findTheDifference').click(function(){    
    $('#findTheDifference').fadeTo('slow',0);
    $('#jumpJumpGame').fadeTo('slow',0);
    $('.information_box').fadeTo('slow',1);
    $('#subtitle_text_03').fadeTo('slow',1);        
    $('#button_01').fadeTo('slow',0);
    $('#button_02').fadeTo('slow',0);
    $('#button_03').fadeTo('slow',0);
    $('#button_01').css("z-index", "0");
    $('#button_02').css("z-index", "0");
    $('#button_03').css("z-index", "0");
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
    $('#cover').fadeTo('slow',1);
    $('#cover').fadeTo('opacity',"0.9");
    $('#cover').css("z-index", "7");
    $('#start_button').fadeTo('slow',1);
    $('#start_button').css("z-index", "8");
    
});

/* start_button */ 
$('#start_button').click(function(){    
    $('#start_button').fadeTo('slow',0);
    $('#start_button').css("z-index", "0");    
    $('#cover').fadeTo('5000',0);
    $('#button_03').fadeTo('slow',1);
    $('#button_03').css("z-index", "5");
});

/* 結束遊戲 */
$('#button_03').click(function(){    
    $('.information_box').fadeTo('slow',0);       
    $('#subtitle_text_03').fadeTo('slow',0);       
    $('#fTD_question').fadeTo('slow',0);
    $('#fTD_question2').fadeTo('slow',0);
    $('#button_01').fadeTo('slow',0);
    $('#button_02').fadeTo('slow',0);
    $('#button_03').fadeTo('slow',0);
    $('#button_01').css("z-index", "0");
    $('#button_02').css("z-index", "0");
    $('#button_03').css("z-index", "0");
    $('#fTD_question').css("width", "1vw");
    $('#fTD_question2').css("width", "1vw");
    $('#ass_dinasour').fadeTo('slow',1);
    $('#cover').fadeTo('slow',0);
    $('#cover').css("z-index", "0");
    $('#start_button').fadeTo('slow',0);
    $('#start_button').css("z-index", "0");
    $('#left_leaf').animate({left: "0vw", opacity:"1"}, 500);
    $('#mission_logo').animate({left: "11vw", opacity:"1"}, 500);
    $('#mission_text').animate({left: "9vw", opacity:"1"}, 500);
    $('#right_leaf').animate({right: "0vw", opacity:"1"}, 500);
    $('#training_logo').animate({right: "9.5vw", opacity:"1"}, 500);
    $('#training_text').animate({right: "7.8vw", opacity:"1"}, 500);
});
