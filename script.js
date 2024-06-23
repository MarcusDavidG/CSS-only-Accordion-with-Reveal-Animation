document.querySelectorAll(".accordion-toggle").forEach((item) => {
  item.addEventListener("change", (event) => {
    const currentToggle = event.target;
    document.querySelectorAll(".accordion-toggle").forEach((toggle) => {
      if (toggle !== currentToggle) {
        toggle.checked = false;
      }
    });
  });
});
