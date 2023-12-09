import { Recipe } from "./recipe/Recipe";
import recipies from "./recipies.json";

export function App() {
	return (
		<>
			<Recipe recipe={recipies} />
		</>
	)
}
