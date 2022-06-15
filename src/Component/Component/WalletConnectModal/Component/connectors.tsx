import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { WalletLinkConnector } from "@web3-react/walletlink-connector";

export const injected = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 42]
});

export const walletconnect = new WalletConnectConnector({
  rpc: { 1: "https://mainnet.infura.io/v3/1c3acca035dd41dfbf400abac71e59a7" },
  bridge: "https://bridge.walletconnect.org",
  qrcode: true,
  // pollingInterval: POLLING_INTERVAL
});

export const coinbase = new WalletLinkConnector({
  url: "https://mainnet.infura.io/v3/2c5e195dc54e4a8b9cf0d406fab108c0",
  appName: "NFT marketplace",
});
