import { useEffect, useState } from "react";
import { FaRegTrashCan } from "react-icons/fa6";
import fileStore from "../store/fileStore";

const FileUploadBox = ({ src }) => {
  const [image, setImage] = useState("");
  let { rowFileSet } = fileStore();

  useEffect(() => {
    if (!!src === true) {
      setImage(`/api/v1/get-single-file/${src}`);
    }
  }, [src]);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
      rowFileSet(file);
    }
  };

  const handleRemove = () => {
    setImage("");
  };

  return (
    <div className='w-full'>
      <div className='relative h-[226px] rounded-lg border-dashed border-2 border-blue-700 bg-gray-100 flex justify-center items-center'>
        {image ? (
          <div className='relative w-full h-full flex justify-center items-center'>
            <img
              src={image}
              alt='Uploaded'
              className='w-full h-full object-contain rounded-lg'
            />
            <button
              onClick={handleRemove}
              className='absolute top-3 right-3 bg-red-500 text-white p-2 rounded-full text-[18px] z-20'
            >
              <FaRegTrashCan />
            </button>
          </div>
        ) : (
          <div className='absolute flex flex-col items-center'>
            <i className='fa fa-folder-open fa-4x text-blue-700' />
            <span className='block text-gray-400 font-normal'>
              Attach your files here
            </span>
          </div>
        )}

        <input
          name='file'
          type='file'
          className='absolute inset-0 opacity-0 cursor-pointer'
          onChange={handleFileChange}
          accept='image/*'
        />
      </div>
    </div>
  );
};

export default FileUploadBox;
