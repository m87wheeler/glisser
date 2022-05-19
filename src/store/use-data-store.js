import create from "zustand";
import { data } from "../data/data";

export const useDataStore = create((set, get) => ({
  data,
  setData: (data) => {
    set({ data });
  },
  pageOffset: 0,
  setPageOffset: (n = 0, max = 1) => {
    set((state) => ({
      ...state,
      pageOffset: state + n < 0 || state + n > max ? state : state + n,
    }));
  },
}));
