import React from "react";
import { DataTreeItemType } from "./data";

type RecursiveListItemType = {
  item: DataTreeItemType;
  onNewItemSubmit: (data: DataTreeItemType[], title?: string) => void;
};

export const RecursiveListItem = ({
  item,
  onNewItemSubmit,
}: RecursiveListItemType) => {
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      const newInnerData = [
        ...item.innerData,
        { title: e.target.value, innerData: [] },
      ];
      onNewItemSubmit(newInnerData, item.title);
      e.target.value = "";
    }
  };

  const handleInnerDataUpdate = (
    childInnerData: DataTreeItemType[],
    childTitle: string
  ) => {
    const newInnerData = item.innerData.map((i) =>
      i.title === childTitle ? { ...i, innerData: childInnerData } : i
    );
    onNewItemSubmit(newInnerData, item.title);
  };

  return (
    <div className="categories__section">
      <p>{item.title}</p>
      {item.innerData.map((i) => (
        <RecursiveListItem
          item={i}
          key={i.title}
          onNewItemSubmit={handleInnerDataUpdate}
        />
      ))}
      <input
        placeholder={`Add new item to ${item.title} section`}
        onKeyDown={handleKeyDown}
      ></input>
    </div>
  );
};
