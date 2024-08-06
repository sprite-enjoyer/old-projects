import styled from "styled-components";

const StyledText = styled.span<{
  fontFamily?: string;
  fontStyle?: string;
  fontWeight?: string;
  fontSize?: string;
  lineHeight?: string;
  letterSpacing?: string;
  color?: string;
  margin?: string;
  padding?: string;
}>`

padding: ${props => props.padding};
margin: ${props => props.margin};
font-family: ${props => props.fontFamily};
font-style: ${props => props.fontStyle};
font-weight: ${props => props.fontWeight};
font-size: ${props => props.fontSize};
line-height: ${props => props.lineHeight};
letter-spacing: ${props => props.letterSpacing};
color: ${props => props.color};
`;


export default StyledText;