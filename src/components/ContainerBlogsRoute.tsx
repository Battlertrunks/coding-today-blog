import { useState } from "react";
import BlogCard from "../models/BlogCard";
import BlogCardContainer from "./BlogCardContainer";
import classes from "./ContainerBlogsRoute.module.css";

const ContainerBlogsRoute = () => {
  const [blogs, setBlogs] = useState<BlogCard[]>([
    {
      id: 1,
      image:
        "https://i2.wp.com/www.additudemag.com/wp-content/uploads/2021/02/GettyImages-1152213834-e1613572994221.jpg?resize=1280%2C720px&ssl=1",
      title: "What is burn out?",
      shortDescription:
        "We discuss what is burn out and why it affects develops so much.",
      date: "March 23, 2022",
    },
    {
      id: 2,
      image:
        "https://www.freecodecamp.org/news/content/images/size/w2000/2019/10/react-vs-angular.png",
      title: "React or Angular? What to use",
      shortDescription:
        "In this blog we talk about what makes Angular and React unique, and which one suits you!",
      date: "March 20, 2022",
    },
    {
      id: 3,
      image:
        "https://cdn.thenewstack.io/media/2022/01/10b88c68-typescript-logo.png",
      title: "Starting out in TypeScript - Coming from JavaScript",
      shortDescription:
        "Is this your first time in TypeScript? This is the starting guide on how TypeScript works and where to start learning.",
      date: "March 15, 2022",
    },
  ]);

  return (
    <div className={classes["column-layout"]}>
      <ul>
        {blogs.map((item) => (
          <BlogCardContainer singleCard={item} />
        ))}
      </ul>
    </div>
  );
};

export default ContainerBlogsRoute;
