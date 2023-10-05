import Slideshow from "./Slidershow";
import { useEffect } from "react";
import { useState } from "react";
import categoryservice from "../../../services/CategoryService";
import ProductHome from "./ProductHome";
import topicservice from "../../../services/TopicService";
import Post from "./Post";
function Home() {
    const [categorys, setCategorys] = useState([]);
    useEffect(function () {
        (async function () {
            await categoryservice.getCatparentId(0).then(function (result) {
                setCategorys(result.data.categorys);
            });
        })();
    }, []);
    const [topics, setTopics] = useState([]);
    useEffect(function () {
        (async function () {
            await topicservice.getTopicId(0).then(function (result){
                setTopics(result.data.topics);
                });
        })();
    }, []);
    return (

        <section className="maincontent">
                <Slideshow/>
                {categorys.map(function(category,index){
                    return <ProductHome key={index} category={category}/>
                })}
                {topics.map(function(topic,index){
                    return <Post key={index} topic={topic}/>
                })}
        </section>
    );
}
export default Home;