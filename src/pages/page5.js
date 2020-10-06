import React, { Component } from "react";
import ContainerSwipe from "../container";
import { NaviNext, NaviGoback } from "../Route";
import Tweenful, { Observer, elastic } from "react-tweenful";
import "./Pages.css";
import "./css/page5.css";
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
  animate: { width: [0, "31.5vw"], height: ["30vh", "30vh"] },
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
              <Tweenful.div {...propsAnim}>
                <div className="logoLgg" />
              </Tweenful.div>
              <Tweenful.div {...propsAnim2}>
                <div className="titlestyle2 titlePage2">
                  {
                    "Percayakan tatalaksana nutrisi alergi susu sapi (ASS) pada\nrangkaian produk Mead Johnson"
                  }
                </div>
              </Tweenful.div>
            </div>
            <div className="content1Container">
              <div className="row-container contentRow">
                <div className="colmContainer">
                  <div className="titletext">Ass Ringan/Sedang</div>
                  <div className="bgKalengLgg" />
                  <div className="bgBox">
                    <div className="boxtext">
                      {"Formula Protein Terhidrolisa Ekstensif\ndengan Probiotik Lactobacillus GG"}
                    </div>
                  </div>
                </div>
                <div className="colmContainer addPadding">
                  <div className="titletext">Ass Berat</div>
                  <div className="bgKalengPuramino" />
                  <div className="bgBox">
                    <div className="boxtext">{"Formula asam amino dengan\nMCT Oil 33%"}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="ciclebenefit" />

            {/* <Tweenful.div {...propsAnim}>
              <div id="footer">
                <div className="contentRefstyle">{"Referensi"}</div>
                <ol
                  className="horizontal"
                  style={{ marginBottom: 0, paddingInlineStart: 7, marginBlockEnd: 10 }}>
                  <li key={"1"} className="contentRefstyle">
                    {"Bishop JM et al Pediatr. 1990 Jun:116(6)-862-7"}
                  </li>
                  <li key={"2"} className="contentRefstyle">
                    {"Herz et al Clin. Ep Allergy 35:397-402"}
                  </li>
                </ol>
              </div>
            </Tweenful.div> */}
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
export default connect(mapStateToProps, mapDispatchToProps)(Page5);
