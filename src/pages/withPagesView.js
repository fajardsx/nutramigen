import React from "react";
import ReactGA from "react-ga";
import Constant from "../config/Constant";

ReactGA.initialize(Constant.GA_ID);

const withPageView = (WarperComponent, options = {}) => {
  const trackPage = (page) => {
    ReactGA.set({
      page,
      ...options,
    });
    ReactGA.pageview(page);
  };

  return class extends React.Component {
    state = {
      page: null,
    };

    static getDerivedStateFromProps(props, state) {
      const page = props.location.pathname + props.location.search;
      if (page !== state.page) {
        return {
          page,
        };
      }
      return null;
    }
    componentDidMount() {
      const page = this.props.location.pathname + this.props.location.search;
      trackPage(page);
    }

    componentDidUpdate(prevProps) {
      const currentPage = prevProps.location.pathname + prevProps.location.search;
      const nextPage = this.state.page;

      if (currentPage !== nextPage) {
        trackPage(nextPage);
      }
    }
    render() {
      return <WarperComponent {...this.props} />;
    }
  };
};

export default withPageView;
