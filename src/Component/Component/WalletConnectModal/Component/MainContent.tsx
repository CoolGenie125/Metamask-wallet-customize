import React, { useEffect } from "react";
import { useWeb3React } from "@web3-react/core";
import { connectorNames, connectorTypes } from "./constants";
import { useStyles } from "./styles";
import { useAppDispatch } from "../../../../store/hooks";
import { setloginAddress } from "../../../../store/auth";
import { nftContractAddress, walletType } from "../../../../config/constant";
import { getNftAssets } from "../../../../store/nft";
declare var window: any;

interface MainContentProps {
  onClose: () => void;
}

const MainContent = ({ onClose }: MainContentProps) => {
  const dispatch = useAppDispatch();
  const context = useWeb3React();
  const classes = useStyles();
  const { activate, connector, account } = context;

  const handleClick = async (condition: boolean, item: any) => {
    if (!condition) {
      if (connectorNames[item]?.name === walletType.metamask) {
        {
          window.ethereum === undefined
            ? window.open("https://metamask.io/", "_blank")
            : await activate(connectorTypes[item]);
          await onClose();
        }
      } else {
        await activate(connectorTypes[item]);
        await onClose();
      }
    }
  };

  useEffect(() => {
    if (account !== undefined && account !== null && account) {
      dispatch(setloginAddress(account));
      const params = {
        owner: account,
        asset_contract_address: nftContractAddress,
      };
      dispatch(getNftAssets(params));
    }
  }, [account]);

  return (
    <div className={classes.root}>
      {Object.keys(connectorTypes).map((con: any) => {
        const current = connectorTypes[con];
        const disabled = current === connector;

        return (
          <div
            key={con}
            onClick={() => handleClick(disabled, con)}
            className={
              disabled ? classes.activeOptionButton : classes.optionButton
            }>
            <img
              src={connectorNames[con].icon}
              className={classes.btnIcon}
              alt='iconAvatar'
            />
            <div className={classes.btnTitle}>{connectorNames[con].name}</div>
          </div>
        );
      })}
    </div>
  );
};

export default MainContent;
