import * as React from "react";
import Button from "../../button/button";
import DataTableCell from "../data-table-cell/data-table-cell";
import { DataRowContainer } from "./styles";

const DataTableRow = ({
  rowIndex,
  row,
  keys,
  onChange,
  toggleEdit,
  editingRow,
}) => {
  const handleClick = React.useCallback(() => {
    toggleEdit(editingRow ? null : rowIndex);
    if (editingRow === rowIndex) console.log("Save...");
  }, [editingRow, rowIndex, toggleEdit]);

  return (
    <DataRowContainer>
      {keys?.map((_, i) => (
        <td key={i}>
          <DataTableCell
            name={keys[i]}
            value={keys[i].split(".").reduce((o, i) => o[i], row)}
            onChange={onChange}
            disabled={editingRow !== rowIndex}
          />
        </td>
      ))}
      {toggleEdit && (
        <td>
          <Button onClick={handleClick}>
            {editingRow === rowIndex ? "Save" : "Edit"}
          </Button>
        </td>
      )}
    </DataRowContainer>
  );
};

export default DataTableRow;
