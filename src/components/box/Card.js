import React from "react";
import styled from "styled-components";
import oc from "open-color";

const propTypes = {
};

const defaultTypes = {
};

const Wrapper = styled.div`
    display: inline-block;
    
    margin: 0;
    padding: 0;
    
    border: 3px solid palevioletred;
    border-radius: 15px;
    overflow: hidden;
`;

const View = styled.div`
    margin: 0;
    padding: 0;

    width: 450px;
    height: 300px;
    
    background: ${oc.gray[1]};
`;

const Info =styled.div`
    margin: 0;
    padding: 0;
    
    overflow: hidden;
    width: 450px;
    height: 100px;
    
    background: pink;
`;

const Card = () => {
    return (
        <div>
            <Wrapper>
                <View>

                </View>
                <Info/>
            </Wrapper>
        </div>
    );
};

Card.propTypes = propTypes;
Card.defaultTypes = defaultTypes;

export default Card;