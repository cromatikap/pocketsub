import React, { useState, useEffect } from "react";
import { Scanner } from '@yudiel/react-qr-scanner';
import { HiInformationCircle } from "react-icons/hi";
import { Alert, Button } from "flowbite-react";

const QRScanner = ({ onScan }: { onScan: (result: any) => void; }) => {
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const handlePermissionChange = (permissionStatus: PermissionStatus) => {
      setError(permissionStatus.state === 'granted' ? null : 'Camera permission not granted');
    };

    const checkCameraPermission = async () => {
      try {
        const permissionStatus = await navigator.permissions.query({ name: "camera" as PermissionName });
        handlePermissionChange(permissionStatus);
        permissionStatus.onchange = () => handlePermissionChange(permissionStatus);
      } catch {
        setError('Camera permission not supported');
      }
    };

    checkCameraPermission();
  }, []);

  const requestCameraPermission = async () => {
    try {
      await navigator.mediaDevices.getUserMedia({ video: true });
      setError(null);
    } catch {
      setError('Camera permission not supported');
    }
  };

  return (
    <>
      {error ? (
        <Alert color="failure" icon={HiInformationCircle}>
          <span className="font-medium">Info alert!</span> {error}
          <Button color="failure" onClick={requestCameraPermission}>Try again</Button>
        </Alert>
      ) : (
        <Scanner formats={["qr_code"]} onScan={onScan} />
      )}
    </>
  );
};

export default QRScanner;