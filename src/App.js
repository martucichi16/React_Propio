import './App.css'
import { NavBar } from "./components/NavBarPP/NavBar"
import { Bienv } from "./components/BienvPP/Bienv"
import { Princ} from "./components/PrincPP/Princ"
import { Nac } from "./components/NacPP/Nac"
import { Dieta } from "./components/DietaPP/Dieta"
import { Opinion } from "./components/OpinionPP/Opinion"
import { Footer } from"./components/FooterPP/Footer"


function App() {
  //  console.log(dataProducts)
  return (
    <>

      <NavBar/>
      <Bienv/>
      <Princ/>
      <Nac/>
      <Dieta/>
      <Opinion/>
      <Footer/>


      {/* <CardGrid data={productos}  /> */}
      
    </>
  );
}

export default App;

/* Falta o raro:
-Iconos
-Imagenes
-Todo lo dinamico está por encima del header :( 
  
Para el nav queria hacer lo de los dropdowns con un if: si el dropdown=false, hacer lo que hice, si es true
iterar la lista con los valores y armar el dropdown*/