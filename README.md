# Pocket Sub

Project inspired by [ETH global superhack 2024](https://ethglobal.com/events/superhack2024). Brainstorming for now...

## Description

Standalone on-chain subscriptions market app: the UI only acts as a middleware between browser and EVM chain network provider. No backend. 

### Requirements

- React
- React component libraries:
  - Scan QR Code with camera: `@yudiel/react-qr-scanner`
  - Generate QR code from string value: `react-qr-code`
- Get current ETH/EUR price: https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=eur

### Routes

- `pocketpass.io` - Home page
- `pocketpass.io/<owner address>` - Shop page
- `pocketpass.io/check-in/<owner address>` - Check-in page (qrcode reader), redirect to Home page `/` if not logged in
- `pocketpass.io/identity/<owner address (opt)>` - Displays customer address into qrcode (for qrcode reader demo), redirect to Home page `/` if not logged in

## Complete user flow

![ethglobal-2024](https://github.com/user-attachments/assets/aebecb1d-0548-4983-a531-0cb0612fed07)

## Q&A

> Where are the shop images?
> 
The image URL is part of the latest NFT metadata
