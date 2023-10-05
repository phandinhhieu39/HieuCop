import { useState} from "react";
import { Link } from "react-router-dom";
import userservice from "../../../services/UserService";
import { useNavigate } from "react-router-dom";

function UserCreate() {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [address, setAddress] = useState('');
    const [roles, setRoles] = useState('');
    const [status, setStatus] = useState(1);

    async function userStore(event) {
        const image = document.querySelector("#image");
        event.preventDefault();
        var user = new FormData();
        user.append("name", name);
        user.append("email", email);
        user.append("phone", phone);
        user.append("username", username);
        user.append("password", password);
        user.append("address", address);
        user.append("roles", roles);
        user.append("status", status);
        user.append("image", image.files[0]);
        await userservice.create(user)
            .then(function (res) {
                alert(res.data.message)
                navigate('/admin/user', { replace: true })
            });

    }
    return (
        <form onSubmit={userStore} method="post">
            <div className="card">
                <div className="card-header">
                    <div className="row">
                        <div className="col-md-6">
                            <strong className="text-danger">
                                THÊM NGƯỜI DÙNG
                            </strong>
                        </div>
                        <div className="col-md-6 text-end">
                            <button type="submit" className=" btn btn-sm btn-success me-2">
                                Lưu
                            </button>
                            <Link to="/admin/user" className="btn btn-sm btn-info">Về Danh Sách</Link>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-9">
                            <div className="mb-3">
                                <label htmlFor="name">Tên Người Dùng</label>
                                <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="name">Email</label>
                                <input type="text" name="name" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control"></input>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="name">Số Điện Thoại</label>
                                <input type="text" name="name" value={phone} onChange={(e) => setPhone(e.target.value)} className="form-control"></input>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="name">Địa chỉ</label>
                                <textarea type="text" name="name" value={address} onChange={(e) => setAddress(e.target.value)} className="form-control"></textarea>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="name">Tên Đầy Đủ</label>
                                <textarea type="text" name="name" value={username} onChange={(e) => setUsername(e.target.value)} className="form-control"></textarea>
                            </div>
                        </div>
                        <div className="col-md-3">
                        <div className="mb-3">
                                <label htmlFor="name">Mật Khẩu</label>
                                <input type="password" name="name" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control"></input>
                            </div>
                        <div className="mb-3">
                                <label htmlFor="name">Vai Trò</label>
                                <textarea type="text" name="name" value={roles} onChange={(e) => setRoles(e.target.value)} className="form-control"></textarea>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="image">Hình Đại Diện</label>
                                <input type="file" id="image" className="form-control" />
                               

                            </div>
                            <div className="mb-3">
                                <label htmlFor="sort">Trạng Thái</label>
                                <select name="sort" value={status} className="form-control" onChange={(e) => setStatus(e.target.value)}>
                                    <option value="1">Xuất bản</option>
                                    <option value="2">Chưa xuất bản</option>

                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>


    );
}
export default UserCreate;