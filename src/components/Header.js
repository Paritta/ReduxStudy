import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import oc from "open-color";
import { firebaseConnect, pathToJS } from "react-redux-firebase";
import { connect } from "react-redux";

const propTypes = {
    onShowModal: PropTypes.func,
    firebase: PropTypes.shape({
        login: PropTypes.func.isRequired
    })
};

const defaultTypes = {
    onShowModal() {},
};

const Wrapper = styled.div`
    text-align: right;
    padding-right: 70px;
`;

const Button = styled.button`
    background: palevioletred;
    color: white;
    
    font-size: 1em;
    margin: 1em 0em 1em 8em;
    padding: 0.25em 1em;
    
    border: 2px solid palevioletred;
    border-radius: 3px;
    
    transition: all 0.3s ease;
    
    &:hover {
        background: ${oc.pink[4]};
        border: 2px solid ${oc.pink[4]};
    }
`;

const MenuItem = styled.button`
    background: white;
    font-weight: 500;
    font-size: 0.9em;
    border: 2px solid white;
    
    margin-left: 20px;
    
    &:hover {
        color: ${oc.gray[5]};
    }
`;

export class Header extends React.Component {
    handleLogOut () {
        this.props.firebase.logout();
    }

    render () {
        const { onShowModal, profile } = this.props;
    

        return (
            <div>
                <Wrapper>
                    {profile&&
                        <MenuItem
                            onClick={() => this.handleLogOut()}>
                            로그 아웃
                        </MenuItem>
                    }
                    {!profile&&
                        <span>
                            <MenuItem
                                onClick={() => onShowModal({modalType: "MODAL_SIGNUP"})}>
                                회원가입
                            </MenuItem>
                            <MenuItem
                                onClick={() => onShowModal({modalType: "MODAL_SIGNIN"})}>
                                로그인
                            </MenuItem>
                        </span>
                    }
                    <Button
                        onClick={() => onShowModal({modalType: "MODAL_REGISTER"})}>
                        등록하기
                    </Button>
                </Wrapper>
            </div>
        )
    }
};

Header.propTypes = propTypes;
Header.defaultTypes = defaultTypes;


const WrappedHeader = firebaseConnect()(Header);

export default connect(
    ({ firebase}) => ({
        profile: pathToJS(firebase, "profile")
    })
)(WrappedHeader);

