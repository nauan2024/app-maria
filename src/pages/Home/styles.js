import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #F8F9FA; /* Fundo cinza bem clarinho */
  position: relative;
`;

export const ContentScroll = styled.ScrollView.attrs({
  /* Espaço sobrando no final para a barra inferior não esconder o conteúdo */
  contentContainerStyle: { paddingBottom: 120 }, 
  showsVerticalScrollIndicator: false,
})``;

/* CABEÇALHO VERDE COM BORDA ARREDONDADA */
export const Header = styled.View`
  background-color: #359D73;
  padding-top: 60px;
  padding-horizontal: 25px;
  padding-bottom: 70px; /* Espaço extra para os cartões subirem */
  border-bottom-left-radius: 40px;
  border-bottom-right-radius: 40px;
`;

export const HeaderTop = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
`;

export const TagSuaRegiao = styled.View`
  background-color: rgba(0, 0, 0, 0.2);
  padding: 6px 14px;
  border-radius: 20px;
`;

export const TagSuaRegiaoText = styled.Text`
  color: #FFF;
  font-size: 12px;
  font-weight: 600;
`;

export const ProfileArea = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ProfileName = styled.Text`
  color: #FFF;
  margin-right: 10px;
  font-size: 14px;
  font-weight: 500;
`;

export const ProfileAvatar = styled.View`
  width: 36px;
  height: 36px;
  border-radius: 18px;
  background-color: rgba(255, 255, 255, 0.3);
  align-items: center;
  justify-content: center;
`;

export const AddressTitle = styled.Text`
  color: #FFF;
  font-size: 24px;
  font-weight: bold;
`;

export const AddressSubtitle = styled.Text`
  color: #E0F2E9;
  font-size: 14px;
  margin-top: 4px;
`;

/* ÁREA DOS CARTÕES */
export const CardsContainer = styled.View`
  padding-horizontal: 20px;
  margin-top: -40px; /* Isso faz os cartões subirem em cima do verde! */
`;

export const Card = styled.View`
  background-color: #FFF;
  border-radius: 20px;
  padding: 20px;
  margin-bottom: 20px;
  elevation: 4; /* Sombra no Android */
  shadow-color: #000; /* Sombra no iOS */
  shadow-offset: 0px 4px;
  shadow-opacity: 0.05;
  shadow-radius: 10px;
`;

export const CardBorderLeft = styled(Card)`
  border-left-width: 6px;
  border-left-color: #A3E4B7; /* Bordinha verde clara na esquerda */
`;

export const CardHeader = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 15px;
`;

export const DotGreen = styled.View`
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background-color: #8BC34A;
  margin-right: 8px;
`;

export const CardSubtitle = styled.Text`
  color: #888;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  flex: 1;
`;

export const IconBoxPurple = styled.View`
  background-color: #F3E8FF;
  padding: 10px;
  border-radius: 14px;
`;

export const CardTitle = styled.Text`
  font-size: 26px;
  font-weight: bold;
  color: #111;
  margin-bottom: 4px;
`;

export const CardTime = styled.Text`
  font-size: 14px;
  color: #777;
  margin-bottom: 20px;
`;

export const TagsRow = styled.View`
  flex-direction: row;
`;

export const TagCataBagulho = styled.View`
  background-color: #F3E8FF;
  padding: 6px 12px;
  border-radius: 12px;
`;

export const TagCataBagulhoText = styled.Text`
  color: #7B2CBF;
  font-size: 12px;
  font-weight: 600;
`;

/* CARTÕES MENORES (Lembretes e Mapa) */
export const RowCards = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const SmallCard = styled.TouchableOpacity`
  background-color: #FFF;
  width: 47%;
  border-radius: 20px;
  padding-vertical: 25px;
  align-items: center;
  justify-content: center;
  border-bottom-width: 4px;
  border-bottom-color: #A3E4B7;
  elevation: 4;
  shadow-color: #000;
  shadow-offset: 0px 4px;
  shadow-opacity: 0.05;
  shadow-radius: 10px;
`;

export const SmallCardText = styled.Text`
  margin-top: 12px;
  font-size: 14px;
  font-weight: 700;
  color: #222;
`;

/* MENU INFERIOR FIXO */
export const BottomNavContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: #FFF;
  padding-vertical: 10px;
  padding-bottom: 20px; /* Evita cortar em telas sem borda */
  border-top-width: 1px;
  border-top-color: #F0F0F0;
  position: absolute;
  bottom: 0;
  width: 100%;
`;

export const NavItem = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
`;

export const NavText = styled.Text`
  font-size: 12px;
  color: #555;
  margin-top: 4px;
  font-weight: 500;
`;

/* MASCOTE VOANDO */
export const MarIAOwl = styled.Image`
  position: absolute;
  bottom:85px;
  right: 20px;
`;