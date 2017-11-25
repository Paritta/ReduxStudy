import React from "react";
import styled from "styled-components";
import EmptyImage from "../../asset/EmptyImage.png";
import PropTypes from "prop-types";
import ReactLoading from "react-loading";

const propTypes = {
    image: PropTypes.object,
    imageReceiveRequest: PropTypes.func,
    ImageReceive: PropTypes.object,
};

const defaultTypes = {
    image: {},
    imageReceiveRequest() {},
    ImageReceive: {},
};

const Wrapper = styled.div`
    margin: 0;
    padding: 0;
    
    width: 450px;
    border-radius: 10px 10px 0 0;
    overflow: hidden;
`;

const View = styled.div`
    margin: 0;
    padding: 0;

    width: 450px;
    height: 250px;
    
    background: url(${props => props.ImageUrl ? props.ImageUrl : EmptyImage}) center center;
    background-size: ${props => props.ImageUrl ? 100 : 40}px;
    
    display: flex;
    align-items: center;
    justify-content: center;
    
    color: white;
    
    transform: scale(10);
    
    z-index: 5;
`;

const Info =styled.div`
    margin: 0;
    padding: 0;
    
    overflow: hidden;
    width: 450px;
    height: 100px;
    
    background: hsla(0, 72%, 0%, 0.4);
    
    z-index: 10;
    
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const Title = styled.div`
    font-family: 'Hanna', fantasy;
    font-size: 40px;
    font-weight: 500;
    color: white;
`;

const WrappedReactLoading = styled.div`
    transform: scale(2);
    position: absolute;
    
    top: 15%;
    left: 40%;
    
    padding: 80px 0;
`;

const LocationDiv = styled.div`   
    font-family: 'Hanna', fantasy;
    font-size: 22px;
    font-weight: 400;
    color: white;
`;

export class Card extends React.Component {
    componentDidMount () {
        this.props.imageReceiveRequest(this.props.postId)
    }

    render () {
        const { item, ImageReceive } = this.props;
        const { StudyTitle, Location } = item.data.values;
        const Pending = ImageReceive.pending;
        const ImageData = ImageReceive.data;
        let ImageUrl = false;
        if(this.props.key !== undefined && ImageReceive.data.length !== 0 && ImageReceive.data !== undefined) {
            ImageUrl = ImageReceive.data[this.props.key].Url;
        }
        const PostImageKey = item.data.PostImageKey;

        return (
            <div>
                {/* 이미지 로딩 */}
                {
                    Pending && ImageData.length === 0 &&
                    <WrappedReactLoading>
                        <ReactLoading type="cylon" color="palevioletred"/>
                    </WrappedReactLoading>
                }

                {/* 이미지가 없을 때는 EmptyImage  */}
                {
                    PostImageKey === undefined &&
                    <Wrapper>
                        <View
                            ImageUrl={false}
                        >
                            .
                        </View>
                    </Wrapper>
                }

                {/* 이미지가 있을 때는 ImageUrl, 이미지 등록 버튼 삭제 */}
                {
                    PostImageKey !== undefined &&
                    <Wrapper>
                        <View
                            ImageUrl={ImageUrl}
                        >
                        </View>
                    </Wrapper>
                }
                {/*<Wrapper>*/}
                    {/*<View>*/}
                        {/*<FaCameraRetro/>*/}
                    {/*</View>*/}
                {/*</Wrapper>*/}

                <Info>
                    <Title>
                        { StudyTitle }
                    </Title>
                    <LocationDiv>
                        { Location }
                    </LocationDiv>
                </Info>
            </div>
        );
    }
}

Card.propTypes = propTypes;
Card.defaultTypes = defaultTypes;

export default Card;