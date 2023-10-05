import { useState } from 'react';
import { useEffect } from 'react';
import { FaPlus,FaRegEye,FaEdit,FaTrash } from 'react-icons/fa';
import { Link } from "react-router-dom";
import brandservice from '../../../services/BrandService';
import { urlImage } from '../../../config';
function BrandList() {
    const [statusdel,setStatusDel]=useState(0);
    const [brands, setbrands] = useState([]);
    useEffect(function () {
        (async function () {
            await brandservice.getAll().then(function (result) {
                setbrands(result.data.data);
            });
        })();
    }, [statusdel])
    function brandDelete(id) {
        brandservice.remove(id).then(function (result) {
            console.log(result.data.message);
            setStatusDel(result.data.id);
        });
    }
    return (
        
        <section className="card">
            <div className="card-header">
                <div className="row">
                    <div className="col-md-6">
                        <strong className="text-danger  ">DANH SÁCH THƯƠNG HIỆU</strong>
                    </div>
                    <div className="col-md-6 text-end">
                        <Link to="/admin/brand/create" className="btn btn-sm btn-outline-success">
                             <FaPlus/>Thêm 
                        </Link>
                    </div>
                </div>
            </div>
            <div className="card-body">
                <table className="table table table-striped table-bordered table-hover">
                    <thead>
                        <tr>
                            <th style={{ width: 50 }} className="text-center">#</th>
                            <th style={{ width: 200 }} className="text-center">Hình</th>
                            <th className="text-center">Tên Thương Hiệu</th>
                            <th className="text-center">Slug</th>
                            <th style={{ width: 130 }} className="text-center">Ngày Tạo</th>
                            <th style={{ width: 140 }} className="text-center">Chức Năng</th>
                            <th style={{ width: 30 }} className="text-center">ID</th>
                        </tr>
                    </thead>
                    <tbody>
                        {brands.map(function(brand,index){
                            return <tr key={index }>
                            <td className="text-center">
                                <input type="checkbox" />
                            </td>
                            <td className="text-center">
                                <img className="img-fluid" src={urlImage+'brand/'+brand.image} alt={brand.name} />
                            </td>
                            <td className="text-center">{brand.name}</td>

                            <td className="text-center">{brand.slug}</td>
                            <td className="text-center">{brand.created_at}</td>
                            <td className="text-center">
                                <Link to={"/admin/brand/show/"+brand.id} className="btn btn-sm btn-outline-success me-1">
                                     <FaRegEye/> 
                                </Link>
                                <Link to={"/admin/brand/update/"+brand.id} className="btn btn-sm btn-outline-primary me-1 ">
                                    <FaEdit/> 
                                </Link>
                                <button onClick={() => brandDelete(brand.id)}className="btn btn-sm btn-outline-danger me-1">
                                     <FaTrash/> 
                                </button>
                            </td>
                            <td className="text-center">{brand.id}</td>
                        </tr>
                        })}
                        
                    </tbody>
                </table>
            </div>
        </section>);
}
export default BrandList;