import styled from "styled-components"

export const TabsWrapper = styled.div`
  display: flex;

  .item {
    position: relative;
    width: 64px;
    height: 20px;
    margin: 10px 16px;
    font-size: 16px;
    cursor: pointer;

    &.active .bottom {
      position: absolute;
      top: 28px;
      left: 0;
      width: 64px;
      height: 2px;
      background-color: ${props => props.theme.color};
    }
  }
`