import { Link } from "react-router-dom";
import { urlImage } from "../../config";

function PostItem(props) {
    return (
        <div className="col-md-6 mb-3" >
            <div className="post-item border">
                <div className="post-image  ">
                    <Link to={'/chi-tiet-bai-viet/' + props.post.slug}>
                        <img  style={{ width: 230 }} src={urlImage + 'post/' + props.post.image} className="img-fluid " alt="" />
                    </Link>
                </div>
                <div className="post-name p-2">
                    <Link style={{textDecorationLine:"none"}}to={'/chi-tiet-bai-viet/' + props.post.slug}>
                        <h3 className="text-center fs-6 ">{props.post.title}</h3>
                    </Link>
                </div>
                
            </div>

        </div>
    );
}
export default PostItem;