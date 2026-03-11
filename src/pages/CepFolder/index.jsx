import { Container } from "./styles";
import { GroupInput } from "./styles";
import { InputCep } from "./styles";
import { Text } from "react-native";
import { ImageDetail } from "./styles";
import { Image } from "react-native";
export default function CepFolder() {
  return (
    <Container>
        <ImageDetail source={require('../../assets/detailCepFolder.svg')} />
      <GroupInput>
        <Text>Onde você mora?</Text>
        <Text>Qual seu CEP?</Text>
     <InputCep placeholder="Digite seu CEP" />
      </GroupInput>
    </Container>
  );
}