import SignIn from "./components/register/SignIn";
import SignUp from "./components/register/SignUp";
import {BrowserRouter,Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">

 <BrowserRouter>
   <Routes>
     <Route path="signUp" element={<SignUp/>}/>
     <Route path="/" element={<SignIn/>}/>
   </Routes>
 </BrowserRouter>
    </div>
  );
}

export default App;
