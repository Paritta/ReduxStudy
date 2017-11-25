import React from "react";
import styled, {keyframes} from "styled-components";
import oc from "open-color";
import FaceAsset from "../../asset/Face.jpeg";
import { Link } from "react-router-dom";

const propTypes = {
};

const defaultTypes = {
};

const Wrapper = styled.div`
    background: ${oc.gray[1]};
    height: 70vh;
    
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Footer = styled.div`
    background: ${oc.gray[1]};
    height: 30vh;
    
    font-family: 'Hanna', fantasy;
    font-size: 30px;
    font-weight: 500;
    text-align: center;
`;

const Face = styled.div`
    background: url(${FaceAsset}) center center;
    
    height: 400px;
    width: 400px;
    
    border-radius: 100%;
`;

const Body = styled.div`
    background: white;
    height: 10vh;
    
    width: 100px;
    height: 10vh;
`;

const BtnAni = keyframes`
    0% {
        bottom: 50px;
    }
    
    50% {
        bottom: 90px; 
    }
    
    to {
        bottom: 50;
    }
`;

const Button = styled.button`
    display: inline-block;
    
    background: palevioletred;
    color: white;
    
    font-size: 1em;
    padding: 0.25em 8em;
    
    margin-top: 80px;
    
    border: 2px solid palevioletred;
    border-radius: 3px;
    
    transition: all 0.3s ease;
    
    &:hover {
        background: ${oc.pink[4]};
        border: 2px solid ${oc.pink[4]};
    }
        
    animation: ${BtnAni} 4s ease infinite;
    position: absolute;
    bottom: 50px;
    transform: (0, -50%);
`;

const BtnLink = styled(Link)`
    text-decoration: none;
`;

export const About = () => {
    return (
        <div>
            <Wrapper>
                <Face>
                </Face>
            </Wrapper>
            <Footer>
                <div>
                    김회장, 재효찡, 욱이, 불꺼놓고 코딩만하는 박현진 불키고 해라, 가두래곤, 이수비, 정주연스의 친구 임성훈입니다
                </div>
                <Button>
                    <BtnLink Link to="/">
                        뒤로 가기
                    </BtnLink>
                </Button>
            </Footer>
        </div>
    )
};

About.propTypes = propTypes;
About.defaultTypes = defaultTypes;

export default About;
