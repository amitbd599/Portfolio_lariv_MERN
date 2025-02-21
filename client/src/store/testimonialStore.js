import { create } from "zustand";
import axios from "axios";
import { ErrorToast, SuccessToast } from "../helper/helper";

const testimonialStore = create((set) => ({
  //! create-testimonial
  createTestimonialRequest: async (formData) => {
    set({ isFormSubmit: true });
    try {
      let res = await axios.post(`/api/v1/create-testimonial`, formData);
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

  //! update-testimonial
  updateTestimonialRequest: async (id, formData) => {
    console.log(formData);

    set({ isFormSubmit: true });
    try {
      let res = await axios.post(
        `/api/v1/update-single-testimonial/${id}`,
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

  //! create-testimonial
  allTestimonial: null,
  getAllTestimonialRequest: async () => {
    try {
      set({ allTestimonial: null });
      let res = await axios.get(`/api/v1/get-all-testimonial`);
      set({ allTestimonial: res?.data?.data });
    } catch (error) {
      ErrorToast(error?.response?.data?.message);
      return null;
    }
  },

  //! get-single-testimonial
  singleTestimonial: null,
  singleTestimonialRequest: async (id) => {
    try {
      set({ singleTestimonial: null });
      let res = await axios.get(`/api/v1/get-single-testimonial/${id}`);

      set({ singleTestimonial: res?.data?.data[0] });
    } catch (error) {
      ErrorToast(error?.response?.data?.message);
      return null;
    }
  },

  //! delete testimonial api
  deleteTestimonialRequest: async (id) => {
    set({ isFormSubmit: true });
    try {
      let res = await axios.delete(`/api/v1/delete-single-testimonial/${id}`);
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

export default testimonialStore;
