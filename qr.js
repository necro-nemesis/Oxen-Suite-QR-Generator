class OSQrGenerator{
  constructor(name, defaultData, image, textFieldId, canvasId) {

    this.name = name;
    this.defaultData = defaultData;
    this.qrData = document.getElementById(textFieldId);
    this.qrCode = new QRCodeStyling({
      width: 300,
      height: 300,
      data: this.defaultData,
      image: image,
      dotsOptions: {
        color: "#000000",
        type: "rounded"
      },
      backgroundOptions: {
        color: "#e8ebee",
      }
    });

    this.qrCode.append(document.getElementById(canvasId));

    this.update = this.update.bind(this);
    this.download = this.download.bind(this);
  }

  update() {
    let newQrData = this.qrData.value;
    if (newQrData.length === 0) newQrData = this.defaultData;
    this.qrCode.update({
      data: newQrData
    });
  }

  download() {
    this.qrCode.download({
      name: this.name,
      extension: "jpeg"
    });
  }
}

const session = new OSQrGenerator("SessionAddress", "https://getsession.org/", "session_icon.png", 'dataInput', 'canvas');
const oxen = new OSQrGenerator("OxenWallet", "https://oxen.io/", "oxen_icon.png", 'oxenDataInput', 'oxenCanvas');