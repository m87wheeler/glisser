import * as React from "react";
import styled from "styled-components";

const EditableData = ({ value, ...props }) => {
  return (
    <div>
      <input {...props} value={value} />
    </div>
  );
};

export default EditableData;
