import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Center, Flex, InputBase } from "@mantine/core";
import Moocmaven from "../assets/logo-no-background.png";
import { useDispatch } from "react-redux";
import { postSearch } from "../redux/actions/searchActions";

const Search = ({ withLogo = true, lang }) => {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch();

  const inputRef = useRef();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(postSearch({ searchValue: inputRef.current.value, lang: lang }));
    navigate(`/results/${searchValue}/${lang}`);
  };

  return (
    <Center w={"50%"} mx={"auto"}>
      <form
        style={{ height: "75vh", marginTop: "7rem", width: "100%" }}
        onSubmit={handleOnSubmit}
      >
        {withLogo ? (
          <Flex p={15} justify={{ sm: "center" }}>
            <img src={Moocmaven} alt="" width="300px" />
          </Flex>
        ) : null}

        <InputBase
          radius="xl"
          ref={inputRef}
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />

        <Flex p={15} gap={5} justify={{ sm: "center" }}>
          <Button type="submit" variant="light">
            Search
          </Button>
          {/* <a href="https://www.google.com/doodles" target="_blank"> */}
          <Button variant="light">Feeling Lucky</Button>
          {/* </a> */}
        </Flex>
      </form>
    </Center>
  );
};

export default Search;
