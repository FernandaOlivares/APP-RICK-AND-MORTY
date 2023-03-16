import { useState } from 'react'
import style from './SearchBar.module.css'

function SearchBar({onSearch}) {
   //{const [id, setId] = useState('');}
   const [character, setCharacter] = useState('')

   const handleChange = (event) => {
      setCharacter(event.target.value)
   }

   return (
      <div className={style.bar}>
         <input type='search' onChange={handleChange} className={style.searchImput}/>
      <button onClick={()=> onSearch(character)}>Agregar</button>
      </div>
   );
}

export default SearchBar;