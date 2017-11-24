import React from "react";
import styled from "styled-components";
import oc from "open-color";
import FaCameraRetro from "react-icons/lib/fa/camera-retro";

const propTypes = {
};

const defaultTypes = {
};

const Wrapper = styled.div`
    margin: 0;
    padding: 0;
    
    width: 450px;
    border-radius: 10px 10px 0 0;
    overflow: hidden;
`;

const View = styled.div`
    margin: 0;
    padding: 0;

    width: 450px;
    height: 250px;
    
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
    
    background: hsla(0, 72%, 0%, 0.4);
    
    z-index: 10;
    
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const Title = styled.div`
    font-size: 40px;
    font-weight: 500;
    color: white;
`;

const LocationDiv = styled.div`   
    font-size: 22px;
    font-weight: 400;
    color: white;
`;

export const Card = ({ item }) => {
    const { StudyTitle, Location } = item.data.values;

    return (
        <div>
            <Wrapper>
                <View>
                    <FaCameraRetro/>
                </View>
            </Wrapper>
            <Info>
                <Title>
                    { StudyTitle }
                </Title>
                <LocationDiv>
                    { Location }
                </LocationDiv>
            </Info>
        </div>
    );
};

Card.propTypes = propTypes;
Card.defaultTypes = defaultTypes;

export default Card;