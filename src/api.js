import axios from "axios";

const BASE_URL = "http://127.0.0.1:5001/";

class PixlyApi {

  //GET request to root route, gets all images
  static async getImages() {
    const res = await axios.get(`${BASE_URL}`);
    console.log("res.data:", res.data);
    return res.data.photos;
  }

  //GET request to root route, gets images by camera search term
  static async getImageByCameraSearchTerm(keyword) {
    const res = await axios.get(`${BASE_URL}`,
      { params: { camera: `${keyword}` } });
    return res.data.photos;
  }

  //POST request to root route, uploads image to database/aws
  static async uploadImage(formData) {
    const res = await axios.post(`${BASE_URL}`, formData);
    return res.data;
  }

}

export default PixlyApi;