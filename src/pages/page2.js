import React, { Component } from "react";
import { Container } from "react-bootstrap";
import ContainerSwipe from "../container";
import { NaviNext, NaviGoback } from "../component/Route";
import Tweenful, { Observer, elastic } from "react-tweenful";
import "./Pages.css";
import { connect } from "react-redux";
import { updateCurrentDirection, updateCurrentPage } from "../redux/actions/actions";
const propsAnim = {
  delay: 1000,
  render: true,
  duration: 1600,
  easing: elastic(1, 0.1),
  loop: false,
  animate: {},
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
class Page2 extends Component {
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
        <Container>
          <Observer
            render={shouldRender}
            duration={1200}
            style={{ opacity: 0 }}
            mount={{ opacity: 1 }}
            unmount={[{ opacity: 0 }]}
            easing="linear">
            <div className="observer-demo">
              <Tweenful.div {...propsAnim}>
                <div className="titlestyle" style={{ width: 800, height: 100 }}>
                  {
                    "Anak dengan alergi susu sapi akan mengalami risiko \n manifestasi alergi hingga usia 5 tahun"
                  }
                </div>
              </Tweenful.div>
              <Tweenful.div {...propsAnim}>
                <div className="content1style" style={{ width: 830, height: 100, fontSize: 19 }}>
                  {
                    "Studi pada 97 anak dengan alergi protein susu sapi yang dipantau hingga usia 5 tahun,\nmasih mengalami gejala alergi"
                  }
                </div>
              </Tweenful.div>
              <Tweenful.div {...propsAnim}>
                <ul style={{ marginBottom: 0, paddingInlineStart: 20, marginBlockEnd: 10 }}>
                  <li key={"1"} className="content1style" style={{ width: 830, fontSize: 19 }}>
                    {"40% asma"}
                  </li>
                  <li key={"2"} className="content1style" style={{ width: 830, fontSize: 19 }}>
                    {"20% eksim atopik"}
                  </li>
                  <li key={"3"} className="content1style" style={{ width: 830, fontSize: 19 }}>
                    {"43% rhinitis alergika"}
                  </li>
                </ul>
              </Tweenful.div>
              <Tweenful.div {...propsAnim}>
                <div className="contentRefstyle">{"Referensi"}</div>
                <ol style={{ marginBottom: 0, paddingInlineStart: 10, marginBlockEnd: 10 }}>
                  <li key={"1"} className="contentRefstyle" style={{ width: 830 }}>
                    {"Bishop JM et al Pediatr. 1990 Jun:116(6)-862-7"}
                  </li>
                </ol>
              </Tweenful.div>
            </div>
          </Observer>
        </Container>
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
