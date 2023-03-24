import React from 'react';
import styled from 'styled-components';

const Button = (props) => {
    return (
        <SubmitButton>{props.ButtonMessage}</SubmitButton>
    );


}
export default Button;

const SubmitButton = styled.button`
background-color: light blue;
`