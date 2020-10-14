import React, { Component } from "react";
import ContainerSwipe from "../container";
import { NaviNext, NaviGoback } from "../Route";
import Tweenful, { Observer, elastic } from "react-tweenful";
import "./Pages.css";
//import "./css/page5.css";
import { connect } from "react-redux";
import { updateCurrentDirection, updateCurrentPage } from "../redux/actions/actions";
import Constant from "../config/Constant";
import { navi } from "../component";
import { Button } from "react-bootstrap";
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
  animate: { opacity: [0, 1] },
  events: {
    onAnimationStart: () => console.log("AnimationStart"),
    onAnimationEnd: () => console.log("AnimationEnd"),
  },
};
const propsMaskMove = {
  delay: 1100,
  render: true,
  duration: 1600,
  easing: elastic(1, 1),
  loop: false,
  animate: { top: ["-31px", "0px"], opacity: [0, 1] },
  events: {
    onAnimationStart: () => console.log("AnimationStart"),
    onAnimationEnd: () => console.log("AnimationEnd"),
  },
};
const propsMaskMove2 = {
  delay: 1100,
  render: true,
  duration: 1600,
  easing: elastic(1, 0.1),
  loop: false,
  animate: { rotate: ["-90deg", "0deg"], opacity: [0, 1] },
  events: {
    onAnimationStart: () => console.log("AnimationStart"),
    onAnimationEnd: () => console.log("AnimationEnd"),
  },
};
class Page5 extends Component {
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
                delay={Constant.NORMAL_DURATION * 1.3}
                duration={Constant.NORMAL_DURATION}
                style={{ opacity: 0 }}>
                <div className="titlestyle2 titlePage5">
                  {
                    "Percayakan tatalaksana nutrisi alergi susu sapi (ASS) pada\nrangkaian produk Mead Johnson"
                  }
                </div>
              </Tweenful.div>
            </div>
            <div className="content5Container">
              <div className="row-container contentRow">
                <div className="colmContainer">
                  <Tweenful.div
                    className="titletext"
                    {...propsAnim}
                    delay={Constant.NORMAL_DURATION * 2}
                    duration={Constant.NORMAL_DURATION}
                    style={{ opacity: 0 }}>
                    Ass Ringan/Sedang
                  </Tweenful.div>
                  <Tweenful.div
                    className="bgKalengLgg"
                    {...propsMaskMove}
                    delay={Constant.NORMAL_DURATION * 2.3}
                    duration={Constant.NORMAL_DURATION}
                    style={{ top: -39, opacity: 0 }}
                  />
                  <Tweenful.div
                    className="bgBox"
                    {...propsAnim}
                    delay={Constant.NORMAL_DURATION * 2.5}
                    duration={Constant.NORMAL_DURATION}
                    style={{ opacity: 0 }}>
                    <div className="boxtext">
                      {"Formula Protein Terhidrolisa Ekstensif\ndengan Probiotik Lactobacillus GG"}
                    </div>
                  </Tweenful.div>
                </div>
                <div className="colmContainer addPadding">
                  <Tweenful.div
                    className="titletext"
                    {...propsAnim}
                    delay={Constant.NORMAL_DURATION * 3.3}
                    duration={Constant.NORMAL_DURATION}
                    style={{ opacity: 0 }}>
                    Ass Berat
                  </Tweenful.div>
                  <Tweenful.div
                    className="bgKalengPuramino"
                    {...propsMaskMove}
                    delay={Constant.NORMAL_DURATION * 3.5}
                    duration={Constant.NORMAL_DURATION}
                    style={{ top: -39, opacity: 0 }}
                  />
                  <Tweenful.div
                    className="bgBox"
                    {...propsAnim}
                    delay={Constant.NORMAL_DURATION * 3.7}
                    duration={Constant.NORMAL_DURATION}
                    style={{ opacity: 0 }}>
                    <div className="boxtext">{"Formula asam amino dengan\nMCT Oil 33%"}</div>
                  </Tweenful.div>
                </div>
              </div>
            </div>
            <Tweenful.div
              className="ciclebenefit"
              {...propsMaskMove2}
              delay={Constant.NORMAL_DURATION * 3}
              duration={Constant.NORMAL_DURATION}
              style={{ opacity: 0 }}
            />
            <Tweenful.div
              {...propsAnim}
              delay={Constant.NORMAL_DURATION * 3.5}
              duration={Constant.NORMAL_DURATION}
              style={{ opacity: 0 }}>
              <div id="footerLast" style={{ paddingLeft: "2%" }}>
                <div className="contentRefstyle">{"ASI adalah yang terbaik"}</div>
                <div className="contentRefstyle">{"Hanya untuk kalangan medis"}</div>
              </div>
            </Tweenful.div>
          </div>
        </Observer>
        <Button
          variant="backscreen"
          style={{ color: "#fff", backgroundColor: "#f05a29", fontSize: 12 }}
          onClick={this.onBack.bind(this)}>
          Back
        </Button>
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
export default connect(mapStateToProps, mapDispatchToProps)(Page5);
