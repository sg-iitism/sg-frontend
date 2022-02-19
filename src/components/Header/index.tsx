import { useState } from "react";
import { Row, Col, Drawer } from "antd";
import { withTranslation } from "react-i18next";
import Container from "../../common/Container";
import { SvgIcon } from "../../common/SvgIcon";
import { Button } from "../../common/Button";
import {
  HeaderSection,
  LogoContainer,
  Burger,
  NotHidden,
  Menu,
  CustomNavLinkSmall,
  Label,
  Outline,
  Span,
} from "./styles";

interface HeaderProps {
  url: string;
  t: any;
}

const Header = ({ t, url }: HeaderProps) => {
  const [visible, setVisibility] = useState(false);

  const showDrawer = () => {
    setVisibility(!visible);
  };

  const onClose = () => {
    setVisibility(!visible);
  };

  const MenuItem = () => {
    const scrollTo = (id: string) => {
      const element = document.getElementById(id) as HTMLDivElement;
      element.scrollIntoView({
        behavior: "smooth",
      });
      setVisibility(false);
    };
    return (
      <>
        <CustomNavLinkSmall onClick={url=="/" ? () => scrollTo("about") : () => window.location.pathname="/"}>
          <Span>{t(url=="/" ? "About" : "Home")}</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall>
          <a href="/clubs"><Span>{t("Clubs")}</Span></a>
        </CustomNavLinkSmall>               
        <CustomNavLinkSmall>
          <a href="/fests"><Span>{t("Fests")}</Span></a>
        </CustomNavLinkSmall>      
        <CustomNavLinkSmall>
          <a href="/calendar"><Span>{t("Calendar")}</Span></a>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall>
          <a href="/senate"><Span>{t("Senate")}</Span></a>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall>
          <a href="https://www.iitism.ac.in/~dsw/" target="_blank"><Span>{t("DSW")}</Span></a>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall
          style={{ width: "180px" }}
        >
          <Span>
            <a href="/contact"><Button>{t("Contact")}</Button></a>
          </Span>
        </CustomNavLinkSmall>
      </>
    );
  };

  return (
    <HeaderSection id="header">
      <Container>
        <Row justify="space-between">
          <LogoContainer to="/" aria-label="homepage">
            <img src="../../../img/icons/sg_logo.jpg" width="80px" height="auto" />
          </LogoContainer>
          <NotHidden>
            <MenuItem />
          </NotHidden>
          <Burger onClick={showDrawer}>
            <Outline />
          </Burger>
        </Row>
        <Drawer closable={false} visible={visible} onClose={onClose}>
          <Col style={{ marginBottom: "2.5rem" }}>
            <Label onClick={onClose}>
              <Col span={12}>
                <Menu>Menu</Menu>
              </Col>
              <Col span={12}>
                <Outline />
              </Col>
            </Label>
          </Col>
          <MenuItem />
        </Drawer>
      </Container>
    </HeaderSection>
  );
};

export default withTranslation()(Header);
