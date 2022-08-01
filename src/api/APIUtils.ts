export const fetchData = async (url: string) => {
  return await fetch(url).then((res) => {
    if (res.ok) {
      return res.json();
    }
    throw new Error("Data not found!");
  });
};
