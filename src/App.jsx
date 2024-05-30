import React from 'react'
import FacebookPost from './FacebookPost'
import './App.css'
import Navbar from './Navbar';
import profile from "./assets/profile.png"
import post from "./assets/post.png"
import post2 from "./assets/post2.png"
import wicket from "./assets/wicket.png"
function App() {
  

  return (
    
    <div className="App1">
      <Navbar />
 <div className="App">

      <FacebookPost
        profilePic={profile}
        author="Zaroon Bahadur"
        time="14 hours ago"
        post={post}
      />
      <FacebookPost
       profilePic={profile}
        author="Z Ur Rehman"
        time="2 hours ago"
        post={post2}
      />
      <FacebookPost
       profilePic={profile}
        author="Zia Ur Rehman"
        time="2 hours ago"
        post={wicket}
      />
      
    </div>
    </div>
  )
}

export default App