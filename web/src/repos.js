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
     const repo_query="https://api.github.com/users/"+userid+"/repos?per_page=1000&sort=created"    

     
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
                console.log(json.length)
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
                    
                               
                              <div className="container-fluid d-md-none p-0">
                              
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
  