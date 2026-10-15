function personalHi(name, age){
    const data = new Date()
    let hour = data.getHours()
    let minutes = data.getMinutes()

    if (age < 18){
        ans = 18 - age
        alert("Давай попробуешь через " + ans + " лет")
        return
    }
    else{
        alert("Hi, " + name + "\nсегодня: " + data.getDate() + "." + data.getMonth() + "." + data.getFullYear() + ", " + hour + ":" + minutes)
    
        if (minutes > 30){
            hour += 1
        } 
    
        if (hour >= 8 && hour <= 12){
            console.log("Утро")
        }
        if (hour >= 13 && hour <= 17){
            console.log("День")
        }
        if (hour >= 18 && hour <= 22){
            console.log("Вечер")
        }
        if (hour >= 23 && hour <= 8){
            console.log("Ночь")
        }
    } 
}

let name_ = prompt("Введите ваше имя!")
let age_ = +prompt("Введите возраст")

personalHi(name_, age_)