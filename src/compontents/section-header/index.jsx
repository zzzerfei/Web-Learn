import { memo } from "react";
import { HeaderWrapper } from "./style";

const SectionHeader = memo((props) => {
  const { title, subtitle } = props;
  return (
    <HeaderWrapper>
      <h2 className="name">{title}</h2>
      {subtitle && <div className="subtitle">{subtitle}</div>}
    </HeaderWrapper>
  );
});

export default SectionHeader;
