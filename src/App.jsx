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
