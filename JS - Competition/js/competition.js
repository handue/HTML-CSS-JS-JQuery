document.addEventListener("DOMContentLoaded", () => {
  const searchBar = document.getElementById("search-bar");
  const items = document.querySelectorAll(".item1");

  // *드래그 이벤트
  function dragstart(event) {
    event.dataTransfer.setData('text/plain',event.target.id)
  }

  function dragover(event) {
    event.preventDefault();
  }
  function drop(event){
    event.preventDefault();
    const itemId = event.dataTransfer.getData('text/plain');
    // text/plain
    const item = document.getElementById(itemId);
    event.target.appendChild(item);
  }
    items.forEach(function(item){
        item.addEventListener("dragstart",dragstart);

        cart.addEventListener("dragover",dragover);
        //! drop이 dragover끝났을때 드래그된 요소가 유효한 드롭 대상 위에 놓일 때 발생. dragover은 요소가 유효한 드롭 대상 위로 드래그 되는 '동안' 계속 발생.
        cart.addEventListener("drop",drop);
    })
  

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
