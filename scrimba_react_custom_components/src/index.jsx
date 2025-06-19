import { createRoot } from "react-dom/client"
import './index.css'
import Header from './Header.jsx'
import Main from "./main.jsx"
import Footer from "./Footer.jsx"

const root = createRoot(document.getElementById("root"))





function Page() {
  return (
    <>
      <Header/>
      <Main/>
      <Footer/>
    </>
  )
}

root.render(
  <Page />
)


/* Use of fragment can help remove the use of extra divs, don't have to import fragment but use <> */