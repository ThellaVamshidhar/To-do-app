import React, { useState } from 'react';
import './App.css';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import ChecklistIcon from '@mui/icons-material/Checklist';
import Tooltip from '@mui/material/Tooltip';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [listItems, setListItems] = useState([]);

  const handleAdd = () => {
    if (inputValue.trim() !== '') {
      setListItems([...listItems, { text: inputValue, isFinished: false }]);
      setInputValue('');
    } else {
      alert("Please enter something");
    }
  };

  const handleClear = () => {
    setListItems([]);
  };

  const handleEdit = (index) => {
    const newText = prompt("Enter new text:");
    if (newText !== null) {
      const updatedItems = [...listItems];
      updatedItems[index].text = newText;
      setListItems(updatedItems);
    }
  };

  const handleFinish = (index) => {
    const updatedItems = [...listItems];
    updatedItems.splice(index, 1);
    setListItems(updatedItems);
  };

  return (
    <div className='main-div'>
      <h1>Todo App< ChecklistIcon/></h1>
      <div className="input-container">
        <input
          type="text"
          className='input-el'
          placeholder='Enter task here'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <Tooltip title="Add" arrow><button onClick={handleAdd} className='btn-add'><AddIcon /></button></Tooltip>
        <Tooltip title="Clear all tasks" arrow><button className='btn-clearall' onClick={handleClear}>< DeleteIcon/></button></Tooltip>
      </div>
      
      <ul className="list">
        {listItems.map((item, index) => (
          <li key={index} className={item.isFinished ? "finished" : ""}>
            {item.text}
            <div >
            <Tooltip title="Edit" arrow><button className='btn-edit' onClick={() => handleEdit(index)}><ModeEditIcon fontSize='small'/></button></Tooltip>
            <Tooltip title="Finish" arrow><button className='btn-finish' onClick={() => handleFinish(index)}><CloseIcon fontSize='small'/></button></Tooltip></div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
