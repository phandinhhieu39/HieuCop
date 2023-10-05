import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CategoryService from "../../services/CategoryService";

function Listcategory() {
    const [listcategory, setlistcategory] = useState([]);
    useEffect(function () {
        (async function () {
            try {
                const result = await CategoryService.getcategoryByparentID(0);
                setlistcategory(result.data.categorys);
            } catch (error) {
                console.error(error);
            }
        })();
    }, [])
    return (
        <div className="listcategory mb-4">
            <h3 className="bg-danger p-3 m-0 text-center">Danh Mục Sản Phẩm</h3>
            <ul>
                {listcategory.map(function (category, index) {
                    return (<li key={index}>
                        <Link to={"/danh-muc-san-pham/" + category.slug}>{category.name}</Link>
                    </li>);
                })}

            </ul>
        </div>
    );
}

export default Listcategory;