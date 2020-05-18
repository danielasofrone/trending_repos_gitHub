import styled from "styled-components";

export const Wrapper = styled.main`
  width: 100%;
  height: 100%;
`;

export const ContentWrapper = styled.li`
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

export const RepoContainer = styled.div`
  text-align: left;
  border-bottom: 1px solid #e1e4e8 !important;
  box-sizing: border-box;
  padding-top: 24px !important;
  padding-bottom: 24px !important;
  margin-right: 20px;
`;

export const RepoName = styled.div`
  flex: 1;
  font-family: "Roboto", sans-serif;
  color: #555252;
  font-size: 18px;
  padding-bottom: 10px;
  a {
    color: #1d82a1;
    :visited {
      color: #1d82a1;
    }
  }
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
  margin-top: 1px;
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
