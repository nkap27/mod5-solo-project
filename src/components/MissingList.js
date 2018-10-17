import React from 'react'
import MissingTile from './MissingTile'

class MissingList extends React.Component {
  render() {

    const children = this.props.children.map((child, index) =>{
      return <MissingTile key={index} child={child}/>
    })

    return (
      <div className="grid-page">
      { children }
      </div>
    )}
}


export default MissingList
