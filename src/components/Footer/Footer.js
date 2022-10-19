import React from "react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

import { Button } from "../../globalStyles";
import {
  FooterContainer,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinksItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
  LogoImg,
  FooterText,
} from "./Footer.elements";
import Logo from "../../assets/untvlogo.jpg";
const Footer = () => {
  return (
    <FooterContainer>
      <FooterLinksContainer>
        <FooterLinksWrapper>
          <FooterLinksItems>
            <FooterLinkTitle>Entre em contato</FooterLinkTitle>
            <FooterText>
              <MdOutlineEmail /> tv.verdade.oca@gmail.com
            </FooterText>
            <FooterText>(11) 94454-0370</FooterText>
          </FooterLinksItems>
          <FooterLinksItems>
            <FooterLinkTitle>Vídeos</FooterLinkTitle>
            <FooterLink href="https://www.youtube.com/watch?v=NwAMf3Wwqsg">
              O que pedia para Deus era igreja
            </FooterLink>
            <FooterLink href="https://www.youtube.com/watch?v=IOlhg7hn3vw">
              Eu era um ateu
            </FooterLink>
            <FooterLink href="https://www.youtube.com/watch?v=VXZPPscqbrw">
              "Esse é o pregador que o Brasil realmente precisa ter"
            </FooterLink>
          </FooterLinksItems>
          <FooterLinksItems>
            <FooterLinkTitle>Páginas relacionadas</FooterLinkTitle>
            <FooterLink href="http://www.ocaminhoantigo.tv/">
              O Caminho Antigo
            </FooterLink>
            <FooterLink href="https://www.elisoriano.com">
              Irmão Eli Soriano
            </FooterLink>
            <FooterLink href="https://www.danielrazon.com">
              Irmão Daniel Razon
            </FooterLink>
            <FooterLink href="https://www.mcgi.org/official-websites-and-social-media-accounts/">
              Sites e Canais Oficiais
            </FooterLink>
          </FooterLinksItems>
        </FooterLinksWrapper>
      </FooterLinksContainer>
      <SocialMedia>
        <SocialMediaWrap>
          <SocialLogo to="/">
            <LogoImg src={Logo} />
          </SocialLogo>
          <WebsiteRights>BMPI TV © 2022</WebsiteRights>
          <SocialIcons>
            <SocialIconLink
              href="https://www.facebook.com/tv.verdade.oca"
              target="_blank"
              aria-label="Facebook"
            >
              <FaFacebook />
            </SocialIconLink>
            <SocialIconLink
              href="https://www.instagram.com/tv.verdade.oca/"
              target="_blank"
              aria-label="Instagram"
            >
              <FaInstagram />
            </SocialIconLink>
            <SocialIconLink
              href="https://www.youtube.com/c/TVVERDADE"
              target="_blank"
              aria-label="Youtube"
            >
              <FaYoutube />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  );
};

export default Footer;
