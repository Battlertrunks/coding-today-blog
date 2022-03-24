import { useState } from "react";
import BlogCard from "../models/BlogCard";
import BlogCardContainer from "./BlogCardContainer";
import classes from "./ContainerBlogsRoute.module.css";

const ContainerBlogsRoute = () => {
  const [blogs, setBlogs] = useState<BlogCard[]>([
    {
      id: 1,
      image:
        "https://cdn.britannica.com/13/197813-138-3CF1CCFA/state-more-president-Washington-economy-geography-history.jpg?w=800&h=450&c=crop",
      title: "What is burn out?",
      shortDescription:
        "We discuss what is burn out and why it affects develops so much.",
    },
    {
      id: 2,
      image:
        "https://images.contentstack.io/v3/assets/blt00454ccee8f8fe6b/blt2789394e56621356/605c0f59c4f5970f345859e2/US_Colorado_US_Header.jpg?width=1680&auto=webp",
      title: "React or Angular? What to use",
      shortDescription:
        "In this blog we talk about what makes Angular and React unique, and which one suits you!",
    },
    {
      id: 3,
      image: "https://code.org/shared/images/social-media/hoc_cse_social.png",
      title: "Starting out in TypeScript - Coming from JavaScript",
      shortDescription:
        "Is this your first time in TypeScript? This is the starting guide on how TypeScript works and where to start learning.",
    },
  ]);

  return (
    <ul className={classes["column-layout"]}>
      {blogs.map((item) => (
        <BlogCardContainer singleCard={item} />
      ))}
    </ul>
  );
};

export default ContainerBlogsRoute;
