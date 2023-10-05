import { FaEdit, FaTrash } from 'react-icons/fa';
import { Link, useNavigate, useParams } from "react-router-dom";
import productservice from '../../../services/ProductService';
import { useEffect, useState } from 'react';
import { urlImage } from '../../../config';

function ProductShow(){
    const { id } = useParams("id");
    const navigate = useNavigate();

    const [product, setProduct] = useState([]);
    useEffect(function () {
        (async function () {
            await productservice.getById(id).then(function (result) {
                setProduct(result.data.data);
            });
        })();
    }, []);
    function productDelete(id){
        productservice.remove(id).then(function (result) {
            alert(result.data.message);
            navigate('/admin/product', { replace: true })
        });
    }
    return (
        <section className="card">
            <div className="card-header">
                <div className="row">
                    <div className="col-md-6">
                        <strong className="text-danger  ">CHI TIẾT PRODUCT</strong>
                    </div>
                    <div className="col-md-6 text-end">
                        <Link to="/admin/product" className="btn btn-sm btn-outline-success me-1">
                            Về Danh Sách
                        </Link>
                        <Link to={"/admin/product/update/" + product.id} className="btn btn-sm btn-outline-primary me-1 ">
                            <FaEdit /> Sửa
                        </Link>
                        <button onClick={() => productDelete(product.id)}className="btn btn-sm btn-outline-danger me-1">
                            <FaTrash /> Xóa
                        </button>
                    </div>
                </div>
            </div>
            <div className="card-body">
                <table className="table table table-striped table-bordered table-hover">
                    <thead>
                        <tr>
                            <td className="text-danger"style={{width:300}}><strong>Tên Trường</strong></td>
                            <td className="text-danger"><strong>Giá Trị</strong></td>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                            <td>ID</td>
                            <td>{id}  </td>
                        </tr>
                        <tr>
                            <td>Danh Mục</td>
                            <td>{product.category_id}</td>
                        </tr>
                        <tr>
                            <td>Thương Hiệu</td>
                            <td>{product.brand_id}</td>
                        </tr>
                        <tr>
                            <td>Tên Sản Phẩm</td>
                            <td>{product.name}</td>
                        </tr>
                        <tr>
                            <td>Slug</td>
                            <td>{product.slug}  </td>
                        </tr> 
                         <tr>
                            <td>Hình</td>
                            <td><img style={{width:200}}className="img-fluid" src={urlImage+'product/'+product.image} alt={product.name} /></td>
                        </tr>
                        <tr>
                            <td>Giá Gốc</td>
                            <td>{product.price}</td>
                        </tr>
                        <tr>
                            <td>Giá Giảm</td>
                            <td>{product.pricesale}</td>
                        </tr>
                      
                        <tr>
                            <td>Số Lượng</td>
                            <td>{product.qty}</td>
                        </tr>
                        <tr>
                            <td>Chi Tiết</td>
                            <td>{product.detail}  </td>
                        </tr>
                        
                    
                        <tr>
                            <td>Từ Khóa</td>
                            <td>{product.metakey}  </td>
                        </tr>
                        <tr>
                            <td>Mô Tả</td>
                            <td>{product.metadesc}  </td>
                        </tr>
                        <tr>
                            <td>Trạng Thái</td>
                            <td>{product.status}  </td>
                        </tr>
                    </tbody>
                </table>

            </div>
        </section>

    );
}
export default ProductShow;