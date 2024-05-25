document.addEventListener("DOMContentLoaded", () => {
  const searchBar = document.getElementById("search-bar");
  const items = document.querySelectorAll(".item1");

  // *드래그 이벤트
  var cart = document.getElementsByClassName("cart")[0];
  // ! [0] 을 안하면 cart라는 요소가 하나뿐이라도 이를 컬렉션으로 반환함. 근데 addEvenetListener는 컬렉션이 아닌 개별 요소의 메서드이기에 [0] 안 하면 작동 안 함.
  function dragstart(event) {
    event.dataTransfer.setData('text/plain',event.target.id)
  }

  function dragover(event) {
    event.preventDefault();
    //! prevenetDefault 해놔야 잘 된다네, 이유는 뭐지
    // * 이유 찾아옴. dragover가 실행될때 기본적으로 드롭 영역 위에서 마우스 커서 모양이 금지 표시로 됨. 근데 prevenetDefault해놓으면 드롭 영역을 유효한 드롭 타겟으로 인식 시킬수 있다는걸 시각적으로 보여줄 수 있음.
  }
  function drop(event){
    event.preventDefault();
    //* drop 이벤트는 기본적으로 일반적으로 드래그된 요소를 해당 위치에 드롭하느 ㄴ것이 아니라 새로운 페이지를 열음. 그래서 그 동작 막으려면 이거 씀
    const itemId = event.dataTransfer.getData('text/plain');
    // text/plain은 데이터 유형을 (문자열)일반 텍스트로 지정하는거. 전송되는 데이터가 일반 텍스트라는걸 나타내는 거임. 
    const item = document.getElementById(itemId);
    // const cloneItem = item.cloneNode(true);
    // event.target.appendChild(cloneItem);
    document.querySelector(".cart p").style.display = "none";
    cart.insertAdjacentHTML('beforeend', item.outerHTML);
    
  }

    items.forEach(function(item){
        item.addEventListener("dragstart",dragstart);
    });
    cart.addEventListener("dragover",dragover);
    //! drop이 dragover끝났을때 드래그된 요소가 유효한 드롭 대상 위에 놓일 때 발생. dragover은 요소가 유효한 드롭 대상 위로 드래그 되는 '동안' 계속 발생.
    cart.addEventListener("drop",drop);
  

  // *검색 이벤트
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
});
