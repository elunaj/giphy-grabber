import { FooterWrapper } from "./styles/styles";
import GiphyAttribution from "../../assets/PoweredBy_640_Horizontal_Light-Backgrounds_With_Logo.gif";

const Footer = () => {
  return (
    <FooterWrapper>
        <img src={GiphyAttribution} alt="Power By GIPHY"></img>
    </FooterWrapper>
  )
}

export default Footer;


