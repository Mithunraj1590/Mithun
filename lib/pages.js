import axios from "axios";
import { getAxiosInstance } from "../pages/api/index";

export const getPageContent = async (route) => {
  try {
    const api = await getAxiosInstance();
    const res = await api.get(`/${route}`);
    const data = res.data;
    return data;
  } catch (error) {
    return {
      data: {
        status: "Not Found",
        err: JSON.stringify(error),
      },
    };
  }
};

