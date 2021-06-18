import React from 'react';
import {HeaderContainer} from './containers/headerContainer'
import {JumbotronContainer} from './containers/jumbotron';
import {FooterContainer} from './containers/footerContainer'
import {FaqsContainer} from './containers/faq'
import {PlansContainer} from './containers/plansContainer'
function App() {
  return (
    <>
      <HeaderContainer/>
      <JumbotronContainer/>
      <PlansContainer/>
      <FaqsContainer/>
      <FooterContainer/>
    </>
  );
}

export default App;
