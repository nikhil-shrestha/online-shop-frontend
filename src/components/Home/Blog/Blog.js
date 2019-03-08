import React from "react";

const blog = () => {
  return (
    <div className="col-md-6 blog">
      <h2>Lastest Blog</h2>
      <div className="blog-image-inner">
        <div className="blog-left">
          <div className="image-block">
            <a href="#" title="">
              <img
                alt=""
                className="img-thumbnail"
                src="https://magento.templatemela.com/MAG271/skin/frontend/templatemela/MAG110231/images/banners/blog-01.jpg"
              />
            </a>
          </div>
        </div>
        <div className="blog-right">
          <div className="blog-right-inner">
            <div className="post-date">27 July, 2018</div>
            <div className="post-title">
              <a href="#" title="">
                There are many variation passage
              </a>
            </div>
            <div className="post-description">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim.
            </div>
            <div className="post-btn">
              <a href="#">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default blog;
