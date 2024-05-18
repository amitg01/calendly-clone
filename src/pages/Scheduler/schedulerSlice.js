import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../api/axios";
import { formatDateForAPI } from "../../utils";

const initialState = {
  date: new Date().toISOString(),
  slots: {
    data: [],
    loading: true,
  },
  selectedSlot: "",
  timeVariant: "30 min",
};

export const fetchSlots = createAsyncThunk(
  "schedule/fetchSlots",
  async (date) => {
    const { startDate, endDate } = formatDateForAPI(date);
    const response = await axios.get(
      `?start_date=${startDate}&end_date=${endDate}`
    );
    return response.data;
  }
);

export const schedulerSlice = createSlice({
  name: "scheduler",
  initialState,
  reducers: {
    setDate: (state, action) => {
      state.date = action.payload;
    },
    setSelectedSlot: (state, action) => {
      state.selectedSlot = action.payload;
    },
    reset: (state) => {
      state.date = new Date().toISOString();
      state.selectedSlot = "";
      state.timeVariant = "30 min";
    },
    setTimeVariant: (state, action) => {
      state.timeVariant = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchSlots.fulfilled, (state, action) => {
        state.slots.data = action.payload[0].slots;
        state.slots.loading = false;
        state.selectedSlot = "";
      })
      .addCase(fetchSlots.pending, (state) => {
        state.slots.loading = true;
      })
      .addCase(fetchSlots.rejected, (state) => {
        state.slots.data = [];
        state.slots.loading = false;
      });
  },
});

export const { setDate, setSelectedSlot, reset, setTimeVariant } =
  schedulerSlice.actions;
export default schedulerSlice.reducer;
