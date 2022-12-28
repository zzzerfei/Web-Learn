import { memo } from "react";
import { TabsWrapper } from "./style";
import ScrollView from "../../base-ui/scroll-view";

const SectionTabs = memo((props) => {
  const { destNames = [] } = props;
  return (
    <TabsWrapper>
      <ScrollView>
        {destNames.map((item, index) => {
          return <div>{item}</div>;
        })}
      </ScrollView>
    </TabsWrapper>
  );
});

export default SectionTabs;
