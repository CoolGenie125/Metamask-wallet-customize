import React, { useEffect, useState } from "react";
import { selectLoginAddress } from "../../store/auth/selectors";
import { useAppSelector } from "../../store/hooks";
import { nftassets } from "../../store/nft/selectors";
import Header from "../Layout/Header/Header";
import WalletConnectModal from "../Component/WalletConnectModal/WalletConnectModal";
import { Grid } from "@material-ui/core";
import { getNftPrice } from "../../store/api/nft";
import { nftContractAddress } from "../../config/constant";

function Planet() {
  const loginAddress = useAppSelector(selectLoginAddress);
  const assetsDate = useAppSelector(nftassets);
  const [modalStatus, setModalStatus] = useState(false);
  const [resultArray, setResultArray] = useState<any>();

  const handleNoneNftClick = () => {
    window.open("https://opensea.io/collection/zippo-verse", "_blank");
  };

  const getUserNfts = async () => {
    let tokenIdArray: any = [];
    let resArray: any = [];
    assetsDate?.assets.map((item: any) => {
      tokenIdArray.push(item.token_id);
    });
    tokenIdArray?.map((item: any) => {
      const params = {
        contractAddress: nftContractAddress,
        tokenid: item,
      };
      const nft = getNftPrice(params);
      resArray.push(nft);
    });
    const result = await Promise.all(resArray);
    setResultArray(result);
  };

  useEffect(() => {
    getUserNfts();
  }, [assetsDate]);

  return (
    <>
      <div className='c-planet-root'>
        <Header />
        <WalletConnectModal
          show={modalStatus}
          onClose={() => setModalStatus(false)}
        />
        <Grid container spacing={2}>
          {resultArray?.map((item: any, key: any) => {
            return (
              <Grid key={key} item md={3} sm={6} xs={12}>
                <div className='c-planet-nftitem'>
                  <img
                    src={item.image_url}
                    alt='image_url'
                    className='c-planet-nftimg'></img>
                  <div className='c-planet-desroot'>
                    <div className='c-planet-titleroot'>
                      <div className='c-planet-title'>Zippo Verse</div>
                      <div className='c-planet-titleValue'>{item.name}</div>
                    </div>
                    <div className='c-planet-priceroot'>
                      <div className='c-planet-price'>Price</div>
                      <div className='c-planet-priceValue'>
                        {item.collection.payment_tokens[0].eth_price}
                      </div>
                    </div>
                  </div>
                </div>
              </Grid>
            );
          })}
        </Grid>
      </div>
      <div
        className={
          loginAddress === "" ||
          loginAddress === undefined ||
          loginAddress === null
            ? "c-planet-wrap"
            : "displayNone"
        }>
        <div
          className='c-planet-connectwallettbtn'
          onClick={() => setModalStatus(true)}>
          Connect Your Wallet
        </div>
      </div>
      <div
        className={
          assetsDate?.assets.length === 0 &&
          assetsDate !== undefined &&
          assetsDate !== null &&
          loginAddress !== "" &&
          loginAddress !== undefined &&
          loginAddress !== null
            ? "c-planet-wrap"
            : "displayNone"
        }>
        <div className='c-planet-nonftmodalroot'>
          <div className='c-planet-nonftmodaltitle'>JOIN OUR COMMUNITY</div>
          <div className='c-planet-nonftmodaldes'>
            The Planet is for Zippo members only You currently don't hold an
            zippo verse nfts.
          </div>
          <div
            className='c-planet-nonenftbtn'
            onClick={() => handleNoneNftClick()}>
            Unlocked to view your Nft
          </div>
        </div>
      </div>
    </>
  );
}

export default Planet;
