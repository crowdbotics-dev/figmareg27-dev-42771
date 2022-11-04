import axios from "axios"
const newConnector = axios.create({
  baseURL:
    "https://crowdbotics-slack-dev.crowdbotics.com/dashboard/app/42771/connectors",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
