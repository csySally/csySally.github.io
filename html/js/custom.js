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

function sendEmail() {
  var firstName = document.getElementById("firstname").value;
  var lastName = document.getElementById("lastname").value;
  var message = document.getElementById("message").value;

  var subject =
    "New Contact Form Submission from " + firstName + " " + lastName;
  var body = message;

  var mailtoLink =
    "mailto:your@email.com?subject=" +
    encodeURIComponent(subject) +
    "&body=" +
    encodeURIComponent(body);
  window.location.href = mailtoLink;
}
