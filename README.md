# Pocket Pass

Project inspired by [ETH global superhack 2024](https://ethglobal.com/events/superhack2024). Brainstorming for now...

## Description

Standalone on-chain subscriptions market app: the UI only acts as a middleware between browser and EVM chain network provider. No backend. 

### Requirements

- React
- React component libraries:
  - @yudiel/react-qr-scanner

### Routes

- pocketpass.io - Home page
- pocketpass.io/<owner address> - Shop page
- pocketpass.io/check-in/<owner address> - Check-in page (qrcode reader)
- pocketpass.io/identity - Displays customer address into qrcode (for qrcode reader demo)

## Visual draft

![ethglobal-2024](https://github.com/user-attachments/assets/496fe846-0744-4106-bd5b-36ac0978d635)

## Q&A

> Where are the shop images?
> 
The image URL is part of the latest NFT metadata
