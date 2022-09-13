import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.thecatapi.com/v1",
  Headers: {
    ["x-api-kay"]:
      "live_GQc6vsr3E61oBBuv80x95UJh0LJe2cG1LUWNi8RUSojfP7GqKlzSfvnSBhBkhMSj",
  },
});
