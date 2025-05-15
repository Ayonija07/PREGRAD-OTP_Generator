// File: otp.js
function generateOTP() {
  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  document.getElementById("otp-display").innerText = otp;
}

function copyOTP() {
  const otp = document.getElementById("otp-display").innerText;
  if (otp) {
    navigator.clipboard.writeText(otp);
    alert("OTP copied to clipboard!");
  }
}