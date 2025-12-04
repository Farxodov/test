import axios from "axios";
import { urlApi } from "../url";

class Test {
  async getTest() {
    return await axios.get("https://jsonplaceholder.typicode.com/users");
  }
  async getCourseYear() {
    const today = new Date();
    const requests = [];

    for (let i = -1; i < 11; i++) {
      // 0 dan 11 gacha
      let formattedDate1 = false;
      let formattedDate = false;
      if (i === -1) {
        const today = new Date();

        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed
        const day = String(today.getDate()).padStart(2, "0");

        formattedDate1 = "https://api.exchangerate-api.com/v4/latest/USD";
      } else {
        const date = new Date(today.getFullYear(), today.getMonth() - i, 0);

        formattedDate = date.toISOString().split("T")[0];
      }
      requests.push(
        axios
          .get(
            formattedDate1
              ? formattedDate1
              : `https://cbu.uz/uz/arkhiv-kursov-valyut/json/USD/${formattedDate}/`
          )
          .catch(() => null)
      );
    }
    let responses = await Promise.all(requests);

    for (let i = 0; i < responses.length; i++) {
      if (responses[i] === null) continue;

      if (i === 0) {
        responses[i] = {
          date: responses[i].data.date,
          course: String(responses[i].data.rates.UZS),
        };
      } else {
        if (Array.isArray(responses[i].data) && responses[i].data.length > 0) {
          responses[i] = {
            date: responses[i].data[0].Date,
            course: responses[i].data[0].Rate,
          };
        } else {
          responses[i] = null;
        }
      }
    }

    const validResponses = responses.filter((r) => r !== null);
    return validResponses.reverse();
  }
  async getTableCourse() {
    return await axios.get(urlApi + "course");
  }
}

export default new Test();
