// src/components/CommentSection.tsx
import React, { useState } from 'react';

interface Comment {
  text: string;
  date: string;
  author: string;
}

const CommentSection: React.FC = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState<string>('');

  const handleAddComment = () => {
    if (newComment.trim()) {
      const comment: Comment = {
        text: newComment,
        date: new Date().toLocaleDateString(),
        author: 'Anonymous',
      };
      setComments([...comments, comment]);
      setNewComment('');
    }
  };

  return (
    <div className="mt-8">
      <h3 className="text-2xl font-bold mb-4">Comments</h3>
      <ul className="space-y-4">
        {comments.map((comment, index) => (
          <li key={index} className="p-4 border rounded shadow">
            <p className="text-black">{comment.text}</p>
            <p className="text-black text-sm italic mt-1">
              - {comment.author} on {comment.date}
            </p>
          </li>
        ))}
      </ul>
      <textarea
        className="w-full mt-4 text-black p-2 border rounded"
        placeholder="Add your  comment here..."
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
      />
      
      
      <button
        className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        onClick={handleAddComment}
      >
        Add Comment
      </button>
    </div>
  );
};

export default CommentSection;