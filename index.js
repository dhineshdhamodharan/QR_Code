var qrcode = new QRCode(document.getElementById("qrcode"), {
  text: "https://www.frontendmentor.io/",
  height: 160,
  width: 150,
  colorDark: "#000000",
  colorLight: "#ffffff",
  correctLevel: QRCode.CorrectLevel.H,
});
