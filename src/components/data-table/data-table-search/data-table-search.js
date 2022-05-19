import * as React from "react";
import { useDataStore } from "../../../store/use-data-store";
import { searchString } from "../../../utils";
import { DataSearchElement } from "./styles";

const DataTableSearch = ({ searchKeys = [] }) => {
  const [searchValue, setSearchValue] = React.useState("");
  const { data, setSearchResults, setPageOffset } = useDataStore();

  const handleChange = React.useCallback((e) => {
    setSearchValue(e.target.value);
  }, []);

  const searchResults = React.useMemo(() => {
    if (!searchValue) return;
    const maxArrayLength = data?.[0]?.length;
    const stateCopy = [...data].flat();

    // TODO refactor to filter based on searchKeys
    const results = stateCopy.filter((row) => {
      if (searchString(row?.album_title).includes(searchString(searchValue)))
        return row;
      if (searchString(row?.artist?.name).includes(searchString(searchValue))) {
        return row;
      }
      return undefined;
    });

    let updatedData = [];
    while (results.length) {
      let shortened = results.splice(0, maxArrayLength);
      updatedData = [...updatedData, shortened];
    }
    return updatedData;
  }, [data, searchValue]);

  React.useEffect(() => {
    setPageOffset(-1);
    setSearchResults(searchResults);
  }, [setSearchResults, searchResults, setPageOffset]);

  return (
    <DataSearchElement
      onChange={handleChange}
      value={searchValue}
      placeholder="Search by artist or album"
    />
  );
};

export default DataTableSearch;
