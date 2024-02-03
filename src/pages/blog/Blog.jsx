import React from 'react';
import Image1 from "./assets/img/image1.jpg"
import Image2 from "./assets/img/image2.jpg"
import Image3 from "./assets/img/image3.jpg"
import Image4 from "./assets/img/image4.jpg"
import Image5 from "./assets/img/image5.jpg"
import Image6 from "./assets/img/image6.jpg"
function Blog () {
  const blog = [
    {
      imageSrc: Image1,
      date: "20 April, 2024",
      title: "Telehealth Is Here To Stay. In Your Facility Ready?",
      link: "",
    },
    {
      imageSrc: Image2,
      date: "20 April, 2024",
      title: "Telehealth Is Here To Stay. In Your Facility Ready?",
      link: "",
    },
    {
      imageSrc: Image3,
      date: "20 April, 2024",
      title: "Telehealth Is Here To Stay. In Your Facility Ready?",
      link: "",
    },
    {
      imageSrc: Image4,
      date: "20 April, 2024",
      title: "Telehealth Is Here To Stay. In Your Facility Ready?",
      link: "",
    },
    {
      imageSrc: Image5,
      date: "20 April, 2024",
      title: "Telehealth Is Here To Stay. In Your Facility Ready?",
      link: "",
    },
    {
      imageSrc: Image6,
      date: "20 April, 2024",
      title: "Telehealth Is Here To Stay. In Your Facility Ready?",
      link: "",
    },
  ];

  return (
    <div>
      <div className="page-title-area item-bg-5">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="page-title-content">
                <h2>Blog</h2>
                <ul>
                  <li>Home{""}</li>
                  <li>Blog</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="blog-area ptb-100">
        <div className="container-fluid">
          <div className="section-title">
            <span>News</span>
            <h2>Our Latest News</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum su
            </p>
          </div>

          <div className="row">
            {blog.map((post, index) => (
              <div key={index} className="col-lg-4 col-md-6">
                <div className="blog-item">
                  <div className="image">
                    <a href={post.link}>
                      <img src={post.imageSrc} alt="image" />
                    </a>
                    <a href={post.link} className="date">
                      {post.date}
                    </a>
                  </div>
                  <div className="content">
                    <h3>
                      <a href={post.link}>{post.title}</a>
                    </h3>
                    <a href={post.link} className="blog-btn">
                      Read More +
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
