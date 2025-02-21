import { create } from "zustand";
import axios from "axios";
import { ErrorToast, SuccessToast } from "../helper/helper";

const serviceStore = create((set) => ({
  //! create-service
  createServiceRequest: async (formData) => {
    set({ isFormSubmit: true });
    try {
      let res = await axios.post(`/api/v1/create-service`, formData);
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

  //! update-service
  updateServiceRequest: async (id, formData) => {
    console.log(formData);

    set({ isFormSubmit: true });
    try {
      let res = await axios.post(
        `/api/v1/update-single-service/${id}`,
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

  //! create-service
  allService: null,
  getAllServiceRequest: async () => {
    try {
      set({ allService: null });
      let res = await axios.get(`/api/v1/get-all-service`);
      set({ allService: res?.data?.data });
    } catch (error) {
      ErrorToast(error?.response?.data?.message);
      return null;
    }
  },

  //! get-single-service
  singleService: null,
  singleServiceRequest: async (id) => {
    try {
      set({ singleService: null });
      let res = await axios.get(`/api/v1/get-single-service/${id}`);

      set({ singleService: res?.data?.data[0] });
    } catch (error) {
      ErrorToast(error?.response?.data?.message);
      return null;
    }
  },

  //! delete service api
  deleteServiceRequest: async (id) => {
    set({ isFormSubmit: true });
    try {
      let res = await axios.delete(`/api/v1/delete-single-service/${id}`);
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

export default serviceStore;
