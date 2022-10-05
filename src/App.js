import React from "react";
import styled from "styled-components";

const BIRD_SIZE = 20;
const GAME_WIDTH = 500;
const GAME_HEIGHT = 500;

function App() {
    return ( 
        <Div>
            <Bird size={BIRD_SIZE}/>
        </Div>
    )
}

export default App;

const Bird = styled.div`
    position: absolute;
    background-color: red;
    height: ${(props) => props.size}px;
    width: ${(props) => props.size}px;
    top: ${(props) => props.size}px;
    border-radius: 50%;
`;

const Div = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
`;

const GameBox = styled.div`
    height: ${(props) => props.size}px;
    width: ${(props) => props.size}px;
`;