import React from "react";
import styled from "styled-components";
import background from "../asset/background.jpg"

const BannerBackground = styled.div`
    background: url(${background}) left bottom;
    background-size: cover;
    height: 40vh;
`;

const Banner = () => {
    return (
        <div>
            <BannerBackground />

        </div>
    );
};

export default Banner;
