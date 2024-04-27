/**
 * Section = Welcome Part 
 */

var emailInput = document.querySelector('#email');
var emailPlaceholder = document.querySelector('.email-placeholder');


emailInput.addEventListener('input', ()=>{ 
    console.log('이메일 값 변경됨', emailInput.value);
    if(emailInput.value)
    textCheck();
});

emailInput.addEventListener('focus',function(){
    emailPlaceholder.classList.add('active');
});

emailInput.addEventListener('blur',function(){
    if(emailInput.value ==''){
    emailPlaceholder.classList.remove('active');
    }
});


function textCheck(){
    if(emailInput.value !=''){
        emailPlaceholder.classList.add('active');
    }else{
        emailPlaceholder.classList.remove('active');
    }
}

// 만약 input 내용이 비어있지 않다면, active클래스 추가. 비어있으면 active 클래스 제거 