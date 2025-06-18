import { createRoot } from "react-dom/client"
const root = createRoot(document.getElementById("root"))

/**
 * Challenge (part 1):
 * Create a custom "Page" component
 * 
 * It should return an ordered list with the reasons why you're
 * excited to be learning React :)
 * 
 * Render the Page component.
 */

function Page() {
  return (
    <main>
  <ol>
    <li> Example 1</li>
    <li> Example 2</li>
    <li> Example 3</li>
  </ol>
  </main>
  )
}

root.render(
    <Page />
)