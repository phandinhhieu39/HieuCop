import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BrandService from "../../services/BrandService";

function Listbrand() {
    const [listbrand, setlistbrand] = useState([]);
    useEffect(function () {
        (async function () {
            try {
                const result = await BrandService.getAll();
                setlistbrand(result.data.brands);
            } catch (error) {
                console.error(error);
            }
        })();
    }, [])
    return ( 
        <div className="listbrand mb-4">
            <h3 className="bg-danger p-3 m-0 text-center">Thương Hiệu</h3>
            <ul>
            {listbrand.map(function (brand, index) {
                    return (<li key={index}>
                        <Link to={"/thuong-hieu/" + brand.slug}>{brand.name}</Link>
                    </li>);
                })}
            </ul>
        </div>
    );
}

export default Listbrand;