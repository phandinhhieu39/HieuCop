import { FaEdit, FaTrash } from 'react-icons/fa';
import { Link, useNavigate, useParams } from "react-router-dom";
import postservice from '../../../services/PostService';
import { useEffect, useState } from 'react';
import { urlImage } from '../../../config';
function PostShow(){
    const { id } = useParams("id");
    const navigate = useNavigate();

    const [post, setPost] = useState([]);
    useEffect(function () {
        (async function () {
            await postservice.getById(id).then(function (result) {
                setPost(result.data.post);
            });
        })();
    }, []);
    function postDelete(id){
        postservice.remove(id).then(function (result) {
            alert(result.data.message);
            navigate('/admin/post', { replace: true })
        });
    }
    return (
        <section className="card">
            <div className="card-header">
                <div className="row">
                    <div className="col-md-6">
                        <strong className="text-danger  ">CHI TIẾT POST</strong>
                    </div>
                    <div className="col-md-6 text-end">
                        <Link to="/admin/post" className="btn btn-sm btn-outline-success me-1">
                            Về Danh Sách
                        </Link>
                        <Link to={"/admin/post/update/" + post.id} className="btn btn-sm btn-outline-primary me-1 ">
                            <FaEdit /> Sửa
                        </Link>
                        <button onClick={() => postDelete(post.id)}className="btn btn-sm btn-outline-danger me-1">
                            <FaTrash /> Xóa
                        </button>
                    </div>
                </div>
            </div>
            <div className="card-body">
                <table className="table table table-striped table-bposted table-hover">
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
                            <td>Đề Tài</td>
                            <td>{post.topic_id}  </td>
                        </tr>
                        <tr>
                            <td>Tiêu Đề</td>
                            <td>{post.title}  </td>
                        </tr>
                        <tr>
                            <td>Slug</td>
                            <td>{post.slug}  </td>
                        </tr>
                        <tr>
                            <td>Chi Tiết</td>
                            <td>{post.detail}  </td>
                        </tr>
                        <tr>
                            <td>Hình</td>
                            <td><img style={{width:200}}className="img-fluid" src={urlImage+'postt/'+post.image} alt={post.name} /></td>
                        </tr>
                    
                        <tr>
                            <td>Từ Khóa</td>
                            <td>{post.metakey}  </td>
                        </tr>
                        <tr>
                            <td>Mô Tả</td>
                            <td>{post.metadesc}  </td>
                        </tr>
                        <tr>
                            <td>Trạng Thái</td>
                            <td>{post.status}  </td>
                        </tr>
                    </tbody>
                </table>

            </div>
        </section>

    );
}
export default PostShow;