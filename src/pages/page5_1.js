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
  animate: { opacity: [0, 1] },
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
class Page5_1 extends Component {
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
          style={{ opacity: 0,margin:'2vw' }}
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
                {...propsAnim}
                delay={Constant.NORMAL_DURATION * 1.3}
                duration={Constant.NORMAL_DURATION}
                style={{ opacity: 0 }}>
                <div className="titlestyle2 titlePage6">
                  {"Mengurangi risiko"} <a id="customtext">{"Allergic March"}</a>
                  {" ketika\nusia 3 tahun "}
                  <sup>*</sup>
                </div>
              </Tweenful.div>
              <Tweenful.div
                {...propsAnim}
                delay={Constant.NORMAL_DURATION * 1.6}
                duration={Constant.NORMAL_DURATION}
                style={{ opacity: 0 }}>
                <div className="ciclebenefitheader" />
              </Tweenful.div>
            </div>
            <div className="content5Container">
              <div className="row-container contentRow">
                <Tweenful.div
                  className="colmContainerPage6"
                  {...propsAnim}
                  delay={Constant.NORMAL_DURATION * 2}
                  duration={Constant.NORMAL_DURATION}
                  style={{ opacity: 0 }}>
                  <div>
                    <div className="bgDiagramPage6">
                      <Tweenful.div
                        className="diagramMaskPage6"
                        {...propsMask}
                        delay={Constant.NORMAL_DURATION * 2.2}
                        duration={Constant.NORMAL_DURATION}
                        style={{ opacity: 0 }}>
                        <div className="bgDiagramLinePage6" />
                      </Tweenful.div>
                      <Tweenful.div
                        {...propsMaskDone}
                        delay={Constant.NORMAL_DURATION * 2.4}
                        duration={Constant.NORMAL_DURATION}
                        style={{ opacity: 0 }}>
                        <div className="bgDiagramEndPage6" />
                      </Tweenful.div>
                    </div>
                  </div>
                </Tweenful.div>
                <Tweenful.div
                  className="colmContainerPage6"
                  {...propsAnim}
                  delay={Constant.NORMAL_DURATION * 2.8}
                  duration={Constant.NORMAL_DURATION}
                  style={{ opacity: 0 }}>
                  <div className="titletextPage6">Menurunkan Kejadian</div>
                  <div className="grid-container">
                    {this.addHex("Rhino-\nconjunctivitis\nsebanyak", "68%")}
                    {this.addHex("Urtikaria\nsebanyak", "61%")}
                    {this.addHex("Eczema\nsebanyak", "44%")}
                    {this.addHex("Asma\nsebanyak", "51%")}
                  </div>
                  {/* <div className="titletext">Ass Berat</div>
                  <div className="bgKalengPuramino" />
                  <div className="bgBox">
                    <div className="boxtext">{"Formula asam amino dengan\nMCT Oil 33%"}</div>
                  </div> */}
                </Tweenful.div>
              </div>
            </div>
          </div>
        </Observer>
        {navi(this.onBack.bind(this), this.onNext.bind(this))}
      </ContainerSwipe>
    );
  }
  //
  addHex = (title, value) => {
    return (
      <div className="MinihexBg">
        <div className="title">
          {title + "\n"}
          <div className="value">{value}</div>
        </div>
      </div>
    );
  };
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
export default connect(mapStateToProps, mapDispatchToProps)(Page5_1);
