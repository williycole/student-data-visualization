import http from "./http-common";

class StudentDataService {
  getAll(page = 0) {
    return http.get(`studentdata?page=${page}`);
  }

  get(id) {
    return http.get(`/studentdata?id=${id}`);
  }

  find(query, by = "name", page = 0) {
    return http.get(`studentdata?${by}=${query}&page=${page}`);
  }
}

export default new StudentDataService();
