export default function IngredientsList(props){
         const ingredientsListItems = props.ingredients.map((item,index)=>{ // when state is updated using setIngredients the comp gets reloaded so the imgmap will also get updated in that process
            return <li key={index}>{item}</li>// note that its a bad practice to have key as index
        })

    return (
        <section>
                <h2>Ingredients on hand:</h2>
                <ul className="ingredients-list" aria-live="polite">{ingredientsListItems}</ul>
                <div className="get-recipe-container">
                    <div>
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button onClick={props.handleRecipeShown}>Get a recipe</button>
                </div>
        </section>
    )
}