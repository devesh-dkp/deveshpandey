import axios from "axios";
const baseUrl = "/api/comment";

const postComment = (commentData) => {
  const request = axios.post(baseUrl, commentData);
  return request.then((response) => response.data);
}

export default { postComment };