import { fetchHomeDataAction, fetchHomeDiscount } from "@/store/modules/home";
import { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import TopBanner from "./cpns/top-banner";
import { HomeWrapper } from "./style";

import HomeSectionV1 from "./cpns/home-section-v1";

const Home = memo(() => {
  // 从 redux 中取得数据
  const { discountInfo, goodPriceInfo } = useSelector(
    (state) => ({
      discountInfo: state.home.discountInfo,
      goodPriceInfo: state.home.goodPriceInfo,
    }),
    shallowEqual
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchHomeDiscount());
    dispatch(fetchHomeDataAction());
  }, [dispatch]);
  console.log(goodPriceInfo);
  return (
    <HomeWrapper>
      {/* 顶部导航栏 */}
      <TopBanner />
      <HomeSectionV1 infoData={discountInfo} />
      <HomeSectionV1 infoData={goodPriceInfo} />
    </HomeWrapper>
  );
});
export default Home;
