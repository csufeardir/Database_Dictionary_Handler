import React, {Component} from 'react'
import TableHeader from './TableHeader'
import TableElement from './TableElement'
import Add from './Add'
import './TableStyle.css'
import './ButtonStyle.css'

class DataTable extends Component {
    state={
        clicked: false
    }
    clickHandler = () =>{
        this.setState({clicked:true})

    }

  render() {
      let data=this.props.data;
      let data2=this.props.data2;
      let headers=['Id','Product','Color','Price']
    return (
        <div>
            <h1>Dictionary</h1>
        <table id='table1' className='productTable' >
            <thead>
            <tr>
            <TableHeader data={headers}/>
            </tr>
            </thead>
            <tbody>
            <TableElement data={data} editable={true}/>
            </tbody>
        </table>
            <hr/>
            <h1>Database</h1>
            <table id='table2' className='productTable' style={{width:'50%'}}>
                <thead>
                <tr>
                    <TableHeader data={headers}/>
                </tr>
                </thead>
                <tbody>
                <TableElement data={data2} editable={false}/>
                </tbody>
            </table>
            {this.state.clicked ? null : <button className='button' id='add' onClick={this.clickHandler}>Add</button>}
            {this.state.clicked ?
                <Add /> :
                null
            }
        </div>
    )
  }
}
 
export default DataTable