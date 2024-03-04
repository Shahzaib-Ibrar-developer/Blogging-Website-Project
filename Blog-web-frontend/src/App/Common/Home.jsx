import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Row, Col, Card } from 'antd';

const { Header, Content, Footer } = Layout;
const blogPosts = [
  {
    title: 'Introduction to Ant Design',
    content: 'Ant Design is a design system for enterprise-level products...',
    author: 'John Doe',
  },
  {
    title: 'React Hooks Tutorial',
    content: 'Learn how to use React Hooks for state management...',
    author: 'Jane Smith',
  },
  // Add more dummy blog posts as needed
];

const Home = () => {
  return (
    <>
    <div className="container text-primary">
      Home
      <Link to="/create-blog">create blog</Link>
    </div>
    
    <Layout>
      <Header>
        <h1 style={{ color: 'white' }}>IT Industry In Pakistan</h1>
      </Header>
      <Content style={{ padding: '50px' }}>
        <Row gutter={[16, 16]}>
          {blogPosts.map((post, index) => (
            <Col key={index} xs={24} sm={12} md={8} lg={6}>
              <Card title={post.title} extra={<a href="#">Read more</a>}>
                <p>{post.content}</p>
                <p style={{ fontStyle: 'italic', textAlign: 'right' }}>By {post.author}</p>
              </Card>
            </Col>
          ))}
        </Row>
      </Content>
      <Footer style={{ textAlign: 'center' }}> Blog Name ©2024</Footer>
    </Layout>
    </>
  );
};








export default Home;
