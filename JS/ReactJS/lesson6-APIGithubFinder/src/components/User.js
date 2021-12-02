import React, { Component } from 'react'


class User extends Component {
    
    render() {
    const {login,avatar_url,html_url} = this.props.user;
        return (
           
    <div className="card col-md-3">
  <img src={avatar_url} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{login}</h5>
    <p className="card-text">Github Profile</p>
    <a target="_blank" href={html_url} className="btn btn-primary">Go to profile</a>
  </div>
</div>
          
        )
    }
}
export default User;