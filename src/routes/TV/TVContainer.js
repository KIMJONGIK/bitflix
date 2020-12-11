import React from "react";
import { tvApi } from "../../api";
import TVPresenter from "./TVPresenter";

export default class extends React.Component {
  state = {
    topRated: null,
    popular: null,
    airingtoday: null,
    error: null,
    loading: true,
  };

  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    try {
      // const resoponse = await tvApi.topRated();

      const {
        data: { results: topRated },
      } = await tvApi.topRated();

      const {
        data: { results: popular },
      } = await tvApi.popular();

      const {
        data: { results: airingtoday },
      } = await tvApi.airingToday();

      this.setState({
        topRated,
        popular,
        airingtoday,
      });

      // console.log(topRated);
    } catch (error) {
      this.setState({
        error: "방송 정보를 찾을 수 없습니다.",
      });
    } finally {
      this.setState({
        loading: false,
      });
    }
  }
  // 함수형 컴포넌트에서 return에 해당된다.
  render() {
    const { topRated, popular, airingtoday, error, loading } = this.state;
    return (
      <TVPresenter
        topRated={topRated}
        popular={popular}
        airingtoday={airingtoday}
        error={error}
        loading={loading}
      />
    );
  }
}
