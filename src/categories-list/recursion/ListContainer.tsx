import React, { useState } from "react";
import { DataTreeItemType, initialData } from "./data";
import { RecursiveListItem } from "./RecursiveListItem";

export const RecursionContainer = () => {
  const [dataTree, setDataTree] = useState(initialData);

  const updateInnerData = (newInnerData: DataTreeItemType[]) => {
    setDataTree((prev) => ({ ...prev, innerData: newInnerData }));
  };
  return (
    <div>
      <RecursiveListItem item={dataTree} onNewItemSubmit={updateInnerData} />
    </div>
  );
};
