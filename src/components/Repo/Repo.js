import React, { useState, useEffect } from "react";
import * as S from "../HomePage/homePage.styled";
import PropTypes from "prop-types";
import star from "../../assets/star.svg";

const Repo = ({ html_url, name, description }) => {
  const starredStorage = `star_${html_url}`;
  const [isStarred, setStarred] = useState(
    localStorage.getItem(starredStorage)
  );

  useEffect(() => {
    localStorage.setItem(starredStorage, isStarred);
  }, [starredStorage, isStarred]);
  const toggleStar = () => {
    setStarred((isStarred) => (isStarred === "true" ? "false" : "true"));
  };

  return (
    <>
      <S.RepoContainer>
        <S.RepoName>
          <a href={html_url}>{name}</a>
        </S.RepoName>
        <S.DescriptionContainer>
          <S.RepoDescription>{description}</S.RepoDescription>
          <S.Button onClick={() => toggleStar()}>
            <S.Icon src={star}></S.Icon>
            <S.ButtonText>
              {isStarred === "true" ? "Unstar" : "Star"}
            </S.ButtonText>
          </S.Button>
        </S.DescriptionContainer>
      </S.RepoContainer>
    </>
  );
};
Repo.propTypes = {
  html_url: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
};
export default Repo;
