import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import oc from "open-color";
import MdAccessTime from 'react-icons/lib/md/access-time'
import MdLocationOn from 'react-icons/lib/md/location-on'

const propTypes = {
    Data: PropTypes.object,
    auth: PropTypes.object,
    postDeleteRequest: PropTypes.func
};

const defaultTypes = {
    Data: {},
    auth: {},
    postDeleteRequest() {}
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

const Span = styled.span`
    padding-left: 5px;
`;

const Button = styled.button`
    position: absolute;
    top: 62%;
    right: 2%;
    
    background: white;
    color: palevioletred;
    
    font-size: 1em;
    padding: 0.6em 0.8em;
    
    border: 2px solid palevioletred;
    border-radius: 3px;
    
    transition: all 0.3s ease;
    
    &:hover {
        background: ${oc.pink[4]};
        border: 2px solid ${oc.pink[4]};
        color: white;
    }
`;

export const ModalBoxLeftPage = ({ PageData, auth, postDeleteRequest }) => {
    const Data = PageData.data.values;
    const author  = PageData.data.author;

    return (
        <div>
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
                    <MdLocationOn size={25} color="Black"/>
                    <Span>
                    {Data.Location}
                </Span>
                </SideLocation>
                <SideTime>
                    <MdAccessTime size={25} color="Black"/>
                    <Span>
                    {Data.Time}
                </Span>
                </SideTime>
            </Wrapper>
            {
                auth !== null && auth.uid === author &&
                <Button
                    onClick={() => postDeleteRequest(PageData.postId)}
                >
                    글 내리기
                </Button>
            }
        </div>
    )
};

ModalBoxLeftPage.propTypes = propTypes;
ModalBoxLeftPage.defaultTypes = defaultTypes;

export default ModalBoxLeftPage;
