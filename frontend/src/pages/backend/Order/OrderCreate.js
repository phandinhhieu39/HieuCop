import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import orderservice from "../../../services/OrderServce";

function OrderCreate() {
    const navigate=useNavigate();
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [phone,setPhone]=useState('');
    const [address,setAddress]=useState('');
    const [status,setStatus]=useState(1);
    const [note,setNote]=useState('');

    async function orderStore(event){
        event.preventDefault();
        var order = new FormData();
        order.append("name",name);
        order.append("email",email);
        order.append("phone",phone);
        order.append("address",address);
        order.append("note",note);
        order.append("status",status);
    await orderservice.create(order)
        .then(function(res){
            alert(res.data.data)
            navigate('/admin/order', {replace:true})
        });
        
    }
    return (
        <form onSubmit={orderStore} method="post">
            <div className="card">
                <div className="card-header">
                    <div className="row">
                        <div className="col-md-6">
                            <strong className="text-danger">
                                THÊM ĐƠN HÀNG
                            </strong>
                        </div>
                        <div className="col-md-6 text-end">
                            <button type="submit"className=" btn btn-sm btn-success me-2">
                                Lưu
                            </button>
                            <Link to="/admin/order" className="btn btn-sm btn-info">Về Danh Sách</Link>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-9">
                            <div className="mb-3">
                                <label htmlFor="name">Tên Đơn Hàng</label>
                                <input type="text" name="name" value={name} onChange={(e)=>setName(e.target.value)} className="form-control"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="name">Email</label>
                                <input type="text" name="name" value={email} onChange={(e)=>setEmail(e.target.value)}className="form-control"></input>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="name">Địa chỉ</label>
                                <textarea type="text" name="name" value={address} onChange={(e)=>setAddress(e.target.value)} className="form-control"></textarea>
                            </div>
                        </div>
                        <div className="col-md-3">
                        <div className="mb-3">
                                <label htmlFor="name">Số Điện Thoại</label>
                                <input type="text" name="name" value={phone} onChange={(e)=>setPhone(e.target.value)} className="form-control"></input>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="name">Ghi Chú</label>
                                <textarea type="text" name="name" value={note} onChange={(e)=>setNote(e.target.value)} className="form-control"></textarea>
                            </div>
                           
            
                            <div className="mb-3">
                                <label htmlFor="sort">Trạng Thái</label>
                                <select name="sort" value={status} className="form-control" onChange={(e)=>setStatus(e.target.value)}>
                                    <option value="1">Xuất Bản</option>
                                    <option value="2">Chưa Xuất Bản</option>

                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>


    );
}
export default OrderCreate;