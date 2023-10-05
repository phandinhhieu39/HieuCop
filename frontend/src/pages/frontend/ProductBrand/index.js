import { useEffect, useState } from "react";
import ProductItem from "../../../components/frontend/ProductItem";
import Listbrand from "../../../layouts/LayoutSide/listbrand";
import Listcategory from "../../../layouts/LayoutSide/listcategory";
import BrandService from "../../../services/BrandService";
import productservice from "../../../services/ProductService";
import { useParams } from "react-router-dom";

function ProductBrand() {
    const { slug } = useParams();
    const [limit, setLimit] = useState(5);
    const [title, setTitle] = useState("");
    const [products, setProducts] = useState([]);
    useEffect(function () {
        (async function () {
            try {
                const result_brand = await BrandService.getById(slug);
                const brandid = result_brand.data.brand.id;
                setTitle(result_brand.data.brand.name);
                const result = await productservice.getProductBrandById(limit, brandid);
                setProducts(result.data.products);
            } catch (error) {
                console.log(error);
            }
        })();
    }, [limit, slug]);
    return (
        <section className="maincontent my-3">
            {/* Product category*/}
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <Listcategory />
                        <Listbrand />
                    </div>
                    <div className="col-md-9">
                        <h2 className="text-center">{title}</h2>
                        <div className="row">
                            {
                                products.map(function (product, index) {
                                    return <ProductItem product={product} key={index} />
                                })
                            }
                        </div>
                        <div className="row">
                            <div className="col-12 text-center">
                                <button onClick={() => setLimit(limit + 5)} className="btn btn-light ">Xem thêm</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default ProductBrand;