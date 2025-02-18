import { create } from "zustand";
import axios from "axios";
import { ErrorToast, SuccessToast } from "../helper/helper";

const advantagesStore = create((set) => ({
  //! create-advantages
  createAdvantagesRequest: async (formData) => {
    set({ isFormSubmit: true });
    try {
      let res = await axios.post(`/api/v1/create-advantages`, formData);
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

  //! update-advantages
  updateAdvantagesRequest: async (id, formData) => {
    set({ isFormSubmit: true });
    try {
      let res = await axios.post(
        `/api/v1/update-single-advantages/${id}`,
        formData
      );
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

  //! create-advantages
  allAdvantages: null,
  getAllAdvantagesRequest: async () => {
    try {
      set({ allAdvantages: null });
      let res = await axios.get(`/api/v1/get-all-advantages`);
      set({ allAdvantages: res?.data?.data });
    } catch (error) {
      ErrorToast(error?.response?.data?.message);
      return null;
    }
  },

  //! get-single-advantages
  singleAdvantages: null,
  singleAdvantagesRequest: async (id) => {
    try {
      set({ singleAdvantages: null });
      let res = await axios.get(`/api/v1/get-single-advantages/${id}`);

      set({ singleAdvantages: res?.data?.data[0] });
    } catch (error) {
      ErrorToast(error?.response?.data?.message);
      return null;
    }
  },

  //! delete advantages api
  deleteAdvantagesRequest: async (id) => {
    set({ isFormSubmit: true });
    try {
      let res = await axios.delete(`/api/v1/delete-single-advantages/${id}`);
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

export default advantagesStore;
