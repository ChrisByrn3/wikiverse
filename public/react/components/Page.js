import React from 'react';

export const Page = ({details, onBackClick}) => {

  return <>
    <h3>{details.title}</h3>
    <p>{details.author}</p>
    <p>{details.content}</p>
    <p>{details.tags}</p>
    <p>{details.date}</p>

    <button onClick={onBackClick}>Home</button>
  </>
} 
	