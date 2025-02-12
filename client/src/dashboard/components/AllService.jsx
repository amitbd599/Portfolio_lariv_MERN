import { FaPenToSquare, FaRegTrashCan } from "react-icons/fa6";

const AllService = () => {
  return (
    <div>
      <div>
        <h2 className='text-4xl font-extrabold leading-none tracking-tight text-gray-900'>
          All Service
        </h2>
      </div>

      <div className='overflow-hidden rounded-lg border border-gray-200 shadow-md mt-[20px]'>
        <table className='w-full border-collapse bg-white text-left text-sm text-gray-500'>
          <thead className='bg-gray-50'>
            <tr>
              <th scope='col' className='px-6 py-4 font-medium text-gray-900'>
                Image
              </th>
              <th scope='col' className='px-6 py-4 font-medium text-gray-900'>
                Title
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
              <td className='px-6 py-4'>
                <img
                  src='https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
                  alt='Placeholder'
                  className='h-[60px] w-[60px] object-cover rounded-lg'
                />
              </td>
              <td className='px-6 py-4'>Institution</td>

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

export default AllService;
