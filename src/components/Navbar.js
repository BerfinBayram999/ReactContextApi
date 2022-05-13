import React from 'react'
import { ThemeContext } from '../contexts/ThemeContext';
import { AuthContext } from './AuthContext';



class Navbar extends React.Component {
    // static contextType=ThemeContext;



    render() {

        // const { isDarkTheme, darkTheme, lightTheme } = this.context;

        //  const theme = isDarkTheme ? darkTheme : lightTheme;
        return (

            <AuthContext.Consumer>{(authContext) => (

                <ThemeContext.Consumer>{(themeContext) => {
                    const { isDarkTheme, darkTheme, lightTheme } = themeContext;
                    const{isLoggedIn,changeAuthStatus}=authContext;
                    const theme = isDarkTheme ? darkTheme : lightTheme;

                    return(
                    <nav style={{ background: theme.background, color: theme.text, height: '120px' }}>
                        <h2 style={{ textAlign: 'center' }}>
                            Web Site Title
                        </h2>
                        <p style={{ textAlign: 'center' }} onClick={changeAuthStatus}>{isLoggedIn ? 'Logged in' : 'Logged out'}</p>
                        <div className='ui three buttons'>
                            <button className='ui button '> Overview</button>
                            <button className='ui button '> Contact</button>
                            <button className='ui button '> Support</button>
                        </div>
                    </nav>
)
                }}
                </ThemeContext.Consumer>
            )}
            </AuthContext.Consumer>

        )
    }
}

export default Navbar;