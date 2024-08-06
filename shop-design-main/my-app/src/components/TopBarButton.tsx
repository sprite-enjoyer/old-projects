import { Component, ReactNode } from "react";
import StyledDiv from "../styled_components/StyledDiv";
import StyledButton from "../styled_components/StyledButton";
import StyledText from "../styled_components/StyledText";

export type ButtonProps = {
  buttonText: string;
  id: number;
  isSelected: boolean;
  onClickHandler: (num: number) => void;
};

class TopBarButton extends Component<ButtonProps> {
  render(): ReactNode {
    return (
      <StyledDiv>
        <StyledButton
          backgroundColor="#191a1b"
          background="white"
          color="white"
          border="none"
          borderBottom={this.props.isSelected ? "3px solid #C46145" : "none"}
          padding="0.6vw 1vw 0.9vw 1vw"
          font="inherit"
          cursor="pointer"
          outline="inherit"
          onClick={() => this.props.onClickHandler(this.props.id)}>
          <StyledText
            fontFamily='"Manrope", sans-serif'
            fontSize="0.95em"
            fontStyle="normal"
            fontWeight="400">
            {this.props.buttonText}
          </StyledText>
        </StyledButton>
      </StyledDiv>
    );
  }
}

export default TopBarButton;;