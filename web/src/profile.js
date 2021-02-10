import React , {Component} from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMapMarkerAlt,faCodeBranch, faStar, faHeart,faHome, faTrophy, faEnvelope, faUser, faFileAlt} from '@fortawesome/free-solid-svg-icons';

class  Profile extends Component {
    constructor(props)
    {
        super(props);
        this.state ={
            profile:null,
            repo:null
        }
    }
    componentDidMount()
    {
     const query=this.props.location.search
     const userid=(query.substr(1, query.length))
     const profile_query='https://api.github.com/users/'+userid;
     const repo_query="https://api.github.com/users/"+userid+"/repos?per_page=5&sort=created"    

     
        fetch(profile_query)
        .then(res =>res.json())
        .then (json =>{
            const profile=[]
            profile.push(json)
            return profile;
        })
        .then((profile)=>{
            fetch(repo_query)
            .then(res =>res.json())
            .then (json =>{
                const repo=[]
                const newjson={
                  prof:profile,
                  repo:json
                }
                repo.push(newjson)
                this.setState({profile:repo})
            })
                  
                  
        })
        
    }
    render()
    {
    return (
                <div>
                {
                  this.state.profile && this.state.profile.map(profile =>{
                    return(
                      <div key={profile.prof[0].login}>
                    
                                <div className="container-fluid d-none d-md-block">
                                <div className="row">
                                  <div className="col-lg-2 theme-border-right">
                                    <aside className="side-menu">
                                      <div className="circle theme-bg text-center text-light">AB</div>
                                        <ul className="menu">
                                          <li className="active"><a href="#">Home</a></li>
                                          <li><a href="repos.html">Repos</a></li>
                                          <li><a href="#">Starred</a></li>
                                          <li><a href="#">Followers</a></li>
                                          <li><a href="#">Follings</a></li>
                                        </ul>
                                    </aside>
                                  </div>
                                  <div className="col-lg-6 about-me">
                                    <h1 className="name my-4">{profile.prof[0].name}</h1>
                                    <h1 className="tag my-4"><a href={profile.prof[0].html_url}>@{profile.prof[0].login}</a></h1>
                                    <h1 className="location-sm"> <i className="fas fa-map-marker-alt "></i>{profile.prof[0].location}</h1>
                                    <h3 className="bio my-4">{profile.prof[0].bio}</h3>
                                    
                                    <div className="buttons">
                                      <button className="btn theme-btn mt-4 theme-bg text-light">Check Repos</button>
                                      <button className="btn theme-btn mt-4">Contact Me</button>
                                    </div>
                                    <div className="card-deck stats-card">
                                      <div className="card text-center">
                                        Repos <span> {profile.prof[0].public_repos}</span>
                                      </div>
                                      <div className="card text-center ">
                                        Gists <span> {profile.prof[0].public_gists} </span>
                                      </div>
                                      
                                      
                                    </div>
                                    
                                  </div>
                                  <div className="col-lg-4">
                                  <div className="profile-photo p-0">
                                    <img src={profile.prof[0].avatar_url}className="img-fluid"/>
                                  </div>
                                  <div className="followers w-100">
                                    <table className="table">
                                      <tbody>
                                      <tr>
                                        <td> Followers</td>
                                        <td> {profile.prof[0].followers}</td>
                                      </tr>
                                      <tr>
                                        <td> Following</td>
                                        <td> {profile.prof[0].following}</td>
                                      </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                  </div>
                                </div>
                              </div>
                              <div className="container-fluid d-md-none p-0">
                              
                              <div className="container p-4 profile">
                              <div className="pattern"></div>
                                <div className="toggle-button">
                                  <i className="fas fa-bars fa-2x"></i>
                                </div>
                                <div className="row py-4">
                                  <div className="col-4 profile-photo-sm p-2">
                                    <img src={profile.prof[0].avatar_url} className="img-fluid"></img>
                                  </div>
                                  <div className="col-8 p-0">
                                    <h1 className="name-sm"> {profile.prof[0].name} </h1>
                                    <h1 className="location-sm"> <FontAwesomeIcon  icon={faMapMarkerAlt}></FontAwesomeIcon > {profile.prof[0].location} </h1>
                                  </div>
                                </div>
                              </div>
                                <div className="stats-card-sm">
                                  <ul className="stats-sm">
                                    <li> <span> {profile.prof[0].followers}</span> Followers</li>
                                    <li> <span> {profile.prof[0].following}</span> Following</li>
                                  </ul>
                                </div>
                                <div className="recent-repo">
                                  <h3 className="heading-sm-small p-4"> Recent Repos</h3>
                                  <ul className="repo">
                                 
                                   {
                                   profile.repo.map((repo)=>{
                                    
                                     return(
                                     <li key={repo.id}><a href={repo.html_url}>
                                     <span className="repo-name">{repo.name}</span>
                                     { repo.fork ?
                                          <span className="repo-tag bg-grey">Forked</span>
                                          :  true
                                        }
                                     <span className="repo-desc">{repo.description}</span>
                                     <span className="repo-tag bg-grey my-2">
                                       <span className="dot" id={repo.language}></span>
                                      {repo.language}</span>
                                     <ul className="repo-stat">
                                           <li><FontAwesomeIcon icon={faCodeBranch}></FontAwesomeIcon> {repo.forks_count}</li>
                                           <li><FontAwesomeIcon icon={faStar}></FontAwesomeIcon> {repo.stargazers_count}</li>
                                         </ul>
                                         </a></li>
                                     )
                                   })
                                   }
                                      
                                   
                                 
                                  </ul>
                                  <div className="container text-center my-4">
                                    <button className="btn theme-btn m-auto">Check All</button>
                                  </div>
                                  <div class="footer-mobile">
                                    <ul class="mobile-nav">
                                      <li> <FontAwesomeIcon icon={faHome}></FontAwesomeIcon></li>
                                      <li> <FontAwesomeIcon icon={faTrophy}></FontAwesomeIcon></li>
                                      <li class="action"> <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon></li>
                                      <li> <FontAwesomeIcon icon={faFileAlt}></FontAwesomeIcon></li>
                                      <li> <FontAwesomeIcon icon={faUser}></FontAwesomeIcon></li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                              </div>
                              
                              
                    )  
                  }) 
                }
                
                </div>




    )
  }
}
  export default Profile;
  