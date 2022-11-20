import React from 'react'


export default class Read extends React.Component {


    constructor(props){
        super(props)
        //properties
        this.state ={
            names: null
        }
      }

//read request
readRequest = () => {
    console.log("Read request")
    fetch(window.endpoint + "/names")
      .then((result) => result.json())
      .then((data) => {
        this.setState({names: data });
      });
  };
  
  render()
    
  {
    console.log(this.state.names)
    return(
        <div>
    <button id="readButton" className="btn btn-primary"onClick={() => this.readRequest()}>Read</button>
        
        </div>
    )

    }
}
