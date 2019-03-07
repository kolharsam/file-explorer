import React from 'react';
import DefImage from '../../images/error_404.png';

class NoLink extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div style={{
                    marginTop: '50px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems:'center',
                    flexDirection: 'column'
                }}>
                    <img src={DefImage} alt="" height={256} width={256} style={{marginBottom: '30px'}}/>
                    <h2 style={{
                        fontFamily: 'Lato',
                        fontSize: '20px'
                    }}>Page Not Found</h2>
                </div>
            </React.Fragment>
        );
    }
}

export default NoLink;