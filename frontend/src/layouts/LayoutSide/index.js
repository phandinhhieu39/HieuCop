import { Outlet } from "react-router-dom";
import Menu from "./Menu";
import Headers from "./Headers";
import Footers from "./Footers";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function LayoutSite() {
    return (     
    <>

        <Headers/>
        <Menu/>
        <Outlet />
        <Footers/>
       
      </>
    
    );
}

export default LayoutSite;