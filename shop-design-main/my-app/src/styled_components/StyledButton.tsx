import styled from "styled-components"

const StyledButton = styled.button<{
  background?: string;
  color?: string;
  borderBottom?: string;
  border?: string;
  padding?: string;
  margin?: string;
  width?: string;
  height?: string;
  font?: string;
  cursor?: string;
  outline?: string;
  backgroundColor?: string;

}>`

  background: ${props => props.background};
  border: ${props => props.border};
  border-bottom: ${props => props.borderBottom};
  padding: ${props => props.padding};
  margin: ${props => props.margin};
  width: ${props => props.width};
  height: ${props => props.height};
  font: ${props => props.font};
  cursor: ${props => props.cursor};
  outline: ${props => props.outline};
  background-color: ${props => props.backgroundColor};
  color: ${props => props.color};

`;

export default StyledButton;