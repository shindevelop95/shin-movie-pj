import React from 'react';
import {JumbotronContainer} from './containers/jumbotron';
import {FooterContainer} from './containers/footerContainer'
import {FaqsContainer} from './containers/faq'
import {PlansContainer} from './containers/plansContainer'
function App() {
  return (
    <>
      <JumbotronContainer/>
      <PlansContainer/>
      <FaqsContainer/>
      <FooterContainer/>
    </>
  );
}

export default App;
