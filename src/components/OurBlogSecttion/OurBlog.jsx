import React from "react";
import OurBlogCard from "./OurBlogCard";
import "./OurBlogStyles.css";

import headSet from "../../assets/images/pro02/headSet.png";
import PS4 from "../../assets/images/pro02/playStation4.png";
import mcBookAir15 from "../../assets/images/pro02/mcBookAir15.png";
import airPodPro2 from "../../assets/images/pro02/airpodPro2.png";

import arrowCircleRight from "../../assets/images/arrows-btn-etc/arrow-circle-right.svg";

const OurBlogList = [
  {
    data: {
      publishDate: 1,
      title: "Blog Title Here!",
      blogSummary: "blog summary here",
    },
    image: PS4,
  },
  {
    data: {
      publishDate: 2,
      title: "Blog Title Here!",
      blogSummary: "blog summary here",
    },
    image: headSet,
  },
  {
    data: {
      title: "Blog Title Here!",
      blogSummary: "blog summary here",
      publishDate: 3,
    },
    image: mcBookAir15,
  },
];
const NewBlogs = () => {
  return (
    <div className="mainBlogContainer">
      <div className="blogTitle">
        <div className="BSTitleText">Our Blog</div>
        <button className="btn ">
          View all <img src={arrowCircleRight} alt="right arrow" />
        </button>
      </div>

      <div className="blogCardContainer">
        <div className="newBlogCard1">
          {OurBlogList.find((item) => item.data.publishDate === 1) && (
            <OurBlogCard
              data={
                OurBlogList.find((item) => item.data.publishDate === 1).data
              }
              image={
                OurBlogList.find((item) => item.data.publishDate === 1).image
              }
            />
          )}
        </div>

        <div className="newBlogCard2">
  {OurBlogList.find(item => item.data.publishDate === 2) && (
    <OurBlogCard data={OurBlogList.find(item => item.data.publishDate === 1).data} image={OurBlogList.find(item => item.data.publishDate === 1).image} />
  )}
</div>


<div className="newBlogCard3">
  {OurBlogList.find(item => item.data.publishDate === 3) && (
    <OurBlogCard data={OurBlogList.find(item => item.data.publishDate === 1).data} image={OurBlogList.find(item => item.data.publishDate === 1).image} />
  )}
</div>

      </div>
    </div>
  );
};

export default NewBlogs;
