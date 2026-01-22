import React from "react";

const Courses = () => {

  const coursesData = [
    {
      id: 1,
      courseName: "Mern Stack ",
      courseDescription:
        "Page layouts look better with something in each section. Web page designers, content writers, and layout artists use lorem ipsum, also known as placeholder copy, to distinguish which areas on a page will hold advertisements, editorials, and filler before the final written content and website designs receive client approval.",
      courseImage:
        "https://cdn.pixabay.com/photo/2021/12/12/20/00/play-6865967_1280.jpg",
      price: 12000,
    },
    {
      id: 2,
      courseName: "Python",
      courseDescription:
        "Page layouts look better with something in each section. Web page designers, content writers, and layout artists use lorem ipsum, also known as placeholder copy, to distinguish which areas on a page will hold advertisements, editorials, and filler before the final written content and website designs receive client approval.",
      courseImage:
        "https://cdn.pixabay.com/photo/2021/12/12/20/00/play-6865967_1280.jpg",
      price: 10000,
    },
    {
      id: 3,
      courseName: "Html and css",
      courseDescription:
        "Page layouts look better with something in each section. Web page designers, content writers, and layout artists use lorem ipsum, also known as placeholder copy, to distinguish which areas on a page will hold advertisements, editorials, and filler before the final written content and website designs receive client approval.",
      courseImage:
        "https://cdn.pixabay.com/photo/2021/12/12/20/00/play-6865967_1280.jpg",
      price: 5000,
    },
  ];
  return (
    <div>
      {coursesData.map((value, index) => (
        <div key={index}>
          {value.courseName}
          {value.price}
        </div>
      ))}
    </div>
  );
};

export default Courses;
