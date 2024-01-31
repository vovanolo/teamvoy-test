import React, { useState, useEffect } from "react";
import Header from "./Header";
import PokeData from "./PokeData";

const App = () => {
  const [pokemons, setPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [onePokeImage, setOnePokeImage] = useState(null);
  const [pokeInfo, setPokeInfo] = useState({});

  const fetchPokemons = async (limit, offset) => {
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
      );
      const data = await response.json();
      setPokemons((prevPokemons) => [...prevPokemons, ...data.results]);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching Pokemon data:", error);
    }
  };

  const getOnePokeItem = async (name) => {
      
      if(pokeInfo.name !== name){
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        const data = await response.json();
        const countOfMoves = data.moves.filter((moves) =>
          moves.hasOwnProperty("move")
        ).length;
        setOnePokeImage(data.sprites.back_default);
        setPokeInfo({
          name: name,
          type: data.types[0].type.name,
          attack: data.stats[1].base_stat,
          defense: data.stats[2].base_stat,
          hp: data.stats[0].base_stat,
          spAttack: data.stats[3].base_stat,
          spDefence: data.stats[4].base_stat,
          speed: data.stats[4].base_stat,
          weight: data.weight,
          totalMoves: countOfMoves,
        });
      }
  };

  const handleLoadMore = () => {
    const nextOffset = pokemons.length;
    setIsLoading(true);
    fetchPokemons(12, nextOffset);
  };

  useEffect(
    () => {
      fetchPokemons(12, 0);
    },
    [],
    [onePokeImage]
  );

  return (
    <div className="App">
      <Header />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 p-4">
        <div className="col-span-2 pokemon-grid grid grid-cols-2 grid-rows-3 gap-4">
          {pokemons.map((pokemon) => (
            <div key={pokemon.name} className="pokemon-card-grid">
              <div
                className="border-double border-4  border-sky-500 rounded-lg cursor-pointer hover:shadow-2xl"
                onClick={() => getOnePokeItem(pokemon.name)}
              >
                <img
                  className="max-h-56 max-w-56 mx-auto"
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                    pokemon.url.split("/")[6]
                  }.png`}
                  alt={pokemon.name}
                />
                <h3 className="text-center">{pokemon.name}</h3>
              </div>
            </div>
          ))}
          {!isLoading && (
            <div
              className="text-center row-span-2 row-span-2 col-span-2 max-w-96 mx-auto bg-sky-600 px-11 rounded-lg py-4 text-white cursor-pointer hover:shadow-2xl"
              onClick={handleLoadMore}
            >
              Load More
            </div>
          )}
        </div>
        <PokeData
          pokeImage={onePokeImage}
          type={pokeInfo.type}
          attack={pokeInfo.attack}
          defense={pokeInfo.defense}
          hp={pokeInfo.hp}
          spAttack={pokeInfo.spAttack}
          spDefence={pokeInfo.spDefence}
          speed={pokeInfo.speed}
          weight={pokeInfo.weight}
          totalMoves={pokeInfo.totalMoves}
        />
      </div>

      {isLoading && <p>Loading...</p>}
    </div>
  );
};

export default App;
