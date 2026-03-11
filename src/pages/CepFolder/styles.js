import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #F8F9FA; 
  position: relative;
`;

export const GroupInput = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  padding-horizontal: 25px;
`;

export const InputCep = styled.TextInput`
width: 100%;
  height: 50px;
  background-color: #FFF;
  border-radius: 10px;
  padding-horizontal: 15px;
  font-size: 16px;
`;

export const ImageDetail = styled.Image`
  height: 200px;
  margin-bottom: 20px;
`;