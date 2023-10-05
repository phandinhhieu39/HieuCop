import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import menuservice from "../../services/MenuService";
import MenuItem from "./MenuItem";
function Menu() {
  const [menus, setMenus] = useState([]);
  const [key, setKey] = useState("");
  useEffect(function () {
    (async function () {
      await menuservice.getByParentId('mainmenu', 0).then(function (result) {
        setMenus(result.data.menus);
      });
    })();
  }, [])
  return (
    <nav className="navbar navbar-expand-lg bg-danger">
      <div className="container-fluid">
        <Link className="navbar-brand text-white fs-2 " href="#"><strong>H-SUPER</strong></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          {menus.map(function (menu, index) {
              return (
                <MenuItem key={index} menu={menu}/>
              );
            })}

          
           
            
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2"value={key} onChange={(e) => setKey(e.target.value)} type="search" placeholder="Search" aria-label="Search" />
            <Link className="btn btn-outline-success" to={"/tim-kiem/"+key} type="submit text-white">Search</Link>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Menu;