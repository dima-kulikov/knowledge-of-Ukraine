btn__countries.onclick = function(){
    let selection = document.getElementById('country_selection').value;
let img_countries =document.querySelector('.ansver-img-countries');
let finish_bg = document.querySelector('.finish_bg'); 

    if(document.getElementById('ua').checked){
        answer__countries.innerText = "Верно";
        img_countries.style.backgroundImage = 'url(./img/yes.png)';
        finish_bg.style.display = "block";
    }else{
        answer__countries.innerText = "Ответ неправельный";
        img_countries.style.backgroundImage = 'url(./img/no.png)';
    } 
    };

    finish.onclick = function(){
        document.location.reload();
      }