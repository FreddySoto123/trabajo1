# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
import './App.css';
import avatarJessica from "../public/avatar-jessica.jpeg"

function App() {
 

  return (
    <>

    <div className="cont">      
      
      <img className="imagen" src={avatarJessica} alt="Icono"/>      
      <h1>Jessica Randall</h1>                
      <h2>London, United Kingdom</h2>
      <p>"Front-end developer and avid reader"</p>
    
      
          <div className="contenedor">
            <button>GitHub</button>
            <button>Frontend Mentor</button>
            <button>LinkedIn</button>
            <button>Twitter</button>
            <button>Instagram</button> 
        </div>
        </div>
    </>
  )
}

export default App

