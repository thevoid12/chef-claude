import {useState} from 'react'

export default function Main() {
    const [ingredients,setIngredients]=useState([])
        // const ingredients = ["Chicken", "Oregano", "Tomatoes"]
        const ingMap = ingredients.map((item,index)=>{ // when state is updated using setIngredients the comp gets reloaded so the imgmap will also get updated in that process
            return <li key={index}>{item}</li>// note that its a bad practice to have key as index
        })

        function handleSubmit(event){
               event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const newIngredient = formData.get("ingred")
        setIngredients(
            prevIngredients => [...prevIngredients,newIngredient]
        )
        }

        return (
        <main>
            <form onSubmit={handleSubmit} className="add-ingredient-form">
                <input 
                    type="text"
                    placeholder="e.g. tomato"
                    aria-label="Add ingredient"
                    name="ingred"
                />
                <button >Add ingredient</button>
              
            </form>
             <ul>
                {ingMap}
                </ul>
        </main>
    )
}