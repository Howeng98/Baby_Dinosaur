var random_question = 0;
var countdown_duration;
var remain_time = 0;
var ans_isclear = 0;
var go_in = true;
var refreshInterval
var ans1_1 = 0,ans1_2 = 0;ans1_3 = 0;ans1_4 = 0;ans1_5 = 0;
var ans2_1 = 0,ans2_2 = 0;ans2_3 = 0;ans2_4 = 0;ans2_5 = 0;

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
    $('#timer').css("display", "none");    
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
    $('#findTheDifference').css("z-index","10");
    $('#jumpJumpGame').fadeTo('slow',1);        
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
    $('#left_leaf').animate({left: "0vw", opacity:"1"}, 500);
    $('#mission_logo').animate({left: "11vw", opacity:"1"}, 500);
    $('#mission_text').animate({left: "9vw", opacity:"1"}, 500);
    $('#right_leaf').animate({right: "0vw", opacity:"1"}, 500);
    $('#training_logo').animate({right: "9.5vw", opacity:"1"}, 500);
    $('#training_text').animate({right: "7.8vw", opacity:"1"}, 500);
    $('#ok_button').hide();
    $('#share_button').hide();
    $('#text_01').hide();
    $('#text_02').hide();
    $('#text_03').hide();
    $('#text_04').hide();
    $('#result_text').hide();
    $('#result_list').hide();
    $('#rank_list').hide();
    $('#footstep_01').hide();
    $('#footstep_02').hide();
    $('#footstep_03').hide();
    
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
        //$('#fTD_question').fadeTo('slow',1);
        random_question = 1;
    }
    else{
        //$('#fTD_question2').fadeTo('slow',1);
        random_question = 0;
    }
    $('#cover').fadeTo('slow',1);
    $('#cover').fadeTo('opacity',"0.9");
    $('#cover').css("z-index", "5");
    $('#start_button').fadeTo('slow',1);
    $('#start_button').css("z-index", "5");
        
});

/* start_button */ 
$('#start_button').click(function(){    
    $('#start_button').css("display", "none");    
    $('#button_03').fadeTo('slow',1);
    $('#button_03').css("z-index", "5");
    $('#timer').fadeTo('slow',1);
    $('#time').fadeTo('slow',1);
    $('#cover').css("display", "none");    
    $('#black_cover').css("display", "none");    
    $('#findTheDifference').css("display", "none");
    $('#jumpJumpGame').css("display", "none");
    $('#ass_dinasour').css("display", "none");
    
    if(random_question == 1){
        $('#fTD_question').fadeTo('slow',1);    
        $('#answer1_01').fadeTo('slow',0);    
        $('#answer1_02').fadeTo('slow',0);                                    
        $('#answer1_03').fadeTo('slow',0);    
        $('#answer1_04').fadeTo('slow',0);                                    
        $('#answer1_05').fadeTo('slow',0);    
        $('#answer1_06').fadeTo('slow',0);                                    
        $('#answer1_07').fadeTo('slow',0);    
        $('#answer1_08').fadeTo('slow',0);                                    
        $('#answer1_09').fadeTo('slow',0);    
        $('#answer1_10').fadeTo('slow',0);                                        
    }
    else{
        $('#fTD_question2').fadeTo('slow',1);            
        $('#answer2_01').fadeTo('slow',0);    
        $('#answer2_02').fadeTo('slow',0);                                    
        $('#answer2_03').fadeTo('slow',0);    
        $('#answer2_04').fadeTo('slow',0);                                    
        $('#answer2_05').fadeTo('slow',0);    
        $('#answer2_06').fadeTo('slow',0);                                    
        $('#answer2_07').fadeTo('slow',0);    
        $('#answer2_08').fadeTo('slow',0);                                    
        $('#answer2_09').fadeTo('slow',0);    
        $('#answer2_10').fadeTo('slow',0);  
    }
    countdown_duration = 30;
    startTimer(30);
});

