import { useState, useEffect } from "react";
import './styles.scss'; 
import Search from "./components/search/Search";
import GifContainer from "./components/gifs/GifContainer";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [isFetching, setIsFetching] = useState(false);
  const [isPrevious, setIsPrevious] = useState(false); 
  const [error, setError] = useState(false);

  const fetchGifs = async ({ append = false }) => {
    if (searchInput.length === 0) {
      setError(true);
      return;
    }
    setError(false)

    // Generate a random number in order to randomize GIPHY API results
    // GIPHY API specifies that the starting range for results is 0 - 4999
    function getRandomIntInclusive(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
    }

    const offset = getRandomIntInclusive(0, 100);
    const apiKey = process.env.REACT_APP_GIPHY_API_KEY;
    const limit = 50;
    const res = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchInput}&limit=${limit}&offset=${offset}`);
    const data = await res.json();

    if (append) {
      const newGifs = data.data;
      const newSearchResults = [...searchResults];
      newSearchResults[newSearchResults.length - 1].data.data = [...newSearchResults[newSearchResults.length - 1].data.data, ...newGifs];

      setSearchResults([...newSearchResults]);
    } else {
      const results = {
        searchInput: searchInput,
        data: data
      };
  
      setSearchResults([...searchResults, results]);
    }

    setIsFetching(false);
    return data;
  };

  const isPreviousSearch = (data) => {
    setSearchInput(data);
    setIsPrevious(true);
  }

  useEffect(() => {
    if (!isPrevious) {
      return;
    } 
    fetchGifs({ append: false });
    setIsPrevious(false);
  }, [isPrevious]);

  // Handles user search input
  const onChange = (event) => {
    setSearchInput(event.target.value);
  };

  // Handles enter key press 
  const onKeyPress = (event) => {
    if (event.key === 'Enter') {
      fetchGifs({ append: false });
    }
  };

  useEffect(() => {
    if (!isFetching) {
      return;
    } 
    const fetchMoreGifs = async () => {
      fetchGifs({ append: true });
    };

    fetchMoreGifs();
    setIsFetching(false);
  }, [isFetching]);

  return (
    <div className="main-container">
      <Header />
      <Search fetchGifs={fetchGifs} onKeyPress={onKeyPress} onChange={onChange} searchResults={searchResults} isPreviousSearch={isPreviousSearch} error={error} />
      {searchResults.length > 0 ? <GifContainer searchResults={searchResults} isFetching={isFetching} setIsFetching={setIsFetching}  /> : ""}
      <Footer />
    </div>
  );
}

export default App;
