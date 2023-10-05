import httpAxios from "../httpAxios";
function getAll() {
   return httpAxios.get('contact/index');
}
function getById(id) {
    return httpAxios.get(`contact/show/${id}`);
}
function create(contact) {
    return httpAxios.post('contact/store',contact);
}
function update(contact, id) {
    return httpAxios.post(`contact/update/${id}`, contact);
}
function remove(id) {
    return httpAxios.delete(`contact/destroy/${id}`);
}
const contactservice={
    getAll:getAll,
    getById:getById,
    create:create,
    update:update,
    remove:remove
}
export default contactservice;



