import {BrowserRouter, Routes, Route} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getLoginStart} from "./redux/user/actions";
import publicRoutes from "./routes/publicRoutes";
import privateRoutes from "./routes/privateRoutes";


function App() {
  const token = localStorage.getItem('access_token')
  const dispatch = useDispatch()


  useEffect(() => {
    if (token) {
      dispatch(getLoginStart())
    }
  }, [token])

  const {data, isLoginSuccess} = useSelector((state) => state.user)

  useEffect(() => {
    if (isLoginSuccess) {
      window.location.replace("/product")
    }
  })
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route>
            {
              !token ? publicRoutes.map((rout) => (
                <Route exact path={rout.path} element={rout.component} key={rout.id}/>
              )) : privateRoutes.map((rout) => (
                <Route exact path={rout.path} element={rout.component} key={rout.id}/>
              ))
            }
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
