/**
 * Section = Welcome Part
 */

var emailInput = document.querySelector(".email-input");
var emailPlaceholder = document.querySelector(".email-placeholder");

var emailInput2 = document.querySelector(".email-input2");
var emailPlaceholder2 = document.querySelector(".email-placeholder2");

var modalEmailInput = document.querySelector(".modal-email-input");
var modalEmailPlaceholder = document.querySelector(".email-placeholder3");

var modalPasswordInput = document.querySelector(".modal-password-input");
var modalPasswordPlaceholder = document.querySelector(".password-placeholder3");

// var faqList = document.querySelectorAll('question-list li')
var faqList = $(".question-list li:not(.active)");

// todo: 로그인 버튼 눌렀을 때

// $('.signin').click(function(){

// })

// todo: 로그인 모달 Remember me 버튼
var check = false;

$(".remember-label").click(function (e) {
  e.stopPropagation();
  console.log(check);
  if (check == false) {
    $("#checkbutton").css("visibility", "visible");
    $(".remember-button").addClass("active");
    console.log("트루 됨");
    return (check = true);
  } else if (check == true) {
    $("#checkbutton").css("visibility", "hidden");
    console.log("펄스 됨");
    $(".remember-button").removeClass("active");
    return (check = false);
  }
});

//todo: 이거 로그인 모달에도 추가해야함

placeholderEffect(emailInput, emailPlaceholder);
placeholderEffect(emailInput2, emailPlaceholder2);

// FIXME: 이거 흠, 비밀번호는 valid도 다르게 설정해야할듯. 그리고 지금 placeholderEffect 안 먹고, 스크롤도 되고 있음.
// sign in 버튼 눌렀을떄 home에 active줘서 overflow:hidden 설정해서 스크롤 안 되게 해야될듯.
placeholderEffect(modalEmailInput, modalEmailPlaceholder);
placeholderEffect(modalPasswordInput, modalPasswordPlaceholder);

for (let i = 0; i <= 5; i++) {
  let clickCheck = false;
  faqList.eq(i).click(function () {
    if (clickCheck == false) {
      // $(this).next().slideDown(300);
      $(this).next().css("max-height", "600px");
      $(this).next().css("padding-block", "20px");

      clickCheck = true;
    } else if (clickCheck == true) {
      // $(this).next().slideUp(300);
      $(this).next().css("max-height", "0px");
      $(this).next().css("padding-block", "0px");

      clickCheck = false;
    }
  });

  faqList.eq(i).hover(
    function () {
      $(this).css("background-color", "rgba(128, 128, 128, 0.744)");
      $(this).css("transition", "0.3s");
    },
    function () {
      $(this).css("background-color", "rgba(128, 128, 128, 0.34)");
      $(this).css("transition", "0.3s");
    }
  );
}

// 음 뭐, hover는 제이쿼리 3.3버전부터 삭제? 돼서 요즘은 mouseenter mouseleave 쓴다네. 근데 지금은 자바 스크립트 공부하려고 한거긴 한데 그냥 CSS 돌리는게 더 편함 ㅋㅋ
// 이벤트핸들러의 경우 i는 전역변수를 참조하게 됨. for문으로 함수를 여러개 돌릴떄 사실상 같은 함수가 여러개 만들어지는건데, let은 블록이 스코프인 반면 var은 전역으로 사용 가능하잖아. 그렇게 됐을 때 for문에 있는 i의 값은 각각 가져가지만, 이벤트 핸들러의 경우에는 가장 마지막에 재선언된 var의 값을 가져간대. 그래서 this가 아니라 faqList.eq(i).css로 할 경우 i의 마지막 값만 바뀜. 그래서 이럴땐 var로 할거면 이벤트 핸들러를 this로 해주거나 let으로 포문 돌려야 할듯.

// ! 함수 모음

function placeholderEffect(selectInput, selectPlaceholder) {
  selectInput.addEventListener("input", () => {
    console.log("이메일 값 변경됨", selectInput.value);
    if (selectInput.type == "email") {
      console.log("셀렉트 타입 이메일");
      if (selectInput != "") {
        // FIXME: 여기 selectPlaceholder.value 였는데 바꿨음. 왜 placeholder였는지 모르겠네
        console.log("벨류값 트루");
        // textCheck();
        validCheck(selectInput);
        // validCheck(selectInput);
      }
    } else if (selectInput.type == "password") {
      console.log("셀렉트타입패스워드");
      if (selectInput != "")
        //
        validCheck(selectInput);
    }
  });

  selectInput.addEventListener("focus", function () {
    selectPlaceholder.classList.add("active");
  });

  selectInput.addEventListener("blur", function () {
    //focus의 반댓말, focus를 잃었을때를 blur
    if (selectInput.value == "") {
      selectPlaceholder.classList.remove("active");
    }
  });

  function textCheck() {
    //이거 그 흠 텍스트 남아있으면 placeholder 이펙트 계속 유지시키는거
    if (selectInput.value != "") {
      selectPlaceholder.classList.add("active");
    } else {
      selectPlaceholder.classList.remove("active");
    }
  }
}

