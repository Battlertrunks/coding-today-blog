import { useState } from "react";
import BlogCard from "../models/BlogCard";
import BlogCardContainer from "./BlogCardContainer";
import classes from "./ContainerBlogsRoute.module.css";

const ContainerBlogsRoute = () => {
  const [blogs, setBlogs] = useState<BlogCard[]>([
    { id: 1, image: "temp", title: "Article 1", shortDescription: "Words" },
    { id: 2, image: "temp", title: "Article 2", shortDescription: "Words" },
    { id: 3, image: "temp", title: "Article 3", shortDescription: "Words" },
  ]);

  return (
    <ul className="ContainerBlogsRoute">
      {blogs.map((item) => (
        <BlogCardContainer singleCard={item} />
      ))}
    </ul>
  );
};

export default ContainerBlogsRoute;
