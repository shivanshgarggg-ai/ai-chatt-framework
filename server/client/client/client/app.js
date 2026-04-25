async function send() {
  const message = document.getElementById("input").value;

  const res = await fetch("http://localhost:3000/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ message })
  });

  const data = await res.json();
  document.getElementById("output").innerText = data.reply;
}
