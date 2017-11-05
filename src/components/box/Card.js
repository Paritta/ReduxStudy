import React from "react";
import styled from "styled-components";
import oc from "open-color";
import FaCameraRetro from "react-icons/lib/fa/camera-retro";

const propTypes = {
};

const defaultTypes = {
};

const Wrapper = styled.div`
    display: inline-block;
    
    margin: 0;
    padding: 0;
    
    border-radius: 15px;
    overflow: hidden;
`;

const View = styled.div`
    margin: 0;
    padding: 0;

    width: 450px;
    height: 300px;
    
    background: ${oc.gray[1]};
    
    display: flex;
    align-items: center;
    justify-content: center;
    
    color: white;
    
    transform: scale(10);
    
    z-index: 5;
`;

const Info =styled.div`
    margin: 0;
    padding: 0;
    
    overflow: hidden;
    width: 450px;
    height: 100px;
    
    background: pink;
    
    z-index: 10;
`;

const Card = () => {
    return (
        <div>
            <Wrapper>
                <View>
                    <FaCameraRetro/>
                </View>
            </Wrapper>
            <Info/>
        </div>
    );
};

Card.propTypes = propTypes;
Card.defaultTypes = defaultTypes;

export default Card;