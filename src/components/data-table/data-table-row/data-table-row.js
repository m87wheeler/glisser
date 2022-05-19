import * as React from "react";
import { underscoreString } from "../../../utils";
import Button from "../../button/button";
import DataTableCell from "../data-table-cell/data-table-cell";
import { DataRowContainer, DataCellContainer } from "./styles";

const DataTableRow = ({
  rowIndex,
  row,
  keys,
  onChange,
  toggleEdit,
  editingRow,
  spread = [],
}) => {
  const handleClick = React.useCallback(() => {
    toggleEdit(editingRow ? null : rowIndex);
  }, [editingRow, rowIndex, toggleEdit]);

  return (
    <DataRowContainer>
      {keys?.map((_, i) => (
        <DataCellContainer key={i}>
          <DataTableCell
            name={keys[i]}
            value={underscoreString(
              keys[i].split(".").reduce((o, i) => o[i], row)
            )}
            onChange={onChange}
            disabled={editingRow !== rowIndex}
            spread={spread[i]}
          />
        </DataCellContainer>
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
