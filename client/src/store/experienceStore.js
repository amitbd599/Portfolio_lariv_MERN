import { create } from "zustand";
import axios from "axios";
import { ErrorToast, SuccessToast } from "../helper/helper";

const experienceStore = create((set) => ({
  //! create-experience
  createExperienceRequest: async (formData) => {
    set({ isFormSubmit: true });
    try {
      let res = await axios.post(`/api/v1/create-experience`, formData);
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

  //! update-experience
  updateExperienceRequest: async (id, formData) => {
    set({ isFormSubmit: true });
    try {
      let res = await axios.post(
        `/api/v1/update-single-experience/${id}`,
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

  //! create-experience
  allExperience: null,
  getAllExperienceRequest: async () => {
    try {
      set({ allExperience: null });
      let res = await axios.get(`/api/v1/get-all-experience`);
      set({ allExperience: res?.data?.data });
    } catch (error) {
      ErrorToast(error?.response?.data?.message);
      return null;
    }
  },

  //! get-single-experience
  singleExperience: null,
  singleExperienceRequest: async (id) => {
    try {
      set({ singleExperience: null });
      let res = await axios.get(`/api/v1/get-single-experience/${id}`);

      set({ singleExperience: res?.data?.data[0] });
    } catch (error) {
      ErrorToast(error?.response?.data?.message);
      return null;
    }
  },

  //! delete experience api
  deleteExperienceRequest: async (id) => {
    set({ isFormSubmit: true });
    try {
      let res = await axios.delete(`/api/v1/delete-single-experience/${id}`);
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

export default experienceStore;
