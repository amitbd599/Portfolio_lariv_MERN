import { create } from "zustand";
import axios from "axios";
import { ErrorToast, SuccessToast } from "../helper/helper";

const blogStore = create((set) => ({
  //! create-blog
  createBlogRequest: async (formData) => {
    set({ isFormSubmit: true });
    try {
      let res = await axios.post(`/api/v1/create-blog`, formData);
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

  //! update-blog
  updateBlogRequest: async (id, formData) => {
    console.log(formData);

    set({ isFormSubmit: true });
    try {
      let res = await axios.post(`/api/v1/update-single-blog/${id}`, formData);
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

  //! all-blog
  allBlog: null,
  total: 0,
  getAllBlogRequest: async (item, pageNo) => {
    try {
      set({ allBlog: null });
      let res = await axios.get(`/api/v1/get-all-blog/${item}/${pageNo}`);

      set({ allBlog: res.data.data.blog });
      set({ total: res?.data?.data?.total[0]?.count });
    } catch (error) {
      ErrorToast(error?.response?.data?.message);
      return null;
    }
  },

  //! get-single-blog
  singleBlog: null,
  singleBlogRequest: async (id) => {
    try {
      set({ singleBlog: null });
      let res = await axios.get(`/api/v1/get-single-blog/${id}`);

      set({ singleBlog: res?.data?.data[0] });
    } catch (error) {
      ErrorToast(error?.response?.data?.message);
      return null;
    }
  },

  //! get-comment-by-blog
  allComments: null,
  totalComments: null,
  allCommentsRequest: async (id) => {
    try {
      set({ allComments: null });
      let res = await axios.get(`/api/v1/get-comment-by-blog/${id}`);

      set({ allComments: res?.data?.data });
      set({ totalComments: res?.data?.totalComments });
    } catch (error) {
      ErrorToast(error?.response?.data?.message);
      return null;
    }
  },

  //! delete blog api
  deleteBlogRequest: async (id) => {
    set({ isFormSubmit: true });
    try {
      let res = await axios.delete(`/api/v1/delete-single-blog/${id}`);
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

export default blogStore;
