import React from "react";
import { useStyles } from "./WalletConnectModalStyle";
import { useEffect, useRef } from "react";
import { Web3ReactProvider } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import MainContent from "./Component/MainContent";

function getLibrary(provider: any) {
  const library = new Web3Provider(provider);
  library.pollingInterval = 12000;
  return library;
}

interface WalletConnectModalProps {
  show: boolean;
  onClose: () => void;
}

export default function WalletConnectModal({
  show,
  onClose,
}: WalletConnectModalProps) {
  const classes = useStyles();

  const rootRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
    function handleClick(e: any) {
      if (rootRef && rootRef.current && contentRef && contentRef.current) {
        const root: any = rootRef.current;
        const content: any = contentRef.current;
        if (root.contains(e.target) && !content.contains(e.target)) {
          onClose();
        }
      }
    }
  }, [rootRef, contentRef, show]);

  return (
    <>
      <div
        className={show ? classes.loaderWrapper : classes.displayNone}
        ref={rootRef}>
        <div className={classes.modalRoot} ref={contentRef}>
          <Web3ReactProvider getLibrary={getLibrary}>
            <MainContent onClose={onClose} />
          </Web3ReactProvider>
        </div>
      </div>
    </>
  );
}
