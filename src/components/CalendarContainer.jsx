import Calendar from "./Calendar";

const CalendarContainer = ({ onChange, onNextClick, onPrevClick }) => {
  return (
    <div className="calendar-container flex flex-col flex-center p-2">
      <div className="tz-info text-left py-1 mt-1">
        <h2>Test Service</h2>
        <div>
          <span className="tz-label">Timezone:</span>{" "}
          <span className="tz-val">Asia/Calcutta</span>
        </div>
      </div>
      <Calendar
        onChange={onChange}
        onNextClick={onNextClick}
        onPrevClick={onPrevClick}
      />
    </div>
  );
};

export default CalendarContainer;
