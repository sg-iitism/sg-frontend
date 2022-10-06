import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { SvgIcon } from "../../../common/SvgIcon";
import { Button } from "../../../common/Button";
import { ContentBlockProps } from "../types";
import { Fade } from "react-awesome-reveal";
import Typewriter from 'typewriter-effect';
import {
  RightBlockContainer,
  Content,
  ContentWrapper,
  ButtonWrapper,
} from "./styles";
import './style.css';

const RightBlock = ({
  title,
  content,
  fullContent,
  newPage,
  typewriter,
  typeStyle,
  button,
  icon,
  t,
  id,
}: ContentBlockProps) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <RightBlockContainer style={{marginTop: "2rem"}}>
      <Fade direction="right">
        <Row justify="space-between" align="middle" id={id}>
          <Col lg={11} md={11} sm={11} xs={24}>
            <ContentWrapper>
              <h6>{t(title)}</h6>
              <Content>
                <p className={typeStyle ? "home_para" : ""}>{t(content)}</p>
                <p className={typeStyle ? "home_para" : ""}>{t(fullContent)}</p>
                {typewriter ? <br /> : null}
                {typewriter ? <Typewriter
                  options={{
                    strings: ['Welcomes you!', 'Clubs and Societies...', 'Events and Sports...',
                              'Festivals and Celebrations...', 'and everything happening...'],
                    wrapperClassName: "type_wrap",
                    cursorClassName: "type_class",
                    autoStart: true,
                    loop: true,
                  }}
                /> : null}
              </Content>
              <ButtonWrapper>
                {typeof button === "object" &&
                  button.map((item: any, id: number) => {
                    return (
                      <a href={item.link} target={newPage ? "_blank" : ""}>
                        <Button
                          key={id}
                          color={item.color}
                          fixedWidth={true}
                        >
                          {t(item.title)}
                        </Button>
                      </a>
                    );
                  })}
              </ButtonWrapper>
            </ContentWrapper>
          </Col>
          <Col lg={11} md={11} sm={12} xs={24}>
            <SvgIcon src={icon} width="100%" height="100%" />
          </Col>
        </Row>
      </Fade>
    </RightBlockContainer>
  );
};

export default withTranslation()(RightBlock);
