import SlotSkeleton from "./SlotSkeleton";

const SlotsSkeleton = () => {
  return (
    <div className="slots-container p-2">
      <p className="slot-date text-left w-50 h-3 skeleton"></p>
      <div className="slots flex flex-col align-center">
        {[1, 2, 3, 4].map((val) => {
          return <SlotSkeleton key={val} />;
        })}
      </div>
    </div>
  );
};

export default SlotsSkeleton;
