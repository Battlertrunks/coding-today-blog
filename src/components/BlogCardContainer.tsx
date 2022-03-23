import classes from "./BlogCardContainer.module.css";
import { tempData } from "../dummy-data/temp-data";
import BlogCard from "../models/BlogCard";

interface Props {
  singleCard: BlogCard;
}

const BlogCardContainer = ({ singleCard }: Props) => {
  return (
    <li className="BlogCardContainer">
      <h2>{singleCard?.title}</h2>
      <p>{singleCard?.shortDescription}</p>
    </li>
  );
};

export default BlogCardContainer;
