import { FaPenToSquare, FaRegTrashCan } from "react-icons/fa6";

const AllExperience = () => {
  return (
    <div>
      <div>
        <h2 className='text-4xl font-extrabold leading-none tracking-tight text-gray-900'>
          All Experience
        </h2>
      </div>

      <div className='overflow-hidden rounded-lg border border-gray-200 shadow-md mt-[20px]'>
        <table className='w-full border-collapse bg-white text-left text-sm text-gray-500'>
          <thead className='bg-gray-50'>
            <tr>
              <th scope='col' className='px-6 py-4 font-medium text-gray-900'>
                Title
              </th>
              <th scope='col' className='px-6 py-4 font-medium text-gray-900'>
                Sub Title
              </th>
              <th scope='col' className='px-6 py-4 font-medium text-gray-900'>
                Date
              </th>

              <th
                scope='col'
                className='px-6 py-4 font-medium text-gray-900 flex justify-end'
              >
                Action
              </th>
            </tr>
          </thead>
          <tbody className='divide-y divide-gray-100 border-t border-gray-100'>
            <tr className='hover:bg-gray-50'>
              <td className='px-6 py-4'>UI/UX 10</td>
              <td className='px-6 py-4'>subTitle</td>
              <td className='px-6 py-4'>date</td>

              <td className='px-6 py-4'>
                <div className='flex justify-end gap-2'>
                  <button className='p-1'>
                    <FaRegTrashCan className='text-[18px]' />
                  </button>
                  <button className='p-1'>
                    <FaPenToSquare className='text-[18px]' />
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllExperience;
