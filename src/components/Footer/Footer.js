import React from "react";
import styled from "styled-components";
import oc from "open-color";

const propTypes = {
};

const defaultTypes = {
};

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    
    background: ${oc.gray[2]};
    
    height: 50vh;
`;

const Item = styled.div`
    width: 300px;
    font-family: 'Hanna', fantasy;
    font-size: 1.2em;
    line-height: 1.2;
    min-width: 200px;
    color: ${oc.gray[6]};
`;

export const Footer = () => {
    return (
        <Wrapper>
            <Item>
                <div>
                    개발자 ...
                </div>
                <div>
                    Github: https://github.com/Paritta
                </div>
                <div>
                    Blog: https://paritta.github.io/
                </div>
                <div>
                    Email: tjdgns8047@gmail.com
                </div>
                <div>
                    P.h: 010-4665-8841
                </div>
            </Item>
            <Item>
                <div>
                    추가될 기능
                </div>
                <div>
                    좋아요 기능
                </div>
                <div>
                    인기 순위 Top 3
                </div>
                <div>
                    퍼포먼스 개선
                </div>
            </Item>
        </Wrapper>
    )
};

Footer.propTypes = propTypes;
Footer.defaultTypes = defaultTypes;

export default Footer;
