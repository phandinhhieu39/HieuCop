import { FaEdit, FaTrash } from 'react-icons/fa';
import { Link, useParams } from "react-router-dom";
import contactservice from '../../../services/ContactService';
import { useEffect, useState } from 'react';
import { urlImage } from '../../../config';
function ContactShow() {
    const { id } = useParams("id");
    const [contact, setContact] = useState([]);
    useEffect(function () {
        (async function () {
            await contactservice.getById(id).then(function (result) {
                setContact(result.data.contact);
            });
        })();
    }, []);

    return (
        <section className="card">
            <div className="card-header">
                <div className="row">
                    <div className="col-md-6">
                        <strong className="text-danger  ">CHI TIẾT THƯƠNG HIỆU</strong>
                    </div>
                    <div className="col-md-6 text-end">
                        <Link to="/admin/contact" className="btn btn-sm btn-outline-success me-1">
                            Về Danh Sách
                        </Link>
                        <Link to={"/admin/contact/update/" + contact.id} className="btn btn-sm btn-outline-primary me-1 ">
                            <FaEdit /> Sửa
                        </Link>
                        <button className="btn btn-sm btn-outline-danger me-1">
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
                            <td>Tên </td>
                            <td>{contact.name}  </td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td>{contact.email}  </td>
                        </tr>
                       
                        <tr>
                            <td>Điện Thoại</td>
                            <td>{contact.phone}  </td>
                        </tr>
                        <tr>
                            <td>Tiêu Đề</td>
                            <td>{contact.title}  </td>
                        </tr>
                        <tr>
                            <td>Nội Dung</td>
                            <td>{contact.content}  </td>
                        </tr>
                        <tr>
                            <td>Trạng Thái</td>
                            <td>{contact.status}  </td>
                        </tr>
                    </tbody>
                </table>

            </div>
        </section>

    );
}
export default ContactShow;