import {useState} from 'react'
import ClaudeRecipe  from './ClaudeRecipe'
import IngredientsList from './IngredientsList'

export default function Main() {
    const [ingredients,setIngredients]=useState([])
    const [recipeShown,setRecipeShown]=useState(false)

        // const ingredients = ["Chicken", "Oregano", "Tomatoes"]
   

        // function handleSubmit(event){
        //        event.preventDefault()
        // const formData = new FormData(event.currentTarget)
        // const newIngredient = formData.get("ingred")
        // setIngredients(
        //     prevIngredients => [...prevIngredients,newIngredient]
        // )
        // }

          function addIngredients(formData){ // action={} does prevent default (form refreshing ) and clear the input form after submit button is clicked by defualt(we dont have to write it) 
        const newIngredient = formData.get("ingred")
        setIngredients(
            prevIngredients => [...prevIngredients,newIngredient]
        )

        }

        function handleRecipeShown(){
            setRecipeShown(prevRecipe=> true)
        }
        
        return (
        <main>
            <form action={addIngredients} className="add-ingredient-form">
                <input 
                    type="text"
                    placeholder="e.g. tomato"
                    aria-label="Add ingredient"
                    name="ingred"
                />
                <button >Add ingredient</button>
              
            </form>
       
               { ingredients.length>0 && <IngredientsList ingredients={ingredients} handleRecipeShown={handleRecipeShown}/> }
                {ingredients.length>0 && recipeShown && <ClaudeRecipe />}
               
        </main>
    )
}