import { useState } from 'react';
import Gifs from "./Gifs";
import { GifContainerWrapper, ParentSpan, ChildSpan } from './styles/styles';
import BeatLoader from "react-spinners/BeatLoader";

const GifContainer = ({ searchResults, isFetching, setIsFetching }) => {
  let [color, setColor] = useState("#ffffff");

  const override = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "2rem auto",
    height: "52px",
    width: "100%"
  };

  const mostRecentSearchInput = searchResults[searchResults.length - 1].searchInput;

  return (
    <GifContainerWrapper>
      <ParentSpan>
        Showing results for: 
        <ChildSpan>
          {mostRecentSearchInput}
        </ChildSpan>
      </ParentSpan>
      {searchResults.length > 0 ? <Gifs searchResults={searchResults} isFetching={isFetching} setIsFetching={setIsFetching}></Gifs> : ''}
      {isFetching ? <BeatLoader color={color} cssOverride={override} /> : ''}
    </GifContainerWrapper>
  )
}

export default GifContainer;