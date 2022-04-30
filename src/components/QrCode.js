import React, { useEffect, useRef, useState } from "react";
import QRCodeStyling from "qr-code-styling-node";

const qrCode = new QRCodeStyling({
  width: 110,
  height: 110,
  image:
    "../images/favicon.ico",
  dotsOptions: {
    color: "#4267b2",
    type: "rounded"
  },
  imageOptions: {
    crossOrigin: "anonymous",
    margin: 1
  }
});

const QrCode = (props) =>  {
  const ref = useRef(null);
  useEffect(() => {
    qrCode.append(ref.current);
  }, []);
  qrCode.update({
      data: props.url
  });
  return (
      <div ref={ref} />
      );
}

export default QrCode;
