import DisplaySearches from './DisplaySearches';
import { PreviousSearchesContainer } from "./styles/styles";


const PreviousSearches = ({ searchResults, isPreviousSearch }) => {
  return (
    <PreviousSearchesContainer>
      {searchResults.length > 0 ? <><h1> Previous <span>Searches: </span></h1></> : ''}
      {searchResults.length > 0 ? <DisplaySearches searchResults={searchResults} isPreviousSearch={isPreviousSearch} /> : ''}
    </PreviousSearchesContainer>
  )
}

export default PreviousSearches;