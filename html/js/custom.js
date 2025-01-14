document.addEventListener("DOMContentLoaded", function () {
  const timelineItems = document.querySelectorAll(".timeline-item");

  timelineItems.forEach((item) => {
    const year = item.getAttribute("data-year");
    const currentYear = new Date().getFullYear();

    if (parseInt(year) <= currentYear) {
      item.querySelector(".content").style.opacity = 1;
      item.querySelector(".content").style.transform = "translateY(0)";
    }
  });
});
