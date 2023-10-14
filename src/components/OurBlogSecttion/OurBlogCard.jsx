import React from "react";
import "./OurBlogStyles.css";

const OurBlogCardCard = ({ data, image }) => {
  return (
    <div className="">
      <div>
        <img src={image} alt="" width="100px" />
      </div>
      <div>{data.publishDate}</div>
      <div className="newBlogTitle">{data.title}</div>
      <div className="blogSummary">{data.blogSummary}</div>
    </div>
  );
};

export default OurBlogCardCard;
