const today = new Date();
const time = today.getHours()
const h2 = document.getElementsByClassName("current-time")
const morning = document.createTextNode("Good morning")
const afternoon = document.createTextNode("Good afternoon")
const night = document.createTextNode("Good night")


function currentTime() {
    if (time <= 11 && time >= 5) {
        h2[0].appendChild(morning)
    } if (time <= 17 && time >= 12) {
        h2[0].appendChild(afternoon)
    } if (time <= 23 && time >= 0) {
        h2[0].appendChild(night)
    }
}

console.log(time);
currentTime();