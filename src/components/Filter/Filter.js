import React from "react";
import styled from "styled-components";
import oc from "open-color";
import FaApple from "react-icons/lib/fa/apple";
import FaFeed from "react-icons/lib/fa/feed";
import FaFlask from "react-icons/lib/fa/flask";
import FaHeartbeat from "react-icons/lib/fa/heartbeat";
import FaRecycle from "react-icons/lib/fa/recycle";

const Wrapper = styled.div`
    text-align: left;
    background: ${oc.gray[1]};
`;

const FilterBox = styled.li`
    list-style: none;
`;

const FilterItem = styled.div`
    width: 250px;
    height: 250px;
    
    border-radius: 100%;
    background: white;
    color: ${oc.gray[6]};
    
    &:hover {
        transform: translateY(-15px);
    }
    
    transition: transform 1s ease;
    
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    
    cursor: pointer;
`;

const FilterUl = styled.ul`
    margin: 0;
    padding: 0;
    
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    height: 50vh;
`;

const Span = styled.span`
    padding-top: 15px;
    text-size: 1.5em;
`;

export const Filter = ({ filterMaterial, filterNursing, filterInformation, filterComputer, filterChemical }) => {
    return (
        <div>
            <Wrapper>
                <FilterUl>
                    <FilterBox>
                        <FilterItem
                            onClick={() => {
                                filterMaterial("filter_Material")
                            }}>
                            <FaRecycle size={100} color="black"/>
                            <Span>
                                신소재 공학과
                            </Span>
                        </FilterItem>
                    </FilterBox>
                    <FilterBox>
                        <FilterItem
                            onClick={() => {
                            filterNursing("filter_Nursing")
                        }}>
                            <FaHeartbeat size={100} color="black"/>
                            <Span>
                                간호학과
                            </Span>
                        </FilterItem>
                    </FilterBox>
                    <FilterBox>
                        <FilterItem
                            onClick={() => {
                                filterInformation("filter_Information")
                            }}>
                            <FaApple size={100} color="black"/>
                            <Span>
                                정보통신학과
                            </Span>
                        </FilterItem>
                    </FilterBox>
                    <FilterBox>
                        <FilterItem
                            onClick={() => {
                            filterComputer("filter_Computer")
                        }}>
                            <FaFeed size={100} color="black"/>
                            <Span>
                                컴퓨터공학과
                                </Span>
                        </FilterItem>
                    </FilterBox>
                    <FilterBox>
                        <FilterItem
                            onClick={() => {
                            filterChemical("filter_Chemical")
                        }}>
                            <FaFlask size={100} color="black"/>
                            <Span>
                                화학공학과
                            </Span>
                        </FilterItem>
                    </FilterBox>
                </FilterUl>
            </Wrapper>
        </div>
    )
};

export default Filter;