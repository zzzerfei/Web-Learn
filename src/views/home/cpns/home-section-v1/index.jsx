import { memo, useEffect, useState } from "react";
import { SectionWrapper } from "./style";
import SectionHeader from "../../../../compontents/section-header/index";
import SectionTabs from "../../../../compontents/section-tabs/index";
import SectionList from "../../../../compontents/section-list/index";

const HomeSection = memo((props) => {
  const { infoData } = props;
  console.log("-=-=-=", infoData);
  const { title, subtitle, dest_address = [], dest_list = [] } = infoData;
  const destNames = dest_address.map((item) => item.name);
  const [destList, setDestList] = useState([]);
  useEffect(() => {
    setDestList(Object.values(infoData.dest_list || {})[0]);
  }, [infoData.dest_list]);
  return (
    <SectionWrapper>
      <SectionHeader title={title} subtitle={subtitle}></SectionHeader>
      <SectionTabs destNames={destNames}></SectionTabs>
      <SectionList destList={destList}></SectionList>
    </SectionWrapper>
  );
});
export default HomeSection;
