

import React, { useState, useEffect  } from "react";

export const Contextapp = React.createContext();

export default function ContextProviderApp({ children }) {
  // Define your state variables here
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState(''); 

  // Example: Fetching data when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.themoviedb.org/3/trending/all/day?api_key=bf8390782b00f371413699ac3a8b3cae');
        const data = await response.json();
        setMovies(data.results);
        console.log(data.results); 
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // Define functions to update state
  const handleSearchTermChange = (newTerm) => {
    setSearchTerm(newTerm);
  };

  // Provide the state and functions to consuming components
  const contextValue = {
    movies,
    searchTerm,
    handleSearchTermChange,
  };

  return (
    <Contextapp.Provider value={contextValue}>
      {children}
    </Contextapp.Provider>
  );
}