/* 結束遊戲 */
$('#button_03').click(function(){    
    ans1_1 = 0,ans1_2 = 0;ans1_3 = 0;ans1_4 = 0;ans1_5 = 0;
    $('.information_box').fadeTo('slow',0);       
    $('#subtitle_text_03').fadeTo('slow',0);           
    $('#button_01').fadeTo('slow',0);
    $('#button_02').fadeTo('slow',0);
    $('#button_03').fadeTo('slow',0);
    $('#button_01').css("z-index", "0");
    $('#button_02').css("z-index", "0");
    $('#button_03').css("z-index", "0");    
    $('#ass_dinasour').fadeTo('slow',1);   
    $('#start_button').fadeTo('slow',0);
    $('#start_button').css("z-index", "0");
    $('#left_leaf').animate({left: "0vw", opacity:"1"}, 500);
    $('#mission_logo').animate({left: "11vw", opacity:"1"}, 500);
    $('#mission_text').animate({left: "9vw", opacity:"1"}, 500);
    $('#right_leaf').animate({right: "0vw", opacity:"1"}, 500);
    $('#training_logo').animate({right: "9.5vw", opacity:"1"}, 500);
    $('#training_text').animate({right: "7.8vw", opacity:"1"}, 500);
    $('#timer').fadeTo('slow',0);
    $('#time').fadeTo('slow',0);
    $('#ok_button').hide();
    $('#share_button').hide();
    $('#text_01').hide();
    $('#text_02').hide();
    $('#text_03').hide();
    $('#text_04').hide();
    $('#result_text').hide();
    $('#result_list').hide();
    $('#rank_list').hide();
    $('#footstep_01').hide();
    $('#footstep_02').hide();
    $('#footstep_03').hide();
    $('#black_cover').hide();
    $('#fTD_question').css("display", "none");
    $('#fTD_question2').css("display", "none");
    $('#cover').css("display", "none");
    $('#black_cover').css("display", "none");
    $('#start_button').css("display", "none");
    $('#button_03').css("display", "none");
    $('#answer1_01').css("display","none");
    $('#answer1_02').css("display","none");
    $('#answer1_03').css("display","none");
    $('#answer1_04').css("display","none");
    $('#answer1_05').css("display","none");
    $('#answer1_06').css("display","none");
    $('#answer1_07').css("display","none");
    $('#answer1_08').css("display","none");
    $('#answer1_09').css("display","none");
    $('#answer1_10').css("display","none");
    $('#answer2_01').css("display","none");
    $('#answer2_02').css("display","none");
    $('#answer2_03').css("display","none");
    $('#answer2_04').css("display","none");
    $('#answer2_05').css("display","none");
    $('#answer2_06').css("display","none");
    $('#answer2_07').css("display","none");
    $('#answer2_08').css("display","none");
    $('#answer2_09').css("display","none");
    $('#answer2_10').css("display","none");
    
});

function startTimer(duration) {
    var timer = duration, seconds;    
    refreshInterval = setInterval(function () {
        seconds = parseInt(timer);        
        document.getElementById("time").innerHTML = seconds;
        if(timer > 0)
            --timer;
        if(ans_isclear == 5){
            ans_isclear = 0;
            remain_time = timer;
            document.getElementById("result_text").innerHTML = timer + "秒";
            ending_function();
        }
        if(timer <= 0 && go_in){
            ans_isclear = 0;
            remain_time = 0;                
            ending_function();
            go_in = false;
        }
    }, 1000);
}

