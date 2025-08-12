import {useState} from 'react'

export default function Main() {
    const [ingredients,setIngredients]=useState([])
        // const ingredients = ["Chicken", "Oregano", "Tomatoes"]
        const ingredientsListItems = ingredients.map((item,index)=>{ // when state is updated using setIngredients the comp gets reloaded so the imgmap will also get updated in that process
            return <li key={index}>{item}</li>// note that its a bad practice to have key as index
        })

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
               { ingredientsListItems.length>0 &&
                <section>
                <h2>Ingredients on hand:</h2>
                <ul className="ingredients-list" aria-live="polite">{ingredientsListItems}</ul>
                <div className="get-recipe-container">
                    <div>
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button>Get a recipe</button>
                </div>
            </section>
            }
        </main>
    )
}