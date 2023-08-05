import styled from "styled-components";

export const StyleCardContact = styled.li`
  max-width: 18.313rem;
  width: 100%;
  height: 12.0625rem;
  padding: 0.8125rem 0.38875rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-repeat: no-repeat;
  background-color: #fff;
  background-position: center;
  background-size: cover;
  border-radius: 0.25rem;
  color: black;

  .areaClient {
    max-width: 18.75rem;
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .areaDateTime {
    max-width: 18.75rem;
    width: 100%;
    display: flex;
  }

  .registerDate {
    margin-top: 0.313rem;
    margin-bottom: 0.313rem;
    font-family: "Roboto", sans-serif;
    font-weight: 600;
    font-size: 0.888125rem;
    color: #333333;
  }

  .areabuttons {
    display: flex;
    flex-wrap: wrap;
    margin-left: 7rem;
    gap: 5rem;
  }

  .identification {
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    font-size: 0.76125rem;
    color: #222222;
    line-height: 1.125rem;
  }

  .emphasis {
    color: #45214a;
  }

  .btDelete {
    background-image: url("public/images/trash2.png");
    background-position: center;
    background-repeat: no-repeat;
    width: 2.23438rem;
    height: 3rem;
  }

  .btDelete:hover {
    transform: scale(1.1);
    transition: scale(1.1);
  }

  .btEdit {
    background-image: url("public/images/lápis.png");
    background-position: center;
    background-repeat: no-repeat;
    width: 2.638rem;
    height: 2.438rem;
  }

  .btEdit:hover {
    transform: scale(1.1);
    transition: scale(1.1);
  }

  @media (max-width: 43.75rem) {
    padding: 0.625rem 0.3125rem;

    .areabuttons {
      gap: 0.1875rem;
    }
  }
`;
