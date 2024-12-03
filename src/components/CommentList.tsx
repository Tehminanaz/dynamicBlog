"use client";

import { FC } from 'react';

interface CommentListProps {
  comments: string[];
}

const CommentList: FC<CommentListProps> = ({ comments }) => {
  if (comments.length === 0) return <p>No comments yet. Be the first!</p>;

  return (
    <ul className="list-disc pl-6">
      {comments.map((comment, index) => (
        <li key={index} className="mb-2">
          {comment}
        </li>
      ))}
    </ul>
  );
};

export default CommentList;
