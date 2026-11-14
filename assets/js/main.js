// Small script: footer year + image lightbox. No dependencies.
(function () {
  var y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();

  var dlg = document.getElementById("lightbox");
  if (!dlg || typeof dlg.showModal !== "function") return;
  var img = dlg.querySelector("img");
  var cap = dlg.querySelector(".lb-cap");
  var prev = dlg.querySelector("[data-prev]");
  var next = dlg.querySelector("[data-next]");
  var group = [];
  var at = 0;

  function show(i) {
    at = (i + group.length) % group.length;
    var b = group[at];
    img.src = b.getAttribute("data-full");
    img.alt = b.getAttribute("data-caption") || "";
    cap.textContent = (b.getAttribute("data-caption") || "") + (group.length > 1 ? "  (" + (at + 1) + " of " + group.length + ")" : "");
    prev.hidden = next.hidden = group.length < 2;
  }

  document.addEventListener("click", function (e) {
    var b = e.target.closest ? e.target.closest(".shot") : null;
    if (!b) return;
    var g = b.getAttribute("data-gallery");
    group = g ? Array.prototype.slice.call(document.querySelectorAll('.shot[data-gallery="' + g + '"]')) : [b];
    // the same image can appear as cover and thumb: keep the first of each
    var seen = {};
    group = group.filter(function (x) { var k = x.getAttribute("data-full"); if (seen[k]) return false; seen[k] = 1; return true; });
    var start = 0;
    group.forEach(function (x, i) { if (x.getAttribute("data-full") === b.getAttribute("data-full")) start = i; });
    show(start);
    dlg.showModal();
  });
  prev.addEventListener("click", function () { show(at - 1); });
  next.addEventListener("click", function () { show(at + 1); });
  dlg.querySelector("[data-close]").addEventListener("click", function () { dlg.close(); });
  dlg.addEventListener("click", function (e) { if (e.target === dlg) dlg.close(); });
  dlg.addEventListener("keydown", function (e) {
    if (group.length < 2) return;
    if (e.key === "ArrowLeft") show(at - 1);
    if (e.key === "ArrowRight") show(at + 1);
  });
})();
