import React, { useState, useEffect, useContext } from 'react';
import Fuse from 'fuse.js';
import { Footer,Header,Loading} from '../components';
import { FirebaseContext } from '../context/firebase';
import { SelectProfileContainer } from './profile';
import * as ROUTES from '../constant/routes'


export function BrowseContainer({ slides }) {
  const [category, setCategory] = useState('series');
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [slideRows, setSlideRows] = useState([]);

  const { firebase } = useContext(FirebaseContext);
  const user = firebase.auth().currentUser || {};
  console.log("show me the user", user)
    console.log("show me the profile", profile)
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
      <Header.InnerFrame>
        <Header.LinkGroup>
          <Header.TextLogo src="/images/logo/miryu.png" to={ROUTES.HOME} />
          <Header.TextLink>Series</Header.TextLink>
          <Header.TextLink>Films</Header.TextLink>
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
      </Header.InnerFrame>
        <Header.Feature>
          <Header.FeatureCallOut>Watch Batman Now</Header.FeatureCallOut>
          <Header.Text>
            Forever alone in a crowd, failed comedian Arther Fleck seeks conncection as he walks the streets of Gotham City. Arther wears two mask 
            -- the one he paints for his day job as a clown, and the guise he projects in a futile attempt to feel like he's part of the wolrd around him. 
          </Header.Text>
          <Header.PlayButton>Watch Now</Header.PlayButton>
        </Header.Feature>
    </Header>
    </>
  ) : (
    <SelectProfileContainer user={user} setProfile={setProfile} />
  );
}