import React from 'react';
import Heder from '../components/Header'

const Layout = ({children}) => {
    return (
        <div className="Layout">
            <Heder/>
            {children}
        </div>
    );
}

export default Layout;