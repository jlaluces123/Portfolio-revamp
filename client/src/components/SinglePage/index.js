import React from 'react';
import { projectArr } from "../Data/index.js";
import "./single.css";

const SinglePage = (props) => {
  const pageData = projectArr.filter(project => project.link === props.match.url);

  if (pageData.length > 0) {
    let data = pageData[0];
    console.log(data);
    return (
      <div className="individual-project">
        <div className="project__intro">
          <div className="project__header">
            <h1 style = {{ color: "#484848" }}>{data.title}</h1>

            <div className="info__btn">
              <p className = "info__text">
                Check out the <a className = "view__btn" rel="noopener noreferrer" href = {data.github} target = "_blank">code</a> or view it <a className = "view__btn" rel="noopener noreferrer" href = {data.demo} target = "_blank">here</a>
              </p>


            </div>
          </div>

          <div className="project__description">
            {data.inDepth}
          </div>

          <div className="project__img-second">
            <img className = "second__img" src = {data.secondImage} alt = "second In-Depth screenshot for project" />
          </div>

          <div className="tech__description">
            <h2 className = "tech__title">Tech Stack</h2>
            {data.techStack}
          </div>

        </div>
      </div>
    );
  } else {
    return <p>Invalid URL found</p>
  }

};

export default SinglePage;