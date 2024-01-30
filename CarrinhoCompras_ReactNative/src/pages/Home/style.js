import styled from 'styled-components/native';

export const Background = styled.SafeAreaView`
flex:1;
background-color: rgba(0, 138, 29,0.5);
`;
export const AreaHeader = styled.View`
width: 100%;
background-color: rgba(0, 138, 29,0.8);
height: 60px;
flex-direction: row;
align-items: center;
justify-content: space-between;
padding: 10px;
border-bottom-width: 0.3px;
border-color: #FFF;
`;
export const Title = styled.Text`
font-size: 25px;
font-weight: bold;
color: #FFF;
`;
export const ButtonCarrinho = styled.TouchableOpacity`

`;
export const ButtonText = styled.Text`
font-size: 13px;
color: #FFF;
font-weight: bold;
background-color: red;
width: 20px;
height: 20px;
border-radius: 10px;
text-align: center;
position: absolute;
z-index: 99;
left: -6px;
bottom: -2px;
`;
export const Lista = styled.FlatList``;