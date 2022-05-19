import * as React from "react";
import PropTypes from "prop-types";
import { underscoreString } from "../../../utils";
import { DataRowContainer, DataCellContainer } from "./styles";
import Button from "../../button/button";
import DataTableCell from "../data-table-cell/data-table-cell";

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

DataTableRow.propTypes = {
  rowIndex: PropTypes.number.isRequired,
  row: PropTypes.object.isRequired,
  keys: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func,
  toggleEdit: PropTypes.func,
  editingRow: PropTypes.oneOf([PropTypes.number, null]),
  spread: PropTypes.arrayOf(PropTypes.number),
};

export default DataTableRow;
