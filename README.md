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
- pocketpass.io/\<owner address\> - Shop page
- pocketpass.io/check-in - Check-in page (qrcode reader), available if logged in, redirect to Home page `/`
- pocketpass.io/identity - Displays customer address into qrcode (for qrcode reader demo)

## Visual draft

![ethglobal-2024](https://github.com/user-attachments/assets/54a964c7-0b58-46ff-ae57-46df37413af5)

## Q&A

> Where are the shop images?
> 
The image URL is part of the latest NFT metadata
