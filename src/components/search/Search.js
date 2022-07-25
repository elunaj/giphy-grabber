import PreviousSearches from "./PreviousSearches";
import { SearchBoxWrapper, SearchBox, SearchBoxButton, SearchContainer } from "./styles/styles";
import SearchIcon from "../../assets/search-icon.svg";
import Error from "../error/Error";

const Search = ({ fetchGifs, onChange, onKeyPress, searchResults, isPreviousSearch, error }) => {

  return (
    <SearchContainer>
      <SearchBoxWrapper>
        <SearchBox type="text" placeholder="Search..." onChange={onChange} onKeyPress={onKeyPress} />
        <SearchBoxButton onClick={fetchGifs}>   
          <img src={SearchIcon} alt="Search Icon" />     
        </SearchBoxButton>
      </SearchBoxWrapper>
      <PreviousSearches searchResults={searchResults} isPreviousSearch={isPreviousSearch}  />
      {/* {error ? <Error /> : ""} */}
    </SearchContainer>
  )
}

export default Search;