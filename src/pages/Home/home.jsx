import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../../components/header/header.jsx'
import Posts from "../../components/posts/posts";
import SideBar from "../../components/sidebar/sidebar";
import axios from "axios";
import './home.css';


export default function Home(){
    const [posts, setPosts] = useState([]);
    const { search } = useLocation();
    
    useEffect(() => {
        const fetchPosts = async () => {
          try {
          const res = await axios.get('https://blog-app-api-fvor.onrender.com/api/posts/' + search);
          setPosts(res.data);
          } catch {}
        };
        fetchPosts();
      },[search]);
    return (
        <>
        <Header />
        <div className="home">
         <Posts posts={posts}/>
         <SideBar />
        </div>
        </>
    )
}
