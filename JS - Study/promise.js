var promise = new Promise(function(success,fail){
    // success();
    // fail();
    // ? sucess가 되면 then 이 실행, fail 이 되면 catch 실행 되도록 하면 됨. promise는 ajax나 settimeout 같은 비동기 처리에 사용하는듯. a 인자가 then, b 인자가 나오면 catch 로 가는거.

    var calc = 1+1;
    success();
    fail();
    // 이게 성공하면 success를 불러오고 then 으로 , 실패하면 fail을 불러오고 catch로 이동하도록 하면 됨

    //* 이런 형태의 Promise를 기본으로 탑재하고 있는 것이 fetch()와 Jquery.ajax()임.
     
});
// * 프로미스는 성공과 실패를 나누는 객체


promise.then(function(){
    console.log("성공함");
    //! 여기에는 true면 실행하는 fianlly나 catch도 가능. 일반 then 이랑 뭐가 다르냐? promise는 1번 실행후 2번 실행해주세요에서 더 진화돰. 1번 성공이면 2번해주고 아니라면 3번 해줘 ~ 약간 이런 뜻 . promise 를 쓰는 이유 =  좀 더 직관적이고 성공 / 실패에 맞춰 각각 다른 코드를 실행할 수 있는 디자인 패턴을 만들고 싶을 때.

}).catch(function(){
    console.log("실패함");
})