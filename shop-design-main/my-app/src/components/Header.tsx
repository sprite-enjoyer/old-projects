import { Component, ReactNode } from "react";
import StyledDiv from "../styled_components/StyledDiv";
import { observer } from "mobx-react";
import TopBarButton from "./TopBarButton";
import headerStore from "../stores/HeaderStore";
import TopBarClickableIcon from "./TopBarClickableIcon";


class Header extends Component {
  onClickHandler = (num: number) => headerStore.changeSelectedSection(num);
  render(): ReactNode {
    return (
      <StyledDiv
        height="5vw"
        width="70.67vw"
        margin="1.5vw 0 0 0 "
        position="absolute"
        borderRadius="10px 10px 0 0"
        top="5%"
        display="flex"
        alignItems="center"
        justifyContent="space-around">
        <StyledDiv
          display="flex">
          <StyledDiv
            as="img"
            src={require("../assets/logo.png")}
            margin="0 5vw 0 3vw" />
          <TopBarButton
            isSelected={headerStore.selectedSectionNumber === 1}
            id={1}
            buttonText="The Product"
            onClickHandler={(num: number) => this.onClickHandler(num)} />
          <TopBarButton
            isSelected={headerStore.selectedSectionNumber === 2}
            id={2}
            buttonText="Our Story"
            onClickHandler={(num: number) => this.onClickHandler(num)} />
          <TopBarButton
            isSelected={headerStore.selectedSectionNumber === 3}
            id={3}
            buttonText="Values"
            onClickHandler={(num: number) => this.onClickHandler(num)} />
          <TopBarButton
            isSelected={headerStore.selectedSectionNumber === 4}
            id={4}
            buttonText="USD"
            onClickHandler={(num: number) => this.onClickHandler(num)} />
          <TopBarButton
            isSelected={headerStore.selectedSectionNumber === 5}
            id={5}
            buttonText="Contact Us"
            onClickHandler={(num: number) => this.onClickHandler(num)} />
        </StyledDiv>
        <StyledDiv>
          <TopBarClickableIcon
            src={require("../assets/searchIcon.svg").default}
            onClickHandler={() => console.log("clicked")} />
          <TopBarClickableIcon
            src={require("../assets/cartIcon.svg").default}
            onClickHandler={() => console.log("clicked")} />
          <TopBarClickableIcon
            src={require("../assets/heartIcon.svg").default}
            onClickHandler={() => console.log("clicked")} />
          <TopBarClickableIcon
            src={require("../assets/profileIcon.svg").default}
            onClickHandler={() => console.log("clicked")} />
        </StyledDiv>
      </StyledDiv >
    );
  };
};

export default observer(Header);