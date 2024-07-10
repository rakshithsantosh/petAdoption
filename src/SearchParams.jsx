import {useState} from 'react';
const ANIMALS = ['bird', 'cat', 'dog', 'rabbit', 'reptile'];
const SearchParams = () =>{
    const [location,setLocation] = useState("");
    const [animals,setAnimals] = useState("");
    const [breed,setBreed] = useState("");
    const breeds=[];
    return(
        <div className='search-params'>
            <form>
                <label htmlFor="location">
                    Location 
                    <input onChange={(e)=>{setLocation(e.target.value)}}type="text" id="location" placeholder='location' value={location} />
                </label>
                <label htmlFor="animals">
                    Animal
                    <select value={animals}id="animals"
                    onChange={e=>{setAnimals(e.target.value);
                        setBreed("");
                    }}>
                        <option/>
                        {ANIMALS.map((animal)=>{
                            return <option key={animal}>{animal}</option>
                        })}
                    </select>
                </label>
                <label htmlFor="breed">
                    Breed
                    <select value={animals} id="breed" disabled={breeds.length ===0}
                    onChange={e=>{setBreed(e.target.value)}}>
                        <option/>
                        {breeds.map((breed)=>{
                            return <option key={breed}>{breed}</option>
                        })}
                    </select>
                </label>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default SearchParams;