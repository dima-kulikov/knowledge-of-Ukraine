btn__independence.onclick = function(){
  
    let answer__ind = document.getElementById("answer__independence");
    let text__ind = document.getElementById("text__independence").value;
    let year__ind = 1991;
    let ansver_img__ind = document.querySelector('.ansver-img-independence');


    if(text__ind == year__ind){
      answer__ind.innerText = "Верно";
      ansver_img__ind.style.backgroundImage = 'url(./img/yes.png)';
      second_question_3.style.display ="none";
    }else if (text__ind == "") {
      answer__ind.innerText = "Вы ничего не ввели";
      second_question_3.style.display ="block";
    }
    else if (text__ind != parseInt(text__ind)){
       answer__ind.innerText = "Используйте только числа!";
       ansver_img__ind.style.backgroundImage = 'url(./img/no.png)';
       second_question_3.style.display ="block";
    }
    else if (text__ind < year__ind) {
      answer__ind.innerText = "Прошло уже больше лет...";
      ansver_img__ind.style.backgroundImage = 'url(./img/no.png)';
      second_question_3.style.display ="block";
    } else if (text__ind > year__ind) {
      answer__ind.innerText = "Слишком далеко";
      ansver_img__ind.style.backgroundImage = 'url(./img/no.png)';
      second_question_3.style.display ="block";
    } else {
      answer__ind.innerText = "ошибка";
      ansver_img__ind.style.backgroundImage = 'url(./img/no.png)'; 
      second_question_3.style.display ="block";
    }
}