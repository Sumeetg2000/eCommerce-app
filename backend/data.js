import bcrypt from "bcryptjs";

const data = {
  users: [
    {
      name: "sumeet",
      email: "sumeet.g@simformsolutions.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: true,
    },
  ],
  products: [
    {
      // _id: "1",
      name: "Nike Slim Shirt",
      slug: "nike-slim-shirt",
      category: "Shirts",
      image: "/images/p1.jpg",
      price: 130,
      countInStock: 0,
      brand: "Nike",
      rating: 5,
      numReviews: 10,
      description: "high quality product",
    },
    {
      // _id: "2",
      name: "Adidas Fit Shirt",
      slug: "adidas-fit-shirt",
      category: "Shirts",
      image: "/images/p2.jpg",
      price: 250,
      countInStock: 20,
      brand: "Adidas",
      rating: 4.5,
      numReviews: 10,
      description: "high quality product",
    },
    {
      // _id: "3",
      name: "Nike Slim Pant",
      slug: "nike-slim-pant",
      category: "Pants",
      image: "/images/p3.jpg",
      price: 25,
      countInStock: 15,
      brand: "Nike",
      rating: 4.5,
      numReviews: 14,
      description: "high quality product",
    },
    {
      // _id: "4",
      name: "Adidas Fit Pant",
      slug: "adidas-fit-pant",
      category: "Pants",
      image: "/images/p4.jpg",
      price: 65,
      countInStock: 1,
      brand: "Adidas",
      rating: 4.5,
      numReviews: 10,
      description: "high quality product",
    },
  ],
};

export default data;
