import React from 'react'

export const SearchBar = ({
  filterText='',
  setFilterText,
  wishCheck,
  setWishCheck

}) => {
  return (
    <form  className="filter-form">
        <input
            type="text"
            className="search-input"
            placeholder='Поиск по названию'
            value={filterText}
            onChange={(e)=>setFilterText(e.target.value)}
        />
        <label >
            <input 
                type="checkbox" 
                className="in-whish-list-checkbox" 
                value={wishCheck}
                onChange={(e)=>setWishCheck(e.target.checked)}
            />
            Только в списке желаемого
        </label>
    </form>
  )
}
