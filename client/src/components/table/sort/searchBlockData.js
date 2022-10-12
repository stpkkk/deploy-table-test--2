//Select options
export const columns = [
  { name: "name", option: "name" },
  { name: "quantity", option: "quantity" },
  { name: "distance", option: "distance" },
];

export const conditions = [
  { name: "contain", option: "contain" },
  { name: "equal", option: "equal" },
  { name: "more", option: "more (a-z)" },
  { name: "less", option: "less (z-a)" },
];

export const pageValues = [
  { value: "5" },
  { value: "10" },
  { value: "15" },
  { value: "20" },
  { value: "25" },
];

//Filter data
function sortData(activeFilter, data, term, mod) {
  switch (activeFilter) {
    case "quantity":
      return filterCountInput(data, mod, "quantity", term);

    case "distance":
      return filterCountInput(data, mod, "distance", term);

    case "name":
      return filterInput(stringSort(data, mod), "name", term);

    default:
      return [...data];
  }
}

function filterCountInput(data, mod, activeFilter, term) {
  const parsedTerm = parseInt(term);
  switch (mod) {
    case "more":
      return [...data]
        .sort((a, b) => a[activeFilter] - b[activeFilter])
        .filter((item) =>
          isNaN(parsedTerm) ? item : item[activeFilter] > parsedTerm
        );
    case "less":
      return [...data]
        .sort((a, b) => b[activeFilter] - a[activeFilter])
        .filter((item) =>
          isNaN(parsedTerm) ? item : item[activeFilter] < parsedTerm
        );
    default:
      return [...data];
  }
}

export default sortData;

function filterInput(arr, activeFilter, term) {
  return arr.filter((item) => {
    const lowerName = String(item[activeFilter]).toLowerCase();
    return lowerName.indexOf(term) > -1;
  });
}

function stringSort(data, mod) {
  switch (mod) {
    case "more":
      return [...data].sort((a, b) => {
        const nameA = a.name.toLowerCase();
        const nameB = b.name.toLowerCase();
        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
        return 0;
      });
    case "less":
      return [...data].sort((a, b) => {
        const nameA = a.name.toLowerCase();
        const nameB = b.name.toLowerCase();
        if (nameA > nameB) return -1;
        if (nameA < nameB) return 1;
        return 0;
      });
    default:
      return [...data];
  }
}
