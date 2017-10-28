import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import oc from "open-color";

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
    
    transition: all 0.3s ease;
    
    &:hover {
        background: ${oc.pink[4]};
        border: 2px solid ${oc.pink[4]};
    }
`;

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
