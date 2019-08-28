import React from 'react';

interface Props {
  children?: JSX.Element;
}

function App({ children }: Props): JSX.Element {
  return (
    <React.Fragment>
      {/* <Navbar /> */}
      <div id="app-container">{children}</div>
      {/* <Footer /> */}
    </React.Fragment>
  );
}

export default App;
