import SlotsSkeleton from "../skeletons/SlotsSkeleton";
import { formatDateForUI } from "../utils";
import { useDispatch, useSelector } from "react-redux";
import Dropdown from "./ui/dropdown";
import { slotVariants } from "../constants";
import Slot from "./Slot";
import { setTimeVariant } from "../pages/Scheduler/schedulerSlice";

const Slots = () => {
  const date = useSelector((state) => state.scheduler.date);
  const slots = useSelector((state) => state.scheduler.slots.data);
  const loading = useSelector((state) => state.scheduler.slots.loading);
  const timeVariant = useSelector((state) => state.scheduler.timeVariant);

  const dispatch = useDispatch();

  const onTimeVariantChange = (variant) => {
    dispatch(setTimeVariant(variant));
  };

  if (loading) return <SlotsSkeleton />;

  return (
    <section className="slots-container p-2">
      <Dropdown
        label="SELECT FROM VARIANTS"
        value={timeVariant}
        isSelect={true}
        items={slotVariants}
        className="slot-dropdown"
        onChange={onTimeVariantChange}
      />
      <hr />
      <p className="slot-date text-left">
        {formatDateForUI(date)} - AVAILABLE SLOTS
      </p>
      <div className="slots flex flex-col align-center">
        {slots.map(({ start_time, end_time }) => (
          <Slot key={start_time} start={start_time} end={end_time} />
        ))}
      </div>
    </section>
  );
};

export default Slots;
