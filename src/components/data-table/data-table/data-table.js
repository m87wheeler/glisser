import * as React from "react";
import PropTypes from "prop-types";
import DataTableRow from "../data-table-row/data-table-row";
import { DataRowContainer } from "../data-table-row/styles";
import {
  DataHeaderElement,
  DataTableContainer,
  DataTableElement,
} from "./styles";

const DataTable = ({
  data = [],
  headers = [],
  dataKeys = [],
  onChange,
  toggleEdit,
  editingRow = null,
  spread = [],
}) => {
  return (
    <DataTableContainer>
      <DataTableElement>
        <thead>
          <DataRowContainer>
            {headers?.map((header, i) => (
              <DataHeaderElement key={i} spread={spread[i]}>
                {header}
              </DataHeaderElement>
            ))}
          </DataRowContainer>
        </thead>
        <tbody>
          {data?.map((row, i) => (
            <DataTableRow
              key={i}
              rowIndex={i}
              keys={dataKeys}
              row={row}
              onChange={onChange}
              toggleEdit={toggleEdit}
              editingRow={editingRow}
              spread={spread}
            />
          ))}
        </tbody>
      </DataTableElement>
    </DataTableContainer>
  );
};

DataTable.propTypes = {
  data: PropTypes.array.isRequired,
  dataKeys: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func,
  toggleEdit: PropTypes.func,
  editingRow: PropTypes.oneOf([PropTypes.number, null]),
  spread: PropTypes.arrayOf(PropTypes.number),
};

export default DataTable;
