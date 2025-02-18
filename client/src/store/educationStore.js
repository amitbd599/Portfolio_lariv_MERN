import { create } from "zustand";
import axios from "axios";
import { ErrorToast, SuccessToast } from "../helper/helper";

const educationStore = create((set) => ({
  //! create-education
  createEducationRequest: async (formData) => {
    set({ isFormSubmit: true });
    try {
      let res = await axios.post(`/api/v1/create-education`, formData);
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

  //! update-education
  updateEducationRequest: async (id, formData) => {
    set({ isFormSubmit: true });
    try {
      let res = await axios.post(
        `/api/v1/update-single-education/${id}`,
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

  //! create-education
  allEducation: null,
  getAllEducationRequest: async () => {
    try {
      set({ allEducation: null });
      let res = await axios.get(`/api/v1/get-all-education`);
      set({ allEducation: res?.data?.data });
    } catch (error) {
      ErrorToast(error?.response?.data?.message);
      return null;
    }
  },

  //! get-single-education
  singleEducation: null,
  singleEducationRequest: async (id) => {
    try {
      set({ singleEducation: null });
      let res = await axios.get(`/api/v1/get-single-education/${id}`);

      set({ singleEducation: res?.data?.data[0] });
    } catch (error) {
      ErrorToast(error?.response?.data?.message);
      return null;
    }
  },

  //! delete education api
  deleteEducationRequest: async (id) => {
    set({ isFormSubmit: true });
    try {
      let res = await axios.delete(`/api/v1/delete-single-education/${id}`);
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

export default educationStore;
