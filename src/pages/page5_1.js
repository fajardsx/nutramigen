import React, { Component } from "react";
import ContainerSwipe from "../container";
import { NaviNext, NaviGoback } from "../Route";
import Tweenful, { Observer, elastic } from "react-tweenful";
import "./Pages.css";
//import "./css/page5.css";
import { connect } from "react-redux";
import { updateCurrentDirection, updateCurrentPage } from "../redux/actions/actions";
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
          style={{ opacity: 0 }}
          mount={{ opacity: 1 }}
          unmount={[{ opacity: 0 }]}
          easing="linear">
          <div className="observer-demo">
            <div className="row-container">
              <Tweenful.div {...propsAnim}>
                <div className="logoLgg" />
              </Tweenful.div>
              <Tweenful.div {...propsAnim2}>
                <div className="titlestyle2 titlePage5">
                  {"Mengurangi risiko Allergic March ketika\nusia 3 tahun "}
                  <sup id="custom">13</sup>
                </div>
              </Tweenful.div>
              <Tweenful.div {...propsAnim}>
                <div className="ciclebenefitheader" />
              </Tweenful.div>
            </div>
            <div className="content5Container">
              <div className="row-container contentRow">
                <div className="colmContainerPage6">
                  <div>
                    <div className="bgDiagramPage6">
                      <Tweenful.div className="diagramMaskPage6" {...propsMask}>
                        <div className="bgDiagramLinePage6" />
                      </Tweenful.div>
                      <Tweenful.div {...propsMaskDone}>
                        <div className="bgDiagramEndPage6" />
                      </Tweenful.div>
                    </div>
                  </div>
                </div>
                <div className="colmContainerPage6">
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
                </div>
              </div>
            </div>
          </div>
        </Observer>
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
