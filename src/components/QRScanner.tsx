import React, { use } from "react";
import { Scanner } from '@yudiel/react-qr-scanner';

const QRScanner = ({ onScan }: { onScan: (result: any) => void; }) => {
  return <Scanner onScan={onScan} />
};

export default QRScanner;
