import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import Container from "../../common/Container";
import ClubsContent from "../../content/ClubsPage.json";
import { SvgIcon } from "../../common/SvgIcon";
import "./styles.css";

const ClubsComponent = () => {
  return (
    <div style={{marginTop: "4rem", marginBottom: "6rem"}}>
      <h3 style={{marginBottom: "4rem"}}>Clubs and Societies</h3>
      <Row justify="space-between">
          <Col lg={12} md={12} sm={24} xs={24}>
              <SvgIcon src="event.svg" width="70%" height="70%" />
          </Col>
          <Col lg={12} md={12} sm={24} xs={24}>
            <p>{ClubsContent.text}</p>
          </Col>
      </Row>
      <h3 className="clubs_h3">Media And Culture Council</h3>
      <Row justify="space-between">
          {ClubsContent.media.map((club) => (
              <Col lg={6} md={6} sm={12} xs={12}>
                    <a href={club.club_url}>
                        <div className="fests_div">
                            <img src={club.club_logo} className="fests_img"></img>
                            <div style={{marginTop: "2rem"}}>
                            <span className="fests_name">{club.club_name}</span>
                            </div>
                            <div style={{marginTop: "0.3rem"}}>
                            <span className="fests_detail">{club.club_description}</span>
                            </div>
                        </div>
                    </a>
              </Col>
          ))}
      </Row>
      <h3 className="clubs_h3_science">Science And Technology Council</h3>
      <Row justify="space-between">
          {ClubsContent.science.map((club) => (
              <Col lg={6} md={6} sm={12} xs={12}>
                    <a href={club.club_url}>
                        <div className="fests_div">
                            <img src={club.club_logo} className="fests_img"></img>
                            <div style={{marginTop: "2rem"}}>
                            <span className="fests_name">{club.club_name}</span>
                            </div>
                            <div style={{marginTop: "0.3rem"}}>
                            <span className="fests_detail">{club.club_description}</span>
                            </div>
                        </div>
                    </a>
              </Col>
          ))}
      </Row>
    </div>
  );
};

export default withTranslation()(ClubsComponent);
