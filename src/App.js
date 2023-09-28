import logo from './logo.svg'
import './App.css'
import Navbar from './Navbar/Navbar.jsx'
import Main from './Main/Main.jsx'
import Footer from './Footer/Footer.jsx'
import Sidebr from './Sidebar/Sidebr.jsx'

function App() {
  return (
    <div className="App">
      <Navbar />

      <Main />

      <Footer />
      <Sidebr />
    </div>
  )
}

export default App
