export const getData = async (id: string) => {
  const res = await fetch(`https://aariyanapu.com/api/${id}`);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
};
export const getDataNoStore = async (id: string) => {
  const res = await fetch(`https://aariyanapu.com/api/${id}`, {
    cache: 'no-store',
  });
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
};

// export const getDataNoStoreLocal = async (id: string) => {
//   const res = await fetch(`http://localhost:3000/api/${id}`, {
//     cache: 'no-store',
//   });
//   if (!res.ok) {
//     throw new Error('Failed to fetch data');
//   }
//   return res.json();
// };

export const fetcher = async (...args: Parameters<typeof fetch>) => {
  const res = await fetch(...args);
  return res.json();
};
