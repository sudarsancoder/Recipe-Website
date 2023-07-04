import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { useGetUserID } from '../hooks/useGetUserID';

export const SavedRecipes = () => {

const userID = useGetUserID();
const[savedRecipes,setSavedRecipes] = useState([]);


useEffect(()=>{
  

const fetchSavedRecipe=async()=>{
  try{
    const response = await axios.get(`http://localhost:3001/recipes/savedRecipes/${userID}`);
  setSavedRecipes(response.data.savedRecipes);
     console.log(savedRecipes)
 }catch(err){
   console.log(err);
 }
 };
 

fetchSavedRecipe();
},[]);

console.log(savedRecipes.ingredients)


  return (
    <div>
      <h1>Saved Recipes</h1>
      <ul>
        {savedRecipes.map((recipe) => (
          <li key={recipe._id}>
            <div>
              <h2>{recipe.name}</h2>
             
            </div>
            <h4>{`${recipe.ingredients}`}</h4>
           
            <div className="instructions">
              <p>{recipe.instructions}</p>
            </div>
            <img src={recipe.imageUrl} alt={recipe.name} />
            <p>Cooking Time: {recipe.cookingTime} minutes</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

