import SignIn from "./components/register/SignIn";
import SignUp from "./components/register/SignUp";
import {BrowserRouter,Routes, Route} from "react-router-dom";
import Color from "./components/color/Color";
import Product from "./components/product/Product";

function App() {
  console.log(111)
  return (
    <div className="App">
 <BrowserRouter>
   <Routes>
     <Route path="signUp" element={<SignUp/>}/>
     <Route path="/" element={<SignIn/>}/>
     <Route path="/color" element={<Color/>}/>
     <Route path="/product" element={<Product/>}/>
   </Routes>
 </BrowserRouter>
    </div>
  );
}

export default App;
