import React, { Component } from 'react'

class TableHeader extends Component {
  render() {
    return this.props.data.map( data => (
        <th key={data}>{data}</th>
        )
    )
  }
}
 
export default TableHeader