function ending_function(){
    ans1_1 = 0,ans1_2 = 0;ans1_3 = 0;ans1_4 = 0;ans1_5 = 0;
    $('#timer').fadeTo('slow',0);
    $('#time').fadeTo('slow',0);
    $('.information_box').fadeTo('slow',0);       
    $('#subtitle_text_03').fadeTo('slow',0);           
    $('#fTD_question').css("display", "none");
    $('#fTD_question2').css("display", "none");
    $('#cover').css("display", "none");       
    $('#button_01').fadeTo('slow',0);
    $('#button_02').fadeTo('slow',0);
    $('#button_03').fadeTo('slow',0);
    $('#button_01').css("z-index", "0");
    $('#button_02').css("z-index", "0");
    $('#button_03').css("z-index", "0");    
    $('#ok_button').css("z-index","5");
    $('#share_button').css("z-index","5");
    $('#ok_button').fadeTo('slow',1);
    $('#share_button').fadeTo('slow',1);
    $('#text_01').fadeTo('slow',1);
    $('#text_02').fadeTo('slow',1);
    $('#text_03').fadeTo('slow',1);
    $('#text_04').fadeTo('slow',1);
    $('#result_text').fadeTo('slow',1);
    $('#result_list').fadeTo('slow',1);
    $('#rank_list').fadeTo('slow',1);
    $('#footstep_01').fadeTo('slow',1);
    $('#footstep_02').fadeTo('slow',1);
    $('#footstep_03').fadeTo('slow',1);
    $('#findTheDifference').css("display","none");
    $('#cover').css("display","none");
    $('#start_button').css("display","none");
    $('#answer1_01').css("display","none");
    $('#answer1_02').css("display","none");
    $('#answer1_03').css("display","none");
    $('#answer1_04').css("display","none");
    $('#answer1_05').css("display","none");
    $('#answer1_06').css("display","none");
    $('#answer1_07').css("display","none");
    $('#answer1_08').css("display","none");
    $('#answer1_09').css("display","none");
    $('#answer1_10').css("display","none");
    $('#answer2_01').css("display","none");
    $('#answer2_02').css("display","none");
    $('#answer2_03').css("display","none");
    $('#answer2_04').css("display","none");
    $('#answer2_05').css("display","none");
    $('#answer2_06').css("display","none");
    $('#answer2_07').css("display","none");
    $('#answer2_08').css("display","none");
    $('#answer2_09').css("display","none");
    $('#answer2_10').css("display","none");
    
                                       

    clearInterval(refreshInterval);
}

$('#ok_button').click(function(){        
    $('#ass_dinasour').fadeTo('slow',1);
    $('#left_leaf').animate({left: "0vw", opacity:"1"}, 500);
    $('#mission_logo').animate({left: "11vw", opacity:"1"}, 500);
    $('#mission_text').animate({left: "9vw", opacity:"1"}, 500);
    $('#right_leaf').animate({right: "0vw", opacity:"1"}, 500);
    $('#training_logo').animate({right: "9.5vw", opacity:"1"}, 500);
    $('#training_text').animate({right: "7.8vw", opacity:"1"}, 500);
    $('#ok_button').hide();
    $('#share_button').hide();
    $('#text_01').hide();
    $('#text_02').hide();
    $('#text_03').hide();
    $('#text_04').hide();
    $('#result_text').hide();
    $('#result_list').hide();
    $('#rank_list').hide();
    $('#footstep_01').hide();
    $('#footstep_02').hide();
    $('#footstep_03').hide();
    $('#black_cover').hide();
    $('#findTheDifference').hide();
    $('#jumpJumpGame').hide();
    $('#start_button').hide();            
});

// for debugging
document.addEventListener('click', function(e){
    console.log(e.target);
  }, false);


