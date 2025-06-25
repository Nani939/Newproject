// Accordion toggle
document.querySelectorAll(".accordion-header").forEach(button => {
  button.addEventListener("click", () => {
    const content = button.nextElementSibling;
    button.classList.toggle("active");

    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
});

// FAQ Search Filter
document.getElementById("searchInput").addEventListener("input", function () {
  const filter = this.value.toLowerCase();
  document.querySelectorAll(".accordion-item").forEach(item => {
    const question = item.querySelector(".accordion-header").innerText.toLowerCase();
    item.style.display = question.includes(filter) ? "block" : "none";
  });
});