import React from "react"


export default class Create extends React.Component {
constructor(props){
        super(props)
        //properties
        this.state ={
          firstname: "",
          lastname: ""
        }
    }
       //event handler for button
    handleChange = (e) => {
        var id = e.target.getAttribute("id");
        if (id == "fNameForm") {
          this.setState({ firstname: e.target.value });
          
        }
        if (id == "lNameForm") {
          this.setState({ lastname: e.target.value });
        }
        
    }
  //Create request here
  createRequest = (fname,lname) => {
    console.log("Create request");
    fetch(window.endpoint + "/names", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ first: fname, last:lname}),
    }).then((result) => {
      console.log(result);
    });
  };
        render(){
                return(
                    <div>
    <input id='fNameForm' type="text"  placeholder='First name here' onChange={this.handleChange} value = {this.state.firstname}/> 
    <input id='lNameForm' type="text"  placeholder='Last name here' onChange={this.handleChange} value = {this.state.lastname}/> 
    <button id = "createButton" className="btn btn-primary" onClick={() => this.createRequest(this.state.firstname,this.state.lastname)}>Create</button>
      <br></br>
      <br></br>
                    </div>
                )
                
}
}
