/**
 * Section = Welcome Part 
 */

var emailInput = document.querySelector('#email');
var emailPlaceholder = document.querySelector('.email-placeholder');
var emailInput2 = document.querySelector('#email2')
var emailPlaceholder2 = document.querySelector('.email-placeholder2')
// var faqList = document.querySelectorAll('question-list li')
var faqList = $('.question-list li:not(.active)');


placeholderEffect(emailInput,emailPlaceholder);
placeholderEffect(emailInput2,emailPlaceholder2);



for(let i=0; i<=5; i++){
    let clickCheck = false;
    faqList.eq(i).click(function(){
        if(clickCheck == false){
            // $(this).next().slideDown(300);
            $(this).next().css('max-height','600px');
            $(this).next().css('padding-block','20px');
            
            clickCheck = true;
            }else if(clickCheck ==true){
                // $(this).next().slideUp(300);
                $(this).next().css('max-height','0px');
                $(this).next().css('padding-block','0px');
                
                clickCheck = false;
            }
        });

        faqList.eq(i).hover(function(){
            $(this).css('background-color','rgba(128, 128, 128, 0.744)');
            $(this).css('transition','0.3s');
        },function(){
            $(this).css('background-color','rgba(128, 128, 128, 0.34)');
            $(this).css('transition','0.3s');
                }
            )


}

// 음 뭐, hover는 제이쿼리 3.3버전부터 삭제? 돼서 요즘은 mouseenter mouseleave 쓴다네. 근데 지금은 자바 스크립트 공부하려고 한거긴 한데 그냥 CSS 돌리는게 더 편함 ㅋㅋ
// 이벤트핸들러의 경우 i는 전역변수를 참조하게 됨. for문으로 함수를 여러개 돌릴떄 사실상 같은 함수가 여러개 만들어지는건데, let은 블록이 스코프인 반면 var은 전역으로 사용 가능하잖아. 그렇게 됐을 때 for문에 있는 i의 값은 각각 가져가지만, 이벤트 핸들러의 경우에는 가장 마지막에 재선언된 var의 값을 가져간대. 그래서 this가 아니라 faqList.eq(i).css로 할 경우 i의 마지막 값만 바뀜. 그래서 이럴땐 var로 할거면 이벤트 핸들러를 this로 해주거나 let으로 포문 돌려야 할듯.

// TODO : 함수 모음  

function placeholderEffect(selectInput,selectPlaceholder){
    selectInput.addEventListener('input', ()=>{ 
        console.log('이메일 값 변경됨', selectInput.value);
        if(selectPlaceholder.value)
        textCheck();
    });
    
    selectInput.addEventListener('focus',function(){
        selectPlaceholder.classList.add('active');
    });
    
    selectInput.addEventListener('blur',function(){
        if(selectInput.value ==''){
            selectPlaceholder.classList.remove('active');
        }
    });
    
    
    function textCheck(){
        if(selectInput.value !=''){
            selectPlaceholder.classList.add('active');
        }else{
            selectPlaceholder.classList.remove('active');
        }
    }
}


// selectInput.addEventListener('input', ()=>{ 
//     console.log('이메일 값 변경됨', emailInput.value);
//     if(selectInput.value)
//     textCheck();
// });

// emailInput.addEventListener('focus',function(){
//     emailPlaceholder.classList.add('active');
// });

// emailInput.addEventListener('blur',function(){
//     if(emailInput.value ==''){
//     emailPlaceholder.classList.remove('active');
//     }
// });


// function textCheck(){
//     if(emailInput.value !=''){
//         emailPlaceholder.classList.add('active');
//     }else{
//         emailPlaceholder.classList.remove('active');
//     }
// }

// 만약 input 내용이 비어있지 않다면, active클래스 추가. 비어있으면 active 클래스 제거 