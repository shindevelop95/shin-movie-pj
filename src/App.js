import React from 'react';
import {JumbotronContainer} from './containers/jumbotron';
import {FooterContainer} from './containers/footerContainer'
import {FaqsContainer} from './containers/faq'
function App() {
  return (
    <>
      <JumbotronContainer/>
      <FaqsContainer/>
      <FooterContainer/>
    </>
  );
}

export default App;
