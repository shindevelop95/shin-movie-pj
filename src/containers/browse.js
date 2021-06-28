import React, { useState, useEffect, useContext } from 'react';
import Fuse from 'fuse.js';
import request from '../api/request'
import { FooterContainer } from './footerContainer';
import { RecommendContainer } from './recommendContainer';
import {BannerContainer} from './bannerContainer';
import { List,Footer,Header,Loading, Player, Recommend} from '../components';
import { FirebaseContext } from '../context/firebase';
import { SelectProfileContainer } from './profile';
import * as ROUTES from '../constant/routes'


export function BrowseContainer({ slides }) {
  const [category, setCategory] = useState('series');
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [show,setShow] = useState(false);
  const [slideRows, setSlideRows] = useState([]);

  const { firebase } = useContext(FirebaseContext);
  const user = firebase.auth().currentUser || {};
  console.log("show me the user", user)
    console.log("show me the profile", profile)

    useEffect(() => {
      window.addEventListener("scroll",() => {
          if(window.scrollY > 10){
              setShow(true);
          }else setShow(false);
      });
      return() => {
          window.removeEventListener("scroll");
      };

  },[]);
  console.log("SHOW ME SHOW!", show)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [profile.displayName]);

  useEffect(() => {
    setSlideRows(slides[category]);
  }, [slides, category]);

  useEffect(() => {
    const fuse = new Fuse(slideRows, { keys: ['data.description', 'data.title', 'data.genre'] });
    const results = fuse.search(searchTerm).map(({ item }) => item);

    if (slideRows.length > 0 && searchTerm.length > 3 && results.length > 0) {
      setSlideRows(results);
    } else {
      setSlideRows(slides[category]);
    }
  }, [searchTerm]);

  return profile.displayName ? (
    <>
      {loading ? <Loading src={user.photoURL} /> : <Loading.ReleaseBody />}
    <Header src="batman-landing">
      <Header.Filter/>
      <Header.InnerFrame show={show}>
        <Header.FrameGroup>
        <Header.LinkGroup>
          <Header.TextLogo src="/images/logo/miryu.png" to={ROUTES.HOME} />
          <Header.TextLink
            active={category ==='series' ? 'true' : 'false'}
            onClick={() =>setCategory('series')}
          >Series</Header.TextLink>
          <Header.TextLink
          active={category ==='films' ? 'true' : 'false'}
            onClick={() =>setCategory('films')}
          >Films</Header.TextLink>
        </Header.LinkGroup>
       <Header.LinkGroup>
       <Header.Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
         <Header.Profile>
           <Header.Picture src={1}/>
           <Header.Dropdown>
             <Header.LinkGroup>
               <Header.Picture src={1}/>
               <Header.TextLink>{user.displayName}</Header.TextLink>
             </Header.LinkGroup>
             <Header.LinkGroup>
               <Header.TextLink onClick={() => firebase.auth.signOut()}>
                 Sign Out
               </Header.TextLink>
             </Header.LinkGroup>
           </Header.Dropdown>
         </Header.Profile>
       </Header.LinkGroup>
        </Header.FrameGroup>
      </Header.InnerFrame>
        <Header.Feature>
          <Header.FeatureGroup>
          <Header.FeatureCallOut>The Dark Knight</Header.FeatureCallOut>
          <Header.Text>
            Forever alone in a crowd, failed comedian Arther Fleck seeks conncection as he walks the streets of Gotham City. Arther wears two mask 
            -- the one he paints for his day job as a clown, and the guise he projects in a futile attempt to feel like he's part of the wolrd around him. 
          </Header.Text>
          <Header.PlayButton>Watch Now</Header.PlayButton>
          </Header.FeatureGroup>
        </Header.Feature>
    </Header>
    <List.Group>
      {slideRows.map((slideItem) => (
        <List key={`${category}-${slideItem.title.toLowerCase()}`}>
          <List.Title>{slideItem.title}</List.Title>
          <List.Entities>
            {slideItem.data.map((item) => (
              <List.Item key={item.docId} item={item}>
                <List.Image
                  src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`}

                />
                <List.Meta>
                  <List.SubTitle>{item.title}</List.SubTitle>
                  <List.Text>{item.description}</List.Text>
                </List.Meta> 
              </List.Item>
            ))}
          </List.Entities>
          <List.Feature category={category}>
                <Player>
                <Player.Button />
                <Player.Video src="/videos/bunny.mp4" />
              </Player>
          </List.Feature>
        </List>
      ))}
    </List.Group>
    <BannerContainer/>
    <Recommend.Title>Our Recommendation</Recommend.Title>
    <RecommendContainer fetchUrl = {request.fetchTrending}/>
    <RecommendContainer fetchUrl = {request.fetchNetflixOriginals}/>
    <RecommendContainer fetchUrl = {request.fetchTopRated}/>
    <RecommendContainer fetchUrl = {request.fetchActionMovies}/>
    <FooterContainer/>
    </>
  ) : (
    <SelectProfileContainer user={user} setProfile={setProfile} />
  );
}