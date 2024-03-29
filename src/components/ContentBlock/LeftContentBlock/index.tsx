import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { SvgIcon } from "../../../common/SvgIcon";
import { ContentBlockProps } from "../types";
import { Fade } from "react-awesome-reveal";
import { Button } from "../../../common/Button";
import {
  LeftContentSection,
  Content,
  ContentWrapper,
  ServiceWrapper,
  ButtonWrapper,
  MinTitle,
  MinPara,
} from "./styles";

const LeftContentBlock = ({
  icon,
  title,
  content,
  button,
  newPage,
  t,
  id,
}: ContentBlockProps) => {
  return (
    <LeftContentSection style={{marginTop: "2rem"}}>
      <Fade direction="left">
        <Row justify="space-between" align="middle" id={id}>
          <Col lg={11} md={11} sm={12} xs={24}>
            <SvgIcon src={icon} width="100%" height="100%" />
          </Col>
          <Col lg={11} md={11} sm={11} xs={24}>
            <ContentWrapper>
              <h6>{t(title)}</h6>
              <Content>{t(content)}</Content>
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
        </Row>
      </Fade>
    </LeftContentSection>
  );
};

export default withTranslation()(LeftContentBlock);
