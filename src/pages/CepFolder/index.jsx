import { Container } from "./styles";
import { GroupInput } from "./styles";
import { InputCep } from "./styles";
import { Text } from "react-native";
import { ImageDetail } from "./styles";
import { Image } from "react-native";
import { ButtonPesquisar } from "./styles";
import { ButtonText } from "./styles";
export default function CepFolder() {
  return (
    <Container>
        <ImageDetail source={require('../../assets/detailCepFolder.svg')} />
      <GroupInput>
        <Text>Onde você mora?</Text>
        <Text>Qual seu CEP?</Text>
     <InputCep placeholder="Digite seu CEP" />
    <ButtonPesquisar onPress={() => {}}>
      /*On press necessário para definir a ação do botão*/
      <ButtonText>Pesquisar</ButtonText>
    </ButtonPesquisar>
      </GroupInput>
    </Container>
  );
}
