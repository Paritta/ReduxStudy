import React from "react";
import styled from "styled-components";
import Card from "./Card";
import PropTypes from "prop-types";
import ReactLoading from "react-loading";
import MdKeyboardArrowRight from "react-icons/lib/md/keyboard-arrow-right";
import MdKeyboardArrowLeft from "react-icons/lib/md/keyboard-arrow-left";

const propTypes = {
    Fetch: PropTypes.object,
    Filter: PropTypes.object,
    showModal: PropTypes.func,
    hideModal: PropTypes.func,
    fetchRequest: PropTypes.func,
    imageReceiveRequest: PropTypes.func,
    ImageReceive: PropTypes.object,
};

const defaultTypes = {
    Fetch: {},
    Filter: {},
    showModal() {},
    hideModal() {},
    fetchRequest() {},
    imageReceiveRequest() {},
    ImageReceive: {},
};

const Wrapper = styled.div`
    position: relative;
    
    width: 100%;
    height: 100vh;
    
    padding: 0 40px;
    text-align: left;
`;

const WrappedReactLoading = styled.div`
    transform: scale(2);
    position: absolute;
    
    top: 50%;
    left: 50%;
    
    padding: 80px 0;
`;

const Item = styled.div`
    display: inline-block;
    width: 33.3%;
    margin-bottom: 20px;
    margin-top: 60px;
`;

const RightBtn = styled.div`
    position: absolute;
    
    top: 50%;
    left: 3%;
    
    transform: translate(-50%, -50%);
    
    display: flex;
    align-items: center;
    justify-content: center;
    
    cursor: pointer;
`;

const LeftBtn = styled.div`
    position: absolute;
    
    top: 50%;
    right: 0%;
    
    transform: translate(-50%, -50%);
    
    display: flex;
    align-items: center;
    justify-content: center;
    
    cursor: pointer;
`;

export class Layout extends React.Component {
    state = {
        PageNum: 1
    };

    componentDidMount () {
        this.props.fetchRequest(this.state.PageNum);
    }

    componentDidUpdate (prevProps, prevState) {
        if(prevState.PageNum !== this.state.PageNum) {
            this.props.fetchRequest(this.state.PageNum);
        }
    }

    render () {
        const { Fetch, showModal, imageReceiveRequest, ImageReceive } = this.props;
        const Pending = Fetch.pending;
        console.log(Fetch);

        return (
            <div>
                <Wrapper>
                    {
                        this.state.PageNum === 1 ?
                            ""
                            :
                            <RightBtn
                                onClick={() =>
                                    this.setState({PageNum: this.state.PageNum-1})
                                }
                            >
                                <MdKeyboardArrowLeft size={130} color="gray"/>
                            </RightBtn>
                    }
                    <LeftBtn
                        onClick={() =>
                            this.setState({PageNum: this.state.PageNum+1})
                        }
                    >
                        <MdKeyboardArrowRight size={130} color="gray"/>
                    </LeftBtn>
                    {
                        Pending?
                        <WrappedReactLoading>
                            <ReactLoading type="cylon" color="palevioletred"/>
                        </WrappedReactLoading>
                        :
                        Fetch.data.map((item, key) =>
                            <Item
                                onClick={() =>
                                    { showModal({
                                        modalType: "MODAL_STUDY",
                                        modalProps: item
                                    })}}
                                key={key}
                            >
                                <Card
                                    item={item}
                                    postId={item.postId}
                                    imageReceiveRequest={imageReceiveRequest}
                                    ImageReceive={ImageReceive}
                                />
                            </Item>
                        )
                    }
                </Wrapper>
            </div>
        );
    }
}

Layout.propTypes = propTypes;
Layout.defaultTypes = defaultTypes;

export default Layout;
