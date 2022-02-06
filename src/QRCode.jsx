import React from "react";

class Pixel extends React.Component {
  render() {
    return (
      <button className={this.props.status === 0 ? "pixel-on" : "pixel-off"}></button>
    );
  }
}
class QRCode extends React.Component {
  render() {
    let code = this.props.code;
    let qrImage = [];
    const qrDim = code[0].length;
    for (let i = 0; i < qrDim; i++) {
      let row = [];
      row.push(
        <div key={i} className="qr-row">
          {code[i].map((r, idx) => (
            <Pixel key={idx} status={r} />
          ))}
        </div>
      );
      qrImage.push(row);
    }

    return <div>{qrImage}</div>;
  }
}

export default QRCode;
