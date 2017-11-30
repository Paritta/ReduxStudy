import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import oc from "open-color";
import { getFirebase } from "react-redux-firebase";
import MdAccessTime from "react-icons/lib/md/access-time";
import MdLocationOn from "react-icons/lib/md/location-on";
import FaHeartO from "react-icons/lib/fa/heart-o";
import FaHeart from "react-icons/lib/fa/heart";

const propTypes = {
    Data: PropTypes.object,
    auth: PropTypes.object,
    postDeleteRequest: PropTypes.func,
    heartSendRequest: PropTypes.func,
    heartDeleteRequest: PropTypes.func,
};

const defaultTypes = {
    Data: {},
    auth: {},
    postDeleteRequest() {},
    heartSendRequest() {},
    heartDeleteRequest() {},
};

const Wrapper = styled.div`
    position: absolute;
    top: 60%;
    
    height: 40%;
    width: 100%;
`;

const Header = styled.div`
    font-family: 'Hanna', fantasy;
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
    
    font-family: 'Hanna', fantasy;
    font-weight: 200;
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

const HeartTooltip = styled.div`
    position: absolute;
    
    bottom: 125%;
    left: -30%;
    
    background: hsla(0, 0%, 0%, 0.6);
    color: white;
    
    width: 200px;
    padding: 5px 0;
    
    border-radius: 6px;
    margin-left: -60px;
    opacity: 0;
    transition: opacity 1s;
`;

const HeartWrapper = styled.div`
    position: relative;
    display: inline-block;
    margin-left: 20px;
    cursor: pointer;
    
    &:hover ${HeartTooltip} {
        opacity: 1;
    }
`;

export class ModalBoxLeftPage extends React.Component {
    state = {
        HeartActive: false
    };

    componentDidMount () {
        const Email = this.props.auth.email;
        const PostId = this.props.postId;

        getFirebase()
            .database()
            .ref(`posts/${PostId}`)
            .once("value")
            .then(res => {
                const RefData = res.val().HeartUser;
                for(let key in RefData) {
                    if(Email === RefData[key]) {
                        this.setState({ HeartActive: true})
                    } else {
                        this.setState({ HeartActive: false})
                    }
                }
            });
    }

    componentDidUpdate (prevProps, prevState) {
        const payload = {
            Email: this.props.auth.email,
            PostId: this.props.postId
        };

        if(prevState.HeartActive !== this.state.HeartActive) {
            // 이메일 등록.
            this.state.HeartActive ? this.props.heartSendRequest(payload) : this.props.heartDeleteRequest(payload)
        }
    }

    render () {
        const { PageData, auth, postDeleteRequest } = this.props;
        const Data = PageData.data.values;
        const author  = PageData.data.author;

        // 툴팁 유저 목록 작성
        const HeartUserArr = [];

        const HeartUserData = PageData.data.HeartUser;
        for(let key in HeartUserData) {
            HeartUserArr.push(HeartUserData[key]);
        }

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
                        {
                            this.state.HeartActive ?
                                <HeartWrapper
                                    onClick={() => this.setState({ HeartActive: !this.state.HeartActive})}
                                >
                                    <FaHeart size={35} color="red"/>
                                    <HeartTooltip>
                                        {
                                            HeartUserArr.map((User, key) => {
                                                return <div key={key}>
                                                    {User}
                                                </div>
                                            })
                                        }
                                    </HeartTooltip>
                                </HeartWrapper>
                                :
                                <HeartWrapper
                                    onClick={() => this.setState({ HeartActive: !this.state.HeartActive})}
                                >
                                    <FaHeartO size={35} color="gray"/>
                                </HeartWrapper>
                        }
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
    }
}

ModalBoxLeftPage.propTypes = propTypes;
ModalBoxLeftPage.defaultTypes = defaultTypes;

export default ModalBoxLeftPage;
