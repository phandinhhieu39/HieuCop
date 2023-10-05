import { useState } from 'react';
import { useEffect } from 'react';
import { FaPlus,FaRegEye,FaEdit,FaTrash } from 'react-icons/fa';
import { Link } from "react-router-dom";
import postservice from '../../../services/PostService';
import { urlImage } from '../../../config';
function PostList() {
    const [statusdel,setStatusDel]=useState(0);
    const [posts, setPosts] = useState([]);
    useEffect(function () {
        (async function () {
            await postservice.getAll().then(function (result) {
                setPosts(result.data.data);
            });
        })();
    }, [statusdel])
    function postDelete(id) {
        postservice.remove(id).then(function (result) {
            console.log(result.data.message);
            setStatusDel(result.data.id);
        });
    }
    return (
        
        <section className="card">
            <div className="card-header">
                <div className="row">
                    <div className="col-md-6">
                        <strong className="text-danger  ">DANH SÁCH BÀI VIẾT</strong>
                    </div>
                    <div className="col-md-6 text-end">
                        <Link to="/admin/post/create" className="btn btn-sm btn-outline-success">
                             <FaPlus/>Thêm 
                        </Link>
                    </div>
                </div>
            </div>
            <div className="card-body">
                <table className="table table-bordered table-striped table-bordered table-hoverr">
                    <thead>
                        <tr>
                            <th style={{ width: 50 }} className="text-center">#</th>
                            <th style={{ width: 200 }} className="text-center">Tiêu Đề</th>
                            <th style={{ width: 200 }} className="text-center">Hình </th>
                            <th style={{ width: 200 }} className="text-center">Chi Tiết </th>
                            <th style={{ width: 130 }} className="text-center">Ngày Tạo</th>
                            <th style={{ width: 140 }} className="text-center">Chức Năng</th>
                            <th style={{ width: 30 }} className="text-center">ID</th>
                        </tr>
                    </thead>
                    <tbody>
                        {posts.map(function(post,index){
                            return <tr key={index }>
                            <td className="text-center">
                                <input type="checkbox" />
                            </td>
                            <td className="text-center">{post.title}</td>
                            <td className="text-center">
                                    <img style={{width:150}}className="img-fluid" src={urlImage +'post/'+post.image} alt={post.title} />
                            </td>
                            <td className="text-center">{post.detail}</td>
                            <td className="text-center">{post.created_at}</td>
                            <td className="text-center">
                                <Link to={"/admin/post/show/"+post.id} className="btn btn-sm btn-outline-success me-1">
                                     <FaRegEye/> 
                                </Link>
                                <Link to={"/admin/post/update/"+post.id} className="btn btn-sm btn-outline-primary me-1 ">
                                    <FaEdit/> 
                                </Link>
                                <button onClick={() => postDelete(post.id)}className="btn btn-sm btn-outline-danger me-1">
                                     <FaTrash/> 
                                </button>
                            </td>
                            <td className="text-center">{post.id}</td>
                        </tr>
                        })}
                        
                    </tbody>
                </table>
            </div>
        </section>);
}
export default PostList;