import React, { Component } from "react";
import ContainerSwipe from "../container";
import { NaviNext, NaviGoback } from "../Route";
import Tweenful, { Observer, elastic, percentage } from "react-tweenful";
import "./Pages.css";
//import "./css/page2.css";
import { connect } from "react-redux";
import { updateCurrentDirection, updateCurrentPage } from "../redux/actions/actions";
import Constant from "../config/Constant";
import { BrowserView, MobileView, isBrowser, isMobile } from "react-device-detect";
import { navi, refHanyakalangan } from "./../component/index";
import { reactLocalStorage } from "reactjs-localstorage";

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
const propsMask = {
  delay: 1100,
  render: true,
  duration: 1600,
  easing: elastic(1, 0.1),
  loop: false,
  animate: { width: ["0px"] },
  events: {
    onAnimationStart: () => console.log("AnimationStart"),
    onAnimationEnd: () => console.log("AnimationEnd"),
  },
};
const propsMaskDone = {
  delay: 1600,
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
class Page2 extends Component {
  constructor(props, context) {
    super(props, context);
    console.log(this.props);
    this.state = {
      shouldRender: true,
      slideAnim: null,
    };
  }
  componentDidMount() {
    console.log(window.innerWidth);
    if (window.innerWidth >= 1024) {
      // slideAnim = percentage({
      //   "0%": { width: "0px" },
      //   "1%": { width: "20vw" },
      //   "2%": { width: "40vw" },
      // });
      this.setState({
        slideAnim: { width: ["0px", "50vw"] },
      });
    } else {
      this.setState({
        slideAnim: { width: ["0px", "50vw"] },
      });
    }
    this.resetDefault();
    this.props.updatePage(1);
  }
  async resetDefault() {
    // await reactLocalStorage.set("PAGE", 1);
  }
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
            <div className="row-container titleContainerPage">
              <Tweenful.div
                {...propsAnim}
                delay={Constant.NORMAL_DURATION}
                duration={Constant.NORMAL_DURATION}
                style={{ opacity: 0 }}>
                <div className="logoLgg" />
              </Tweenful.div>
              <Tweenful.div
                {...propsAnim}
                delay={Constant.NORMAL_DURATION * 1.5}
                duration={Constant.NORMAL_DURATION}
                style={{ opacity: 0 }}>
                <div className="titlestyle2 titlePage2">
                  {
                    "Anak dengan alergi susu sapi akan mengalami risiko \nmanifestasi alergi hingga usia 5 tahun."
                  }
                  <sup id="custom">1</sup>
                </div>
              </Tweenful.div>
            </div>
            <div className="rowtocol-container content2Container">
              <div id="page2Col1">
                <Tweenful.div
                  {...propsAnim}
                  delay={Constant.NORMAL_DURATION * 2}
                  duration={Constant.NORMAL_DURATION}
                  style={{ opacity: 0 }}>
                  <div className="content1style content2text">
                    {
                      "Studi pada 97 anak dengan alergi protein \nsusu sapi yang dipantau hingga usia 5 tahun,\nmasih mengalami gejala alergi"
                    }
                  </div>
                </Tweenful.div>
                <Tweenful.div
                  {...propsAnim}
                  delay={Constant.NORMAL_DURATION * 2.1}
                  duration={Constant.NORMAL_DURATION}
                  style={{ opacity: 0, paddingLeft: "1vw" }}>
                  <ul>
                    <li key={"1"} className="content1style ">
                      <span>{"40% asma"}</span>
                    </li>
                    <li key={"2"} className="content1style ">
                      <span>{"20% eksim atopik"}</span>
                    </li>
                    <li key={"3"} className="content1style ">
                      <span>{"43% rhinitis alergika"}</span>
                    </li>
                  </ul>
                </Tweenful.div>
              </div>
              <div>
                <Tweenful.div
                  {...propsAnim}
                  delay={Constant.NORMAL_DURATION * 2.5}
                  duration={Constant.NORMAL_DURATION}
                  style={{ opacity: 0 }}>
                  <div className="bgDiagram">
                    {this.state.slideAnim && (
                      <Tweenful.div
                        className="diagramMask"
                        {...propsMask}
                        delay={Constant.NORMAL_DURATION * 3}
                        duration={Constant.NORMAL_DURATION * 2}
                        animate={this.state.slideAnim}
                        style={{ width: 0 }}>
                        <div className="bgDiagramLine" />
                      </Tweenful.div>
                    )}

                    {/* <Tweenful.div
                      {...propsMaskDone}
                      delay={Constant.NORMAL_DURATION * 3}
                      duration={Constant.NORMAL_DURATION}
                      style={{ opacity: 0 }}>
                      <div className="bgDiagramEnd" />
                    </Tweenful.div> */}
                  </div>
                </Tweenful.div>
              </div>
            </div>

            <Tweenful.div
              {...propsAnim}
              delay={Constant.NORMAL_DURATION * 3.2}
              duration={Constant.NORMAL_DURATION}
              style={{ opacity: 0 }}>
              <div id="footer">
                <div className="contentRefstyle">{"Referensi"}</div>
                <ol
                  className="horizontal"
                  style={{ marginBottom: 0, paddingInlineStart: 5, marginBlockEnd: 10 }}>
                  <li key={"1"} className="contentRefstyle">
                    {"Bishop JM et al Pediatr. 1990 Jun:116(6)-862-7"}
                  </li>
                  <li key={"2"} className="contentRefstyle">
                    {"Herz et al Clin. Ep Allergy 35:397-402"}
                  </li>
                </ol>
              </div>
            </Tweenful.div>
          </div>
        </Observer>
        {navi(this.onBack.bind(this), this.onNext.bind(this))}
        {refHanyakalangan()}
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
export default connect(mapStateToProps, mapDispatchToProps)(Page2);
