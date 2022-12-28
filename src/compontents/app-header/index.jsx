import { memo } from "react";
import { AppHeaderWrapper, TopWrapper, HeaderLeft } from "./style";
import HeaderRight from "./cpns/header-right";
import HeaderCenter from "./cpns/header-center";

export default memo(() => {
  return (
    <AppHeaderWrapper>
      <TopWrapper>
        {/* 左边 */}
        <HeaderLeft className="left">
          <img src={require("@/assets/img/common/logo.svg").default} alt="" />
        </HeaderLeft>
        <HeaderCenter></HeaderCenter>
        <HeaderRight></HeaderRight>
      </TopWrapper>
    </AppHeaderWrapper>
  );
});
