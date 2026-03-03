document.addEventListener("DOMContentLoaded", () => {
  const headerTarget = document.getElementById("site-header");
  const footerTarget = document.getElementById("site-footer");

  const loadPartial = (target, path) => {
    if (!target) return Promise.resolve();
    return fetch(path)
      .then((response) => response.text())
      .then((html) => {
        target.innerHTML = html;
      });
  };

  Promise.all([
    loadPartial(headerTarget, "menu.html"),
    loadPartial(footerTarget, "footer.html"),
  ])
    .then(() => {
    if (window.initTimnetUI) {
      window.initTimnetUI();
    }
  })
    .catch(() => {});
});
