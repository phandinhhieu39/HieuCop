import { Link } from "react-router-dom";
import { FaPlusCircle, FaEye, FaRegEdit, FaRegTrashAlt } from 'react-icons/fa';

import CategoryService from "../../../services/CategoryService";
import { useEffect, useState } from "react";
import {urlImage} from "../../../config";


function CategoryList() {
    const [statusdel,setStatusDelete] = useState(0);
    const [categorys, setCategorys] = useState([]);
  useEffect(function () {
    (async function () {
      await CategoryService.getAll().then(function (result) {
        setCategorys(result.data.data);
      });
    })();
  }, [statusdel]);

  function categoryDelete(id)
  {
    CategoryService.remove(id).then(function(result){
        console.log(result.data.message);
        setStatusDelete(result.data.id)
    });
  }


    return (
        <div className="card">
            <div className="card-header">
                <div className="row">
                    <div className="col-6">
                        <strong className="text-danger">THƯƠNG HIỆU</strong>
                    </div>
                    <div className="col-6 text-end">
                        <Link className="btn btn-sm btn-success" to="/admin/category/create">
                            <FaPlusCircle />Thêm
                        </Link>
                    </div>
                </div>

            </div>
            <div className="card-body">
                <table className="table table-striped table-bordered table-hover">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>LOGO</th>
                            <th>Thương hiệu</th>
                            <th>Slug</th>
                            <th>Ngày Tạo</th>
                            <th>Chức Năng</th>
                            <th>ID</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            categorys.map(function (category, index) {
                                return (
                                    <tr key={index}>
                                        <td>
                                            <input type="checkbox" />
                                        </td>
                                        <td>
                                            <img style={{ width: 130 }} src={urlImage+'category/'+category.image} alt="hinh.png" className="img-fluid" />
                                        </td>
                                        <td>{category.name}</td>
                                        <td>ten-thuong-hieu</td>
                                        <td>26/05/2023</td>
                                        <td>
                                            <Link className="btn btn-sm btn-primary me-1" to={"/admin/category/show/" + category.id}>
                                                <FaEye />
                                            </Link>
                                            <Link className="btn btn-sm btn-warning me-1" to={"/admin/category/update/" + category.id}>
                                                <FaRegEdit />
                                            </Link>
                                            <Link onClick={()=>categoryDelete(category.id)} className="btn btn-sm btn-danger me-1" >
                                                <FaRegTrashAlt />
                                            </Link>
                                        </td>
                                        <td>{category.id}</td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default CategoryList;