import { FaEdit, FaTrash } from 'react-icons/fa';
import { Link, useNavigate, useParams } from "react-router-dom";
import orderService from '../../../services/OrderServce';
import { useEffect, useState } from 'react';
import { urlImage } from '../../../config';
function OderShow() {
    const navigate = useNavigate();
    const { id } = useParams("id");
    const [order, setOrder] = useState([]);
    useEffect(function () {
        (async function () {
            await orderService.getById(id).then(function (result) {
                try{
                    setOrder(result.data.order);
                }
                catch(error){
                    console.log(error.response.message);
                }
                
            });
        })();
    }, []);

    function orderDelete(id)
    {
        orderService.remove(id).then(function(result){
          alert(result.data.message);
          navigate("/admin/order", { replace: true });

      });
    }

    return (
        <section className="card">
            <div className="card-header">
                <div className="row">
                    <div className="col-md-6">
                        <strong className="text-danger  ">CHI TIẾT THƯƠNG HIỆU</strong>
                    </div>
                    <div className="col-md-6 text-end">
                        <Link to="/admin/order" className="btn btn-sm btn-outline-success me-1">
                            Về Danh Sách
                        </Link>
                        <Link to={"/admin/order/update/" + order.id} className="btn btn-sm btn-outline-primary me-1 ">
                            <FaEdit /> Sửa
                        </Link>
                        <button onClick={()=>orderDelete(order.id)} className="btn btn-sm btn-outline-danger me-1">
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
                            <td>Tên Thương Hiệu</td>
                            <td>{order.name}  </td>
                        </tr>
                        <tr>
                            <td>Slug</td>
                            <td>{order.slug}  </td>
                        </tr>
                        <tr>
                            <td>Hình</td>
                            <td><img style={{width:200}}className="img-fluid" src={urlImage+'order/'+order.image} alt={order.name} /></td>
                        </tr>
                        <tr>
                            <td>Sắp Xếp</td>
                            <td>{order.sort_order}  </td>
                        </tr>
                        <tr>
                            <td>Metakey</td>
                            <td>{order.metakey}  </td>
                        </tr>
                        <tr>
                            <td>Metadesc</td>
                            <td>{order.metadesc}  </td>
                        </tr>
                        <tr>
                            <td>Trạng Thái</td>
                            <td>{order.status}  </td>
                        </tr>
                    </tbody>
                </table>

            </div>
        </section>

    );
}
export default OderShow;