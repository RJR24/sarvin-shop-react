import React from "react";
import "./OurBlogStyles.css";

const OurBlogCard = ({ data, image, dir }) => {
  return (
    <>
      {dir === "horizontal" ? (
        <div class="card" style={{ border: "none" }}>
          <div class="row g-0 card-background">
            <div class="col-md-4">
              <img
                src={image}
                class="img-fluid rounded-start"
                id="blogCardImage"
                alt={data.title}
                className="w-100"
              />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">{data.title}</h5>
                <span class="card-text">{data.blogSummary}</span>
                <span class="card-text">
                  <small class="text-body-secondary">{data.publishDate}</small>
                </span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div class="card h-100 card-background" style={{ border: "none" }}>
          <img src={image} class="card-img-top" alt={data.title} />

          <div class="card-body">
            <span class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default OurBlogCard;
