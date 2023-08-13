const textBox = document.getElementById("userText");
const generateButton = document.querySelector(".btn");
const textPrintArea = document.querySelector(".right-side")
var text;

generateButton.addEventListener("click",()=>{
    text = textBox.value.trim().toLowerCase();
    textPrintArea.innerHTML = text;
    console.log(text)
})