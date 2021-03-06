import React from 'react';
import styled from 'styled-components';
import img from './error.jpg'

const Error = styled.img`
    width: 100%;
`

const ErrorMessage = () => {
    return (
        <>
        {/* доступ к паблик 
            <Error src={process.env.PUBLIC_URL + '/img/error.jpg'} alt="error"/> */}
            <Error src={img} alt="error"/>
            <span>Something goes wrong</span>
        </>
    )
}

export default ErrorMessage;