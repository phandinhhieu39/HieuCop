import { useEffect } from "react";
import { useState } from "react";
import postservice from "../../../services/PostService";
import { urlImage } from '../../../config';
import PostItem from "../../../components/frontend/PostItem";
function Post(props) {
    const [limit, setLimit] = useState(4);
    const [posts, setPosts] = useState([]);
    useEffect(function () {
        (async function () {
            await postservice.getPostHome(limit,props.topic.id).then(function (result) {
                setPosts(result.data.posts);
            });
        })();
    }, [limit])
    return (
        <section>
            <div className="container my-4">
                <h3 className="text-center text-danger my-4">{props.topic.name}</h3>
                <div className="row">
                    {posts.map(function (post, index) {
                        return <PostItem post={post} />
                    })}
                </div>

               
            </div>
        </section>

    );
}

export default Post;