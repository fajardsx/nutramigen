import React, { Component } from "react";
import ContainerSwipe from "../container";
import { NaviNext, NaviGoback } from "../Route";
import Tweenful, { Observer, elastic } from "react-tweenful";
import "./Pages.css";
//import "./css/page3.css";
import { connect } from "react-redux";
import { updateCurrentDirection, updateCurrentPage } from "../redux/actions/actions";
import Constant from "../config/Constant";
const propsAnim = {
  delay: 1000,
  render: true,
  duration: 1600,
  easing: elastic(1, 0.1),
  loop: false,
  animate: { opacity: [0, 1] },
  events: {
    onAnimationStart: () => console.log("AnimationStart"),
    onAnimationEnd: () => console.log("AnimationEnd"),
  },
};
const propsAnim2 = {
  delay: 1100,
  render: true,
  duration: 1600,
  easing: elastic(1, 0.1),
  loop: false,
  animate: { left: ["-300px", "0px"], opacity: [0, 1] },
  events: {
    onAnimationStart: () => console.log("AnimationStart"),
    onAnimationEnd: () => console.log("AnimationEnd"),
  },
};
const propsMask = {
  delay: 1100,
  render: true,
  duration: 1600,
  easing: elastic(1, 0.1),
  loop: false,
  animate: { width: [0, "31.5vw"], height: ["30vh", "30vh"] },
  events: {
    onAnimationStart: () => console.log("AnimationStart"),
    onAnimationEnd: () => console.log("AnimationEnd"),
  },
};
class Page3 extends Component {
  constructor(props, context) {
    super(props, context);
    console.log(this.props);
    this.state = {
      shouldRender: true,
    };
  }
  componentDidMount() {}
  onNext() {
    console.log("page2 props", this.props);
    //this.props.history.push("/");
    this.props.updateDirection("left");
    NaviNext(this.props);
  }
  onBack() {
    console.log("page2 props", this.props);
    this.props.updateDirection("right");
    NaviGoback(this.props);
  }
  render() {
    const { shouldRender } = this.state;
    return (
      <ContainerSwipe callNext={this.onNext.bind(this)} callPrev={this.onBack.bind(this)}>
        <Observer
          render={shouldRender}
          duration={1200}
          style={{ opacity: 0 }}
          mount={{ opacity: 1 }}
          unmount={[{ opacity: 0 }]}
          easing="linear">
          <div className="observer-demo">
            <div className="row-container">
              <Tweenful.div
                {...propsAnim}
                delay={Constant.NORMAL_DURATION}
                duration={Constant.NORMAL_DURATION}
                style={{ opacity: 0 }}>
                <div className="logoLgg" />
              </Tweenful.div>
              <Tweenful.div
                {...propsAnim2}
                delay={Constant.NORMAL_DURATION * 1.5}
                duration={Constant.NORMAL_DURATION}
                style={{ opacity: 0 }}>
                <div className="titlestyle2 titlePage3">
                  {
                    "Proses alergi di awal kehidupan akan memicu terjadinya\ninflamasi sistemik yang menimbulkan rangkaian "
                  }
                  <a id="customtext">{"Allergic March"}</a>
                </div>
              </Tweenful.div>
            </div>
            <div className="content1Container">
              <div>
                <Tweenful.div
                  className="bgArrow"
                  {...propsAnim2}
                  delay={Constant.NORMAL_DURATION * 2}
                  duration={Constant.NORMAL_DURATION}
                  style={{ opacity: 0 }}>
                  <div className="content1style content3text">
                    {
                      "Proses ini dapat diinfervensi dengan tata laksana alergi susu\nsapi yang tepat. Inflamasi sistemik dapat dicegah dengan"
                    }
                    <a id="customtext">
                      {" diet probiotik."}
                      <sup id="custom">2</sup>
                    </a>
                  </div>
                </Tweenful.div>
              </div>
              <div>
                <Tweenful.div
                  {...propsAnim}
                  delay={Constant.NORMAL_DURATION * 2.5}
                  duration={Constant.NORMAL_DURATION}
                  style={{ opacity: 0 }}>
                  <div className="content1style content3_2text">
                    {
                      "Untuk itu penting dapat mengenali gejala alergi susu sapi sedini mungkin\ndan mengambil langkah-langkah yang tepat sesuai dengan tata laksana\nalergi susu sapi"
                    }
                  </div>
                </Tweenful.div>
              </div>
            </div>
          </div>
        </Observer>
      </ContainerSwipe>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    page: state.page,
    direction: state.direction,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    updatePage: (data) => {
      dispatch(updateCurrentPage(data));
    },
    updateDirection: (data) => {
      dispatch(updateCurrentDirection(data));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Page3);
