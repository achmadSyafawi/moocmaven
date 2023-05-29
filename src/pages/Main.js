import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Search from "../components/Search";
import { Container } from "@mantine/core";
import { useDispatch, useSelector } from "react-redux";
import { getLang } from "../redux/actions/searchActions";

export default function Main() {
  const dispatch = useDispatch();
  const [lang, setLang] = useState("arabic");
  const { getLangLoading, getLangData, getLangError } = useSelector(
    (state) => state.searchReducer
  );
  useEffect(() => {
    dispatch(getLang());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Navbar
        langData={getLangData}
        langLoading={getLangLoading}
        langError={getLangError}
        lang={lang}
        setLang={setLang}
      />
      <Search lang={lang} />
    </Container>
  );
}
