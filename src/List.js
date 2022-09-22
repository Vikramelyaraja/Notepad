import React from 'react'

export default function List({ item, index, update, deletetask }) {
  return (
    <div><li key={`item${index}`}>
      <div style={{
        display: 'flex',
        alignItems: 'baseline',
        flexDirection: 'row',
        }}>
        <p>Task: &nbsp; &nbsp;{item?.task ? item.task : ''}</p>  &nbsp; &nbsp;
        <p>Status:  &nbsp; &nbsp;{item.status}</p> &nbsp;
        <button onClick={() => update(index)}>Update</button>
        <button onClick={() => deletetask(index)}>Delete</button>
      </div>
    </li></div>
  )
}
