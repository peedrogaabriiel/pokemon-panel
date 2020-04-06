import axios from "axios";
import { URL_BASE } from "../utils/constant";

const initialize = () => {
  const instance = axios.create({ baseURL: URL_BASE });

  HttpService.instance = instance;
};

const get = (url) => {
  return HttpService.instance.get(url).then(({ data }) => data);
};

const HttpService = {
  get,
  instance: null,
  initialize,
};

export default HttpService;
