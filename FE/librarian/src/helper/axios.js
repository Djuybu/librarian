import axios from "axios";

const axiosFetch = async ({ url, method, data = null }) => {
  try {
    const token = sessionStorage.getItem("token") ?? "{}";
    console.log(token);
    const response = await axios.request({
      url: "http://localhost:3000/" + url,
      method,
      data: data,
    });
    return response;
  } catch (err) {
    return err;
  }
};

export default axiosFetch;