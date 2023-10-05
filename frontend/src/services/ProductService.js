import httpAxios from "../httpAxios";
function getProductAll(limit,page=1){
    return httpAxios.get(`product_all/${limit}/${page}`);

}
function getProductBySlug(slug){
    return httpAxios.get(`product_detail/${slug}`);

}

function getAll() {
   return httpAxios.get('product/index');
}
function getById(id) {
    return httpAxios.get(`product/show/${id}`);
}
function create(product) {
    return httpAxios.post('product/store',product);
}
function update(product,id) {
    return httpAxios.post(`product/update/${id}`,product);
}
function remove(id) {
    return httpAxios.delete(`product/destroy/${id}`);
}
function getProductHome(limit,category_id){
    return httpAxios.get(`product_home/${limit}/${category_id}`);
}
function getProductByCategoryId(category_id,limit){
    return httpAxios.get(`product_category/${category_id}/${limit}`);

}
function getProductByBrandId(limit,brand_id){
    return httpAxios.get(`product_brand/${limit}/${brand_id}`);

}
function getProductSearch(key)
{
    return httpAxios.get(`product_search/${key}`);
}
const productservice={
    getProductSearch:getProductSearch,
    getProductByCategoryId:getProductByCategoryId,
    getProductByBrandId:getProductByBrandId,
    getProductHome:getProductHome,
    getProductBySlug: getProductBySlug,
    getProductAll: getProductAll,
    getAll:getAll,
    getById:getById,
    create:create,
    update:update,
    remove:remove
}
export default productservice;



