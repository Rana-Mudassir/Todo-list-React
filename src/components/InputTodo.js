import { useState } from 'react';

// eslint-disable-next-line react/prop-types
const InputTodo = ({ addTodoItem }) => {
  const [title, setTitle] = useState('');
  const [error, setError] = useState('');
  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      addTodoItem(title);
      setTitle('');
    } else {
      setError('Please add item');
      setTimeout(() => {
        setError('');
      }, 2000);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="form-container">
        <input
          type="text"
          placeholder="Add Todo..."
          value={title}
          onChange={handleChange}
          className="input-text"
        />

        <button type="submit" className="input-submit">Submit</button>
        <br />

      </form>
      {error && <span className="error">{error}</span>}
    </>
  );
};
export default InputTodo;
