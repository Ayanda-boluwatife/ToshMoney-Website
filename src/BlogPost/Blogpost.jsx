import React, { useState } from 'react';
import styled from 'styled-components'

const BlogPage = () => {
  const pageSize = 6; // Number of items per page (3 rows * 2 columns)
  const initialPage = 0; // Initial page number
  const summaryMaxLength = 100;
  const titleMaxLength = 25;

  const [currentPage, setCurrentPage] = useState(initialPage); // Current page number

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // ============ active state ===========
  const [active, setActive] = useState('#');

  // Dummy data with blog post headings, summaries, and image URLs
  const blogPosts = [
    {
      id: 1,
      title: 'How to use chatGPT for UI/UX design: 25 examples',
      summary: 'The practical guide to include AI in your daily workflow Instead of continuing the endless debate “will AI replace designers” lets focus on something practical.',
      imageUrl: '/images/blog__1.png',
      btn: "Read More",
      route: '/innerblog1'
    },
    {
      id: 2,
      title: 'Bad Bad UI: 10 Common Mistakes in User Interfaces',
      summary: 'We all learn from mistakes, and this rule applies to web designers as well. In this article, we will tell you what mistakes many of them make when creating user interface design.',
      imageUrl: '/images/blog__2.png',
      btn: "Read More",
      route: '/innerblog2'
    },
    {
      id: 3,
      title: 'Frustrations and Triumphs: My Journey to Learning',
      summary: 'A true language love story — I’ve been learning Korean for a whopping 15 years. 15 difficult and exciting years. I can’t imagine a life without',
      imageUrl: '/images/blog__3.png',
      btn: "Read More",
      route: "/innerblog3"
    },
    {
      id: 4,
      title: 'UI/UX Design Trends 2023',
      summary: 'Yet another year is coming to a close. Many of the 2022 trends we anticipated, did find their use in digital products across our devices this year.',
      imageUrl: '/images/blog__4.png',
      btn: "Read More",
      route: "/innerblog4"
    },
    {
      id: 5,
      title: 'Product Design is overtaking UX',
      summary: 'Understanding why UX is not enough and three ways to augment your skills — My job title recently changed to Senior Product Designer',
      imageUrl: '/images/blog__5.png',
      btn: "Read More",
      route: "/innerblog5"
    },
    {
      id: 6,
      title: '7 Tiny Habits That Can Have a Huge Effect on Your Life',
      summary: 'Break progress into small steps to prevent overwhelm. — Too often, we focus on the big stuff. Someone who never works out is told to hit',
      imageUrl: '/images/blog__6.png',
      btn: "Read More",
      route: "/innerblog6"
    },
  ];

  const offset = currentPage * pageSize;
  const displayedPosts = blogPosts.slice(offset, offset + pageSize);

  const pageCount = Math.ceil(blogPosts.length / pageSize);
  const paginationNumbers = Array.from({ length: pageCount }, (_, index) => index);

  return (
    <Wrapper>
    <div className="blog-page">
      <div className="explore__blog">
        <h1>Explore our blog</h1>
        <div className="btn__group">
          <button id='#' onClick={() => setActive('#')} className={active === '#' ? 'active' : ''}>Popular</button>
          <button id='#recent' onClick={() => setActive('#recent')} className={active === '#recent' ? 'active' : ''}>Recent</button>
          <button id='#sport' onClick={() => setActive('#sport')} className={active === '#sport' ? 'active' : ''}>Sport</button>
        </div>
      </div>
      {/* Render blog posts */}
      <div className="blog-post-container">
        {displayedPosts.map((post) => (
          <div className="blog-post" key={post.id}>
            <a href={post.route}><img src={post.imageUrl} alt={`Image for ${post.title}`} /></a>
            <a href={post.route}><h4>{post.title.length > titleMaxLength ? `${post.title.slice(0, titleMaxLength)}...` : post.title}</h4></a>
            <p>{post.summary.length > summaryMaxLength ? `${post.summary.slice(0, summaryMaxLength)}...` : post.summary}</p>
          </div>
        ))}
      </div>

      <div className="pagination">
        {currentPage > 0 && (
          <button className="pagination-button" onClick={() => handlePageChange(currentPage - 1)}>
            Previous
          </button>
        )}
        {paginationNumbers.map((number) => (
          <button
            key={number}
            className={`pagination-button ${number === currentPage ? 'active' : ''}`}
            onClick={() => handlePageChange(number)}
          >
            {number + 1}
          </button>
        ))}
        {currentPage < pageCount - 1 && (
          <button className="pagination-button" onClick={() => handlePageChange(currentPage + 1)}>
            Next
          </button>
        )}
      </div>
    </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .blog-page {
  padding: 40px;
}

.explore__blog{
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.btn__group{
  display: flex;
  gap: 20px;
}

.btn__group button{
  padding: 8px 30px;
  border: none;
  border-radius: 5px;
  font-size: 1.3rem;
  cursor: pointer;
  background-color: #827e77;
  color: #fff;
  transition: all 400ms ease;
}

.btn__group button.active{
  background-color: #C12DC1;
  color: #fff;
}

.explore__blog h1{
  font-size: 2rem;
}

.blog-post-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  margin-bottom: 5px;
  height: fit-content;
  width: fit-content;
}

.blog-post {
  /* background-color:  #d120f9; */
  border-radius: 10px;
  font-family: "Poppins", sans-serif;
  overflow: hidden;
}

.blog-post img {
  width: 100%;
  height: fit-content;
  object-fit: cover;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  transition: all 500ms ease;
}

.blog-post img:hover{
  transform: scale(110%);
  transition: all 500ms ease;
}

.blog-post a h2 {
  margin-left: 10px;
  
}

a{
  color: #000;
  text-decoration: none;
  font-size: 25px;
}

.blog-post p {
  font-size: 15px;
}

.pagination {
  margin-top: 20px;
  text-align: center;
}

.pagination-button {
  border: none;
  background: #f0f0f0;
  padding: 5px 10px;
  margin-right: 5px;
  cursor: pointer;
}

.pagination-button.active {
  background: #ccc;
}

@media screen and (max-width:1024px) {
  .blog-post-container{
    grid-template-columns: repeat(2, 1fr);
  }

  .explore__blog{
    flex-direction: column;
    margin-bottom: 0.8rem;
  }
}

@media screen and (max-width:600px) {
  .blog-post-container{
    grid-template-columns: 1fr;
  }

  .explore__blog{
    flex-direction: column;
  }

  .btn__group{
    gap: 10px;
  }

  .btn__group button{
    padding: 8px 20px;
  }
}

`

export default BlogPage;





// import React, { useState } from 'react';
// import ReactPaginate from 'react-paginate';
// // import 'react-paginate/dist/react-paginate.css';

// const BlogPage = () => {
//   const pageSize = 6; // Number of items per page (3 rows * 2 columns)
//   const initialPage = 0; // Initial page number

//   const [currentPage, setCurrentPage] = useState(initialPage); // Current page number

//   const handlePageChange = ({ selected }) => {
//     setCurrentPage(selected);
//   };

//   // Dummy data with blog post headings, summaries, and image URLs
//   const blogPosts = [
//     {
//       id: 1,
//       title: 'Blog Post 1',
//       summary: 'Summary of Blog Post 1',
//       imageUrl: '/images/blog__1.png',
//     },
//     {
//       id: 2,
//       title: 'Blog Post 2',
//       summary: 'Summary of Blog Post 2',
//       imageUrl: '/images/blog__2.png',
//     },
//     {
//       id: 3,
//       title: 'Blog Post 3',
//       summary: 'Summary of Blog Post 3',
//       imageUrl: '/images/blog__3.png',
//     },
//     {
//       id: 4,
//       title: 'Blog Post 4',
//       summary: 'Summary of Blog Post 4',
//       imageUrl: '/images/blog__1.png',
//     },
//     {
//       id: 5,
//       title: 'Blog Post 5',
//       summary: 'Summary of Blog Post 5',
//       imageUrl: '/images/blog__2.png',
//     },
//     {
//       id: 6,
//       title: 'Blog Post 6',
//       summary: 'Summary of Blog Post 6',
//       imageUrl: '/images/blog__3.png',
//     },
//   ];

//   const offset = currentPage * pageSize;
//   const displayedPosts = blogPosts.slice(offset, offset + pageSize);

//   return (
//     <div className="blog-page">
//       <h1>Blog Page</h1>

//       {/* Render blog posts */}
//       <div className="blog-post-container">
//         {displayedPosts.map((post) => (
//           <div className="blog-post" key={post.id}>
//             <img src={post.imageUrl} alt={`Image for ${post.title}`} />
//             <h2>{post.title}</h2>
//             <p>{post.summary}</p>
//           </div>
//         ))}
//       </div>

//       {/* Render pagination */}
//       <ReactPaginate
//         previousLabel={'Previous'}
//         nextLabel={'Next'}
//         breakLabel={'...'}
//         pageCount={Math.ceil(blogPosts.length / pageSize)}
//         marginPagesDisplayed={2}
//         pageRangeDisplayed={5}
//         onPageChange={handlePageChange}
//         containerClassName={'pagination'}
//         activeClassName={'active'}
//       />
//     </div>
//   );
// };

// const Wrapper = style.section`
// .blog-page {
//     text-align: center;
//   }
  
//   .blog-post-container {
//     display: grid;
//     grid-template-columns: repeat(2, 1fr);
//     grid-gap: 20px;
//     margin-bottom: 20px;
//   }
  
//   .blog-post {
//     border: 1px solid #ccc;
//     padding: 10px;
//     text-align: center;
//   }
  
//   .blog-post img {
//     width: 100%;
//     max-height: 200px;
//     object-fit: cover;
//   }
  
//   .blog-post h2 {
//     margin-top: 10px;
//   }
  
//   .blog-post p {
//     margin-top: 5px;
//   }
//   `

// export default BlogPage;
