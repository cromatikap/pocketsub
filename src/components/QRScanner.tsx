import { Scanner } from '@yudiel/react-qr-scanner';
import React, { useState, useEffect } from 'react';
import { HiInformationCircle } from 'react-icons/hi';
import { Alert } from "flowbite-react";

const QRScanner = ({ onScan }: { onScan: (result: any) => void; }) => {
  const [permissionState, setPermissionState] = useState<'granted' | 'prompt' | 'denied' | 'unsupported' | null>(null);

  useEffect(() => {
    const checkCameraPermission = async () => {
      try {
        const permissionStatus = await navigator.permissions.query({ name: 'camera' as PermissionName });
        setPermissionState(permissionStatus.state);

        permissionStatus.onchange = () => {
          setPermissionState(permissionStatus.state);
        };
      } catch {
        setPermissionState('unsupported');
      }
    };

    checkCameraPermission();
  }, []);

  if (permissionState === 'granted' || permissionState === 'prompt') {
    return (
      <Scanner formats={["qr_code"]} onScan={onScan} />
    );
  }

  if (permissionState === 'denied') {
    return (
      <Alert color="failure" icon={HiInformationCircle}>
        <span className="font-medium">Info alert!</span> Camera permission not granted
      </Alert>
    );
  }

  if (permissionState === 'unsupported') {
    return (
      <Alert color="failure" icon={HiInformationCircle}>
        <span className="font-medium">Info alert!</span> Camera permission not supported
      </Alert>
    );
  }

  return null;
};

export default QRScanner;