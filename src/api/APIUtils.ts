export const fetchUserData = async (url: string) => {
  return await fetch(url, {
    method: "GET",
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    throw new Error("Data not found!");
  });
};
