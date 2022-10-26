import './App.css';
import sphere from "./icons8-sphere.png";

function MyRecipesComponent({label, image, cuisineType, calories, ingredients, mealType}) {
    return(
        <div className="container">
        <div className="list">
            <h2>{label}</h2>
            <p> {cuisineType} cuisine </p>
            <img className="tasty" src={image} alt="dish" />
            <p>{calories.toFixed()} kcal</p>
            <ul>{ingredients.map(ingredients => (
                <li><img src= {sphere} className="sphere" alt = "sphere" /> {ingredients} </li>
            ))}
            </ul>
            <p className='mealType'>Meal type: {mealType} </p>
        </div>
        </div>
        )
}
export default MyRecipesComponent ;