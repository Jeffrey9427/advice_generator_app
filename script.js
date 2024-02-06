const url = "https://api.adviceslip.com/advice";

const adviceNo = document.getElementById("advice-no");
const adviceText = document.getElementById("advice-text");
const diceButton = document.querySelector(".dice");

const fetchAdvice = async() => {
    const response = await fetch(url);
    const data = await response.json();

    adviceNo.textContent = `ADVICE #${data.slip.id}`
    adviceText.textContent = `"${data.slip.advice}"`
}

diceButton.addEventListener("click", fetchAdvice);
