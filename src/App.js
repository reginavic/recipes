import './App.css';
import { useEffect, useState } from 'react';
import video from './food.mp4';
import MyRecipesComponent from './MyRecipesComponent';
import iconSearch from './icons8-search.png';


function App() {

  /*const MY_ID = "fdb7cf64";
  const MY_KEY = "a812316bcdf354b6047b2cf902f17222";*/
  const MY_ID = "8e28812a";
  const MY_KEY = "589261a61c732ea3da092977a1b0f5ba";

  const [mySearch,setMySearch] = useState('');
  const [myRecipes, setMyRecipes] = useState([]);
  const [wordSubmitted, setWordSubmitted] = useState('avocado');

 /* useEffect(async () => {
  const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmitted}&app_id=${MY_ID}&app_key=${MY_KEY}`);
  const data= await response.json();
  setMyRecipes(data.hits);
  },[wordSubmitted])
  
   
  useEffect(() => {
    const getMeAPI = async() => {
      const responce = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmitted}&app_id=${MY_ID}&app_key=${MY_KEY}`);
      const data = await responce.json();
      setMyRecipes(data.hits)
    }
    getMeAPI()   
    
  },[wordSubmitted])
   
  
  useEffect(() => {
    const recipe = async() => {
      const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmitted}&app_id=${MY_ID}&app_key=${MY_KEY}`)
      const data = await response.json();
      setMyRecipes(data.hits)
      console.log(data.hits)
    }
    recipe()
  },[wordSubmitted])
   */
  useEffect(() => {
    async function fetchData() {
    const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmitted}&app_id=${MY_ID}&app_key=${MY_KEY}`);
    const data= await response.json();
    setMyRecipes(data.hits);
    } 
    fetchData();
  }, [wordSubmitted])


  const myRecipeSearch = (e) => {
  setMySearch(e.target.value);
  }

  const finalSearch = (e) => {
  e.preventDefault();
  setWordSubmitted(mySearch);
  }

  return(

  <div className="App">

  <div className="container">
    <video autoPlay muted loop>
      <source src={video} type="video/mp4" />
    </video>
    <h1>Find a Recipe</h1>
  </div>

  <div className='container'>
  <form onSubmit={ finalSearch } className='container'>
  <input className='search' placeholder='Search by ingredients...' onChange={ myRecipeSearch } value={ mySearch }> </input>
  <button><img src={iconSearch} alt="icon" className='icons'/></button>
  </form>
  </div>

  <div className='contain'>
  {myRecipes.map(element => (
  <MyRecipesComponent 
 /* id = {element.id}*/
  label={element.recipe.label}
  cuisineType = {element.recipe.cuisineType[0]}
  image={element.recipe.image} 
  calories= {element.recipe.calories} 
  ingredients={element.recipe.ingredientLines} 
  mealType={element.recipe.mealType[0]} />
))}
</div>

</div>
);
}

export default App; 

