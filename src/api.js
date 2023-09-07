import axios from "axios";

const BASE_URL = "http://localhost:5001";

class PixlyApi {

  static async getImages() {
    const res = await axios.get(`${BASE_URL}/`);
    return res.data;
  }

}

export default PixlyApi;