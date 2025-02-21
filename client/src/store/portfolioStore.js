import { create } from "zustand";
import axios from "axios";
import { ErrorToast, SuccessToast } from "../helper/helper";

const portfolioStore = create((set) => ({
  //! create-portfolio
  createPortfolioRequest: async (formData) => {
    set({ isFormSubmit: true });
    try {
      let res = await axios.post(`/api/v1/create-portfolio`, formData);
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

  //! update-portfolio
  updatePortfolioRequest: async (id, formData) => {
    console.log(formData);

    set({ isFormSubmit: true });
    try {
      let res = await axios.post(
        `/api/v1/update-single-portfolio/${id}`,
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

  //! create-portfolio
  allPortfolio: null,
  getAllPortfolioRequest: async () => {
    try {
      set({ allPortfolio: null });
      let res = await axios.get(`/api/v1/get-all-portfolio`);
      set({ allPortfolio: res?.data?.data });
    } catch (error) {
      ErrorToast(error?.response?.data?.message);
      return null;
    }
  },

  //! get-single-portfolio
  singlePortfolio: null,
  singlePortfolioRequest: async (id) => {
    try {
      set({ singlePortfolio: null });
      let res = await axios.get(`/api/v1/get-single-portfolio/${id}`);

      set({ singlePortfolio: res?.data?.data[0] });
    } catch (error) {
      ErrorToast(error?.response?.data?.message);
      return null;
    }
  },

  //! delete portfolio api
  deletePortfolioRequest: async (id) => {
    set({ isFormSubmit: true });
    try {
      let res = await axios.delete(`/api/v1/delete-single-portfolio/${id}`);
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

export default portfolioStore;
