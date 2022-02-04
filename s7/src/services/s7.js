import axios from "axios";

const HOST = "http://localhost:3001/siemens";

const http = axios.create({ baseURL: HOST });

export async function readItems() {
  const { data } = await http.get("items");
  return data;
}

export async function writeItem(name, value) {
  const { data } = await http.post("items", { name, value });
  return data;
}
