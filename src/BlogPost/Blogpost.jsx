import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import 'react-paginate/dist/react-paginate.css';

const BlogPage = () => {
  const pageSize = 6; // Number of items per page (3 rows * 2 columns)
  const initialPage = 0; // Initial page number

  const [currentPage, setCurrentPage] = useState(initialPage); // Current page number

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  // Dummy data with blog post headings, summaries, and image URLs
  const blogPosts = [
    {
      id: 1,
      title: 'Blog Post 1',
      summary: 'Summary of Blog Post 1',
      imageUrl: '/images/blog__1.png',
    },
    {
      id: 2,
      title: 'Blog Post 2',
      summary: 'Summary of Blog Post 2',
      imageUrl: '/images/blog__2.png',
    },
    {
      id: 3,
      title: 'Blog Post 3',
      summary: 'Summary of Blog Post 3',
      imageUrl: '/images/blog__3.png',
    },
    {
      id: 4,
      title: 'Blog Post 4',
      summary: 'Summary of Blog Post 4',
      imageUrl: '/images/blog__1.png',
    },
    {
      id: 5,
      title: 'Blog Post 5',
      summary: 'Summary of Blog Post 5',
      imageUrl: '/images/blog__2.png',
    },
    {
      id: 6,
      title: 'Blog Post 6',
      summary: 'Summary of Blog Post 6',
      imageUrl: '/images/blog__3.png',
    },
  ];

  const offset = currentPage * pageSize;
  const displayedPosts = blogPosts.slice(offset, offset + pageSize);

  return (
    <div>
      <h1>Blog Page</h1>

      {/* Render blog posts */}
      {displayedPosts.map((post) => (
        <div key={post.id}>
          <img src={post.imageUrl} alt={`Image for ${post.title}`} />
          <h2>{post.title}</h2>
          <p>{post.summary}</p>
        </div>
      ))}

      {/* Render pagination */}
      <ReactPaginate
        previousLabel={'Previous'}
        nextLabel={'Next'}
        breakLabel={'...'}
        pageCount={Math.ceil(blogPosts.length / pageSize)}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageChange}
        containerClassName={'pagination'}
        activeClassName={'active'}
      />
    </div>
  );
};

export default BlogPage;
