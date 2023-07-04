import styled from "styled-components";

export const StyledHomePage = styled.div`
  max-width: 100vw;
  width: 100%;
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
    align-items: center;
    justify-content: space-between;
    background-color: black;
    padding-right: 1.313rem;
    border-radius: 0.25rem;
  }

  .areaUser {
    margin-bottom: 2.3125rem;
    max-width: 90rem;
    width: 60%;
    height: 6.25rem;
    padding: 0.188rem 0.313rem 0rem 0.313rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #b8860b;
  }

  .hello {
    display: flex;
    flex-direction: column;
    gap: 0.625rem;
  }

  .areaWelcome {
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    font-size: 1.125rem;
    color: #ffffff;
  }

  .areaImageClient {
    display: flex;
    flex-direction: column;
    gap: 0.625rem;
  }

  .imageClient {
    width: 6rem;
    height: 5.938rem;
    border-radius: 100%;
    border: 0.156rem solid #ffffff;
  }

  .btViewProfile {
    background: #fff;
    height: 2.5rem;
    width: 3.5rem;
    border-radius: 0.438rem;
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    color: black;
  }

  .btViewProfile:hover {
    transform: scale(1.1);
    color: #b8860b;
  }

  .areaInformation {
    max-width: 90rem;
    width: 60%;
    max-height: 26rem;
    overflow: auto;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    margin-top: 2.3125rem;
    gap: 1.4375rem;
  }

  .areaInformation::-webkit-scrollbar {
    width: 0.5rem;
  }

  .areaInformation::-webkit-scrollbar-thumb {
    background-color: #ffffff;
  }

  .areaInformation::-webkit-scrollbar-thumb:hover {
    background-color: #ffffff;
  }

  .areaNoContact {
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 12.5rem;
    border-radius: 0.438rem;
    background: #212529;
  }

  .freseNoContact {
    border-radius: 0.438rem;
    text-align: center;
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    font-size: 1rem;
    color: #ffffff;
  }

  .areaContact {
    max-width: 90rem;
    width: 100%;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .bTContactHome {
    background-color: transparent;
    font-family: "Roboto", sans-serif;
    font-weight: 600;
    font-size: 1.125rem;
    color: black;
    background-color: #fff;
    width: 20%;
    border-radius: 10%;
  }
  .bTContactHome:hover {
    background-color: #b8860b;
  }

  .ulCardContact {
    margin-bottom: 0.625rem;
    max-width: 90rem;
    width: 100%;
    background: #b8860b;
    border-radius: 0.25rem;
    padding: 1.4375rem 1.625rem 1.4375rem 1.375rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(12.5rem, 1fr));
    justify-items: center;
    gap: 1rem;
  }

  .btComeBackLogin {
    max-width: 4.218125rem;
    width: 100%;
    height: 2.506875rem;
    padding: 0rem 1rem;
    border-radius: 0.25rem;
    border: 0.07625rem solid #ffffff;
    background-color: #fff;
    font-family: "Roboto", sans-serif;
    font-weight: 600;
    font-size: 0.75rem;
    color: black;
    margin-left: 96%;
  }

  .btComeBackLogin:hover {
    border: 0.07625rem solid rgba(0, 0, 0, 3) 100%;
    background-color: rgba(0, 0, 0, 3) 100%;
    color: #b8860b;
  }

  .btOpenModal {
    margin-right: 0.625rem;
    max-width: 2.030625rem;
    width: 100%;
    height: 2rem;
    background-color: #ffffff;
    font-size: 0.67rem;
    padding: 0.625rem 0.625rem;
    color: #212529;
  }

  .btOpenModal:hover {
    background-color: #ffffff;
    transform: scale(1.1);
  }

  @media (max-width: 56.25rem) {
    .areaUser {
      display: flex;
      align-items: center;
      width: 60%;
    }
    .areaContact {
      display: flex;
      align-items: center;
      gap: 0;
      width: 100%;
    }
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
    .logoKenziHub {
      max-width: 0.5956rem;
      width: 30%;
      height: 1.91438rem;
    }
    .areaUser {
      display: flex;
      align-items: center;
      width: 80%;
      flex-direction: column;
      gap: 0.625rem;
    }

    .areaInformation {
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      width: 80%;
      line-height: 1.75rem;
    }
    .ulCardContact {
      padding: 0.625rem 0.3125rem;
    }
    .imageClient {
      width: 4.375rem;
      height: 4.375rem;
      border-radius: 100%;
      border: 0.156rem solid #ffffff;
    }
    .btViewProfile {
      height: 1.5rem;
      width: 6.875rem;
      border-radius: 0.438rem;
      font-family: "Roboto", sans-serif;
      font-weight: 500;
      font-size: 0.625rem;
      color: #ffffff;
    }
    .btOpenModal {
      max-width: 2.030625rem;
      width: 100%;
      height: 1.875rem;
      background-color: #ffffff;
      font-size: 0.67rem;
      padding: 0.625rem 0.625rem;
      color: #212529;
    }
  }
`;
