import { Component, ReactNode } from "react";
import StyledButton from "../styled_components/StyledButton";

export type TopBarClickableIconProps = {
  src: string;
  width?: string;
  onClickHandler: () => void;
};

class TopBarClickableIcon extends Component<TopBarClickableIconProps>{
  render(): ReactNode {
    return (
      <StyledButton
        margin="0 2vw 0 2vw"
        as="img"
        cursor="pointer"
        onClick={this.props.onClickHandler}
        width={this.props.width}
        src={this.props.src} />
    );
  };
};

export default TopBarClickableIcon;