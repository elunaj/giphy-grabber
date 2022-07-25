import { useRef, useCallback } from 'react';
import { Gallery } from "./styles/styles";
import "../../styles.scss";

const Gifs = ({ searchResults, setIsFetching, isFetching }) => {
  const mostRecentSearchResult = searchResults[searchResults.length - 1].data.data;
  const observer = useRef();
  const lastElementRef = useCallback(node => {
    if (isFetching) {
      return;
    }

    if (observer.current) {
      observer.current.disconnect();
    }

    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setIsFetching(true);
      }
    })

    if (node) {
      observer.current.observe(node)
    }
  });

  return (
    <Gallery>
      {mostRecentSearchResult.map((gif, index) => {
        if (mostRecentSearchResult.length === index + 1) {
          return <img ref={lastElementRef} key={index} src={gif.images.fixed_width.url} alt={gif.title} width={gif.images.fixed_width.width} length={gif.images.fixed_width.length}></img>
        }
        return <img key={index} src={gif.images.fixed_width.url} alt={gif.title} width={gif.images.fixed_width.width} length={gif.images.fixed_width.length}></img>
      })}
    </Gallery>
  )
}

export default Gifs;