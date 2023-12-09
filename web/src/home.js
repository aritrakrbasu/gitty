import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faBuilding, faCheck, faChild, faCodeBranch, faEnvelope, faEye, faMapMarkerAlt, faRunning, faSadTear, faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useRef, useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import './App.css';
import Search from './search';

 
require('dotenv').config()

function Home() {
  const [profile, setProfile] = useState({})
  const [profileLanguages, setProfileLanguages] = useState([])
  const [profileRepos, setProfileRepos] = useState([])
  const [filteredRepos, setFilteredRepos] = useState([])
  const [followersList, setFollowersList] = useState([])
  const [followingsList, setFollowingsList] = useState([])
  const [profileStatus, setProfileStatus] = useState(false)
  const [darkMode , setDarkMode] =useState(false)
  const [userIdNotPresent , setUserIdNotPresent] =useState(false)
  const [repoShowCount , setRepoShowCount] =useState(10)
  
  const modeRef = useRef()
  const searchRepoRef = useRef()

  useEffect(() => {
    const headers={
      "Authorization" : `token ${process.env.REACT_APP_API_KEY.split("-")[0]}`
    }
    let search = window.location.search;
    let params = new URLSearchParams(search);
    let userid = params.get('id');

    if(userid !== null)
    {
      setUserIdNotPresent(false)

      //profile details 
      const profile_query='https://api.github.com/users/'+userid;
      fetch(profile_query , {
        "method":"GET",
        "headers":headers
      })
        .then(res =>res.json())
        .then (profileData =>{
          if(profileData.message !== "Not Found")
          {
            setProfile(profileData)
              //fetch followers
              if(profileData.followers > 0) 
              {
                const follower_query='https://api.github.com/users/'+userid+'/followers?per_page=5';
                fetch(follower_query, {
                  "method":"GET",
                  "headers":headers
                })
                  .then(res =>res.json())
                  .then (profilefollowers =>{
                    setFollowersList(profilefollowers)
                  })
              }
              //fetch followings
              if(profileData.following > 0)
              {
                const follower_query='https://api.github.com/users/'+userid+'/following?per_page=5';
                fetch(follower_query, {
                  "method":"GET",
                  "headers":headers
                })
                  .then(res =>res.json())
                  .then (profilefollowing =>{
                    setFollowingsList(profilefollowing)
                  })
              }

              //repo details
              if(profileData.public_repos>0)
              {
                  const profile_language_query=`https://api.github.com/users/${userid}/repos?per_page=100&sort=created`;
                  fetch(profile_language_query, {
                    "method":"GET",
                    "headers":headers
                  })
                    .then(res =>res.json())
                    .then (json =>{
                      var languages =[]
                      if(json.message !=='Not Found')
                      {
                        json.forEach(element => {
                          if(element.language!==null && !languages.includes(element.language))
                          {
                            languages.push(element.language)
                          }
                        });
                        setProfileLanguages(languages)
                        setFilteredRepos(json)
                        setProfileRepos(json)
                      }
                    })
              }
          }
          else
          {
            setProfileStatus(true)
          }
        })
    }else
    {
      setProfileStatus(true)
      setUserIdNotPresent(true)
    }
   
  }, [])

  function handleClick(filter)
  {
    if(filter !== 'all')
    {
      const filteredRepolist = profileRepos.filter(profileRepo => profileRepo.language===filter)
      setFilteredRepos(filteredRepolist)
    }
    else
    {
      setFilteredRepos(profileRepos)
    }
  }

  useEffect(() => {
    var today = new Date(),

    time = today.getHours()
    if(time >= 22)
    {
      setDarkMode(true)
    }else if(time >= 1 && time <=6)
    {
      setDarkMode(true)
    }
  }, [])

  function modeToggle()
  {
    setDarkMode(modeRef.current.checked)
  }

  function searchRepo()
  {
      const filteredRepolist = profileRepos.filter(profileRepo => profileRepo.name.includes(searchRepoRef.current.value))
      setFilteredRepos(filteredRepolist)
  }

  function kFormatter(num) {
    return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'k' : num
  }

  return (
    <>
    {!profileStatus && (
      <div className={darkMode ?("darkmode"):("lightmode")}>
      <Container fluid>
      <Row>
        <Col>
         <div className="nav">
           <a role="button" href={profile.html_url}><div className="nav-logo">{profile.name && profile.name.match(/\b(\w)/g)}</div></a>
         </div>
        </Col>
        <Col>
          <div className="nav-right">
              <label className="switch" htmlFor="checkbox" title="Change color scheme to dark mode">
                <input type="checkbox" id="checkbox" onChange={modeToggle} ref={modeRef} defaultChecked={darkMode} />
                <div className="slider round"></div>
                <div className="toggle-moon"><span role="img" aria-label="moon">🌙</span></div>
                <div className="toggle-sun"><span role="img" aria-label="sun">☀️</span></div>
              </label>
              {profile.email && (<a href={`mailto:${profile.email}`}><div className="nav-btn"><FontAwesomeIcon icon={faEnvelope} /> <span>Contact me</span></div></a>)}
            
          </div>
        </Col>
      </Row>
    </Container>
      <Container fluid>
      <Row>
        <Col lg={5}>
          <div className="profile-section">
            <a href={profile.html_url}><div className="profile-username"> {'@'+profile.login} </div></a>
            <div className="profile-name"> {profile.name} </div>
            <div className="profile-image"> 
              {profile.plan && profile.plan.name === "pro" && (<div className="pro-member"><FontAwesomeIcon icon={faCheck}/> <span>Pro</span></div>)}
              <img src={profile.avatar_url} alt="avatar"/> 
              <div className="profile-bg"></div>
            </div>
           
              
                {profile.location && ( 
                <div className="profile-location">
                  <div className="profile-location-icon">
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                  </div>
                <div className="profile-location-text">{profile.location}</div>
                </div>
                )}
              {profile.blog && (<a href={profile.blog} target="_blank" rel="noopener noreferrer" ><div className="profile-website"><u>{profile.blog}</u></div></a>)}
              {profile.twitter_username && (<a href={`https://twitter.com/${profile.twitter_username}`} target="_blank" rel="noopener noreferrer" ><div className="twitter-link"><span><FontAwesomeIcon icon={faTwitter} /></span>@{profile.twitter_username}</div></a>)}
              {profile.hireable && (<div className="profile-hire-status">AVAILABLE FOR HIRE</div>)}
          </div>
        </Col>
        <Col lg={7}>
          <div className="about-section bl">
            <div className="about-stats">
              <Container fluid>
                <Row>
                  <Col>
                    <div className ="about-profile">
                      <Row>
                        <Col sm={2} className="abouts-stats">
                          <span className="ico">
                          <FontAwesomeIcon icon={faChild} />
                          </span>
                        </Col>
                        <Col className="abouts-stats">
                          <h2> Followers</h2>
                          <h3>{kFormatter(profile.followers)}</h3>
                          <ul className="follower-avatar-list">
                            {followersList.length>0 && followersList.map((follower,key)=>{
                              return(<a href={follower.html_url} target="_blank" rel="noopener noreferrer" key={key}><li key={key}><img src={follower.avatar_url} alt="follower-avatar"/></li></a>)
                            })}
                          </ul>
                        </Col>
                      </Row>
                      
                    </div>
                  </Col>
                  <Col className="bl bl-sm pl-c-5">
                    <div className ="about-profile">
                      <Row>
                        <Col sm={2} className="abouts-stats"><span className="ico"><FontAwesomeIcon icon={faRunning} /></span></Col>
                        <Col className="abouts-stats">
                          <h2> Following</h2>
                          <h3>{kFormatter(profile.following)}</h3>
                          <ul className="follower-avatar-list">
                            {followingsList.length>0 && followingsList.map((following,key)=>{
                              return(<a href={following.html_url} target="_blank" rel="noopener noreferrer" key={key}><li key={key}><img src={following.avatar_url} alt="following-avatar"/></li></a>)
                            })}
                          </ul>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                </Row>
              </Container>
              {profile.company && (
                     <Container fluid>
                       <Row>
                       <Col>
                        <div className ="about-profile">
                          <Row>
                            <Col sm={1} className="abouts-stats"><span className="ico"><FontAwesomeIcon icon={faBuilding} /></span></Col>
                            <Col className="abouts-stats">
                              <h2> Company</h2>
                              <h3>{profile.company}</h3>
                            </Col>
                          </Row>
                        </div>
                      </Col>
                       </Row>
                   </Container>
                  )}
            </div>
            <div className ="about-profile">
              {profile.bio && (
                <>
                <h1>About</h1>
                <p>
                {profile.bio}
                </p> 
                </>
              )} 
            </div>
            <div className ="about-profile">
              {profileLanguages.length > 0 && (<h1>Languages <span>{profileLanguages.length}</span> </h1>) }
              <ul className="skills">
                {profileLanguages && profileLanguages.map((profileLanguage,key) =>{
                  return(
                    <li key={key}> <img src="https://svgsilh.com/svg/26432.svg" alt="bg-style" /> {profileLanguage}</li>
                  )
                })}
              </ul>
            </div>
           
            <div className="project-section">
              <div className ="about-profile">
                <h1>Projects <span>{kFormatter(profile.public_repos)}</span></h1>
                <ul className="filter-btn">
                  <li className="filter-text">Filters :</li>
                  <Button variant="light" onClick={()=>handleClick('all')}><li>All</li></Button>
                  {profileLanguages && profileLanguages.map((profileLanguage,key) =>{
                    return(
                      <Button variant="light" onClick={()=>handleClick(profileLanguage)} key={key}><li>{profileLanguage}</li></Button>
                    )
                  })}
                  <Button variant="light" onClick={()=>handleClick(null)}><li>Others</li></Button>
                </ul>
              </div>
              <Form>
                <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Label>Search Repo</Form.Label>
                  <Form.Control type="text" placeholder="Repo Name" onChange={searchRepo} ref={searchRepoRef} autoComplete="off" />
                </Form.Group>
              </Form>
              {filteredRepos.length > 0 && filteredRepos.slice(0,repoShowCount).map((filteredRepo,key) =>{
                
                return(
                  <div className="project-item" key={key}>
                    {filteredRepo.fork && (<div className="forked-repo">Forked</div>)}
                    <a href={filteredRepo.html_url} target="_blank" rel="noopener noreferrer"><div className="project-title">{filteredRepo.name}</div></a>
                    <div className="project-link">{filteredRepo.html_url}</div>
                    <div className="project-desc">{filteredRepo.description}</div>
                    <div className="project-tags">{filteredRepo.language && (<span>{filteredRepo.language}</span>)}</div>
                    <div className="project-footer-ico">
                      <ul className="footer-ico">
                        <li><FontAwesomeIcon icon={faEye} /> <span>{filteredRepo.watchers}</span></li>
                        <li><FontAwesomeIcon icon={faStar} /> {filteredRepo.stargazers_count}</li>
                        <li><FontAwesomeIcon icon={faCodeBranch} /> {filteredRepo.forks}</li>
                      </ul>
                    </div>
                  </div>
                )
              })}
              {filteredRepos.length>10 && (repoShowCount<=filteredRepos.length) &&(<Button variant="light" className="load-more-btn w-100" onClick={()=>{setRepoShowCount(repoShowCount+10)}}>Load More</Button>) }
              
            </div>
          </div>
        </Col>
      </Row>
    </Container>
    </div>
    )}
    {profileStatus && !userIdNotPresent &&(
      <div className="profile-not-found">
        <FontAwesomeIcon icon={faSadTear} />
        Profile not Found
      </div>
    )}
    {userIdNotPresent && <Search />}
  </>
  )
}

export default Home
