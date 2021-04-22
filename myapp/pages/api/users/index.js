// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async (req, res) => {
  const resp = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await resp.json();
  
  res.status(200).json(data);
};
