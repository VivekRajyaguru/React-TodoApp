import React, { useState } from 'react'

export const AddTodo = (props) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc]  = useState("");
  
  const submit = (e) => {
    e.preventDefault();
    if (!title || !desc) {
        alert("Title or Details is required.")
        return;
    }
    props.addTodo(title, desc);
    setTitle('');
    setDesc('');
  };
  return (
    <div className='container my-3'>
        <h3>Add a ToDo</h3>
        <form onSubmit={submit}>
            <div className="mb-3">
                <label className="form-label">ToDo Title</label>
                <input type="text" className="form-control" id="title" value={title} onChange={(e) => setTitle(e.target.value)}/>
            </div>
            <div className="mb-3">
                <label className="form-label">ToDo Details</label>
                <input type="text" className="form-control" id="desc" value={desc} onChange={(e) => setDesc(e.target.value)}/>
            </div>
            <button type="submit" className="btn btn-sm btn-success">Submit</button>
        </form>
    </div>
  )
}
