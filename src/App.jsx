import React from 'react';
import { faUserFriends, faClock, faBookmark, faUsers, faVideo, faGamepad, faPuzzlePiece, faCandyCane } from '@fortawesome/free-solid-svg-icons';
import FacebookPost from './FacebookPost';
import './App.css';
import Navbar from './Navbar';
import profile from "./assets/profile.png";
import post from "./assets/post.png";
import post2 from "./assets/post2.png";
import wicket from "./assets/wicket.png";
import Sidebar from './Sidebar';
import Rightbar from './Rightbar';

function App() {
  const sponsoredContent = [
    {
      imageUrl: 'https://png.pngtree.com/png-clipart/20230804/original/pngtree-sponsored-by-sponsor-stamp-ink-vector-picture-image_9538210.png',
      title: 'Install ResumeGPT Chrome Extension',
      url: 'https://chromewebstore.google.com'
    },
    {
      imageUrl: '',
      title: 'StudyPerth, Western Australia',
      url: ''
    }
  ];

  const friendRequests = [
    {
      name: '',
      mutualFriends: 17,
 imageUrl: "",
      time: '2w'
    }
  ];

  const sidebarItems = [
    { name: 'Friends', icon: faUserFriends },
    { name: 'Memories', icon: faClock },
    { name: 'Saved', icon: faBookmark },
    { name: 'Groups', icon: faUsers },
    { name: 'Video', icon: faVideo },
  ];

  const shortcuts = [
    { name: 'Criminal Case', icon: faGamepad },
    { name: '8 Ball Pool', icon: faPuzzlePiece },
    { name: 'Candy Crush Saga', icon: faCandyCane },
  ];

  return (
    <div className="App">
      <Navbar />
      <div className="main-content">
        <Sidebar items={sidebarItems} shortcuts={shortcuts} />
        <div className="content-and-rightbar">
          <div className="posts">
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
          <Rightbar sponsoredContent={sponsoredContent} friendRequests={friendRequests} />
        </div>
      </div>
    </div>
  );
}

export default App;
