function sendMail(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !subject || !message) {
    alert("Please fill in all the fields.");
    return;
  }

  // Basic email validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  const param = {
    name: name,
    email: email,
    subject: subject,
    message: message,
  };

  emailjs.send("service_5j1tf2r", "template_bywwrer", param, "xRqUdoBSWBwOEIw3D")
    .then(function (response) {
      alert("Email sent successfully!");
      document.getElementById("contact").reset();
    })
    .catch(function (error) {
      console.error("Email send failed:", error);
      alert("Failed to send email. Please try again.");
    });
}
