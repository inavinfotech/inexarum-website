import React from "react";

/* ===========================
   Testimonials Data
=========================== */

export const INITIAL_TESTIMONIALS = [
  // {
  //   id: "1",
  //   author: "Jamie V.",
  //   company: "DTL Website",
  //   stars: 5,
  //   quote:
  //     "iNexarum understood our business requirements clearly and delivered a scalable, secure solution on time. Their technical expertise, communication, and problem-solving approach made the entire process smooth and reliable.",
  //   imageUrl: "https://picsum.photos/seed/jamie/150/150",
  // },
  {
    id: "2",
    author: "Mr. Anurag Jain",
    company: "Golden Bird International",
    stars: 5,
    quote:
      "Working with the iNexarum team was a game-changer for our infrastructure. They provided insights we hadn't even considered, leading to a 40% increase in efficiency across our digital platforms.",
    imageUrl: "https://picsum.photos/seed/sarah/150/150",
  },
  {
    id: "3",
    author: "Mr. Vivek Dewan",
    company: "Dewan Tyres Limited",
    stars: 5,
    quote:
      "Exceptional service and deep technical knowledge. iNexarum didn't just build a tool; they built a relationship that has helped us scale our operations globally with confidence.",
    imageUrl: "https://picsum.photos/seed/dewan/150/150",
  },
  {
    id: "4",
    author: "Mrs. Shruti Arora",
    company: "CEE",
    stars: 5,
    quote:
      "Their attention to detail and proactive communication set them apart. We were kept in the loop throughout the entire development lifecycle, ensuring a final product that exceeded expectations.",
    imageUrl: "https://picsum.photos/seed/mark/150/150",
  },
  {
    id: "5",
    author: "Mrs. Shruti Arora",
    company: "ECONS",
    stars: 5,
    quote:
      "The team at iNexarum is world-class. They managed to take a complex legacy system and modernize it within months, allowing us to pivot our business strategy effortlessly.",
    imageUrl: "https://picsum.photos/seed/elena/150/150",
  },
];

/* ===========================
   Quote Icon Component
=========================== */

export const QuoteIcon = ({ className = "" }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C20.1216 16 21.017 15.1046 21.017 14V9C21.017 7.89543 20.1216 7 19.017 7H16.017C14.9124 7 14.017 7.89543 14.017 9V12M3 12V9C3 7.89543 3.89543 7 5 7H8C9.10457 7 10 7.89543 10 9V14C10 15.1046 9.10457 16 8 16H5C3.89543 16 3 16.8954 3 18V21M3 21H10V18C10 16.8954 9.10457 16 8 16H5C3.89543 16 3 16.8954 3 18V21Z"
        fill="currentColor"
      />
    </svg>
  );
};
