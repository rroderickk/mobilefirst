import axios from "axios";
const useGetPrices = async (state) => {
try {
  const res = await axios.get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
  );
    state(res.data);
    // console.log(res.data);
  } catch (error) {
    console.error(error);
  }
};
export {useGetPrices};