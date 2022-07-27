let userName = prompt("Ismingizni kriting");
let userYear = +prompt("Tug'ilgan yilingizni kriting");
function user() {
  let usr = ("Ismingiz " + userName + ", yoshingiz " + (2022 - userYear) + " da");
  alert(usr)
}
user()