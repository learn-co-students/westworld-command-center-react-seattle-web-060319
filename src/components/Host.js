import React from 'react';
import '../stylesheets/Host.css'
import { Card } from 'semantic-ui-react'

const Host = (props) => {

  return (
    <Card
      className="host"
      onClick={(e) => {
        // FIXME: styling for selected host
        e.target.className = "ui image host selected"
        props.handleSelectHost(props.host)
      }}
      image={props.host.imageUrl}
      raised
    />
  )
}

export default Host
