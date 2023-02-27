type ItemType = {
  title: string;
  path: string;
};

const data: ItemType[] = [
  { title: "Vegetables", path: "/root" },
  { title: "Spices", path: "/root" },
  { title: "Dairy", path: "/root" },
  { title: "Apples", path: "/root/Vegetables" },
  { title: "Milk", path: "/root/Dairy" },
];

const handleNewCategoryAddition = (e, parent, path) => {
  if (e.key === "Enter") {
    createChild(e.target.value, parent, path);
    data.push({
      title: e.target.value,
      path: path,
    });
    e.target.value = "";
  }
};

const createChild = (title, parent, path) => {
  const div = document.createElement("div");
  div.classList.add("categories__section");
  const p = document.createElement("p");
  p.innerHTML = title;
  const input = document.createElement("input");
  input.placeholder = `Add to ${title} section`;
  input.addEventListener("keypress", (e) =>
    handleNewCategoryAddition(e, div, path + "/" + title)
  );
  div.appendChild(p);
  div.appendChild(input);
  div.dataset.path = path + "/" + title;
  parent.appendChild(div);
};

export const initPage = () => {
  const container = document.createElement("div");
  createChild("root", container, "");
  document.body.appendChild(container);

  data.forEach((element) => {
    const createdItems = document.querySelectorAll("[data-path]");
    createdItems.forEach((i: HTMLElement) => {
      if (i.dataset.path === element.path) {
        createChild(element.title, i, element.path);
      }
    });
  });
};
