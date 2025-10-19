const textarea = document.getElementById("message");
const charCount = document.getElementById("charCount");
const form = document.getElementById("feedbackForm");

textarea.addEventListener("input", () => {
  const length = textarea.value.length;
  charCount.textContent = `${length} / 200 characters`;

  if (length >= 200) {
    textarea.value = textarea.value.substring(0, 200);
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Feedback submitted successfully!");
  form.reset();
  charCount.textContent = "0 / 200 characters";
});
