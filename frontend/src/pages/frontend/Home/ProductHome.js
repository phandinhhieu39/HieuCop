import { useState } from 'react';
import ProductItem from '../../../components/frontend/ProductItem';
import productservice from '../../../services/ProductService';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
function ProductHome(props) {
    const [products, setProducts] = useState([]);
    useEffect(function () {
        (async function () {
            await productservice.getProductHome(8,props.category.id).then(function (result) {
                setProducts(result.data.products);
            });
        })();
    }, []);
    if(products!=null){
    return ( 
        
    <div className="container my-4">
    <div className="product-category">
        <h3 className="text-center text-danger my-4">{props.category.name}</h3>
        <div className="row">
            {products.map(function (product, index) {
                return <ProductItem product={product}  />
            })}

        </div>
    </div>

</div> );

}}

export default ProductHome;