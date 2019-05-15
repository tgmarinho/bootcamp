import React from 'react';

const PostHeader = ({ avatar, author, created_at }) => (
  <div className="postHeader">
    <img src={avatar} alt={author} />
    <div>
      <h3 className="postHeader--author">{author}</h3>
      <small className="postHeader--time">{created_at}</small>
    </div>
  </div>
);

export default PostHeader;
