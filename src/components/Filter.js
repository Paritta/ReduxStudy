import React from "react";
import styled from "styled-components";
import oc from "open-color";

const Wrapper = styled.div`
    text-align: left;
    margin: 50px 0;
`;

const FilterBox = styled.li`
    list-style: none;
`;

const FilterItem = styled.div`
    width: 150px;
    height: 150px;
    
    border-radius: 100%;
    background: ${oc.gray[3]};
    
    display: flex;
    justify-content: center;
    align-items: center;
`;

const FilterUl = styled.ul`
    margin: 0;
    padding: 0;
    
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`;

const Filter = () => {
    return (
        <div>
            <Wrapper>
                <FilterUl>
                    <FilterBox>
                        <FilterItem></FilterItem>
                    </FilterBox>
                    <FilterBox>
                        <FilterItem></FilterItem>
                    </FilterBox>
                    <FilterBox>
                        <FilterItem></FilterItem>
                    </FilterBox>
                    <FilterBox>
                        <FilterItem></FilterItem>
                    </FilterBox>
                    <FilterBox>
                        <FilterItem></FilterItem>
                    </FilterBox>
                </FilterUl>
            </Wrapper>
        </div>
    )
}

export default Filter;