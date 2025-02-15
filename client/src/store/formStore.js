import { create } from "zustand";
const formStore = create((set) => ({
  formData: {},
  formOnChange: (name, value) => {
    set((state) => ({
      formData: {
        ...state.formData,
        [name]: value,
      },
    }));
  },
}));

export default formStore;
