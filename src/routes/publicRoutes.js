import SignIn from "../components/register/SignIn";
import SignUp from "../components/register/SignUp";


const routes = [
  {
    id: 1,
    key: "login",
    path: '/',
    component: <SignIn />,
    permissions: []
  },
  {
    id: 2,
    key: "register",
    path: '/signUp',
    component: <SignUp />,
    permissions: []
  },
]

export default routes