import React from 'react'

const Filter = (props) => {
  return(
    <input type="text" onChange={props.handleChange} className="search-field"></input>
  )
}

export default Filter
