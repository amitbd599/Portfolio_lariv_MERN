import { create } from "zustand";
import axios from "axios";
import { ErrorToast, SuccessToast } from "../helper/helper";
const fileStore = create((set) => ({
  //! file Upload Request api
  filePath: "",
  async fileUploadRequest(file) {
    try {
      const formData = new FormData();
      formData.append("file", file);
      let result = await axios.post(`api/v1/upload-file`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      if (result.data.success === true) {
        set({ filePath: result?.data?.data?.fileName });
        return result?.data?.data?.fileName;
      } else {
        ErrorToast(result.data.msg);
        return false;
      }
    } catch (error) {
      ErrorToast(error.message);
      return false;
    }
  },

  //! row File Set
  rowFile: null,
  async rowFileSet(file) {
    try {
      set({ rowFile: file });
    } catch (error) {
      ErrorToast(error.message);
    }
  },

  //! get-all-file api
  allFile: null,
  total: 0,
  getAllFileRequest: async (item, pageNo) => {
    try {
      set({ allFile: null });
      let res = await axios.get(`/api/v1/get-all-file/${item}/${pageNo}`);

      set({ allFile: res.data.data.file });
      set({ total: res?.data?.data?.total[0]?.count });
    } catch (error) {
      ErrorToast(error?.response?.data?.message);
      return null;
    }
  },

  //! delete product api
  deleteProductRequest: async (id, fileName) => {
    set({ isFormSubmit: true });
    try {
      let res = await axios.delete(
        `/api/v1/delete-single-file/${id}?fileName=${fileName}`
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

export default fileStore;
