let mainText = document.querySelector("h1");

window.addEventListener('scroll',function(){
    let value = window.scrollY;
    console.log("scrolly",value);

    if(value>200){
        mainText.style.animation='slideBack 1.5s ease-out forwards';
    }else{
        mainText.style.animation='slide 1.5s ease-out'
    }
});