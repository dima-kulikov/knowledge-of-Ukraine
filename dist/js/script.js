btn__year.onclick = function(){
  
    let answer = document.getElementById("answer__year");
    let text = document.getElementById("text__year").value;
    let year = new Date().getFullYear();
    let second_question = document.querySelector('.second_question');
    let ansver_img = document.querySelector('.ansver-img');


    if(text == year){
      answer__year.innerText = "Верно";
      ansver_img.style.backgroundImage = 'url(./img/yes.png)';
      second_question.style.display ="none";
    }else if (text == "") {
      answer__year.innerText = "Вы ничего не ввели";
      // year__img.style.backgroundImage = 'url(./img/no.png)'
    }
    else if (text != parseInt(text)){
       answer__year.innerText = "Используйте только числа!";
       ansver_img.style.backgroundImage = 'url(./img/no.png)';
       second_question.style.display ="block";
    }
    else if (text < year) {
      answer__year.innerText = "Прошло уже больше лет...";
      ansver_img.style.backgroundImage = 'url(./img/no.png)';
      second_question.style.display ="block";
    } else if (text > year) {
      answer__year.innerText = "Слишком далеко";
      ansver_img.style.backgroundImage = 'url(./img/no.png)';
      second_question.style.display ="block";
    } else {
      answer__year.innerText = "ошибка";
      ansver_img.style.backgroundImage = 'url(./img/no.png)';
      second_question.style.display ="block";
      
    }
}

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



btn__countries.onclick = function(){
    let selection = document.getElementById('country_selection').value;
let img_countries =document.querySelector('.ansver-img-countries');
    if(document.getElementById('ua').checked){
        answer__countries.innerText = "Верно";
        img_countries.style.backgroundImage = 'url(./img/yes.png)';
    }else{
        answer__countries.innerText = "Ответ неправельный";
        img_countries.style.backgroundImage = 'url(./img/no.png)';
    } 
    };

