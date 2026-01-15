import React, { useState } from 'react';
import styled from 'styled-components';

const Shirt = () => {
  const [showIframe, setShowIframe] = useState(true);

  const openOfficialSite = () => {
    window.open('https://shirt-creater.vercel.app/', '_blank');
  };

  const openGithub = () => {
    window.open('https://github.com/nesks/shirtCreater', '_blank');
  };

  return (
    <Container>
      {/* Header */}
      <Header>
        <HeaderTitle>Personalize sua Camisa</HeaderTitle>
        <HeaderSubtitle>Projeto pessoal - Customização 3D de camisetas com IA</HeaderSubtitle>
      </Header>

      <ContentWrapper>
        {/* Sidebar com informações */}
        <Sidebar>
          <Section>
            <SectionTitle>Sobre o Projeto</SectionTitle>
            <SectionContent>
              Aplicação para personalização de camisetas em 3D com geração de estampas por IA.
              <BadgeContainer>
                <Badge color="#10B981">100% Autoral</Badge>
                <Badge color="#6366F1">Sem IA de Dev</Badge>
              </BadgeContainer>
              <InfoText>
                Projeto criado inteiramente sem utilização de IA de desenvolvimento,
                para aprimorar conhecimentos em Three.js e primeiro contato com APIs de LLM.
              </InfoText>
            </SectionContent>
          </Section>

          <Section>
            <SectionTitle>Funcionalidades</SectionTitle>
            <SectionContent>
              <InfoList>
                <InfoItem><Bullet>►</Bullet> Visualização 3D da camiseta</InfoItem>
                <InfoItem><Bullet>►</Bullet> Rotação e zoom interativo</InfoItem>
                <InfoItem><Bullet>►</Bullet> Geração de estampas com DALL-E 3</InfoItem>
                <InfoItem><Bullet>►</Bullet> Virtual try-on (simular em pessoa)</InfoItem>
                <InfoItem><Bullet>►</Bullet> Comunicação em tempo real</InfoItem>
              </InfoList>
            </SectionContent>
          </Section>

          <Section>
            <SectionTitle>Stack - Frontend</SectionTitle>
            <SectionContent>
              <TechContainer>
                <TechBadge bg="#61DAFB">React</TechBadge>
                <TechBadge bg="#000000">Three.js</TechBadge>
                <TechBadge bg="#F7DF1E" dark>JavaScript</TechBadge>
              </TechContainer>
              <TechDescription>
                Interface interativa com renderização 3D em tempo real usando Three.js
              </TechDescription>
            </SectionContent>
          </Section>

          <Section>
            <SectionTitle>Stack - Backend</SectionTitle>
            <SectionContent>
              <TechContainer>
                <TechBadge bg="#339933">Node.js</TechBadge>
                <TechBadge bg="#000000">Express 4.21</TechBadge>
                <TechBadge bg="#010101">WebSocket</TechBadge>
              </TechContainer>
              <TechDescription>
                ES Modules • Comunicação em tempo real via WebSocket
              </TechDescription>
            </SectionContent>
          </Section>

          <Section>
            <SectionTitle>APIs Externas</SectionTitle>
            <SectionContent>
              <ApiItem>
                <ApiName>OpenAI (DALL-E 3)</ApiName>
                <ApiDesc>Geração de imagens por IA para estampas</ApiDesc>
              </ApiItem>
              <ApiItem>
                <ApiName>Fashn AI</ApiName>
                <ApiDesc>Virtual try-on - simular roupas em pessoas</ApiDesc>
              </ApiItem>
            </SectionContent>
          </Section>

          <Section>
            <SectionTitle>Objetivo</SectionTitle>
            <SectionContent>
              <Highlight>
                Aprendizado em Three.js e integração com APIs de IA generativa
              </Highlight>
            </SectionContent>
          </Section>
        </Sidebar>

        {/* Área principal com iframe */}
        <MainContent>
          <IframeHeader>
            <IframeTitle>Demo - shirt-creater.vercel.app</IframeTitle>
            <ButtonGroup>
              <ActionButton onClick={() => setShowIframe(!showIframe)}>
                {showIframe ? '[ - ] Minimizar' : '[ + ] Expandir'}
              </ActionButton>
              <ActionButton onClick={openGithub}>
                GitHub ↗
              </ActionButton>
              <ActionButton primary onClick={openOfficialSite}>
                Abrir em Nova Aba ↗
              </ActionButton>
            </ButtonGroup>
          </IframeHeader>

          {showIframe && (
            <IframeContainer>
              <StyledIframe
                src="https://shirt-creater.vercel.app/"
                title="Personalize sua Camisa - Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope"
              />
            </IframeContainer>
          )}

          {!showIframe && (
            <MinimizedBox onClick={() => setShowIframe(true)}>
              <MinimizedText>Clique para expandir a demo</MinimizedText>
            </MinimizedBox>
          )}
        </MainContent>
      </ContentWrapper>

      {/* Footer */}
      <Footer>
        <FooterText>Felipe Sousa Nunes • Projeto Pessoal • React + Three.js + Node.js + OpenAI</FooterText>
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
  background: linear-gradient(180deg, #7c3aed 0%, #a855f7 100%);
  padding: 12px 15px;
  border-bottom: 2px solid #5b21b6;
`;

const HeaderTitle = styled.h1`
  color: #ffffff;
  font-size: 18px;
  font-weight: bold;
  margin: 0;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
`;

const HeaderSubtitle = styled.div`
  color: #e9d5ff;
  font-size: 11px;
  margin-top: 3px;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex: 1;
  overflow: hidden;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

const Sidebar = styled.div`
  width: 280px;
  min-width: 280px;
  background: #ece9d8;
  border-right: 2px solid #aca899;
  overflow-y: auto;
  padding: 10px;

  @media (max-width: 480px) {
    width: 100%;
    min-width: unset;
    border-right: none;
    border-bottom: 2px solid #aca899;
  }
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
  background: linear-gradient(180deg, #5b21b6 0%, #7c3aed 100%);
  color: #ffffff;
  font-weight: bold;
  font-size: 11px;
  padding: 4px 8px;
`;

const SectionContent = styled.div`
  padding: 8px;
  color: #333333;
  font-size: 11px;
  line-height: 1.5;
`;

const BadgeContainer = styled.div`
  display: flex;
  gap: 5px;
  margin: 8px 0;
`;

const Badge = styled.span`
  background: ${props => props.color};
  color: #ffffff;
  padding: 2px 6px;
  font-size: 9px;
  font-weight: bold;
  border-radius: 2px;
`;

const InfoText = styled.div`
  color: #666666;
  font-size: 10px;
  line-height: 1.4;
  margin-top: 5px;
  padding: 6px;
  background: #f9f9f9;
  border-left: 2px solid #7c3aed;
`;

const InfoList = styled.div`
  margin-top: 4px;
`;

const InfoItem = styled.div`
  margin: 4px 0;
  display: flex;
  align-items: flex-start;
`;

const Bullet = styled.span`
  color: #7c3aed;
  margin-right: 6px;
  font-size: 10px;
`;

const TechContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  margin-bottom: 8px;
`;

const TechBadge = styled.span`
  background: ${props => props.bg};
  color: ${props => props.dark ? '#000000' : '#ffffff'};
  padding: 3px 8px;
  font-size: 10px;
  font-weight: bold;
  border: 1px outset #ffffff;
`;

const TechDescription = styled.div`
  color: #666666;
  font-size: 10px;
  font-style: italic;
`;

const ApiItem = styled.div`
  padding: 6px;
  background: #f5f5f5;
  border: 1px inset #e0e0e0;
  margin-bottom: 6px;
`;

const ApiName = styled.div`
  color: #5b21b6;
  font-weight: bold;
  font-size: 11px;
`;

const ApiDesc = styled.div`
  color: #666666;
  font-size: 10px;
  margin-top: 2px;
`;

const Highlight = styled.div`
  padding: 8px;
  background: linear-gradient(180deg, #f3e8ff 0%, #e9d5ff 100%);
  border: 1px solid #c4b5fd;
  text-align: center;
  font-weight: bold;
  color: #5b21b6;
  font-size: 11px;
`;

const MainContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  background: #808080;
  padding: 10px;

  @media (max-width: 480px) {
    padding: 15px;
  }
`;

const IframeHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(180deg, #5b21b6 0%, #7c3aed 100%);
  padding: 6px 10px;
  border: 2px outset #c0c0c0;
  margin-bottom: 2px;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 10px;
    text-align: center;
    padding: 12px 10px;
  }
`;

const IframeTitle = styled.span`
  color: #ffffff;
  font-weight: bold;
  font-size: 11px;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 8px;

  @media (max-width: 480px) {
    width: 100%;
    justify-content: center;
  }
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

  @media (max-width: 480px) {
    padding: 10px 16px;
    font-size: 12px;
  }
`;

const IframeContainer = styled.div`
  flex: 1;
  border: 2px inset #808080;
  background: #ffffff;
  min-height: 300px;

  @media (max-width: 480px) {
    display: none;
  }
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

  @media (max-width: 480px) {
    display: none;
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

export default Shirt;
