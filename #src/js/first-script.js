btn__year.onclick = function(){
  
    let answer = document.getElementById("answer__year");
    let text = document.getElementById("text__year").value;
    let year = new Date().getFullYear();
    let second_question = document.querySelector('.second_question');
    if(text == year){
      answer__year.innerText = "Верно";
      year__img.style.backgroundImage = 'url(./img/yes.png)';
      second_question.style.display ="none";
    }else if (text == "") {
      answer__year.innerText = "Вы ничего не ввели";
      // year__img.style.backgroundImage = 'url(./img/no.png)'
    }
    else if (text != parseInt(text)){
       answer__year.innerText = "Используйте только числа!";
       year__img.style.backgroundImage = 'url(./img/no.png)';
       second_question.style.display ="block";
    }
    else if (text < year) {
      answer__year.innerText = "Прошло уже больше лет...";
      year__img.style.backgroundImage = 'url(./img/no.png)';
      second_question.style.display ="block";
    } else if (text > year) {
      answer__year.innerText = "Слишком далеко";
      year__img.style.backgroundImage = 'url(./img/no.png)';
      second_question.style.display ="block";
    } else {
      answer__year.innerText = "ошибка";
      year__img.style.backgroundImage = 'url(./img/no.png)';
      second_question.style.display ="block";
      
    }
}
// function answer-шьп() {
//     if ()
//     graf.style.backgroundImage = 'url(./images/airbrushing/pulia.png)';
//   }