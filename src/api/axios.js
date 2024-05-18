import axios from "axios";

const BASE_URL = "https://app.appointo.me/scripttag/mock_timeslots";

export default axios.create({
  baseURL: BASE_URL,
});
