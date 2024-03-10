import React ,{useState}from 'react'
import { SearchBar } from '../search-bar';
import { GameList } from '../game-list';

export const FilterableGameList = ({games=[]}) => {
  const [filterText,setFilterText]=useState('')
  const[wishCheck,setWishCheck]=useState(false)
  return (
    <div className='filterable-game-list'>
      <SearchBar 
        filterText={filterText} 
        setFilterText={setFilterText}
        wishCeck={wishCheck}
       setWishCheck={setWishCheck}
      />
      <GameList games={games} filterText={filterText} wishCheck={wishCheck}/>
    </div>
  )
}
