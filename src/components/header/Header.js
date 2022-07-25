import { HeaderWrapper } from "./styles/styles"
import GiphyLogo from "../../assets/giphy-logo.svg";

const Header = () => {
  return (
    <HeaderWrapper>
        <img src={GiphyLogo} alt="Giphy Logo"></img>
        <span>Giphy Grabber</span>
    </HeaderWrapper>
  )
}

export default Header