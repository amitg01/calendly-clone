import { useCallback, useEffect, useState } from "react";

import { Calendar as ReactCalendar } from "@natscale/react-calendar";
import "@natscale/react-calendar/dist/main.css";
import { weekDaysLabel } from "../constants";

const Calendar = ({ onChange, onNextClick, onPrevClick }) => {
  const [value, setValue] = useState(new Date());

  const handleNextClick = () => {
    onNextClick();
  };

  const handlePrevClick = () => {
    onPrevClick();
  };

  // Detect when month is changed
  useEffect(() => {
    document
      .querySelector(".rc_header_nav-next")
      .addEventListener("click", handleNextClick);

    document
      .querySelector(".rc_header_nav-prev")
      .addEventListener("click", handlePrevClick);

    return () => {
      document
        .querySelector(".rc_header_nav-next")
        .removeEventListener("click", handleNextClick);

      document
        .querySelector(".rc_header_nav-prev")
        .removeEventListener("click", handlePrevClick);
    };
  }, []);

  const handleChange = useCallback(
    (val) => {
      setValue(val);
      onChange(val);
    },
    [setValue]
  );

  const isDisabled = useCallback((date) => {
    const today = new Date();
    if (date < today) {
      return true;
    }
  }, []);

  return (
    <ReactCalendar
      startOfWeek={0}
      weekends={[]}
      value={value}
      onChange={handleChange}
      weekDaysLabel={weekDaysLabel}
      isDisabled={isDisabled}
      className="calendar py-1"
    />
  );
};

export default Calendar;
