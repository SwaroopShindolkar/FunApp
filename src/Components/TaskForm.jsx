import React, { useState } from "react";
import "./TaskForm.css";
const TaskForm = (props) => {
  const handleOnchange = (event) => {
    console.log("Changed");
    setText(event.target.value);
  };
  const handleUpcase = () => {
    if (text.trim() === "") {
      alert("Please enter something!");
    } else {
      const newText = text.toUpperCase();
      setText(newText);
    }
  };
  const handleLowcase = () => {
    if (text.trim() === "") {
      alert("Please enter something!");
    } else {
      const newText1 = text.toLocaleLowerCase();
      setText(newText1);
    }
  };
  const handleClear = () => {
    if (text.trim() === "") {
      alert("No Text to clear!");
    } else {
      const newText1 = "";
      setText(newText1);
    }
  };
  const handleboxclear = () => {
    if (box.length === 0) {
      alert("No Previews");
    } else {
      const newText1 = "";
      setbox([]);
    }
  };

  const handleAdd = () => {
    if (text.trim() === "") {
      alert("Please enter something!");
    } else {
      setbox([...box, text]);
      const newText1 = "";
      setText(newText1);
    }
  };

  const handleDelete = (indexToRemove) => {
    const newBox = box.filter((_, index) => index !== indexToRemove);
    setbox(newBox);
  };

  const handlesaveEdit = () => {
    if (text.trim() && editIndex !== null) {
      let updateBox = box.map((todo, i) => (i === editIndex ? text : todo));
      setbox(updateBox);
      setedit(false);
      seteditIndex(null);
      setText("");
    }
  };
  const handlestartEdit = (index) => {
    setedit(true);
    seteditIndex(index);
    setText(box[index]);
  };

  const [text, setText] = useState("");
  const [box, setbox] = useState([]);
  const [edit, setedit] = useState(false);
  const [editIndex, seteditIndex] = useState(null);
  const space = text.trim();

  return (
    <>
      <div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            {props.heading}
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            value={text}
            rows="3"
            placeholder="Enter Here"
            onChange={handleOnchange}
          ></textarea>
        </div>
      </div>
      <div>
        <button className="btn btn-primary mx-2" onClick={handleUpcase}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLowcase}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleClear}>
          Clear Text
        </button>
        <button
          className="btn btn-primary mx-2"
          onClick={() => {
            handleboxclear();
          }}
        >
          Clear Preview
        </button>
        {edit ? (
          <button className="btn btn-primary mx-2" onClick={handlesaveEdit}>
            Save
          </button>
        ) : (
          <button className="btn btn-primary mx-2" onClick={handleAdd}>
            +
          </button>
        )}
      </div>

      <h2>Text Summary</h2>
      <p>
        <b>
          {text.trim() == "" ? 0 : text.trim().split(" ").length} words and{" "}
          {space.length} letters
        </b>
      </p>

      <h2>Preview</h2>

      <div className="container mt-4">
        <div className="row">
          {box.map((item, index) => (
            <div className="col-12 mb-2" key={index}>
              <div
                className="p-3 border bg-light"
                style={{ textAlign: "justify" }}
              >
                {item}
                <div className="propdiv">
                  <button
                    onClick={() => handleDelete(index)}
                    className="delete"
                    style={{ float: "right" }}
                    title="delete"
                  >
                    <img className="icon" src="deleteIcon.png" alt="delete" />
                  </button>
                  <button
                    onClick={() => handlestartEdit(index)}
                    className="edit"
                    style={{ float: "left" }}
                    title="Edit"
                  >
                    <img className="editicon" src="edit.png" alt="edit" />
                  </button>
                </div>
              </div>
              =
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TaskForm;
