import styled from "styled-components";

const StyledDiv = styled.div<{
  backgroundColor?: string;
  height?: string;
  width?: string;
  borderRadius?: string;
  position?: string;
  top?: string;
  left?: string;
  display?: string;
  flexDirection?: string;
  justifyContent?: string;
  alignItems?: string;
  justifyItems?: string;
  alignContent?: string;
  margin?: string;
  padding?: string;
  alignSelf?: string;
  zIndex?: string;

}>`


background-color: ${props => props.backgroundColor};
height: ${props => props.height};
width: ${props => props.width};
margin: ${props => props.margin};
padding: ${props => props.padding};
position: ${props => props.position};
align-self: ${props => props.alignSelf};
top: ${props => props.top};
left: ${props => props.left} ;
display: ${props => props.display};
justify-content: ${props => props.justifyContent};
align-items: ${props => props.alignItems};
align-content: ${props => props.alignContent};
justify-items: ${props => props.justifyItems};
flex-direction: ${props => props.flexDirection};
border-radius: ${props => props.borderRadius};
z-index: ${props => props.zIndex};
`;


export default StyledDiv;