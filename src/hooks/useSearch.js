import { useState } from "react";

// Hook for using search
// returns two functions
// a function to set the value of search term
// a function to set filtered search term
export default function useSearch() {
  const [searchTerm, setSearchTerm] = useState("");

  function onSearchChange(event) {
    setSearchTerm(event.target.value);
  }

  function setDataToSearch(dataToSearch) {
    const filteredData = dataToSearch.filter(data => {
      const name = data.name.toLowerCase();

      return name.includes(searchTerm);
    });

    if (filteredData.length > 0) {
      return filteredData;
    } else {
      return null;
    }
  }

  return { onSearchChange, setDataToSearch };
}
