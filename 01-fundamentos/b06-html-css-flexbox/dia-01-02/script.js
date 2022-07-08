const sendButton = document.getElementById("send");

sendButton.addEventListener("submit", function (event) {
  if (document.getElementById("agreement").checked === false) {
    event.preventDefault();
    console.log("Não envia");
  }
  console.log(event);
});
