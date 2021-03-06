import * as React from "react";
import { useDataStore } from "../../store/use-data-store";
import Header from "../header/header";
import Button, { ButtonGroup } from "../button/button";
import DataTable from "../data-table/data-table/data-table";
import DataTableSearch from "../data-table/data-table-search/data-table-search";
import { LayoutContainer } from "./styles";

const Layout = () => {
  const {
    setData,
    data,
    editingRow,
    setEditingRow,
    pageOffset,
    setPageOffset,
    searchResults,
  } = useDataStore();

  // Toggle
  const handleEditRow = React.useCallback(
    (rowIndex) => {
      setEditingRow(rowIndex);
    },
    [setEditingRow]
  );

  // Toggle
  const handleOffset = React.useCallback(
    (n) => () => setPageOffset(n, data?.length - 1),
    [data, setPageOffset]
  );

  // Update
  const handleUpdateData = React.useCallback(
    (e) => {
      const { name, value } = e.target;
      switch (name) {
        case "artist.name":
          const matchingEntries = data?.map((array) => {
            return array.map((entry) => {
              if (
                data?.[pageOffset]?.[editingRow]?.artist?.id ===
                entry?.artist?.id
              )
                return { ...entry, artist: { ...entry?.artist, name: value } };
              return entry;
            });
          });
          setData(matchingEntries);
          return;
        default:
          const copyState = [...data];
          const updatedData = data?.[pageOffset]?.map((entry, i) => {
            if (editingRow === i) return { ...entry, [name]: value };
            return entry;
          });
          copyState[pageOffset] = updatedData;
          setData(copyState);
      }
    },
    [pageOffset, editingRow, data, setData]
  );

  const tableData = React.useMemo(() => {
    const activeData = searchResults?.length ? searchResults : data;
    return activeData?.[pageOffset];
  }, [data, pageOffset, searchResults]);

  return (
    <LayoutContainer>
      <Header align="center">My Amazing Record Collection</Header>
      <DataTableSearch searchKeys={["artist.name", "album_title"]} />
      <DataTable
        data={tableData}
        headers={["Artist", "Album", "Year", "Condition", "Action"]}
        dataKeys={["artist.name", "album_title", "year", "condition"]}
        onChange={handleUpdateData}
        toggleEdit={handleEditRow}
        editingRow={editingRow}
        spread={[0.35, 0.3, 0.1, 0.1, 0.1]}
      />
      <ButtonGroup>
        <Button onClick={handleOffset(-1)} disabled={pageOffset === 0}>
          Previous
        </Button>
        <Button
          onClick={handleOffset(1)}
          disabled={pageOffset === data?.length - 1}
        >
          Next
        </Button>
      </ButtonGroup>
    </LayoutContainer>
  );
};

export default Layout;
