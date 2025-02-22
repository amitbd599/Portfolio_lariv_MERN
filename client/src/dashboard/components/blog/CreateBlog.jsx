import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import FileUploadBox from "../../../common/FileUploadBox";
import SubmitButton from "../../../common/SubmitButton";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";
import { useNavigate } from "react-router-dom";
import blogStore from "../../../store/blogStore";
import fileStore from "../../../store/fileStore";
const CreateBlog = () => {
  let { createBlogRequest, isFormSubmit } = blogStore();
  let navigate = useNavigate();
  let { fileUploadRequest, rowFile, rowFileSet } = fileStore();
  const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "color",
    "video",
    "background",
    "clean",
    "code",
    "align",
    "direction",
  ];
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [
        {
          color: [
            "#000000",
            "#be0027",
            "#cf8d2e",
            "#e4e932",
            "#2c9f45",
            "#371777",
            "#511378",
            "#ff0000",
            "#52565e",
            "#f3f4f7",
            "#00aeff",
            "#ff4f81",
            "#2dde98",
            "#0389ff",
          ],
        },
        {
          background: [
            "#000000",
            "#ffffff",
            "#be0027",
            "#cf8d2e",
            "#e4e932",
            "#2c9f45",
            "#371777",
            "#511378",
            "#ff0000",
            "#52565e",
            "#f3f4f7",
            "#00aeff",
            "#ff4f81",
            "#2dde98",
            "#0389ff",
          ],
        },
      ],

      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      [
        { align: "" },
        { align: "center" },
        { align: "right" },
        { align: "justify" },
      ],
      ["link", "image", "video"],
      ["clean", "code-block"],
    ],
  };

  return (
    <div>
      <div>
        <h2 className='text-4xl font-extrabold leading-none tracking-tight text-gray-900'>
          Create Blog
        </h2>
      </div>
      <Formik
        initialValues={{
          title: "",
          category: "",
          sortDescription: "",
          longDescription: "",
        }}
        enableReinitialize={true}
        validationSchema={Yup.object({
          title: Yup.string().min(6, "Too short").required("Required"),
          category: Yup.string().min(6, "Too short").required("Required"),
          sortDescription: Yup.string()
            .min(6, "Too short")
            .required("Required"),
          longDescription: Yup.string()
            .min(6, "Too short")
            .required("Required"),
        })}
        onSubmit={async (values, { setSubmitting }) => {
          if (rowFile !== null) {
            let filePath = await fileUploadRequest(rowFile);
            let result = await createBlogRequest({
              ...values,
              featureImg: filePath,
            });

            if (result) {
              setSubmitting(false);
              rowFileSet(null);
              navigate("/all-blog/1");
            }
          } else {
            await createBlogRequest(values);
          }
        }}
      >
        {({ values, setFieldValue, isSubmitting }) => (
          <Form className=' rounded-lg border border-gray-200 shadow-md mt-[20px]'>
            <div className='p-[20px] flex gap-6'>
              <div className='grid gap-6 mb-6 w-[70%]'>
                <div>
                  <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                    Title
                  </label>
                  <Field
                    type='text'
                    name='title'
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-3'
                  />
                  <ErrorMessage
                    name='title'
                    component='div'
                    className='error text-red-400'
                  />
                </div>

                <div className='flex gap-4'>
                  <div className='w-full'>
                    <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                      Category
                    </label>
                    <Field
                      type='text'
                      name='category'
                      className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-3'
                    />
                    <ErrorMessage
                      name='category'
                      component='div'
                      className='error text-red-400'
                    />
                  </div>
                  <div className='w-full'>
                    <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                      Sort Description
                    </label>
                    <Field
                      type='text'
                      name='sortDescription'
                      className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-3'
                    />
                    <ErrorMessage
                      name='sortDescription'
                      component='div'
                      className='error text-red-400'
                    />
                  </div>
                </div>

                <div>
                  <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                    Long Description
                  </label>
                  <ReactQuill
                    className='ReactQuill__inner bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-3'
                    theme='snow'
                    modules={modules}
                    formats={formats}
                    value={values.longDescription}
                    onChange={(value) =>
                      setFieldValue("longDescription", value)
                    }
                  />
                  <ErrorMessage
                    name='longDescription'
                    component='div'
                    className='error text-red-400'
                  />
                </div>

                <div>
                  {/* SubmitButton */}
                  <SubmitButton
                    text='Create Blog'
                    type='submit'
                    disabled={isSubmitting}
                    isFormSubmit={isFormSubmit}
                  />
                </div>
              </div>
              <div className='w-[30%]'>
                <div>
                  <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                    Feature Image
                  </label>

                  {/* FileUploadBox */}
                  <FileUploadBox />
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CreateBlog;
