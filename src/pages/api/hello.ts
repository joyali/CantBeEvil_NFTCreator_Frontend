// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import type { NextApiRequest, NextApiResponse } from "next";

const image =
  "https://lh3.googleusercontent.com/AN7fvqsw2rNGB01naDVm7L4enh8mGrM7nOsSxwsk4M4rgkV5L0hmX96EUR2cCuuG5HgRYG03hAQDn6rjNKV4T8wE7uIIimqSL8HIy3I=s168";
const desc =
  "This is a type of description.enjoy!This is a type of description.enjoy!This is a type of description.enjoy!This is a type of description.enjoy!";
const hello = (req: NextApiRequest, res: NextApiResponse) => {
  res.statusCode = 200;
  res.json([
    {
      name: "Moonbirds1",
      image,
      desc,
      license: "CBE_CC0",
    },
    {
      name: "Moonbirds2",
      image,
      desc,
      license: "CBE_CC0",
    },
    {
      name: "Moonbirds3",
      image,
      desc,
      license: "CBE_CC0",
    },
    {
      name: "Moonbirds4",
      image,
      desc,
      license: "CBE_CC0",
    },
    {
      name: "Moonbirds5",
      image,
      desc,
      license: "CBE_PR",
    },
    {
      name: "Moonbirds6",
      image,
      desc,
      license: "CBE_CC0",
    },
    {
      name: "Moonbirds7",
      image,
      desc,
      license: "CBE_CC0",
    },
    {
      name: "Moonbirds8",
      image,
      desc,
      license: "CBE_CC0",
    },
  ]);
};

export default hello;
