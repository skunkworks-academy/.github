(function () {
  // Highlight active nav based on URL path
  const path = window.location.pathname.toLowerCase();
  document.querySelectorAll(".nav__item").forEach(a => {
    const href = a.getAttribute("href").toLowerCase();
    // Rough match for directories
    if (path.endsWith(href.replace("./", "")) || path.includes(href.replace("./", ""))) {
      a.setAttribute("aria-current", "page");
    }
  });

  // Card search
  const search = document.getElementById("search");
  const cards = Array.from(document.querySelectorAll("#cards .card"));
  if (!search || !cards.length) return;

  search.addEventListener("input", () => {
    const q = search.value.trim().toLowerCase();
    cards.forEach(card => {
      const text = card.innerText.toLowerCase();
      card.style.display = text.includes(q) ? "" : "none";
    });
  });
})();
