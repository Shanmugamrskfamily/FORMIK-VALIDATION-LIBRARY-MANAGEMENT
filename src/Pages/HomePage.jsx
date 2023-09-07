import React from "react";

const Homepage = () => {
  return (
    <div class="row flex-lg-row-reverse align-items-center g-5 py-5 mt-5">
      <div class="col-9 col-sm-8 col-lg-6">
        <img
          src="https://img.freepik.com/premium-vector/serious-concentrated-developer-programming-sites_316839-2216.jpg"
          class="d-block mx-lg-auto img-fluid"
          alt="Bootstrap Themes"
          width="600"
          height="500"
          loading="lazy"
        />
      </div>
      <div class="text col-lg-5">
        <h1 class="display-5 fw-bold lh-1 mb-3 text-center">
          Library Management System
        </h1>
        <p class="lead text-center">
          Designed By SHANMUGAM R
          <span class="material-symbols-outlined">deployed_code</span>
        </p>
      </div>
    </div>
  );
};

export default Homepage;
