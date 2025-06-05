import React from 'react';
import BlogCard from './BlogCard';
import './BlogList.css';

const dummyBlogs = [
  { title: '2025 Mustang GT Review', summary: 'The new Mustang GT packs power and style.', image: 'https://www.carandbike.com/_next/image?url=https%3A%2F%2Fimages.carandbike.com%2Fcar-images%2Fbig%2Fford%2Fmustang%2Fford-mustang.jpg%3Fv%3D34&w=1920&q=75' },
  { title: 'EV Trends in 2025', summary: 'How EVs are shaping the future of mobility.', image: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/131825/be-6e-exterior-right-front-three-quarter-5.jpeg?isig=0&q=80' },
  { title: 'Top 5 SUVs for India', summary: 'Affordable and powerful SUVs you can buy in 2025.', image: 'https://images.unsplash.com/photo-1629373373535-b5e644663c32?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
];

const BlogList = () => {
  return (
    <section className="blog-list">
      {dummyBlogs.map((blog, index) => (
        <BlogCard key={index} blog={blog} />
      ))}
    </section>
  );
};
export default BlogList;