document.addEventListener("DOMContentLoaded", () => {
  const searchBar = document.getElementById("search-bar");
  var items;
 
 

  //* ajax
  //! JQuery로 하면 더 간단하다네
  // todo: fetch 함수는 response객체를 반환(이름이 response가 아니어도 됨). 이후 response.json()을 사용하여 response 객체 내부에 있는 json 문자열을 javascript 객체로 변환한다. 여기서 response는 store.json 이라는 파일의 반환 객체일 뿐이지 json 그 자체가 아님. json 내용을 포함한 객체가 response이고 이 내부에 있는 json 문자열을 바꿔서 js에서 사용할 수 있도록 파싱하는 단계가 response.json()임. 결론 response내부의 json을  - > js 객체로 바꾸는거
  fetch("./js/store.json")
    .then((response) => response.json())
    .then((data) => {
      data.products.forEach((itemData) => {
        //todo: div item1만들고, draggable true랑 id는 item1,2,3,4 이런식으로 늘려줘야됨.
        var itemId = itemData.id;
        var itemTitle = itemData.title;
        var itemBrand = itemData.brand;
        var itemPhoto = itemData.photo;
        var itemPrice = itemData.price;

        const divItem1 = document.createElement("div");
        divItem1.classList.add("item1");
        divItem1.id = "item" + itemId;
        divItem1.draggable = true;
        // divItem1.id = itemId;
        // divItem1.photo = itemPhoto;
        divItem1.innerHTML = `<img src="${itemPhoto}" alt='' draggable='false'><h4 id="item-title">${itemTitle}</h4><h6>${itemBrand}</h6><p id="itemPrice">${itemPrice}</p><input type='button' value='담기'><input id="item-close-button" type='button' value='장바구니에서 빼기'>`;
        // TODO: 밥먹고와서 오류 체킹, 그리고 이거 items에 넣어야되는지 아닌지 확인해봐야할듯. append랑 이거랑 차이가 뭐지 왜 안되지
        // index++;

        // document.querySelector(".items").insertAdjacentHTML('beforeend',divItem1);
        //! insertAdjacentHTML로 할거면 divItem1이라는 (DOM요소)변수로 보낼게 아니라 html 문자열 형식으로 넣어야함.
        document.querySelector(".items").appendChild(divItem1);
      });
      items = document.querySelectorAll(".item1");
      // * items 이렇게 재정의 해주니까 검색 기능도 자동으로 돌아왔음
      items.forEach(function (item) {
        item.addEventListener("dragstart", dragstart);
      });
    })
    .catch((error) => {
      console.error("데이터 안넘어옴");
    });

  // *드래그 이벤트
  // FIXME: ajax 로 데이터 받아오고 나선 드래그 해도 안 넘어오는오류 생김. 다시 바꿔야함.
  var cart = document.getElementsByClassName("cart")[0];
  // ! [0] 을 안하면 cart라는 요소가 하나뿐이라도 이를 컬렉션으로 반환함. 근데 addEvenetListener는 컬렉션이 아닌 개별 요소의 메서드이기에 [0] 안 하면 작동 안 함.
  function dragstart(event) {
    event.dataTransfer.setData("text/plain", event.target.id);
    // event.target.style.opacity = "0.5";
  }

  function dragover(event) {
    event.preventDefault();

    //! prevenetDefault 해놔야 잘 된다네, 이유는 뭐지
    // * 이유 찾아옴. dragover가 실행될때 기본적으로 드롭 영역 위에서 마우스 커서 모양이 금지 표시로 됨. 근데 prevenetDefault해놓으면 드롭 영역을 유효한 드롭 타겟으로 인식 시킬수 있다는걸 시각적으로 보여줄 수 있음.
  }
  function drop(event) {
    event.preventDefault();

     var idCount1 = 0,
      idCount2 = 0,
      idCount3 = 0,
      idCount4 = 0;
    var total = 0;
    //* drop 이벤트는 기본적으로 일반적으로 드래그된 요소를 해당 위치에 드롭하느 ㄴ것이 아니라 새로운 페이지를 열음. 그래서 그 동작 막으려면 이거 씀
    const itemId = event.dataTransfer.getData("text/plain");
    // text/plain은 데이터 유형을 (문자열)일반 텍스트로 지정하는거. 전송되는 데이터가 일반 텍스트라는걸 나타내는 거임.
    const item = document.getElementById(itemId);
    // const cloneItem = item.cloneNode(true);
    // event.target.appendChild(cloneItem);
    document.querySelector(".cart p").style.display = "none";
    cart.insertAdjacentHTML("beforeend", item.outerHTML);
    var cartItemPrice = document.querySelectorAll(".cart .item1 #itemPrice");
    var cartItemsTitle = document.querySelectorAll(".cart .item1 #item-title");
    
    
    function titleUpdate(item){
      if (item.textContent == "식기세척기") {
        idCount1++;
      } else if (item.textContent == "원목 침대 프레임") {
        idCount2++;
      } else if (item.textContent == "천연 디퓨저 세트") {
        idCount3++;
      } else if (item.textContent == "시원한 서큘레이터") {
        idCount4++;
      }
      document.querySelector(".cart-items").innerHTML =
      "담은 물품:" +
      "식기세척기:" +
      idCount1 +
      "원목:" +
      idCount2 +
      "천연:" +
      idCount3 +
      "서큘레이터:" +
      idCount4;
    }

    function titleDelete(item){
      if (item.textContent == "식기세척기") {
        idCount1--;
      } else if (item.textContent == "원목 침대 프레임") {
        idCount2--;
      } else if (item.textContent == "천연 디퓨저 세트") {
        idCount3--;
      } else if (item.textContent == "시원한 서큘레이터") {
        idCount4--;
      }
      document.querySelector(".cart-items").innerHTML =
      "담은 물품:" +
      "식기세척기:" +
      idCount1 +
      "원목:" +
      idCount2 +
      "천연:" +
      idCount3 +
      "서큘레이터:" +
      idCount4;
    }

    cartItemsTitle.forEach((item) => {
      titleUpdate(item);
    });

    cartItemPrice.forEach((item) => {


      var selectPrice = parseInt(item.textContent);

      total += selectPrice;
      // document.querySelector('#total-price').innerHTML = '최종가격:';
      // document.querySelector('#total-price').insertAdjacentHTML("beforeend",total+"원");
      // ? insertAdjacentHTML은 기존거 남기지만, 그냥 innerHTML로 다 해버리면 기존거 안 남기고 다 지워버림.

      document.querySelector("#total-price").innerHTML =
        "최종가격:" + total + "원";
    });
    // document.querySelector('#total-price').insertAdjacentHTML("beforeend",cartItemPrice);

    //* 장바구니에서 항목 뺄 때
    //! FIXME: 지금 drop 될때만 작동함.   
    cartInItems = document.querySelectorAll("#item-close-button");

    cartInItems.forEach((item) => {
      item.addEventListener("click", function () {
        const itemPriceElement = this.parentElement.querySelector("#itemPrice");
        const itemTitleElement = this.parentElement.querySelector("#item-title");
        if(itemPriceElement){
          total -= parseInt(itemPriceElement.textContent);
          document.querySelector("#total-price").innerHTML = "최종가격:" + total + "원";
        }

        //todo: 이 titlecheck안에 들어갈 item을 remove 버튼이 눌러진 거의 형제 인접자(itemtitle)로 하면 될듯.
        
        titleDelete(itemTitleElement)
        item.closest(".item1").remove();
        
        
        //todo: 지금 삭제 버튼 누르면 삭제까지는 됨. 근데 이렇게 했을때, 담은 물품이랑 최종 가격이 업데이트가 안 돼. 
      });
    });
  }
  // var items = document.querySelectorAll(".item1");
  //! fetch 통해서 게시글 데이터를 동적으로 받아오고 나서부터는 items가 맨 처음 초기화될 때 저장되는거라 null 값이 저장됨. 그래서 이거 동적 요소에 대해 이벤트 리스너 추가해야 한다는듯.
  // todo: 리스너 달거나 변수에 mutationObbserver 달아서 변하는 상태에 따라 변수 바꾸는 방법이 있다는데, 두 개 다 해볼까? 근데 변수가 변하는거는 addEventListner로 할만한게 없는데 mutation으로 해야되나

  // var items = document.querySelectorAll(".item1");
  // items.forEach(function (item) {드래그 되고 있는 항목의 opacity를 0.5로 하려면 어떻게 해?

  //   item.addEventListener("dragstart", dragstart);
  // });

  // items.forEach(function(item){
  //     item.addEventListener("dragstart",dragstart);
  // });
  cart.addEventListener("dragover", dragover);
  //! drop이 dragover끝났을때 드래그된 요소가 유효한 드롭 대상 위에 놓일 때 발생. dragover은 요소가 유효한 드롭 대상 위로 드래그 되는 '동안' 계속 발생.
  cart.addEventListener("drop", drop);

  // * 검색 이벤트
  //FIXME: 이것도 fetch 로 받아오고 나선 작동 안함 수정해야할듯. 수정했음, items값이 초기에 null이라서 fetch 이후 다시 설정하도록 하니까 잘 되네.
  searchBar.addEventListener("input", (e) => {
    const searchValue = e.target.value.toLowerCase();

    items.forEach((item) => {
      const itemName = item.querySelector("h4").textContent;
      const itemDescription = item.querySelector("h6").textContent;
      if (
        itemName.toLowerCase().includes(searchValue) ||
        itemDescription.toLowerCase().includes(searchValue)
      ) {
        item.style.display = "block";
        if (itemName.includes(searchValue)) {
          let highlightedText = itemName.replace(
            searchValue,
            `<span style="background-color: yellow;">${searchValue}</span>`
          );
          //! replace 는 문자 전체를 바꾸는게 아니라 itemName이랑 searchValue랑 겹치는 특정 문자만 바꾸는거임.
          item.querySelector("h4").innerHTML = highlightedText;
        }
        if (itemDescription.includes(searchValue)) {
          let highlightedText2 = itemDescription.replace(
            searchValue,
            `<span style="background-color:yellow;">${searchValue}</span>`
          );
          item.querySelector("h6").innerHTML = highlightedText2;
        }
        // else if(itemDescription.includes(searchValue)){

        // }
      } else {
        item.style.display = "none";
      }
    });
  });

  //* 구매하기 버튼 눌렀을 때 이벤트

  document
    .querySelector(".cart-section input")
    .addEventListener("click", function () {
      document.querySelector(".modal").style.visibility = "visible";
    });

  document
    .querySelector("#close-button")
    .addEventListener("click", function () {
      document.querySelector(".modal").style.visibility = "hidden";
    });


    //* 영수증 파트. canvas로 하면 이미지처럼 사용할 수 있음.
    
    var canvas = document.getElementById('canvas'); 
    var c = canvas.getContext('2d');
    c.font = '20px dotum';
    c.fillText('영수증', 10, 30);
    c.font = '15px dotum';
    
    c.fillText('안녕하세요', 50, 100);
    c.fillText('반갑습니다', 50, 130); 
    
    
    document.querySelector('.button #payment').addEventListener("click",function(){
      document.querySelector(".canvas-container").style.visibility = "visible";
      var currentDate = new Date();
      c.fillText(currentDate, 10, 50);
      c.font = '30px dotum';
      c.fillText('아 몰랑 영수증 부분은 생략~', 50, 200);
      console.log(currentDate);
      
      if(idCount1>0){
        c.fillText('식기세척기', 50, 100);
      }
      if(idCount2>0){
        c.fillText('원목 침대 프레임', 50, 200);
      }
      if(idCount3>0){
        c.fillText('천연 디퓨저 세트', 50, 300);
      }
      if(idCount4>0){
        c.fillText('아 몰랑 영수증 부분은 생략~', 50, 400);
      }

      document.querySelectorAll('.cart .item1').forEach(item=>{
        item.querySelector('#item-title').text
        //title이랑 brand랑 가격 찾아야하고, 수량만 위에 변수 그대로 가져오고. 합계도 그대로 가져와야함.
      })
    });
    
    document.querySelector('#canvas-close').addEventListener("click",function(){
      document.querySelector(".canvas-container").style.visibility = "hidden";
    })

});
