import { useParams } from "react-router-dom";

import { useEffect, useState } from "react";
import productservice from "../../services/ProductService";
import ProductItem from "../../components/frontend/ProductItem";

function Search() {
    const { key } = useParams();
    const [products, setProducts] = useState([]);
    document.title = "Kết quả tìm kiếm";
    useEffect(function () {
        (async function () {
            const result = await productservice.getProductSearch(key);
                setProducts(result.data.products)

        })();
    }, [key]);
    if(products != null){
        return (
            <section className="maincontent">
                <div className="container my-4">
                        <div className="col-12 text-center">
                            <h3 className="text-center text-danger ">KẾT QUẢ TÌM KIẾM</h3>
                            <div className="row py-4">
                                {products.map(function (product, index) {
                                    return <ProductItem key={index} product={product} />
                                })}
                            </div>
                        
                    </div>
                </div>
            </section>
        );
    }
    else{
        return (
            <section className="maincontent">
                <div className="container my-4">
                    <div className="row">
                       
                        <div className="col-md-12">
                        <h3 className="text-center text-danger ">KẾT QUẢ TÌM KIẾM</h3>
                            <div className="row py-1">
                                <h4>Không tìm thấy {key}</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

}

export default Search;