import * as React from "react";
import { DataCellElement } from "./styles";

const DataTableCell = ({ ...props }) => {
  return <DataCellElement {...props} />;
};

export default DataTableCell;
