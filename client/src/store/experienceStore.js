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

  //! create-experience
  allExperience: [],
  getAllExperienceRequest: async () => {
    try {
      let res = await axios.get(`/api/v1/get-all-experience`);
      set({ allExperience: res?.data?.data });
    } catch (error) {
      ErrorToast(error?.response?.data?.message);
      return null;
    }
  },

    //! delete experience api
    deleteExperienceRequest: async (id) => {
      set({ isFormSubmit: true });
      try {
        let res = await axios.delete(
          `/api/v1/delete-single-experience/${id}`
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


}));

export default experienceStore;
