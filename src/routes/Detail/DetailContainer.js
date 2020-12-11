import React, { useCallback, useEffect, useState } from "react";
import { dbApi, moviesApi, tvApi } from "../../api";
import DetailPresenter from "./DetailPresenter";

const DetailContainer = (props) => {
  const {
    location: { pathname },
  } = props;

  const [State, setState] = useState({
    result: null,
    error: null,
    loading: true,
  });
  const isMovie = pathname.includes("/movie/");
  useEffect(() => {
    const contain = async () => {
      // id 가지고 오기 -> match.params
      // 만약에 id가 안들어오면 HOME으로 강제 이동 -> history의 push함수가 해준다.
      // 사용자의 요청을 서버가 받고, 재요청 하도록 하는 것을 redirect라고 한다.
      const {
        match: {
          params: { id },
        },
        history: { push },
      } = props;

      const parsedId = parseInt(id);

      // 올바르지 않은 id라면
      if (isNaN(parsedId)) {
        // Home으로 redirect
        return push("/");
      }

      let result = null;

      try {
        if (isMovie) {
          ({ data: result } = await moviesApi.movieDetail(parsedId));
        } else {
          ({ data: result } = await tvApi.showDetail(parsedId));
          console.log(result);
        }
      } catch (error) {
        this.setState({
          error: "아무것도 찾을 수가 없어요",
        });
      } finally {
        setState({ loading: false, result });
      }
    };
    contain();
  }, []);

  const handleClick = useCallback(() => {
    const {
      match: { params },
    } = props;
    const name = pathname.split("/");

    if (isMovie) {
      dbApi.clickMovie(params["id"], name[1]);
      console.log(params);
    } else {
      dbApi.clickShow(params["id"], name[1]);
    }
  }, []);
  const { result, error, loading } = State;
  // console.log(result);

  return (
    <DetailPresenter
      result={result}
      error={error}
      loading={loading}
      handleClick={handleClick}
    />
  );
};
export default DetailContainer;
