import React, { useState } from 'react';
import styled from 'styled-components';

const Camp = () => {
  const [showIframe, setShowIframe] = useState(true);

  const openOfficialSite = () => {
    window.open('https://camptecnologia.com.br/', '_blank');
  };

  return (
    <Container>
      {/* Header */}
      <Header>
        <HeaderTitle>Camp Tecnologia</HeaderTitle>
        <HeaderSubtitle>Minha experiência como Desenvolvedor Full-Stack</HeaderSubtitle>
      </Header>

      <ContentWrapper>
        {/* Sidebar com informações */}
        <Sidebar>
          <Section>
            <SectionTitle>Sobre a Empresa</SectionTitle>
            <SectionContent>
              Empresa brasileira especializada em tecnologia para o setor automotivo.
              <InfoList>
                <InfoItem><Bullet>►</Bullet> Fundada em 2019</InfoItem>
                <InfoItem><Bullet>►</Bullet> +400 concessionárias</InfoItem>
                <InfoItem><Bullet>►</Bullet> Pós-venda automotivo</InfoItem>
              </InfoList>
            </SectionContent>
          </Section>

          <Section>
            <SectionTitle>Projeto Acampa</SectionTitle>
            <SectionContent>
              Plataforma digital que moderniza o pós-venda de concessionárias.
              <ClientsBox>
                Fiat • VW • Ford • Renault • Honda • Hyundai
              </ClientsBox>
            </SectionContent>
          </Section>

          <Section>
            <SectionTitle>Minha Contribuição</SectionTitle>
            <SectionSubtitle>Full-Stack desde Out/2021</SectionSubtitle>
            <SectionContent>
              <InfoList>
                <InfoItem><Bullet>►</Bullet> <strong>App Mobile</strong> - Ionic 3 + Angular</InfoItem>
                <InfoItem><Bullet>►</Bullet> <strong>Deploy</strong> - iOS (App Store) e Android (Play Store)</InfoItem>
                <InfoItem><Bullet>►</Bullet> <strong>Backend</strong> - Laravel (APIs e integrações)</InfoItem>
                <InfoItem><Bullet>►</Bullet> <strong>Frontend</strong> - Vue.js (Painel Admin)</InfoItem>
              </InfoList>
              <Highlight>4.000 usuários ativos diários</Highlight>
            </SectionContent>
          </Section>

          <Section>
            <SectionTitle>Tecnologias</SectionTitle>
            <TechContainer>
              <TechBadge bg="#FF2D20">Laravel</TechBadge>
              <TechBadge bg="#4FC08D">Vue.js</TechBadge>
              <TechBadge bg="#3880FF">Ionic</TechBadge>
              <TechBadge bg="#DD0031">Angular</TechBadge>
            </TechContainer>
          </Section>
        </Sidebar>

        {/* Área principal com iframe */}
        <MainContent>
          <IframeHeader>
            <IframeTitle>Site Oficial - camptecnologia.com.br</IframeTitle>
            <ButtonGroup>
              <ActionButton onClick={() => setShowIframe(!showIframe)}>
                {showIframe ? '[ - ] Minimizar' : '[ + ] Expandir'}
              </ActionButton>
              <ActionButton primary onClick={openOfficialSite}>
                Abrir em Nova Aba ↗
              </ActionButton>
            </ButtonGroup>
          </IframeHeader>

          {showIframe && (
            <IframeContainer>
              <StyledIframe
                src="https://camptecnologia.com.br/"
                title="Camp Tecnologia - Site Oficial"
                sandbox="allow-scripts allow-same-origin allow-popups"
              />
            </IframeContainer>
          )}

          {!showIframe && (
            <MinimizedBox onClick={() => setShowIframe(true)}>
              <MinimizedText>Clique para expandir o site</MinimizedText>
            </MinimizedBox>
          )}
        </MainContent>
      </ContentWrapper>

      {/* Footer */}
      <Footer>
        <FooterText>Felipe Sousa Nunes • Desenvolvedor Full-Stack • 2021 - Presente</FooterText>
      </Footer>
    </Container>
  );
};

// Styled Components
const Container = styled.div`
  width: 100%;
  height: 100%;
  background: #c0c0c0;
  display: flex;
  flex-direction: column;
  font-family: 'Tahoma', 'Segoe UI', Arial, sans-serif;
  font-size: 12px;
`;

