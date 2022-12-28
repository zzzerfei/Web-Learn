import { memo } from "react";
import { CenterWrapper } from "./style";
import { CSSTransition } from "react-transition-group";

const HeaderCenter = memo(() => {
  return (
    <CenterWrapper>
      <CSSTransition>
        <div className="search-bar">
          <span className="text">搜索房源和体验</span>
          <span className="icon"></span>
        </div>
      </CSSTransition>
    </CenterWrapper>
  );
});

export default HeaderCenter;
