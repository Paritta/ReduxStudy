import React from "react";
import styled from "styled-components";
import oc from "open-color";
import NeedAuth from "../../components/Carousel/NeedAuth";
import PropTypes from "prop-types";

const propTypes = {
    auth: PropTypes.object,
};

const defaultTypes = {
    auth: {},
};

const Wrapper = styled.div`
    background: white;
    height: 50vh;
    
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const Span= styled.div`
    color: ${oc.gray[5]};
    font-family: 'Hanna', fantasy;
    font-size: 3.5em;
    margin-top: 20px;
`;

const HeartSpan= styled.span`
    color: ${oc.pink[7]};
    font-family: 'Hanna', fantasy;
    font-size: 0.7em;
    padding-left: 20px;
`;

export const TopPopu = ({ PageData, auth }) => {
    const PgData = PageData;
    const Pending = PgData.pending;
    const PgDataArr = [];
    let PgDataSort;

    if(!Pending) {
        for(let key in PgData.data) {
            PgDataArr.push(PgData.data[key])
        }

        PgDataSort = PgDataArr.sort((x, y) => {
            if(x.HertCount > y.HeartCount) {
                return 1;
            }
            if(x.HertCount < y.HeartCount) {
                return -1;
            }
            return 0;
        });
    }

    return (
        <Wrapper>
            {
                auth === null &&
                <NeedAuth />
            }
            {
                !Pending && auth !== null &&
                PgDataSort.map((item, key) =>
                    key < 3 &&
                        <Span key={key}>
                            {
                                `${key+1}위. `
                            }
                            {
                                item.values.StudyTitle
                            }
                            <HeartSpan>
                                {
                                    ` 좋아요 ${item.HeartCount}개`
                                }
                            </HeartSpan>
                        </Span>
                )
            }
        </Wrapper>
    )
};

TopPopu.propTypes = propTypes;
TopPopu.defaultTypes = defaultTypes;

export default TopPopu;
