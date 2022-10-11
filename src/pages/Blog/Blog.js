import React from "react";

const Blog = () => {
  return (
    <div>
      <div className="bg-white p-4 shadow-lg">
        <h1 className="text-blue-700 text-lg">
          What is the purpose of react router?
        </h1>
        <p>
          React router used for navigation different views of react application.
          React is a SPA application. So by react router dom we can show
          different components or page based on route. That is the purpose of
          react router.
        </p>
      </div>
      <div className="bg-white p-4 shadow-lg mt-5">
        <h1 className="text-blue-700 text-lg">How Context Api Works?</h1>
        <p>
          React Context Api provide a way of passing data without having to pass
          props down manually or what we say prop drilling. Components can
          receive data whenever its needed from React Context Api.
        </p>
      </div>
      <div className="bg-white p-4 shadow-lg mt-5">
        <h1 className="text-blue-700 text-lg">What is the use of useRef?</h1>
        <p>
          The useRef is a hook that allows to create a direct references to the
          DOM elements. It is used to store a local mutable value in a
          components.
        </p>
      </div>
    </div>
  );
};

export default Blog;

// 1. purpose of react router
// 2. Context api how it work
// 3. Use of useRef
