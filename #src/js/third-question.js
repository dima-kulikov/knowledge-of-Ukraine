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