'use client'
import React, { useState } from "react";

interface CommentFormProps {
  onSubmit: (comment: string) => void;
}

function CommentForm({ onSubmit }: CommentFormProps) {
  const [comment, setComment] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(comment);
    setComment("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Add a comment'
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button type='submit'>Submit comment</button>
    </form>
  );
}

export default CommentForm;
