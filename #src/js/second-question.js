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


