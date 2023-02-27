export type DataTreeItemType = {
  title: string;
  innerData: DataTreeItemType[];
};
export const initialData: DataTreeItemType = {
  title: "Categories",
  innerData: [
    {
      title: "Vegetables",
      innerData: [
        { title: "Apples", innerData: [{ title: "Sliced", innerData: [] }] },
        { title: "Bananas", innerData: [] },
      ],
    },
    { title: "Spices", innerData: [{ title: "Indian", innerData: [] }] },
    { title: "Drinks", innerData: [] },
  ],
};
