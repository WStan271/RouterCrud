import React from 'react'


export default class Delete extends React.Component {

    constructor(props){
        super(props)
        //properties
        this.state ={
          id: ""
        }
      }
      handleChange = (e) => {
        var id = e.target.getAttribute("id");
        
        if (id == "deleteForm") {
          this.setState({ id: e.target.value });
        }
        
      };
      //Delete request here
deleteRequest = (id) => {
    console.log("Delete request");
    fetch(window.endpoint + "/names/" + id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((result) => {
      console.log(result);
    });
  };
  render()
  {

    return(
        <div>
    <input id="deleteForm"type="text" placeholder='Delete here' onChange={this.handleChange} value = {this.state.id} /> 
    <button id="deleteButton"  className="btn btn-primary" onClick={() => this.deleteRequest(this.state.id)}>Delete</button>
    <br></br>
    <br></br>
        </div>
    )

    }
}
