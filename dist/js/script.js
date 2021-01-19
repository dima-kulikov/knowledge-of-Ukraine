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
    let second_question = document.querySelector('.second_question');
    let ansver_img = document.querySelector('.ansver-img');


    if(text__city == "Киев"){
      answer__city.innerText = "Верно";
      ansver_img.style.backgroundImage = 'url(/img/yes.png)';
    //   second_question.style.display ="none";
    }
 else {

        answer__city.innerText = "Что-то пошло не так!";
    }
}




