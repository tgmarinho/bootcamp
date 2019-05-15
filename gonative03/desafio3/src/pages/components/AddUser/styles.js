import styled from 'styled-components/native';

export const ModalAddUser = styled.Modal``;

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.5);
`;

export const Content = styled.View`
  /* flex: 1; */
  width: 90%;
  height: 25%;
  box-shadow: 2px 2px 2px rgba(255, 255, 255, 0.3);
  /* shadow-color: #000; */
  shadow-offset: {width: 0, height: 2};
  /* shadow-opacity: 0.3; */
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  background: white;
  padding: 20px;
  margin: 10px;
`;

export const Text = styled.Text`
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 15px;
`;
export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#999',
})`
  width: 100%;
  background: #fff;
  border: 0.3px;
  border-color: #999;
  border-radius: 4px;
  padding: 0 20px;
  height: 52px;
  font-size: 16px;
  color: #333;
`;
export const GroupButton = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;
export const ButtonText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;

export const Save = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: #4caf50;
  height: 44px;
  margin-top: 10px;
  border-radius: 4px;
  margin-left: 6px;
`;

export const Cancel = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: #9f9f9f;
  height: 44px;
  margin-top: 10px;
  margin-right: 6px;
  border-radius: 4px;
`;
