document.addEventListener("DOMContentLoaded", () => {
  const bubble = document.getElementById("petSpeech");
  const text = document.getElementById("petText");

  const messages = [
    "Bem-vindo!! 🐾",
    "Pronto para adotar?",
    "Um amigo te espera 💛"
  ];

  let index = 0;

  function showMessage() {
    text.textContent = messages[index];
    bubble.classList.add("show");

    setTimeout(() => {
      bubble.classList.remove("show");
      index = (index + 1) % messages.length;
    }, 3000);
  }

  showMessage();
  setInterval(showMessage, 4000);
});
