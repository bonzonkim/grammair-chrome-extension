'use client';
import React, { useState } from "react";
import TextareaAutosize from 'react-textarea-autosize';

interface TextBoxProps {
  isLoading: boolean;
  onSubmit: (text: string) => void;
}

const MAX_BYTES = 4096; // 4KiB

// Helper function to calculate byte length of a string
const getByteLength = (str: string) => new TextEncoder().encode(str).length;

const TextBox: React.FC<TextBoxProps> = ({ isLoading, onSubmit }) => {
  const [text, setText] = useState("");
  const [byteCount, setByteCount] = useState(0);

  const handleTextChanged = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = event.target.value;
    const newByteLength = getByteLength(newText);

    if (newByteLength <= MAX_BYTES) {
      setText(newText);
      setByteCount(newByteLength);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!text.trim() || isLoading || isOverLimit) return;
    onSubmit(text);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter' && (event.metaKey || event.ctrlKey)) {
      event.preventDefault(); // Prevent new line on Enter
      if (!text.trim() || isLoading || isOverLimit) return;
      onSubmit(text);
    }
  };

  const isOverLimit = byteCount >= MAX_BYTES;
  const counterColor = isOverLimit ? 'text-red-500' : (byteCount > MAX_BYTES * 0.9 ? 'text-yellow-500' : 'text-gray-400');

  return (
    <div className="w-full">
      <form className="flex flex-col gap-2 w-full" onSubmit={handleSubmit}>
        <div className="flex gap-2 w-full">
          <TextareaAutosize
              minRows={1}
              maxRows={16}
              value={text}
              onChange={handleTextChanged}
              onKeyDown={handleKeyDown}
              className="bg-gray-100 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black resize-none w-full"
              placeholder="Type your message... (Cmd+Enter or Ctrl+Enter to submit)"
              disabled={isLoading}
          />
          <button
            type="submit"
            className="bg-blue-500 text-white font-semibold rounded-md px-4 py-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 self-end disabled:bg-gray-400"
            disabled={isLoading || !text.trim() || isOverLimit}
          >
            {isLoading ? "Submitting..." : "Submit"}
          </button>
        </div>
        <div className={`text-xs self-end ${counterColor}`}>
          {byteCount} / {MAX_BYTES} bytes
        </div>
      </form>
    </div>
  );
};

export default TextBox;

