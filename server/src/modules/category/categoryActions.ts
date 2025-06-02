// Some data to make the trick

const categories = [
  {
    id: 1,
    name: "Comédie",
  },
  {
    id: 2,
    name: "Science-Fiction",
  },
];

// Declare the actions
import type { RequestHandler } from "express";

const browse: RequestHandler = (req, res) => {
  res.json(categories);
};

const read: RequestHandler = (req, res) => {
  const categoryFiltered = categories.find(
    (category) => category.id === Number(req.params.id),
  );

  if (categoryFiltered != null) {
    res.json(categoryFiltered);
  } else {
    res.sendStatus(404);
  }
};

export default { browse, read };
