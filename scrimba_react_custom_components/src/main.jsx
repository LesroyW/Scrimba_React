import { createRoot } from "react-dom/client"
import reactLogo from '/assets/react.svg'
import './index.css'


const root = createRoot(document.getElementById("root"))

function Header() {
  return (
      <header className="header">
        <img className="header-image" src={reactLogo} alt="Test Image" />
        <nav>
          <ul className="nav-list">
            <li className="nav-list-item">Pricing</li>
            <li className="nav-list-item">About</li>
            <li className="nav-list-item">Contact</li>
          </ul>
        </nav>
      </header>
  )
}

function Main() {
  return (
     <main>
        <h1>Reasons I am excited to learn react</h1>
      <ol>
        <li>React is a popular library, so I will be able to
          fit in with all the coolest devs out there! 😎</li>
        <li>I am more likely to get a job as a front end developer
          if I know React</li>
      </ol>
      </main>
  )
}

function Footer() {
  return (
     <footer>
        © 2025 development. All rights reserved.
      </footer>
  )
}

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