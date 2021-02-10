import React , {Component} from 'react';
import './App.css';

class  Home extends Component {
    constructor(props)
    {
        super(props);
        this.state ={
            profile:null,
            userid:null
        }
        this.handleChange=this.handleChange.bind(this)
        this.retriveData=this.retriveData.bind(this)
    }
    retriveData(e)
    {
      document.getElementById('search-form').checkValidity();
      e.preventDefault();
      this.props.history.push({
        pathname: '/profile',
        search: this.state.userid,

      })
     console.log(this.props)
    }
    handleChange(e)
    {
      this.setState({[e.target.name]: e.target.value});
    }
  
    render()
    {
    return (
      <div class="intro">
      <div class="container-fluid text-center">
      <div class="gitty-desc">
        <h1 class="heading-sm-big"> Gitty </h1>
        <h1 class="heading-sm-small"> Modern github profile </h1>
      </div>
      <div class="search-form-section">
        <form class="search-form text-left" id="search-form">
          <label> Github userid </label>
          <div class="form-group">
            <input type="text" 
             name="userid" 
             className ="form-control" 
              id="userid" 
             placeholder="UserId" 
             value={this.state.userid} 
             onChange={this.handleChange} 
             required  />
          </div>
          <input type="submit" class="btn theme-btn my-4"  name="s" value="s" value="search now" onClick={this.retriveData}></input>
        </form>
      </div>
    </div>
    <footer class="text-center p-4 bg-black text-light">
          <h2> Fork me in github <i class="fas fa-heart"></i></h2>
    </footer>
    </div>
    )
  }
}
  export default Home;
  