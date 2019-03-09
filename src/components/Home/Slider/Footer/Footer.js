import React, { Component } from "react";

import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators
} from "reactstrap";

import slide1 from "../../../../assets/images/bedsheets.jpg";
import slide2 from "../../../../assets/images/wallsticker.jpg";
import prev from "../../../../assets/images/left.svg";
import next from "../../../../assets/images/right.svg";
import facebook from "../../../../assets/images/facebook.png";
import whatsapp from "../../../../assets/images/whatsapp.png";
import viber from "../../../../assets/images/viber.png";
import instagram from "../../../../assets/images/instagram.png";

const items = [
  {
    src: slide1,
    altText: "Slide 1",
    caption: "Slide 1"
  },
  {
    src: slide2,
    altText: "Slide 2",
    caption: "Slide 2"
  }
];

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === items.length - 1
        ? 0
        : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === 0
        ? items.length - 1
        : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map(item => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img src={item.src} alt={item.altText} />
        </CarouselItem>
      );
    });

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-1">
            <CarouselControl
              direction="prev"
              directionText="Previous"
              onClickHandler={this.previous}
            />
          </div>
          <div className="col-md-7">
            <Carousel
              activeIndex={activeIndex}
              next={this.next}
              previous={this.previous}
            >
              {slides}
            </Carousel>
          </div>
          <div className="col-md-1">
            <CarouselControl
              direction="next"
              directionText="Next"
              onClickHandler={this.next}
            />
          </div>
          <div className="col-md-3">
            <table className="socialmedia">
              <tr>
                <td>
                  <a href="#" title="Facebook">
                    <img src={facebook} alt="Facebook" />
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="#" title="instagram">
                    <img src={instagram} alt="instagram" />
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="#" title="whatsapp">
                    <img src={whatsapp} alt="whatsapp" />
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="#" title="viber">
                    <img src={viber} alt="viber" />
                  </a>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
