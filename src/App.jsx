import React from "react";
import "./App.css";
import QRCode from "./QRCode";
import generateQRCode from "./QRCodeGenerator";

export default function App() {
  let qrCode = generateQRCode(50);

  return (
    <div className="App">
      <h1>QR Code</h1>
      <QRCode code={qrCode} />
    </div>
  );
}
