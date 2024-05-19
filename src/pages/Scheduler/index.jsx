import { useEffect } from "react";
import Slots from "../../components/Slots";
import CalendarContainer from "../../components/CalendarContainer";

import { useDispatch } from "react-redux";
import { setDate, fetchSlots, reset } from "./schedulerSlice";
import { useSelector } from "react-redux";
import Button from "../../components/ui/button";

import { ChevronRight } from "lucide-react";

const Scheduler = () => {
  const dispatch = useDispatch();
  const date = useSelector((state) => state.scheduler.date);

  const onDateChange = (dateStr) => {
    dispatch(setDate(dateStr.toISOString()));
    dispatch(fetchSlots(dateStr));
  };

  const onNextClick = () => {
    dispatch(reset());
  };

  const onPrevClick = () => {
    dispatch(reset());
  };

  useEffect(() => {
    dispatch(fetchSlots(date));
  }, []);

  const SchedulerFooter = () => {
    return (
      <div className="scheduler-footer flex align-center px-2 justify-between">
        <span className="scheduler_footer-text">
          Powered by <span className="underline cursor-pointer">Appointo</span>
        </span>
        <Button
          label={"Next"}
          rightIcon={<ChevronRight color="#378760" strokeWidth={1.5} />}
        />
      </div>
    );
  };

  return (
    <section className="scheduler-container">
      <div className="flex flex-center scheduler-content">
        <CalendarContainer
          onChange={onDateChange}
          onNextClick={onNextClick}
          onPrevClick={onPrevClick}
        />
        <Slots />
      </div>
      <SchedulerFooter />
    </section>
  );
};

export default Scheduler;
