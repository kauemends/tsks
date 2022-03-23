const username = window.prompt("Enter your name: ");
const today = new Date();
const time = today.getHours()
const h2 = document.getElementsByClassName("current-time")
const morning = document.createTextNode(`Good morning, ${username}`)
const afternoon = document.createTextNode(`Good afternoon, ${username}`)
const night = document.createTextNode(`Good night, ${username}`)


function currentTime() {
    if (time <= 11 && time >= 5) {
        h2[0].appendChild(morning)
    } if (time <= 17 && time >= 12) {
        h2[0].appendChild(afternoon)
    } if (time <= 4 || time >= 18) {
        h2[0].appendChild(night)
    }
}

currentTime();