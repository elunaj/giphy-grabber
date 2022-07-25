const DisplaySearches = ({ searchResults, isPreviousSearch }) => {
    return (
        <div>
            {searchResults.map((data, index) => {
                return <span key={index} className="link" onClick={() => isPreviousSearch(data.searchInput) }> {data.searchInput} </span>
            })}
        </div>
    )
}

export default DisplaySearches;