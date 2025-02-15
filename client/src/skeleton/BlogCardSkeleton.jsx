import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
const BlogCardSkeleton = () => {
  return (
    <div className='rounded-xl bg-card p-[25px]'>
      <SkeletonTheme baseColor='#202020' highlightColor='#444'>
        <div className='grid grid-cols-12 gap-3'>
          <div className='col-span-12'>
            <Skeleton count={1} height={250} />
          </div>
          <div className='col-span-6'>
            <Skeleton count={2} />
          </div>
          <div className='col-span-6'>
            <Skeleton count={2} />
          </div>
          <div className='col-span-12'>
            <Skeleton count={2} />
          </div>
          <div className='col-span-6'>
            <Skeleton count={2} />
          </div>
          <div className='col-span-6'>
            <Skeleton count={2} />
          </div>
        </div>
      </SkeletonTheme>
    </div>
  );
};

export default BlogCardSkeleton;
