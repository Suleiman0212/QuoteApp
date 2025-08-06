const quoteText = document.getElementById("quote-text");
const quoteAuthor = document.getElementById("quote-author");
const refreshBtn = document.getElementById("refresh-btn");
const form = document.getElementById("quote-form");
const formStatus = document.getElementById("form-status");
const API_BASE = "http://localhost:3000";

async function loadQuote() {
  const res = await fetch(`${API_BASE}/read_quote`);
  const data = await res.json();
  quoteText.textContent = `"${data.text}"`;
  quoteAuthor.textContent = `– ${data.author}`;
}

refreshBtn.addEventListener("click", loadQuote);

// Form submit handler
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const author = formData.get("author");
  const text = formData.get("text");

  const res = await fetch(`${API_BASE}/write_quote`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ author, text }),
  });

  if (res.ok) {
    form.reset();
    formStatus.classList.remove("hidden");
    formStatus.textContent = "✅ Quote added!";
    loadQuote();
    setTimeout(() => formStatus.classList.add("hidden"), 3000);
  } else {
    formStatus.classList.remove("hidden");
    formStatus.textContent = "❌ Failed to add quote.";
  }
});

// Initial quote on load
loadQuote();

