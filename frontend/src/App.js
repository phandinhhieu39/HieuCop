
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LayoutSite from "./layouts/LayoutSide";
import LayoutAdmin from "./layouts/LayoutAdmin";
import RouterPublic from "./router/RouterPublic";
import RouterPrivate from "./router/RouterPrivate";
function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutSite />}>
          {RouterPublic.map(function(route,index){
            const Page = route.component;
            return < Route key={index} path={route.path} element={<Page/>}/>;
          })}
        </Route>
        <Route path="/admin" element={<LayoutAdmin />}>
          {RouterPrivate.map(function(route,index){
            const Page = route.component;
            return < Route key={index} path={route.path} element={<Page/>}/>;
          })}
        </Route>
      </Routes>
    </BrowserRouter>
    
  );
}


export default App;

