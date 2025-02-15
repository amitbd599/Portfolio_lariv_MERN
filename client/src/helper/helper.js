import { toast } from "react-toastify";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);
class FormHelper {
  IsEmpty(value) {
    return value.length === 0; // true if get empty
  }

  getBase64(file) {
    return new Promise((resolve, reject) => {
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        resolve(reader.result);
      };
      reader.onerror = (err) => {
        reject(err);
      };
    });
  }

  SuccessToast(msg) {
    toast.success(msg);
  }
  ErrorToast(msg) {
    toast.error(msg);
  }

  DeleteAlert() {
    return MySwal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      // icon: "warning",
      iconHtml: "icon",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        return true;
      }
    });
  }
}

export const { getBase64, SuccessToast, ErrorToast, IsEmpty, DeleteAlert } =
  new FormHelper();
