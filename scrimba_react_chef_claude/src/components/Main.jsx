import React from "react"
import ClaudeRecipe from "./ClaudeRecipe"
import IngredientsList from "./IngredientsList"
import { getRecipeFromChefClaude } from "../ai.js"


export default function Main() {

    const [ingredients, setIngredients] = React.useState([])
    const [recipe, setRecipe] = React.useState("")
    

    function handleSubmit(event) {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])

    }

    async function handleRecipeShown() {
        
     const generatedRecipe = await getRecipeFromChefClaude(ingredients)
     setRecipe(generatedRecipe)
    }

    return (
        <main>
            <form onSubmit={handleSubmit} className="add-ingredient-form">
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>
            {ingredients.length > 0 ?

            <IngredientsList ingredients={ingredients} handleRecipeShown={handleRecipeShown}/>
 : null
}

        
{recipe ? 
<ClaudeRecipe recipe={recipe}/> : null
}
        </main>
    )
}