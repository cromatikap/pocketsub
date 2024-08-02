# Pocket Pass

Project inspired by [ETH global superhack 2024](https://ethglobal.com/events/superhack2024). Brainstorming for now...

## Description

Standalone on-chain subscriptions market app: the UI only acts as a middleware between browser and EVM chain network provider. No backend. 

### Requirements

- React
- React component libraries:
  - Scan QR Code with camera: `@yudiel/react-qr-scanner`
  - Generate QR code from string value: `react-qr-code`

### Routes

- `pocketpass.io` - Home page
- `pocketpass.io/<owner address>` - Shop page
- `pocketpass.io/check-in` - Check-in page (qrcode reader), redirect to Home page `/` if not logged in
- `pocketpass.io/identity` - Displays customer address into qrcode (for qrcode reader demo), redirect to Home page `/` if not logged in

## Visual draft

![ethglobal-2024](https://github.com/user-attachments/assets/983ce5fc-3d5c-4a65-99bb-3b5b395c259e)

## Q&A

> Where are the shop images?
> 
The image URL is part of the latest NFT metadata
