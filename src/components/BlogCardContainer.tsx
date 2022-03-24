import BlogCard from "../models/BlogCard";

import "./BlogCardContainer.css";

interface Props {
  singleCard: BlogCard;
}

const BlogCardContainer = ({ singleCard }: Props) => {
  return (
    <li className="BlogCardContainer">
      <img src={singleCard?.image} alt="" />
      <h2>{singleCard?.title}</h2>
      <div className="divider" />
      <p>{singleCard?.shortDescription}</p>
      <p className="date">- {singleCard?.date}</p>
    </li>
  );
};

export default BlogCardContainer;
