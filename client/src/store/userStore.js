import { create } from "zustand";
import Cookies from "js-cookie";
import axios from "axios";
import { ErrorToast, SuccessToast } from "../helper/helper";

const userStore = create((set) => ({
  isLogin: () => {
    return !!Cookies.get("token");
  },

  //! login api
  loginRequest: async (formData) => {
    set({ isFormSubmit: true });
    try {
      let res = await axios.post(`/api/v1/login`, formData);
      set({ isFormSubmit: false });
      SuccessToast(res.data.message);
      return true;
    } catch (error) {
      ErrorToast(error?.response?.data?.message);
      return false;
    } finally {
      set({ isFormSubmit: false });
    }
  },

  //! user-read api
  userData: [],
  userReadRequest: async () => {
    try {
      let res = await axios.get(`/api/v1/user-read`);
      set({ userData: res?.data?.data?.[0] });
      return res?.data?.data?.[0];
    } catch (error) {
      ErrorToast(error?.response?.data?.message);
      return null;
    }
  },

  //! user-update api
  userUpdateRequest: async (formData) => {
    set({ isFormSubmit: true });
    try {
      let res = await axios.post(`/api/v1/user-update`, formData);
      set({ isFormSubmit: false });
      SuccessToast(res.data.message);
      return true;
    } catch (error) {
      ErrorToast(error?.response?.data?.message);
      return false;
    } finally {
      set({ isFormSubmit: false });
    }
  },
}));

export default userStore;
