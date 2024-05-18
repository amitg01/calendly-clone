import { useDispatch, useSelector } from "react-redux";
import clsx from "clsx";

import { setSelectedSlot } from "../pages/Scheduler/schedulerSlice";
import { getTimeFormatted } from "../utils";

import { CircleCheck } from "lucide-react";

const formatSlotTime = (start, end) => {
  return `${getTimeFormatted(start)} - ${getTimeFormatted(end)}`;
};

const Slot = ({ start, end }) => {
  const dispatch = useDispatch();
  const handleCLick = () => {
    dispatch(setSelectedSlot(start));
  };
  const selectedSlot = useSelector((state) => state.scheduler.selectedSlot);
  const isSelected = selectedSlot == start;

  return (
    <div
      onClick={handleCLick}
      className={clsx("slot-card mt-1 text-center", {
        "selected-slot": isSelected,
      })}
    >
      <span>{formatSlotTime(start, end)}</span>
      {isSelected && <CircleCheck strokeWidth={1} />}
    </div>
  );
};

export default Slot;
