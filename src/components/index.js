import React from 'react';
import { Container } from 'semantic-ui-react';

import Header from './header';
import Introduction from './introduction';
import Profile from './profile';
import Resume from './resume'; 

const App = () => {
    return (
        <div>
            <Header />
            <Container container>
                <Introduction />
                <Profile />
                <Resume />
            </Container>
        </div>
        
    );
}

export default App;