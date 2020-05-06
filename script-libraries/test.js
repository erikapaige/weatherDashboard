console.log("test")
let city = localStorage.getItem("city")
localStorage.setItem("city", "test")

console.log("after", localStorage.getItem("city"))


let history = localStorage.getItem
  ("cityweather")



if (!history) {
  history = []
} else {
   history = JSON.parse(history)
}
console.log("history: ", history)


localStorage.setItem("history", "Los Angeles")
