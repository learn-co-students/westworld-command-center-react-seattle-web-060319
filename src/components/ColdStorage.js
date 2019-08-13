import React from 'react';
import { Segment } from 'semantic-ui-react'
import HostList from './HostList'
// import Host from './Host'

const ColdStorage = (props) => (
  <Segment.Group className="HQComps">
    <Segment compact>
      <h3 className="labels">ColdStorage</h3>
    </Segment>
    <Segment compact>

      <HostList hosts={props.hosts} handleSelectHost={props.handleSelectHost} />
      {/* {props.hosts.map(host => <Host host={host} key={host.id} />)} */}

    </Segment>
  </Segment.Group>
)

export default ColdStorage
