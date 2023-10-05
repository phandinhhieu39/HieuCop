import { useEffect, useState } from "react";
import productservice from "../../../services/ProductService";
import ProductItem from "../../../components/frontend/ProductItem";
import CategoryService from "../../../services/CategoryService";
import { useParams } from "react-router-dom";

function ProductCategory() {
    const {slug}=useParams();

    const [products, setProducts] = useState([]);
    const [title, setTitle] = useState('');

    useEffect(function () {
        (async function () {
           try{
            const infocategory = await CategoryService.getBySlug(slug);
            const catid=infocategory.data.category.id;
            const infoproduct=await productservice.getProductByCategoryId(catid,8);
            setTitle(infocategory.data.category.name);
            setProducts(infoproduct.data.products);
           } catch (error){
            console.error(error);
           }
        })();
    }, [products]);
    return (
        <section className="maincontent my-3">
            <div className="container">
                <h3 className="text-center text-danger">{title}</h3>
                <div className="row">
                    {products.map(function (product, index) {
                        return <ProductItem product={product} key={index} />
                    })}
                </div>
            </div>


        </section>
    );
}

export default ProductCategory;