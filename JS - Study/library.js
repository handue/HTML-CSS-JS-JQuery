// todo: 하지만 이 방법은 ES6이라 호환성이 그리 좋지 않아 인터넷 익스플로어에서 호환하지 않음, 리액트나 앵귤러에선 이방법을 사용하나 가장 기본적인 방법은 그냥 script 에다가 src="" 해서 가져오는 것.

var number = 10;
var b =20;
var c =30;
export default c;
// ! export default는 딱 한 번만 사용 가능함. 여러개를 export하고 싶으면 default 뺴고 dkfocjfja godigka 
// export {a};
// export {b}; 
// or 
export{number,b};

// ? 사실 그냥 export var a =10; 이라고 해도 됨. 물론 export default c; export {a,b}; 도 가능함.
// a expoert default해야 import해서 html 파일에서 사용할 수 있음
// import 하는거랑 export하는거랑 변수 이름이 겹쳐야 하는건 아닌데, 이왕이면 이해하기 쉽게 겹치게 해놓는게 좋을듯?