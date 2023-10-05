import Contact from "../pages/frontend/Contact";
import Home from "../pages/frontend/Home";
import Introduce from "../pages/frontend/Introduce";
import Products from "../pages/frontend/Products";
import ProductDetail from "../pages/frontend/Products/ProductDetail";
import ProductBrand from "../pages/frontend/ProductBrand";
import ProductCategory from "../pages/frontend/ProductCategory";
import Search from '../layouts/LayoutSide/Search';
import Login from "../pages/frontend/Login";
import Register from "../pages/frontend/Register";



const RouterPublic =[
    {path: '/',component:Home},
    {path: '/san-pham',component:Products},
    {path: '/Login',component:Login},
    {path: '/register',component:Register},
    {path: '/gioi-thieu',component:Introduce},
    {path: '/lien-he/',component:Contact},
    {path: '/chi-tiet-san-pham/:slug',component:ProductDetail},
    {path: '/danh-muc-san-pham/:slug',  component:ProductCategory},
    {path: '/thuong-hieu/:slug', component:ProductBrand},
    {path:'/tim-kiem/:key',component:Search}
];
export default RouterPublic;