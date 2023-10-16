import React from "react";
import "./OurBlogStyles.css";

const OurBlogCard = ({ data, image }) => {
  return (
    <div className="">
      <div >
        <img src={image} id="blogCardImage" alt={data.title} />
      </div>
      <div className="blogCardDate">{data.publishDate}</div>
      <div className="newBlogTitle">{data.title}</div>
      <div className="blogSummary">{data.blogSummary}</div>
    </div>
  );
};

export default OurBlogCard;
