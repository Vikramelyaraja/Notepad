import React, { useState } from 'react';
import List from './List';

function ToDo() {
  const [taskList, settaskList] = useState([]);
  const [todos, setTodos] = useState([]);
  const [inputvalue, setinputvalue] = useState('');
  const [showstatus, setshowstatus] = useState(null);
  const handlechange = (event) => {
    setinputvalue(event.target.value);
  };
  const add = (e) => {
    e.preventDefault(); // prevent the browser default behavior or refreshing the page on submit

    inputvalue !== '' &&
      settaskList((oldData) => {
        let temp = [...oldData, { task: inputvalue, status: 0 }];
        return temp;
      });
    inputvalue !== '' &&
      setTodos([
        // copy the current values in state
        ...todos,
        {
          // setting a basic id to identify the object
          id: todos.length + 1,
          // set a text property to the value of the todo state and
          // trim the whitespace from the input ,trim optional
          text: inputvalue.trim(),
        },
      ]);
    setinputvalue('');
  };
  const update = (index) => {
    settaskList((oldData) => {
      let temp = oldData;
      temp[index].status = 1; //arr[index].key =value
      return [...temp];
    });
  };
  const deletetask = (index) => {
    let temp = taskList;
    temp.splice(index, 1);
    settaskList([...temp]);
  };
  // function to remove a todo item from the todo array
  function handleDeleteClick(id) {
    // here we are filtering - the idea is remove an item from the todo array on a button click
    const removeItem = todos.filter((todo) => {
      // return the rest of the todos that don't match the item we are deleting
      return todo.id !== id;
    });
    // removeItem returns a new array - so now we are setting the todos to the new array
    setTodos(removeItem);
  }
  const handleUpdateClick = (id) => {
    // loop over the todos list and find the provided id.
    let updatedList = todos.map((item) => {
      if (item.id === id) {
        return { ...item, status: 1 }; //gets everything that was already in item, and updates "done"
      }
      return item; // else return unmodified item
    });

    setTodos([...updatedList]); // set state to new object with updated list
  };

  return (
    <div>
      <h3>To Do</h3>
      <div
        style={{
          display: 'flex',
          alignItems: 'baseline',
          flexDirection: 'row',
        }}>
        <input
          type='text'
          value={inputvalue}
          onChange={(e) => handlechange(e)}
          placeholder='Enter your task'
        />
        <button onClick={add}>Add</button>
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'baseline',
          flexDirection: 'row',
        }}>
        <ul>
          {taskList.map((item, index) => {
            return (
              <li key={`item${index}`}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'baseline',
                    flexDirection: 'row',
                  }}>
                  <p>Task: &nbsp; &nbsp;{item?.task ? item.task : ''}</p> &nbsp;
                  &nbsp;
                  <p>
                    Status: &nbsp; &nbsp;{item.status}
                  </p>{' '}
                  &nbsp;
                  <button onClick={() => update(index)}>Update</button>
                  <button onClick={() => deletetask(index)}>Delete</button>
                </div>
              </li>
            );
          })}
        </ul>
        <ul>
          {todos.map((item, index) => {
            return (
              <li key={`item${index}`}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'baseline',
                    flexDirection: 'row',
                  }}>
                  <p>Task: &nbsp; &nbsp;{item?.task ? item.task : ''}</p> &nbsp;
                  &nbsp;
                  <p>
                    Status: &nbsp; &nbsp;{item?.status ? item.status : ''}
                  </p>{' '}
                  &nbsp;
                  <button onClick={() => handleUpdateClick(item.id)}>
                    Update
                  </button>
                  <button onClick={() => handleDeleteClick(item.id)}>
                    Delete
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'baseline',
          flexDirection: 'row',
        }}>

        <button
          onClick={(e) => {
            e.preventDefault();
            setshowstatus(0);
          }}>
          Show active
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            setshowstatus(1);
          }}>
          Show completed
        </button>
      </div>
      <ul>
        {taskList?.length > 0 && taskList.map((item, index) => {
          return (item.status === showstatus &&
            <List item={item} index={index} update={update} delete={deletetask} />)

        })}
      </ul>
    </div>
  );
}

export default ToDo;