// FIXME: 이거 password는 emailcheck 이 아니라 passwordcheck 함수 만들어서 해야할듯. 흠 이거 modal은 email,password 다 바꿔야할거 같은데 왜냐면 modal에는 email이랑 mobile동시에 유효성 체크한다. -> 모바일 패스함. 그래서 그냥 password만 해주면 될듯

//TODO:valid check 이거는 type비교로 두 개로 나누면 될거 같음. 내가 해야될건 emailCheck 대신 apssword check
function validCheck(input) {
  if (input.type == "email") {
    if (emailCheck(input.value)) {
      input.classList.remove("unvalid");
      input.classList.add("valid");
      // TODO: 이거 unvalid 된다음에 valid 되면 unvalid 추가한다음에 valid 를 추가하게 됨. 그래서 이거 동작 구동 유연하게 바꿔야할듯
      if (input.id == "email") {
        $("#close-circle").css("visibility", "hidden");
      } else if (input.id == "email2") {
        $("#close-circle2").css("visibility", "hidden");
      } else if (input.id == "modal-email") {
        $("#close-circle3").css("display", "none");
      }
    } else {
      input.classList.remove("valid");
      input.classList.add("unvalid");
      if (input.id == "email") {
        $("#close-circle").css("visibility", "visible");
      } else if (input.id == "email2") {
        $("#close-circle2").css("visibility", "visible");
      } else if (input.id == "modal-email") {
        $("#close-circle3").css("display", "flex");
      }
    }
  } else if (input.type == "password") {
    console.log("패스워드 타입 검증");
    if (passwordCheck(input.value)) {
      input.classList.remove("unvalid");
      input.classList.add("valid");
      //todo: valid 추가
      //todo: 일단 if로 아이디 따로 설정 안해놨음. 내가 여태한거에서 password 하나만 있으니까. 그래서 일단은 패스F
      $("#close-circle4").css("display", "none");
    } else {
      input.classList.remove("valid");
      input.classList.add("unvalid");
      //todo:unvalid 추가
      $("#close-circle4").css("display", "flex");
    }
  }
}

//FIXME: 이메일이나 패스워드나 한번 true 받고 나서 다시 내용 전부 다 지우면 false가 안됨. -> 이거 그냥 TextCheck 지워버리니까 됐음.
//FIXME: 그리고 아이콘도 after로 달아야할거 같음. 이거 after로 안 달으니까 circle4 들어가면 위치가 바뀜  -> 이거먼저 하자. 너무 쉽게 고쳤음. 그ㅇ %가 아니라 px 로 주면 고정값 돼서 알아서 고정되네

function emailCheck(email_adress) {
  email_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
  if (email_adress != "") {
    console.log("이메일어드레스 낫널");
    if (email_regex.test(email_adress)) {
      console.log("이메일형식 오케");
      return true;
    } else {
      console.log("이메일형식 아님");
      return false;
    }
  }
}

function passwordCheck(passwordInput) {
  if (passwordInput.length < 4 || passwordInput.length > 60) {
    return false;
  } else if (passwordInput.length >= 4 && passwordInput.length <= 60) {
    return true;
  }
}

//todo: sign in 버튼 눌렀을때 login modal 뜨게 하고, 스크롤 안 되게 하기

var modalCheck = false;

$(".signin button").click(function () {
  $(".modal-login").css("display", "flex");
  // $('body').css('overflow','hidden');
  //FIXME: 이거 흠, 로그인 모달 고정시킬라 했는데 고정시키면 뭔가 불편해보여서 걍 없앴음
  modalCheck = true;
});

//todo: modal-login x버튼 누르면 꺼지게 하기

$(".xi-close").click(function () {
  $(".modal-login").css("display", "none");
  // $('body').css('overflow','visible');
  modalCheck = false;
});

//FIXME: 이것도 뭔가 오히려 불편한거 같아서 그냥 성능에서 지움. 이게 로그인 모달 밖 누르면 모달 꺼지게 하는거임.

// $('.modal-login').click(function(e){
//   // e.stopPropagation;
//   if(modalCheck=true && e.target == this){
//   $('.modal-login').css('display','none');
//   $('body').css('overflow','auto');
//   modalCheck= false;
//   }}
// )

//todo: 로그인 모달에서 eye-icon 클릭 사용

var eyeOn = $("#eye-on");
var eyeOff = $("#eye-off");

eyeOn.click(function () {
  $(".modal-password-input").attr("type", "text");
  eyeOn.css("visibility", "hidden");
  eyeOff.css("visibility", "visible");
});

eyeOff.click(function () {
  $(".modal-password-input").attr("type", "password");
  eyeOff.css("visibility", "hidden");
  eyeOn.css("visibility", "visible");
});

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
