import http from "./httpService";

export async function getCategoriesApi(options) {
    return http.get(`/category/list`,options).then(({ data }) => data.data);
  }
  export async function deleteCategoryApi({id,options}) {
    return http.delete(`/category/remove/${id}`,options).then(({data}) => data.data);
  }
  

  export async function createCategoryApi(data) {
    return http.post(`/category/add`,data).then(({ data }) => data.data);
  }
  export async function getCategoryByIdApi(id) {
    return http.get(`/category/${id}`).then(({ data }) => data.data);
  }
  export async function editCategoryApi({ id, data }) {
    return http.patch(`/category/update/${id}`, data).then(({ data }) => data.data);
  }