$('#answer1_01').click(function(){
    if(ans1_1 == 0){
        $('#answer1_01').fadeTo('slow',1);
        $('#answer1_02').fadeTo('slow',1);
        ans_isclear++;
        ans1_1 = 1;    
    }
});
$('#answer1_02').click(function(){        
    if(ans1_1 == 0){
        $('#answer1_01').fadeTo('slow',1);
        $('#answer1_02').fadeTo('slow',1);        
        ans_isclear++;
        ans1_1 = 1;
    }
});
$('#answer1_03').click(function(){
    if(ans1_2 == 0){
        $('#answer1_03').fadeTo('slow',1);
        $('#answer1_04').fadeTo('slow',1);        
        ans_isclear++;
        ans1_2 = 1;
    }
});
$('#answer1_04').click(function(){        
    if(ans1_2 == 0){
        $('#answer1_03').fadeTo('slow',1);
        $('#answer1_04').fadeTo('slow',1);        
        ans_isclear++;
        ans1_2 = 1;
    }
});
$('#answer1_05').click(function(){        
    if(ans1_3 == 0){
        $('#answer1_05').fadeTo('slow',1);
        $('#answer1_06').fadeTo('slow',1);        
        ans_isclear++;
        ans1_3 = 1;
    }
});
$('#answer1_06').click(function(){        
    if(ans1_3 == 0){
        $('#answer1_05').fadeTo('slow',1);
        $('#answer1_06').fadeTo('slow',1);        
        ans_isclear++;
        ans1_3 = 1;
    }
});
$('#answer1_07').click(function(){        
    if(ans1_4 == 0){
        $('#answer1_07').fadeTo('slow',1);
        $('#answer1_08').fadeTo('slow',1);        
        ans_isclear++;
        ans1_4 = 1;
    }
});
$('#answer1_08').click(function(){        
    if(ans1_4 == 0){
        $('#answer1_07').fadeTo('slow',1);
        $('#answer1_08').fadeTo('slow',1);        
        ans_isclear++;
        ans1_4 = 1;
    }
});
$('#answer1_09').click(function(){        
    if(ans1_5 == 0){
        $('#answer1_09').fadeTo('slow',1);
        $('#answer1_10').fadeTo('slow',1);        
        ans_isclear++;
        ans1_5 = 1;
    }
});
$('#answer1_10').click(function(){        
    if(ans1_5 == 0){
        $('#answer1_09').fadeTo('slow',1);
        $('#answer1_10').fadeTo('slow',1);        
        ans_isclear++;
        ans1_5 = 1;
    }
});

$('#answer2_01').click(function(){
    if(ans2_1 == 0){
        $('#answer2_01').fadeTo('slow',1);
        $('#answer2_02').fadeTo('slow',1);
        ans_isclear++;
        ans2_1 = 1;    
    }
});
$('#answer2_02').click(function(){
    if(ans2_1 == 0){
        $('#answer2_01').fadeTo('slow',1);
        $('#answer2_02').fadeTo('slow',1);
        ans_isclear++;
        ans2_1 = 1;    
    }
});
$('#answer2_03').click(function(){
    if(ans2_2 == 0){
        $('#answer2_03').fadeTo('slow',1);
        $('#answer2_04').fadeTo('slow',1);
        ans_isclear++;
        ans2_2 = 1;    
    }
});
$('#answer2_04').click(function(){
    if(ans2_2 == 0){
        $('#answer2_03').fadeTo('slow',1);
        $('#answer2_04').fadeTo('slow',1);
        ans_isclear++;
        ans2_2 = 1;    
    }
});
$('#answer2_05').click(function(){
    if(ans2_3 == 0){
        $('#answer2_05').fadeTo('slow',1);
        $('#answer2_06').fadeTo('slow',1);
        ans_isclear++;
        ans2_3 = 1;    
    }
});
$('#answer2_06').click(function(){
    if(ans2_3 == 0){
        $('#answer2_05').fadeTo('slow',1);
        $('#answer2_06').fadeTo('slow',1);
        ans_isclear++;
        ans2_3 = 1;    
    }
});
$('#answer2_07').click(function(){
    if(ans2_4 == 0){
        $('#answer2_07').fadeTo('slow',1);
        $('#answer2_08').fadeTo('slow',1);
        ans_isclear++;
        ans2_4 = 1;    
    }
});
$('#answer2_09').click(function(){
    if(ans2_5 == 0){
        $('#answer2_09').fadeTo('slow',1);
        $('#answer2_10').fadeTo('slow',1);
        ans_isclear++;
        ans2_5 = 1;    
    }
});
$('#answer2_10').click(function(){
    if(ans2_5 == 0){
        $('#answer2_09').fadeTo('slow',1);
        $('#answer2_10').fadeTo('slow',1);
        ans_isclear++;
        ans2_5 = 1;    
    }
});