import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import Slider from "react-slick";
import { Card } from 'antd';
import {
    FacebookFilled,
    LinkedinFilled,
    GlobalOutlined,
    InstagramOutlined
} from '@ant-design/icons';
import { ContentBlockProps } from "./types";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./styles.css";

const { Meta } = Card;

var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

const FestsDetail = ({
    title,
    description,
    button,
    logo,
    t,
    id,
    links,
    events,
    gallery,
    years,
    name
  }: ContentBlockProps) =>
 {
  return (
    <div style={{marginTop: "4rem", marginBottom: "6rem"}}>
        <Row justify="space-between">
            <Col lg={12} md={12} sm={24} xs={24}>
                <div className="fests_div">
                    <img src={logo} alt="srijan" className="fests_img" />
                </div>
            </Col>
            <Col lg={12} md={12} sm={24} xs={24}>
                <h3 className="fest_name">{title}</h3>
                <p>{description}</p>
                <div style={{marginTop: "2rem"}}>
                    <div style={{textAlign: "left"}}>
                        <a href={links.website}>
                          <GlobalOutlined style={{ fontSize: '30px', color: '#18216d', marginRight: "20px" }} />
                        </a>
                        <a href={links.facebook}>
                          <FacebookFilled style={{ fontSize: '30px', color: '#18216d', marginRight: "20px" }} />
                        </a>
                        <a href={links.linkedin}>
                          <LinkedinFilled style={{ fontSize: '30px', color: '#18216d', marginRight: "20px" }} />
                        </a>
                        <a href={links.instagram}>
                          <InstagramOutlined style={{ fontSize: '30px', color: '#18216d', marginRight: "20px" }} />
                        </a>
                    </div>
                </div>
            </Col>
        </Row>
        <div style={{marginTop: "4rem"}}>
            <h3>Events and Shows</h3>
            <div>
                <Slider {...settings}>
                    {events.map((item: any) => (
                        <div>
                            <Card
                                hoverable
                                style={{ width: 240 }}
                                cover={<img alt="example" src={item.image} />}
                            >
                                <Meta title={item.text}></Meta>
                            </Card>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
        <div style={{marginTop: "4rem"}}>
            <h3>Gallery</h3>
            <div>
                <Slider {...settings}>
                    {gallery.map((item: any) => (
                        <div>
                            <Card
                                hoverable
                                style={{ width: 240, marginTop: "2rem" }}
                                cover={<img alt="example" src={item.image} />}
                            >
                            </Card>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
        <div style={{marginTop: "4rem"}}>
            <h3>Past Years Archive</h3>
            <div>
                <Row justify="space-between">
                    {years.map((item: any) => (
                        <Col lg={6} md={6} sm={12} xs={12}>
                            <div className="archive_div" style={{textAlign: "center"}}>
                                <a href={"/fests/" + name + "/years/" + item}><p className="archive_para">{item}</p></a>
                            </div>
                        </Col>
                    ))}
                </Row>
            </div>
        </div>
    </div>
  );
};

export default withTranslation()(FestsDetail);
