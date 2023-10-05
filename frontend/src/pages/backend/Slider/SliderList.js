import { FaPlus,FaRegEye,FaEdit,FaTrash } from 'react-icons/fa';
import { Link } from "react-router-dom";
import sliderservice from '../../../services/SliderService';
import { useEffect } from 'react';
import { useState } from 'react';
import {urlImage} from'../../../config.js';
function SliderList() {
    const [statusdel,setStatusDelete] = useState(0);
    const [sliders, setSliders] = useState([]);
    useEffect(function () {
        (async function () {
            await sliderservice.gettAll().then(function (result){
                setSliders(result.data.data);
                });
        })();
    }, [statusdel])
    function sliderDelete(id)
  {
    sliderservice.remove(id).then(function(result){
        console.log(result.data.message);
        setStatusDelete(result.data.id)
    });
  }
    return (
        
        <section className="card">
            <div className="card-header">
                <div className="row">
                    <div className="col-md-6">
                        <strong className="text-danger  ">DANH SÁCH SLIDER</strong>
                    </div>
                    <div className="col-md-6 text-end">
                        <Link to="/admin/slider/create" className="btn btn-sm btn-outline-success">
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
                            <th style={{ width: 200 }} className="text-center">Tên</th>
                            <th style={{ width: 200 }}className="text-center">Hình</th>
                            <th style={{ width: 200 }}className="text-center">Link</th>
                            
                            <th style={{ width: 130 }} className="text-center">Ngày tạo</th>
                            <th style={{ width: 140 }} className="text-center">Chức năng</th>
                            <th style={{ width: 30 }} className="text-center">ID</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sliders.map(function(slider,index){
                            return <tr key={index }>
                            <td className="text-center">
                                <input type="checkbox" />
                            </td>
                            <td className="text-center">{slider.name}</td>
                            
                            <td className="text-center">
                            <img className="img-fluid" style={{width:200}}src={urlImage+'slider/'+slider.image} alt={slider.name} />
                            </td>
                            <td className="text-center">{slider.link}</td>

                           
                            <td className="text-center">{slider.created_at}</td>
                            <td className="text-center">
                                <Link to={"/admin/slider/show/"+slider.id} className="btn btn-sm btn-outline-success me-1">
                                     <FaRegEye/> 
                                </Link>
                                <Link to={"/admin/slider/update/"+slider.id} className="btn btn-sm btn-outline-primary me-1 ">
                                    <FaEdit/> 
                                </Link>
                                <button onClick={()=>sliderDelete(slider.id)} className="btn btn-sm btn-outline-danger me-1">
                                     <FaTrash/> 
                                </button>
                            </td>
                            <td className="text-center">{slider.id}</td>
                        </tr>
                        })}
                        
                    </tbody>
                </table>
            </div>
        </section>);
}
export default SliderList;