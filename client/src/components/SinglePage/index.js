import React from 'react';
import { projectArr } from "../Home/index.js";

const SinglePage = (props) => {
  const pageData = projectArr.filter(project => project.link === props.match.url);

  if (pageData.length > 0) {
    let data = pageData[0];
    console.log(data);
    return (
      <div className="individual-project">
        <div className="project__intro">
          <div className="project__header">
            <h1>{data.title}</h1>
            <a href = {data.github} target = "_blank">Github</a>
            <a href = {data.demo} target = "_blank">Demo</a>
          </div>
        </div>
      </div>
    );
  } else {
    return <p>Invalid URL found</p>
  }

};

export default SinglePage;