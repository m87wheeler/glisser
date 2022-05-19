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
      pageOffset:
        state.pageOffset + n < 0 || state.pageOffset + n > max
          ? state.pageOffset
          : state.pageOffset + n,
    }));
  },
  editingRow: null,
  setEditingRow: (editingRow) => {
    set({ editingRow });
  },
  searchResults: [],
  setSearchResults: (searchResults) => {
    set({ searchResults });
  },
}));
