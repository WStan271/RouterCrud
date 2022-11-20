import React from "react"


export default class Create extends React.Component {
    constructor(props){
            super(props)
            //properties
            this.state ={
              newfirstname: "",
              newlastname: "",
              updateId: "",
            }
        }
        handleChange = (e) => {
            var id = e.target.getAttribute("id");
            if (id == "updateFName") {
                this.setState({ newfirstname: e.target.value });
              }
              if (id == "updateLName") {
                this.setState({ newlastname: e.target.value });
              }
              if (id == "updateId") {
                this.setState({ updateId: e.target.value });
              }
            }
            updateRequest = (id, fname, lname) => {
                console.log("Update Request")
                 fetch(window.endpoint + "/names/" + id, {
                   method: "PUT",
                   headers: {
                     "Content-Type": "application/json",
                   },
                   body: JSON.stringify({ first: fname, last: lname }),
                 }).then((result) => {
                   console.log(result);
                 });
               };

               render(){
                return(
                    <div>
                        <input id='updateFName' type="text"  placeholder='new first name here' onChange={this.handleChange} value = {this.state.newfirstname}/> 
                        <input id='updateLName' type="text"  placeholder='new last name here' onChange={this.handleChange} value = {this.state.newlastname}/> 
                        <input id="updateId"type="text"  placeholder='Search for id to update 'onChange={this.handleChange} value = {this.state.updateId}  /> 
                        <button  className="btn btn-primary" id="updateButton"  onClick={() => this.updateRequest(this.state.updateId,this.state.newfirstname,this.state.newlastname)}>Update</button>
                        <br></br>
                        <br></br>
                    </div>
                )
                }
            }