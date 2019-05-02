import React from 'react';
import PostHeader from './PostHeader';

const Post = ({
  content: {
    avatar, author, created_at, text,
  },
}) => (
  <div className="rootContainer">
    <div className="content">
      <PostHeader avatar={avatar} author={author} created_at={created_at} />
      <div className="postContainer">{text}</div>
    </div>
  </div>
);

export default Post;
