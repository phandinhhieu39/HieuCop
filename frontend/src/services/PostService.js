import httpAxios from "../httpAxios";
function getAll() {
   return httpAxios.get('post/index');
}
function getById(id) {
    return httpAxios.get(`post/show/${id}`);
}
function create(post) {
    return httpAxios.post('post/store',post);
}
function update(post,id) {
    return httpAxios.post(`post/update/${id}`,post);
}
function remove(id) {
    return httpAxios.delete(`post/destroy/${id}`);
}
function getPostHome(limit,topic_id){
    return httpAxios.get(`post_home/${limit}/${topic_id}`);
}
const Postservice={
    getAll:getAll,
    getPostHome,getPostHome,
    getById:getById,
    create:create,
    update:update,
    remove:remove
}
export default Postservice;



