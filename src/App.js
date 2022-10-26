import './App.css';
import { useEffect, useState } from 'react';
import video from './food.mp4';
import MyRecipesComponent from './MyRecipesComponent';
import iconSearch from './icons8-search.png';


function App() {

  const MY_ID = "8e28812a";
  const MY_KEY = "589261a61c732ea3da092977a1b0f5ba";

  const [mySearch, setMySearch] = useState('');
  const [myRecipes, setMyRecipes] = useState([]);
  const [wordSubmit, setWordSubmit] = useState('salad');

  useEffect(()=>{
    const getAPI = async() =>{
      const responce = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmit}&app_id=${MY_ID}&app_key=${MY_KEY}`);
      const data = await responce.json();
      setMyRecipes(data.hits)
    }
    getAPI();
    

  },[wordSubmit])

  const myRecipeSearch = (e) => {
    setMySearch(e.target.value);
  }

const finalSearch = (e) => {
  e.preventDefault();
  setWordSubmit(mySearch);
}

  return (
      <div className="App">

        <div className="container">      
        <video autoPlay muted loop>      
          <source src={video} type="video/mp4" />      
        </video>      
        <h1>Find a Recipe</h1>      
        </div>

        <div>
          <form onSubmit={finalSearch} className='container'>
            <input className='search'
                    placeholder='Choose ingredients...'
                    onChange={myRecipeSearch}
                    value = {mySearch}>
            </input>
            <button>
            <img src={iconSearch} alt="icon" className='icons'/>
          </button>
          </form>
        </div>
        <div>
            {myRecipes.map(element => (
                <MyRecipesComponent 
                label = {element.recipe.label}
                image = {element.recipe.image}
                calories = {element.recipe.calories}
                ingredients = {element.recipe.ingredientLines}
                cuisineType = {element.recipe.cuisineType[0]}
                mealType={element.recipe.mealType[0]}
                />
              ))}
        </div>
          
      </div>
  );
}

export default App;



