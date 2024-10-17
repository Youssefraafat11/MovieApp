import React, { useContext, useEffect } from 'react';
import {Contextapp} from '../AppContext'; // Import your context
import Carousel from 'react-material-ui-carousel';
import { Paper, Button } from '@mui/material';

function MovieList() {
  
  const { movies } = useContext(Contextapp); // Access context correctly
  var items = [
    {
        name: "Hidden Garden",
        description: "Nazlı is a poor, single and young mother who lives with her son Memo. Memo's powerful and rich uncle Demir takes action when he learns that his deceased brother has a son. When he finds out about Nazlı's profession, he starts a big war to get Memo. Nazlı, who finds herself in this struggle, has a bigger secret.",
        movie: `https://image.tmdb.org/t/p/w500/laqJpPew3eR23iErLCL5Q9lwnTR.jpg`
    },
    {
        name: "Anatomy of Lies",
        description: "Reveals the rise and fall of Grey's Anatomy star writer Elisabeth Finch, whose jaw-dropping lies fooled Hollywood for years, and became fodder for many high-profile episodes of Grey's. The story is told by some of her closest contacts, many speaking for the first time.",
        movie: `https://image.tmdb.org/t/p/w500/8GeA3MpkOqF1cz4M8mWlY3wCb0s.jpg`
    },
    {
        name: "Starting 5",
        description:"This captivating sports series follows Jimmy Butler, Anthony Edwards, LeBron James, Domantas Sabonis and Jayson Tatum throughout the 2023-24 NBA season.",
        movie: `https://image.tmdb.org/t/p/w500/an3Lq5IkjHJxg7Q3ekz92wR8IcT.jpg`
    }
  ]


  return (
    <div>             


<Carousel>
  {items.map((item, i) => (
    <Paper 
      key={i} 
      style={{ 
        position: 'relative',
        width: '100%', // Set your desired fixed width
        height: '600px', // Set your desired fixed height 
        marginTop:"0px",
        backgroundColor:"black"
      }}
    >
      <img
        src={item.movie}
        alt={item.name}
        style={{
          position: 'flex',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'fill', 
          zIndex: 1, 
        }}
      />
      <div style={{ 
        position: 'relative', 
        zIndex: 1, 
        backgroundColor: 'rgba(20, 20, 20, 0.7)',
        color: 'white',
        textAlign:"center",
        width:"100%",
        height:"30%"
      }}>
        <h2 style={{marginTop:"-150px"}}>  {item.name}</h2>
        <p>{item.description}</p>
        <Button variant="contained">Check it out!</Button>
      </div>
    </Paper>
  ))}
</Carousel>

    <div className="movie-list">
      {movies.map((movie) => (
        <div key={movie.id} className="movie-card"> 
          <img 
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
            alt={movie.name} 
          />
          <div className="movie-title">{movie.name}</div>
        </div>
      ))}
    </div>
    </div>
  );
}

export default MovieList;
