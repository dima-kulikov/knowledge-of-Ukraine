btn__city.onclick = function(){
  
    let answer__city = document.getElementById("answer__city");
    let text__city = document.getElementById("text__city").value;
    let ansver_img_city = document.querySelector('.ansver-img-city');
    let kiev = text__city.toLowerCase();
    let second_question_1 = document.querySelector('.second_question-1');

    if(kiev == "киев"){
      answer__city.innerText = "Верно";
      ansver_img_city.style.backgroundImage = 'url(./img/yes.png)';
      second_question_1.style.display ="none";
    }
    else if (kiev == ""){
      answer__city.innerText = "Сперва введите значение!";
      ansver_img_city.style.backgroundImage = 'url(./img/no.png)';
      // second_question.style.display ="block";
   }
    else if(kiev !=="киев"){
      answer__city.innerText = "Нет, пробуйте еще !";
      ansver_img_city.style.backgroundImage = 'url(./img/no.png)';
    }
 else {
        answer__city.innerText = "Что-то пошло не так!";
    }
}


