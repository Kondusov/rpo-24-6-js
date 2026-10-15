let username1;
    let age1;
    
    function gett(event){
        event.preventDefault();
        username1 = document.getElementById("username").value;
        if(username1.length < 2) res.textContent = "Имя некорректно"; return;
        age1 = document.getElementById("age").value;
        if(age1 < 0 ||age1 > 199) res.textContent = "Возраст некорректен"; return;
        if(data.getHours() >= 4 && data.getHours() <= 12){res.textContent += "Доброе утро, "}
        if(data.getHours() >= 13 && data.getHours() <= 16){res.textContent += "Добрый день, "}
        if(data.getHours() >= 17 && data.getHours() <= 23){res.textContent += "Добрый вечер, "}
        if(data.getHours() >= 0 && data.getHours() <= 4){res.textContent += "Доброе утро, "}
        res.textContent += username1;
        if(age1 < 18) res.textContent +=", вы не проходите приходите через " + (18 - age1) + " лет";
        if(age1 >= 18) res.textContent +=", вы проходите 🎆🧨🎇✨🎊🎉";
    }
    let form1 = document.getElementById("forma");
    let res = document.getElementById("result");
    const data = new Date();
    form1.addEventListener("submit", gett)