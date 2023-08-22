import axios from "axios";

export function getExam() {
  return axios.get("https://nagwaback.onrender.com/exam").then((res) => res.data);
}
