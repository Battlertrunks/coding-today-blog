import { useEffect, useState } from "react";
import BlogCard from "../models/Article";
import { getBlogCards } from "../services/blogSiteServices";
import BlogCardContainer from "./BlogCardContainer";
import classes from "./ContainerBlogsRoute.module.css";

const ContainerBlogsRoute = () => {
  const [blogs, setBlogs] = useState<BlogCard[]>([]);

  useEffect(() => {
    getBlogCards().then((response) => {
      console.log(response);
      setBlogs(response);
    });
  }, []);

  return (
    <div className={classes["column-layout"]}>
      <ul>
        {blogs.map((item) => (
          <BlogCardContainer singleCard={item} key={item._id} />
        ))}
      </ul>
    </div>
  );
};

export default ContainerBlogsRoute;
