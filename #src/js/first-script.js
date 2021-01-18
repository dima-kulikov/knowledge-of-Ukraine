btn__year.onclick = function(){
  
    let answer = document.getElementById("answer__year");
    let text = document.getElementById("text__year").value;
    let year = new Date().getFullYear();

    if(text == year){
      answer__year.innerText = "Верно";
      year__img.style.backgroundImage = 'url(./img/yes.png)'
    }else if (text == "") {
      answer__year.innerText = "Вы ничего не ввели";
      // year__img.style.backgroundImage = 'url(./img/no.png)'
    }
    else if (text != parseInt(text)){
       answer__year.innerText = "Используйте только числа!";
       year__img.style.backgroundImage = 'url(./img/no.png)'
    }
    else if (text < year) {
      answer__year.innerText = "Прошло уже больше лет...";
      year__img.style.backgroundImage = 'url(./img/no.png)'
    } else if (text > year) {
      answer__year.innerText = "Слишком далеко";
      year__img.style.backgroundImage = 'url(./img/no.png)'
    } else {
      answer__year.innerText = "ошибка";
      year__img.style.backgroundImage = 'url(./img/no.png)'
    }
}
// function answer-шьп() {
//     if ()
//     graf.style.backgroundImage = 'url(./images/airbrushing/pulia.png)';
//   }