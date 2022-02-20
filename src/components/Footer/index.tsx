import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import Container from "../../common/Container";
import {
  FacebookFilled,
  LinkedinFilled,
  GoogleCircleFilled,
  MailOutlined,
  InstagramOutlined
} from '@ant-design/icons';

import i18n from "i18next";
import {
  FooterSection,
  Title,
  NavLink,
  Extra,
  LogoContainer,
  Para,
  Large,
  Chat,
  Empty,
  FooterContainer,
  Language,
  Label,
  LanguageSwitch,
  LanguageSwitchContainer,
} from "./styles";

interface SocialLinkProps {
  href: string;
  src: string;
}

const Footer = ({ t }: any) => {
  const handleChange = (language: string) => {
    i18n.changeLanguage(language);
  };

  const SocialLink = ({ href, src }: SocialLinkProps) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        key={src}
        aria-label={src}
      >
        <SvgIcon src={src} width="25px" height="25px" />
      </a>
    );
  };

  return (
    <>
      <FooterSection style={{marginTop: "4rem"}}>
        <Container>
          <Row justify="space-between">
            <Col lg={6} md={6} sm={12} xs={12}>
              <NavLink to="/">
                <LogoContainer>
                  <img src="../../../img/icons/sg_logo.jpg" width="100px" height="auto" />
                </LogoContainer>
              </NavLink>
              <br />
              <a href="https://www.iitism.ac.in/" target="_blank">
                <LogoContainer>
                  <img src="../../../img/icons/ism_logo.png" width="100px" height="auto" />
                </LogoContainer>
              </a>
            </Col>
            <Col lg={6} md={6} sm={12} xs={12}>
              <Title>{t("Quick Links")}</Title>
              <Large left="true" to="/clubs">
                {t("Clubs")}
              </Large>
              <Large left="true" to="/fests">
                {t("Fests")}
              </Large>
              <Large left="true" to="/senate">
                {t("Senate")}
              </Large>
              <Large left="true" to="/calendar">
                {t("Calendar")}
              </Large>
              <Large left="true">
                <a href="https://www.iitism.ac.in/">{t("IIT(ISM) Dhanbad")}</a>
              </Large>
            </Col>
            <Col lg={6} md={6} sm={12} xs={12}>
              <Language>{t("Address")}</Language>
              <Para>Student Gymkhana</Para>
              <Para>Office of DSW</Para>
              <Para>IIT (ISM) Dhanbad</Para>
              <Para>Jharkhand, 826004</Para>
            </Col>
            <Col lg={6} md={6} sm={12} xs={12}>
              <Language>{t("Contact")}</Language>
              <Para>{t(`Have any questions?`)}</Para>
              <br />
              <Large to="/contact">{t(`Send a Message`)}</Large>
              <div style={{marginTop: "2rem"}}>
                <a href="https://www.facebook.com/ismstudentssociety" target="_blank" rel="noopener">
                    <FacebookFilled style={{ fontSize: '25px', color: '#18216d' }} />
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </FooterSection>
      {/* <Extra>
        <Container border={true}>
          <Row
            justify="space-between"
            align="middle"
            style={{ paddingTop: "3rem" }}
          >
            <NavLink to="/">
              <LogoContainer>
                <img src="../../../img/icons/sg_logo.jpg" width="80px" height="auto" />
              </LogoContainer>
            </NavLink>
            <FooterContainer>
              <SocialLink
                href="https://github.com/Adrinlol/create-react-app-adrinlol"
                src="github.svg"
              />
              <SocialLink
                href="https://twitter.com/Adrinlolx"
                src="twitter.svg"
              />
              <SocialLink
                href="https://www.linkedin.com/in/lasha-kakabadze/"
                src="linkedin.svg"
              />
              <SocialLink
                href="https://medium.com/@lashakakabadze/"
                src="medium.svg"
              />
            </FooterContainer>
            <div style={{textAlign: "center", marginRight: "8rem"}}>
                <a href="/">
                  <FacebookFilled style={{ fontSize: '30px', color: '#18216d', marginLeft: "10px", marginRight: "10px" }} />
                </a>
                <a href="/">
                  <LinkedinFilled style={{ fontSize: '30px', color: '#18216d', marginLeft: "10px", marginRight: "10px" }} />
                </a>
                <a href="/">
                  <MailOutlined style={{ fontSize: '30px', color: '#18216d', marginLeft: "10px", marginRight: "10px" }} />
                </a>
                <a href="/">
                  <InstagramOutlined style={{ fontSize: '30px', color: '#18216d', marginLeft: "10px", marginRight: "10px" }} />
                </a>
            </div>
          </Row>
        </Container>
      </Extra> */}
    </>
  );
};

export default withTranslation()(Footer);
