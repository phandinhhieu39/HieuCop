import { useState } from "react";
import productservice from "../../../services/ProductService";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { urlImage } from "../../../config";
import ProductItem from "../../../components/frontend/ProductItem";

function ProductDetail() {
    const { slug } = useParams();
    const [product, setProduct] = useState([]);
    const [product_other, setProductOther] = useState([]);
    useEffect(function () {
        (function () {
            productservice.getProductBySlug(slug).then(function (result) {
                if (result.data.success === true) {
                    setProduct(result.data.product);
                    setProductOther(result.data.product_other);
                }

            });
        })();
    }, [slug])
    return (
        <section className="maincontent my-4">
            <div className="container ">

                <div className="row">
                    <div className="col-md-6">
                        <img src={urlImage + 'product/' + product.image} className="img-fluid w-100" /></div>
                    <div className="col-md-6">
                        <h2>{product.name}</h2>

                        <del><h4> {product.price}<sup>đ</sup> </h4></del>
                        <h4 className="text-danger"> {product.pricesale} <sup>đ</sup></h4>
                        <div className="col-md-6 " >
                            <button style={{ width: 480, height: 50 }} className="btn btn-success">Mua Hàng</button>
                        </div>
                        {/* <div class="box-policy">
                            <div class="policy-top">Chính sách mua hàng tại Life Time Health</div>
                            <div class="policy-content">
                                <p><i aria-hidden="true" class="fas fa-car-alt icon-style"></i>Freeship toàn quốc</p>
                                <p><i aria-hidden="true" class="fas fa-recycle icon-style"></i>
                                    Đổi trả hàng trong 7 ngày</p>
                                <p><i aria-hidden="true" class="fas fa-check-square icon-style"></i>Cam kết hàng chính hãng</p>
                                <p><i aria-hidden="true" class="fas fa-cogs icon-style"></i>Bảo hành 2 năm quốc tế</p>
                            </div>
                        </div> */}
                    </div>

                </div>

                <div className="row">
                    <div className="col-md-12 my-5">
                        <table className="table table table-striped table-bordered table-hover"><h4>{product.detail}</h4></table>

                    </div>

                </div>
                
                <h3>Sản Phẩm Cùng Loại</h3>
                <div className="row">
                    {product_other.map(function (product, index) {
                        return <ProductItem product={product} key={index} />
                    })}

                </div>
            </div>
        </section>
    );
}

export default ProductDetail;