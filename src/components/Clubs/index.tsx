import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import Container from "../../common/Container";
import ClubsContent from "../../content/ClubsPage.json";
import { SvgIcon } from "../../common/SvgIcon";
import "./styles.css";

const ClubsComponent = () => {
  return (
    <div style={{marginTop: "4rem", marginBottom: "6rem"}}>
      <h3 className="clubs_h3_science">Technical Clubs</h3>
      <Row justify="space-between" id="tech_clubs">
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
      <h3 className="clubs_h3">Media And Cultural Clubs</h3>
      <Row justify="space-between" id="cult_clubs">
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
    </div>
  );
};

export default withTranslation()(ClubsComponent);
