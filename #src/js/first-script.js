let second_question_1 = document.querySelector('.second_question-1');
let second_question_2 = document.querySelector('.second_question-2');
let second_question_3 = document.querySelector('.second_question-3');
let second_question_4 = document.querySelector('.second_question-4');
let finish_backdrop = document.querySelector('.finish-backdrop'); 

btn__year.onclick = function(){
  
    let answer = document.getElementById("answer__year");
    let text = document.getElementById("text__year").value;
    let year = new Date().getFullYear();
    // let second_question_1 = document.querySelector('.second_question-1');

    let ansver_img = document.querySelector('.ansver-img');


    if(text == year){
      answer__year.innerText = "Верно";
      ansver_img.style.backgroundImage = 'url(./img/yes.png)';
      second_question_2.style.display ="none";
    }else if (text == "") {
      answer__year.innerText = "Вы ничего не ввели";
      // year__img.style.backgroundImage = 'url(./img/no.png)'
    }
    else if (text != parseInt(text)){
       answer__year.innerText = "Используйте только числа!";
       ansver_img.style.backgroundImage = 'url(./img/no.png)';
       second_question_2.style.display ="block";
    }
    else if (text < year) {
      answer__year.innerText = "Прошло уже больше лет...";
      ansver_img.style.backgroundImage = 'url(./img/no.png)';
      second_question_2.style.display ="block";
    } else if (text > year) {
      answer__year.innerText = "Слишком далеко";
      ansver_img.style.backgroundImage = 'url(./img/no.png)';
      second_question_2.style.display ="block";
    } else {
      answer__year.innerText = "ошибка";
      ansver_img.style.backgroundImage = 'url(./img/no.png)';
      second_question_2.style.display ="block";
      
    }
}


top__start.onclick = function(){
  second_question_1.style.display ="none";
}