import React, { useEffect, useState } from "react";
import { dbApi } from "../../api";
import Poster from "../../components/Poster";
import WishPresenter from "./WishPresenter";

const WishContainer = () => {
  // db에서 id 목록 호출
  // const list = dbApi.list();
  const movie_lst = dbApi.wishmovie();
  const show_lst = dbApi.wishshow();
  // console.log(list);
  // console.log(movie_lst);
  const a = show_lst.then(console.log);
  return "fin"; //<WishPresenter />;
};
export default WishContainer;
