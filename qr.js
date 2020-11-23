qrData = document.getElementById('dataInput');

const qrCode = new QRCodeStyling({
  width: 300,
  height: 300,
  data: "https://getsession.org/",
  image: "SESSION-Vertical-Lockup.png",
  dotsOptions: {
    //color: "#00F782",
    color: "#000000",
    type: "rounded"
  },
  backgroundOptions: {
    color: "#e8ebee",
  }
});

const updateQrData = () => {
  newQrData = qrData.value;
  qrCode.update({
    data: newQrData
  });
};

const download = () => qrCode.download("jpeg");

qrCode.append(document.getElementById('canvas'));
