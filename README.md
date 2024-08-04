# Pocket Sub

Inspired by [ETH global superhack 2024](https://ethglobal.com/events/superhack2024).

## Description

Standalone on-chain subscriptions market app: the UI only acts as a middleware between browser and EVM chain network provider. No backend. 

### Routes

- `pocketpass.io` - Home page
- `pocketpass.io/<owner address>` - Shop page
- `pocketpass.io/check-in/<owner address>` - Check-in page (qrcode reader), redirect to Home page `/` if not logged in
- `pocketpass.io/identity/<owner address (opt)>` - Displays customer address into qrcode (for qrcode reader demo), redirect to Home page `/` if not logged in

## Complete user flow


![ethglobal-2024](https://github.com/user-attachments/assets/38ab7610-8683-49ba-8541-558ff8067d09)

## Q&A

> Where are the shop images?
> 
The image URL is part of the latest NFT metadata of a given shop and subscription id
