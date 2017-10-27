import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const propTypes = {
    onShowModal: PropTypes.func,
    onHideModal: PropTypes.func,
};

const defaultTypes = {
    onShowModal() {},
    onHideModal() {},
};

const Button = styled.button`
    background: palevioletred;
    color: white;
    
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    
    border: 2px solid palevioletred;
    border-radius: 3px;
`

const Header = ({ onShowModal, onHideModal }) => {
    return (
        <div>
            <Button
                onClick={() => onShowModal({modalType: 'MODAL_REGISTER'})}>
                등록하기
            </Button>
        </div>
    )
};

Header.propTypes = propTypes;
Header.defaultTypes = defaultTypes;

export default Header;
