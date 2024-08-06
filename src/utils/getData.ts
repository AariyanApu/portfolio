// this fetches data will cache the data and use the cache if the data is not expired
// This method is faster than the other one
// Add your own api url here to fetch data from your own api

export const getData = async (id: string) => {
  const res = await fetch(`https://aaru.vercel.app/api/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};

// This fetches data will not cache the data and fetch the data from the server
// Add your own api url here to fetch data from your own api
// This method is slower

export const getDataNoStore = async (id: string) => {
  const res = await fetch(`https://aaru.vercel.app/api/${id}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};

// This fetches data for local development
// export const getDataNoStoreLocal = async (id: string) => {
//   const res = await fetch(`http://localhost:3000/api/${id}`, {
//     cache: 'no-store',
//   });
//   if (!res.ok) {
//     throw new Error('Failed to fetch data');
//   }
//   return res.json();
// };

// This fetch method for client side using SWR

export const fetcher = async (...args: Parameters<typeof fetch>) => {
  const res = await fetch(...args);
  return res.json();
};
