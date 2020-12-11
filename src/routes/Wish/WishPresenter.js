import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";

import Section from "../../components/Section";
import Loader from "../../components/Loader";
import Message from "../../components/Message";
import Poster from "../../components/Poster";

const Container = styled.div`
  padding: 20px;
`;

const Form = styled.form`
  margin-bottom: 50px;
  width: 100%;
  text-align: center;
`;

const Input = styled.input`
  all: unset;
  font-size: 28px;
  width: 100%;
`;

const DetailPresenter = ({ movie_lst, show_lst, error, loading }) => {
  return (
    <Container>
      <Helmet>
        <title>Wish | Bitflix</title>
      </Helmet>

      {loading ? (
        <Loader />
      ) : (
        <>
          {movieResults && movieResults.length > 0 && (
            <Section title="영화 검색 결과">
              {movie_lst.map((movie) => (
                <Poster
                  key={movie.id}
                  id={movie.id}
                  title={movie.original_title}
                  imageUrl={movie.poster_path}
                  rating={movie.vote_average}
                  isMovie={true}
                  year={
                    movie.release_date && movie.release_date.substring(0, 4)
                  }
                />
              ))}
            </Section>
          )}
          {tvResults && tvResults.length > 0 && (
            <Section title="TV 검색 결과">
              {show_lst.map((tv) => (
                <Poster
                  key={tv.id}
                  id={tv.id}
                  title={tv.original_name}
                  imageUrl={tv.poster_path}
                  rating={tv.vote_average}
                  isMovie={false}
                  year={tv.first_air_date && tv.first_air_date.substring(0, 4)}
                />
              ))}
            </Section>
          )}
          {error && <Message color={"e74c3c"} text={error} />}
          {tvResults &&
            movieResults &&
            tvResults.length === 0 &&
            movieResults.length === 0 && (
              <Message text="검색 결과가 없습니다." color={"#95a5a6"} />
            )}
        </>
      )}
    </Container>
  );
};

export default DetailPresenter;
