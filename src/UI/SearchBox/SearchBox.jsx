import React, { useState } from "react";
import "./SearchBox.scss"
import { CloseIcon, SearchIcon } from "@iconicicons/react";

const SearchBox = (placeholder) => {
    const [query, setQuery] = useState("")
    const handleClearInput = e => {
        setQuery("")
    }
    const queryInput = e => {
        setQuery(e.target.value)
    }

	return (
		<div className="searchBox">
            <div className="searchIcon icon"><SearchIcon /></div>
			<input type="text" placeholder={placeholder.placeholder} className="input" value={query} onInput={queryInput} />
            <div className="closeIcon icon" onClick={handleClearInput} ><CloseIcon /></div>
		</div>
	);
};

export default SearchBox;
