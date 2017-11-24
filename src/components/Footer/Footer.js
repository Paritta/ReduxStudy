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
    min-width: 200px;
`;

export const Footer = () => {
    return (
        <Wrapper>
            <Item>
                <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam cumque deleniti eius, incidunt
                    labore laudantium maiores modi reiciendis sequi totam! Facere, quidem quod. A accusantium
                    asperiores, illum libero voluptas voluptate?
                </div>
            </Item>
            <Item>
                <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam cumque deleniti eius, incidunt
                    labore laudantium maiores modi reiciendis sequi totam! Facere, quidem quod. A accusantium
                    asperiores, illum libero voluptas voluptate?
                </div>
            </Item>
        </Wrapper>
    )
};

Footer.propTypes = propTypes;
Footer.defaultTypes = defaultTypes;

export default Footer;
