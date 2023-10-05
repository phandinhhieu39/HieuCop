import ProductItem from "../../../components/frontend/ProductItem";
import { useEffect, useState } from "react";
import productservice from "../../../services/ProductService";
import { FaCar } from "react-icons/fa";

function Product() {
    const [products, setProducts] = useState([]);
    const [limit, setLimit] = useState(8);
    useEffect(function () {

        (async function () {
            await productservice.getProductAll(limit, 1).then(function (result) {
                setProducts(result.data.products);
            })

        })()
    }, [limit])
    return (
        <section className="maincontent my-3">
            <div className="container">
                <div className="text-center text-danger">
               
                <h3 > <FaCar/> SUPER CAR  </h3>
                
              
                
                </div>
                <div className="row">
                    {products.map(function (product, index) {
                        return <ProductItem product={product} key={index} />

                    })}
                </div>
                <div className="text-center" >
                    <div className='btn btn-success text-warning' >
                    <button onClick={() => setLimit(limit + 8)}>Xem Them</button>
                    </div>
                </div>

            </div>


        </section>
    );
}
export default Product;