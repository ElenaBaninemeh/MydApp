import React, { Component } from 'react';



class Main extends Component {

  render() {
    return (
      <div id="content">
        
      <h3 className="title center">Add New Entity</h3>
        <form onSubmit={(event) => {
          event.preventDefault()
          const jsonvalue = this.jsonvalue.value
          const identity = this.identity.value
          this.props.createData(jsonvalue, identity)
        }}>
            <div className="form-group form">
            <input
              id="identity"
              type="text"
              ref={(input) => { this.identity = input }}
              className="form-control"
              placeholder="Identity"
              required />
          </div>
          <div className="form-group form">
            <textarea 
              id="jsonvalue"
              type="text"
              ref={(input) => { this.jsonvalue = input }}
              className="form-control"
              placeholder="Json Value"
              required />
          </div>
          <button type="submit" className="btn btn-info form">Add Data</button>
        </form>
       
      </div>
    );
  }
}

export default Main;
