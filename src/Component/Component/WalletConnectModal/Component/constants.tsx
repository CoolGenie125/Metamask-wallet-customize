import { injected, walletconnect, coinbase } from "./connectors";
import MetaMaskIcon from "../../../../assets/icons/metamask.svg";
import CoinBaseIcon from "../../../../assets/icons/coinbase.svg";
import WalletConnectIcon from "../../../../assets/icons/walletconnect.svg";
import {walletType} from "../../../../config/constant"

export const connectorTypes: any = {
  Injected: injected,
  WalletConnect: walletconnect,
  Coinbase: coinbase,
};

export const connectorNames: any = {
  Injected: {
    name: walletType.metamask,
    icon: MetaMaskIcon,
  },
  WalletConnect: {
    name: walletType.walletconnect,
    icon: WalletConnectIcon,
  },
  Coinbase: {
    name: walletType.coinbase,
    icon: CoinBaseIcon,
  },
};
