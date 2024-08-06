import { Component, ReactNode } from "react";
import StyledDiv from "../styled_components/StyledDiv";
import StyledText from "../styled_components/StyledText";
import Header from "./Header";

export default class MainPage extends Component {

  render(): ReactNode {
    return (
      <StyledDiv
        backgroundColor='#CB5454'
        height='100%'
        width='100%'
        top='0'
        left="0"
        position='fixed'
        display='flex'
        justifyContent='center'
        alignItems='center'>
        <StyledDiv
          height='90vh'
          position='static'
          backgroundColor="#191a1b"
          display='flex'
          flexDirection='row'
          justifyContent='space-between'
          alignItems='center'
          borderRadius='10px'>
          <StyledDiv
            display="flex"
            justifyContent="space-around">
            <Header />
            <StyledDiv
              display='flex'
              justifyContent='center'
              flexDirection='column'
              alignItems='center'>
              <StyledDiv
                display='flex'
                flexDirection='column'
                alignItems='center'
                justifyContent='center'
                margin='10vw'>
                <StyledText
                  fontFamily='"Manrope", sans-serif'
                  fontStyle='normal'
                  fontWeight='700'
                  fontSize='3.9em'
                  lineHeight='59px'
                  letterSpacing='0'
                  color='#FFFFFF'>
                  Men's Fashion
                </StyledText>
                <StyledText
                  margin='1vw 0 0 0'
                  fontFamily='"Manrope", sans-serif'
                  fontStyle='normal'
                  fontWeight='700'
                  fontSize='7em'
                  lineHeight='59px'
                  letterSpacing='0'
                  color='#CB5454'>
                  Botique
                </StyledText>
              </StyledDiv>
              <StyledText
                fontFamily='"Manrope", sans-serif'
                fontStyle='normal'
                fontWeight='400'
                fontSize='3em'
                lineHeight='59px'
                letterSpacing='0'
                color='#FFFFFF'>
                New Summer Collection
              </StyledText>
            </StyledDiv>
            <StyledDiv
              as="img"
              borderRadius='0px 10px 10px 0px'
              height='90vh'
              src={require("../assets/man.png")} />
          </StyledDiv>
        </StyledDiv >
      </StyledDiv>
    );
  }
}