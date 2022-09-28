import Product from "../components/product/Product";
import Color from "../components/color/Color";
import {Navigate} from "react-router-dom";

const routes = [
  {
    id: 1,
    key: "product",
    path: '/product',
    component: <Product/>,
    permissions: []
  },
  {
    id: 2,
    key: "color",
    path: '/color',
    component: <Color/>,
    permissions: []
  },
  {
    id: 3,
    path: '*',
    component: <Navigate to="/product" replace/>,
    permissions: []
  },
]

export default routes