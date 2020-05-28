import styled from "styled-components";

export const LoadingContainer = styled.div`
  display: flex;
  margin-top: 200px;
`;

export const Loading = styled.div`
  position: relative;
  position: relative;
  margin: 0 auto;
  h2 {
    font-family: "Roboto", sans-serif;
    color: #555252;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  margin-top: 30px;
`;

export const ContentContainer = styled.div`
  position: relative;
  margin: 0 auto;
`;

export const TitleContainer = styled.div`
  font-family: "Roboto", sans-serif;
  color: #555252;
  font-size: 25px;
  font-weight: 600;
  position: relative;
  margin: 20px 0 0 40px;
`;

export const RepoContainer = styled.li`
  text-align: left;
  border-bottom: 1px solid #e1e4e8;
  box-sizing: border-box;
  padding-top: 24px;
  padding-bottom: 24px;
  margin-right: 20px;
  list-style-type: none;
`;

export const RepoTitle = styled.div`
  display: flex;
`;

export const RepoName = styled.div`
  font-family: "Roboto", sans-serif;
  color: #555252;
  font-size: 18px;
  padding-bottom: 10px;
  margin-right: 5px;
  a {
    color: #1d82a1;
    :visited {
      color: #1d82a1;
    }
  }
`;

export const StarCountContainer = styled.div`
  display: flex;
  margin: 3px 0 0 8px;
`;

export const StarCount = styled.div`
  font-family: "Roboto", sans-serif;
  color: #555252;
  font-size: 14px;
  margin-left: 3px;
`;

export const DescriptionContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const RepoDescription = styled.div`
  font-family: "Roboto", sans-serif;
  color: #555252;
  font-size: 14px;
  margin-top: 8px;
  padding-right: 8px;
  white-space: normal;
`;

export const ButtonContainer = styled.div`
  display: flex;
`;

export const Icon = styled.img`
  height: 15px;
  width: 15px;
  padding-right: 3px;
  margin-bottom: 2px;
`;

export const ButtonText = styled.div`
  font-family: "Roboto", sans-serif;
  font-size: 12px;
  line-height: 20px;
  color: #000;
  padding-bottom: 2px;
`;

export const Button = styled.div`
  display: flex;
  height: 20px;
  padding: 7px 10px;
  background-color: #e6ebf1;
  cursor: pointer;
  text-align: left;
  border-radius: 5px;
`;
