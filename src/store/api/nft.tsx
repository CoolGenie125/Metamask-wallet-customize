import axios from "axios";
import { apikey, NFTASSETS_API_URL, NFTASSET_API_URL } from "../../config/constant";

export const assetsRequest = async (data: any) => {
  try {
    const response = await axios.get(`${NFTASSETS_API_URL}`, {
      params: data,
      headers: {
        "X-API-KEY": apikey,
      },
    });
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const getNftPrice = async (data : any) =>{
  try {
    const response = await axios.get(`${NFTASSET_API_URL}/${data.contractAddress}/${data.tokenid}`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
}
