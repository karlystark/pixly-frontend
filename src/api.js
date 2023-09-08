import axios from "axios";

const BASE_URL = "http://127.0.0.1:5001/";

class PixlyApi {

  static async getImages() {
    const res = await axios.get(`${BASE_URL}`);
    console.log("res.data:", res.data)
    return res.data.photos;
  }

  static async getImageByCameraSearchTerm(keyword) {
    const res = await axios.get(`${BASE_URL}`, {params: {camera: `${keyword}`}});
    return res.data.photos
  }

  static async uploadImage(formData) {
    const res = await axios.post(`${BASE_URL}`, formData)
    return res.data;
  }

}

export default PixlyApi;