const Header = styled.div`
  background: linear-gradient(180deg, #000080 0%, #1084d0 100%);
  padding: 12px 15px;
  border-bottom: 2px solid #000066;
`;

const HeaderTitle = styled.h1`
  color: #ffffff;
  font-size: 18px;
  font-weight: bold;
  margin: 0;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
`;

const HeaderSubtitle = styled.div`
  color: #e0e0e0;
  font-size: 11px;
  margin-top: 3px;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex: 1;
  overflow: hidden;
`;

const Sidebar = styled.div`
  width: 280px;
  min-width: 280px;
  background: #ece9d8;
  border-right: 2px solid #aca899;
  overflow-y: auto;
  padding: 10px;
`;

const Section = styled.div`
  background: #ffffff;
  border: 1px solid #808080;
  border-right-color: #ffffff;
  border-bottom-color: #ffffff;
  margin-bottom: 10px;
  box-shadow: 1px 1px 0 #808080;
`;

const SectionTitle = styled.div`
  background: linear-gradient(180deg, #0a246a 0%, #0a246a 100%);
  color: #ffffff;
  font-weight: bold;
  font-size: 11px;
  padding: 4px 8px;
`;

const SectionSubtitle = styled.div`
  background: #f0f0f0;
  color: #666666;
  font-size: 10px;
  padding: 2px 8px;
  border-bottom: 1px solid #e0e0e0;
`;

const SectionContent = styled.div`
  padding: 8px;
  color: #333333;
  font-size: 11px;
  line-height: 1.5;
`;

const InfoList = styled.div`
  margin-top: 8px;
`;

const InfoItem = styled.div`
  margin: 4px 0;
  display: flex;
  align-items: flex-start;
`;

const Bullet = styled.span`
  color: #0a246a;
  margin-right: 6px;
  font-size: 10px;
`;

const ClientsBox = styled.div`
  margin-top: 8px;
  padding: 6px;
  background: #f5f5f5;
  border: 1px inset #808080;
  text-align: center;
  font-size: 10px;
  color: #0a246a;
  letter-spacing: 0.5px;
`;

const Highlight = styled.div`
  margin-top: 10px;
  padding: 6px;
  background: #ffffd0;
  border: 1px solid #c0c000;
  text-align: center;
  font-weight: bold;
  color: #806000;
  font-size: 11px;
`;

const TechContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  padding: 8px;
`;

const TechBadge = styled.span`
  background: ${props => props.bg};
  color: #ffffff;
  padding: 3px 8px;
  font-size: 10px;
  font-weight: bold;
  border: 1px outset #ffffff;
`;

const MainContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  background: #808080;
  padding: 10px;
`;

const IframeHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(180deg, #0a246a 0%, #0a246a 100%);
  padding: 6px 10px;
  border: 2px outset #c0c0c0;
  margin-bottom: 2px;
`;

const IframeTitle = styled.span`
  color: #ffffff;
  font-weight: bold;
  font-size: 11px;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 8px;
`;

const ActionButton = styled.button`
  background: ${props => props.primary ?
    'linear-gradient(180deg, #f0f0f0 0%, #c0c0c0 100%)' :
    'linear-gradient(180deg, #f0f0f0 0%, #d4d0c8 100%)'};
  border: 2px outset #ffffff;
  padding: 3px 10px;
  font-family: 'Tahoma', Arial, sans-serif;
  font-size: 11px;
  cursor: pointer;
  color: #000000;
  font-weight: ${props => props.primary ? 'bold' : 'normal'};

  &:hover {
    background: linear-gradient(180deg, #ffffff 0%, #e0e0e0 100%);
  }

  &:active {
    border-style: inset;
  }
`;

const IframeContainer = styled.div`
  flex: 1;
  border: 2px inset #808080;
  background: #ffffff;
  min-height: 300px;
`;

const StyledIframe = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
`;

const MinimizedBox = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f0f0f0;
  border: 2px inset #808080;
  cursor: pointer;

  &:hover {
    background: #e8e8e8;
  }
`;

const MinimizedText = styled.span`
  color: #808080;
  font-size: 12px;
`;

const Footer = styled.div`
  background: #ece9d8;
  border-top: 2px solid #ffffff;
  padding: 6px 10px;
  text-align: center;
`;

const FooterText = styled.span`
  color: #666666;
  font-size: 10px;
`;

export default Camp;
