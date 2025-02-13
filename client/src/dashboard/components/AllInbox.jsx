import { FaPenToSquare, FaRegTrashCan } from "react-icons/fa6";

const AllInbox = () => {
  return (
    <div>
      <div>
        <h2 className='text-4xl font-extrabold leading-none tracking-tight text-gray-900'>
          All Inbox
        </h2>
      </div>

      <div className='overflow-hidden rounded-lg border border-gray-200 shadow-md mt-[20px]'>
        <table className='w-full border-collapse bg-white text-left text-sm text-gray-500'>
          <thead className='bg-gray-50'>
            <tr>
              <th scope='col' className='px-6 py-4 font-medium text-gray-900'>
                Name
              </th>
              <th scope='col' className='px-6 py-4 font-medium text-gray-900'>
                Email
              </th>
              <th scope='col' className='px-6 py-4 font-medium text-gray-900'>
                Date
              </th>
              <th scope='col' className='px-6 py-4 font-medium text-gray-900'>
                Read
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
              <td className='px-6 py-4'>Alex</td>
              <td className='px-6 py-4'>alex@gmail.com</td>
              <td className='px-6 py-4'>10/02/2025</td>
              <td className='px-6 py-4'>
                <button className='bg-teal-500 text-white rounded-lg px-2 py-1'>
                  View
                </button>
              </td>

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

export default AllInbox;
