import styled from "styled-components";

export const StyledProfilePage = styled.div`
  max-width: 100vw;
  width: 100%;
  height: 100vh;
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  .headerHome {
    margin-top: 1.8125rem;
    margin-bottom: 1.773125rem;
    max-width: 90rem;
    width: 60%;
    display: flex;
    margin-left: 96%;
    align-items: center;
    justify-content: space-between;
    background-color: black;
    padding-right: 1.313rem;
    border-radius: 0.25rem;
  }

  .btComeBackHome {
    max-width: 4.218125rem;
    width: 100%;
    height: 2.506875rem;
    border-radius: 0.25rem;
    border: 0.07625rem solid #212529;
    background-color: #fff;
    font-family: "Roboto", sans-serif;
    font-weight: 600;
    font-size: 0.75rem;
    color: #000000;
  }

  .btComeBackHome:hover {
    background-color: #b8860b;
    color: #f8f9fa;
  }

  .imageClientProfile {
    width: 13rem;
    height: 12.938rem;
    border-radius: 100%;
    border: 0.156rem solid #051d40;
  }

  .areaClientProfile {
    margin-top: 1.8125rem;
    margin-bottom: 1.77313rem;
    max-width: 90rem;
    width: 60%;
    height: 19.438rem;
    padding-top: 0.938rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 0.25rem;
    gap: 0.438rem;
    background: transparent;
  }

  .areaDateHourProfile {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.938rem;
  }

  .clientProfile {
    font-family: "Roboto", sans-serif;
    font-weight: 600;
    font-size: 1.125rem;
    color: white;
  }

  .NameClientProfile {
    font-family: "Roboto", sans-serif;
    font-weight: 600;
    font-size: 1.375rem;
    color: white;
  }

  .btEditProfile {
    max-width: 12.438rem;
    width: 100%;
    height: 3.75rem;
    margin-top: 1.1875rem;
    background-color: #b8860b;
    border: 0.125rem solid black;
    border-radius: 0.5rem;
    padding: 0rem 2.5rem;
    font-family: "Roboto", sans-serif;
    font-weight: 600;
    font-size: 1rem;
    color: black;
  }

  .btEditProfile:hover {
    background: #fff;
    border: none;
  }

  .btDeleteProfile {
    max-width: 12.438rem;
    width: 100%;
    height: 3.75rem;
    margin-top: 1.1875rem;
    background-color: #b8860b;
    border: 0.125rem solid black;
    border-radius: 0.5rem;
    padding: 0rem 2.5rem;
    font-family: "Roboto", sans-serif;
    font-weight: 600;
    font-size: 1rem;
    color: black;
  }

  .btDeleteProfile:hover {
    background-color: #fff;
    border: none;
  }

  .areaButtonsProfile {
    width: 100%;
    padding: 0rem 0rem 0.688rem 0rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.625rem;
  }

  @media (max-width: 43.75rem) {
    .headerHome {
      margin-top: 1.8125rem;
      margin-bottom: 1.773125rem;
      max-width: 90rem;
      width: 80%;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .imageClientProfile {
      width: 6.375rem;
      height: 6.188rem;
    }
    .btComeBackHome {
      max-width: 3.21812rem;
      width: 100%;
      height: 1.50687rem;
      font-size: 0.75rem;
      text-align: center;
    }

    .areaDateHourProfile {
      width: 80%;
    }

    .areaClientProfile {
      width: 91%;
      line-height: 1.563rem;
      gap: 0rem;
    }

    .clientProfile {
      font-size: 0.813rem;
    }

    .NameClientProfile {
      font-size: 1rem;
    }

    .areaButtonsProfile {
      flex-direction: column;
      gap: 0rem;
    }

    .btEditProfile {
      height: 2.938rem;
    }
    .btDeleteProfile {
      height: 2.813rem;
    }
  }
`;
