import React from 'react'

const MissingTile = (props) => {
  return(
    <div className="grid-tile">
      <div>
          <h3>{props.child.name}</h3>
          <div>Missing From: {props.child.city}</div>
          <a href='/info'>
            <img alt="missing child" src={props.child.image}></img>
          </a>
          <div>Height: {props.child.height} cm</div>
          <div>Weight: {props.child.weight} kgs</div>
          <div>Gender: {props.child.sex}</div>
          <div>Age: {props.child.age} </div>
          <div>Eye Colour: {props.child.eyes}</div>
          <div>Hair Colour: {props.child.hair}</div>
          <div>N/B: {props.child.medical}</div>
          <div> FIR Reported:
          {
            (props.child.fir) ? ' Yes'  : ' No'
          }
          </div>
      </div>
    </div>
  )
}

export default MissingTile
