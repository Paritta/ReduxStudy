import React from "react";
import styled from "styled-components";
import oc from "open-color";

const propTypes = {
};

const defaultTypes = {
};

const Wrapper = styled.div`
    position: absolute;
    top: 60%;
    
    height: 40%;
    width: 100%;
`;

const Header = styled.div`
    font-weight: 700;
    font-size: 2.5em;
`;

const HeaderSide = styled.span`
    font-weight: 500;
    font-size: 0.9em;
    
    border-radius: 5px;
    
    height: 20px;
    width: 20px;
    
    background: ${oc.gray[2]};
    color: black;
    
    padding: 5px 10px 5px 10px;
    margin: 9px 9px 9px 0;
`;

const HeaderSideWrapper = styled.div`
    margin: 30px 0 15px 0;
`;

const SideTime = styled.div`
    font-weight: 500;
    font-size: 0.9em;
    
    border-radius: 5px;
    
    display: inline-block;
    
    background: ${oc.gray[2]};
    color: black;
    
    padding: 5px 10px 5px 10px;
    margin: 9px 9px 9px 0;
`;

const SideLocation = styled.div`
    font-weight: 500;
    font-size: 0.9em;
    
    border-radius: 5px;
    
    display: inline-block;
    
    background: ${oc.gray[2]};
    color: black;
    
    padding: 5px 10px 5px 10px;
    margin: 9px 9px 9px 0;
`;

const Intro = styled.div`
    margin: 50px;
    
    font-weight: 300;
    font-size: 1.5em;
`;

export const ModalBoxLeftPage = ({ PageData }) => {
    console.log(PageData.data.author);
    const Data = PageData.data.values;

    return (
        <Wrapper>
            <HeaderSideWrapper>
                <HeaderSide>
                    {Data.Category}
                </HeaderSide>
                <HeaderSide>
                    {Data.Number}
                </HeaderSide>
            </HeaderSideWrapper>
            <Header>
                {Data.StudyTitle}
            </Header>
            <Intro>
                {Data.Introduction}
            </Intro>
            <SideLocation>
                {Data.Location}
            </SideLocation>
            <SideTime>
                {Data.Time}
            </SideTime>
        </Wrapper>
    )
};

ModalBoxLeftPage.propTypes = propTypes;
ModalBoxLeftPage.defaultTypes = defaultTypes;

export default ModalBoxLeftPage;
