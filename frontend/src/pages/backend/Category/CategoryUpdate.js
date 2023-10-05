import { useEffect, useState } from "react";
import { Link, useParams,useNavigate } from "react-router-dom";
import categoryservice from '../../../services/CategoryService';

function CategoryUpdate() {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [metakey, setMetakey] = useState('');
    const [metadesc, setMetadesc] = useState('');
    const [sort_order, setSortOrder] = useState(0);
    const [status, setStatus] = useState(1);
    ///////////////
    const { id } = useParams("id");
    ///////////////////
    useEffect(function () {
        (async function () {
            await categoryservice.getById(id).then(function (result) {
                const tmp = result.data.category;
                
                setName(tmp.name);
                setMetakey(tmp.metakey);
                setMetadesc(tmp.metadesc);
                setStatus(tmp.status);
                setSortOrder(tmp.sort_order);
            });
        })();
    }, []);
    ///////////lay danh sach
    const [categorys, setCategorys] = useState([]);
    useEffect(function () {
        (async function () {
            await categoryservice.getAll().then(function (result) {
                setCategorys(result.data.data);
            });
        })();
    }, []);


    async function categoryEdit(event) {
        event.preventDefault();
        const image = document.querySelector("#image");
        var category = new FormData();
        category.append("name", name);
        category.append("metakey", metakey);
        category.append("metadesc", metadesc);
        category.append("sort_order", sort_order);
        category.append("status", status);
        if (image.files.length === 0) 
        {
            category.append("image","");
        }
        else 
        {
            category.append("image", image.files[0]);
        }
        await categoryservice.update(category,id)
            .then(function (res) {
                alert(res.data.message)
                navigate('/admin/category', { replace: true })
            });
    }
    return (
        <form onSubmit={categoryEdit} method="post">
            <div className="card">
                <div className="card-header">
                    <div className="row">
                        <div className="col-md-6">
                            <strong className="text-danger">
                                CẬP NHẬT THƯƠNG HIỆU
                            </strong>
                        </div>
                        <div className="col-md-6 text-end">
                            <button type="submit" className=" btn btn-sm btn-success me-2">
                                Lưu
                            </button>
                            <Link to="/admin/category" className="btn btn-sm btn-info">Về Danh Sách</Link>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-9">
                            <div className="mb-3">
                                <label htmlFor="name">Tên Thương Hiệu</label>
                                <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="name">Từ Khóa</label>
                                <textarea type="text" name="name" value={metakey} onChange={(e) => setMetakey(e.target.value)} className="form-control"></textarea>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="name">Mô Tả</label>
                                <textarea type="text" name="name" value={metadesc} onChange={(e) => setMetadesc(e.target.value)} className="form-control"></textarea>
                            </div>
                        </div>
                        <div className="col-md-3">

                            <div className="mb-3">
                                <label htmlFor="sort_order">Sắp Xếp</label>
                                <select name="sort_order" value={sort_order} className="form-control" onChange={(e) => setSortOrder(e.target.value)}>
                                    <option value="0">None</option>
                                    {categorys.map(function (category, index) {
                                        return (
                                            <option key={index} value={category.sort_order + 1}>{category.name}</option>
                                        )
                                    })}
                                </select>
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
export default CategoryUpdate;