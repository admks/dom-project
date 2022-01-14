function func1() {
    return Math.ceil(Math.random() * 50)
}
let sayi = func1()
let checkButton = document.getElementById("check")
let input = document.getElementById("input")
let message = document.querySelector(".message")
let secretNumber = document.querySelector(".number")
let score = document.querySelector(".score")
let again = document.querySelector(".again")
let point = 10
let highScore = 0
let highClass = document.querySelector(".highscore")
checkButton.onclick = () => {
    if ((input.value > 50 || input.value < 1)) {
        message.innerHTML = "Alert! Please write a number between 0 and 50"
    }
    else if (point === 0) {
        message.innerHTML = "You are a Loser"
    }
    else {
        if (input.value > sayi) {
            message.innerHTML = "Aşağı"
            document.body.style.backgroundColor = "blue"
            point--
        }
        else if (input.value < sayi) {
            message.innerHTML = "Yukarı"
            document.body.style.backgroundColor = "red"
            point--
        }
        else {
            message.innerHTML = "Kazandınız"
            secretNumber.innerHTML = sayi
            document.body.style.backgroundColor = "green"
            if (highScore < point) {
                highScore = point
            }
        }
        input.value = ""
        input.focus()
    }
    score.innerHTML = point
    highClass.innerHTML = highScore
    if (point === 0) {
        message.innerHTML = "You are a Loser"
    }
}
again.onclick = () => {
    sayi = func1()
    message.innerHTML = "Start guessing..."
    document.body.style.backgroundColor = "black"
    secretNumber.innerHTML = "?"
    point = 10
    score.innerHTML = point
    input.value = ""
    function func1() {
        return Math.ceil(Math.random() * 50)
    }
    let sayi = func1()
    let checkButton = document.getElementById("check")
    let input = document.getElementById("input")
    let message = document.querySelector(".message")
    let secretNumber = document.querySelector(".number")
    let score = document.querySelector(".score")
    let again = document.querySelector(".again")
    let point = 10
    let highScore = 0
    let highClass = document.querySelector(".highscore")
    checkButton.onclick = () => {
        if ((input.value > 50 || input.value < 1)) {
            message.innerHTML = "Alert! Please write a number between 0 and 50"
        }
        else if (point === 0) {
            message.innerHTML = "You are a Loser"
        }
        else {
            if (input.value > sayi) {
                message.innerHTML = "Aşağı"
                document.body.style.backgroundColor = "blue"
                point--
            }
            else if (input.value < sayi) {
                message.innerHTML = "Yukarı"
                document.body.style.backgroundColor = "red"
                point--
            }
            else {
                message.innerHTML = "Kazandınız"
                secretNumber.innerHTML = sayi
                document.body.style.backgroundColor = "green"
                if (highScore < point) {
                    highScore = point
                }
            }
            input.value = ""
            input.focus()
        }
        score.innerHTML = point
        highClass.innerHTML = highScore
        if (point === 0) {
            message.innerHTML = "You are a Loser"
        }
    }
    again.onclick = () => {
        sayi = func1()
        message.innerHTML = "Start guessing..."
        document.body.style.backgroundColor = "black"
        secretNumber.innerHTML = "?"
        point = 10
        score.innerHTML = point
        input.value = ""
    }
}