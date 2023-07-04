import styled from "styled-components";

export const StyledLoginPage = styled.div`
  max-width: 100vw;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3.875rem;
  background-color: black;
  padding: 0rem 0.625rem 0rem 0.625rem;

  .secLogin {
    margin-bottom: 0.625rem;
    max-width: 31.25rem;
    width: 100%;
    height: 33.8125rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 0.5rem;
    border: 0.1125rem solid #333333;
    padding: 1.625rem 1.5rem;
    background-color: #ffffff;
  }

  .titleLogin {
    margin-bottom: 0.875rem;
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    font-size: 1.125rem;
    text-align: center;
    color: #333333;
  }

  .formLogin {
    max-width: 28.25rem;
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .lbLogin {
    margin-bottom: 0.3125rem;
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 0.75rem;
    color: #333333;
  }

  .iptLogin {
    max-width: 28.25rem;
    width: 100%;
    height: 3.813rem;
    margin-bottom: 0.9375rem;
    padding: 1.25rem 0.9375rem;
    margin-bottom: 0.3125rem;
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 1rem;
    background-color: #f5f5f5;
    color: #333333;
    outline: none;
    border: 0.1125rem solid #333333;
    border-radius: 0.5rem;
  }

  .iptLogin::placeholder {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  .iptLogin:focus {
    border: 0.1125rem solid #333333;
    border-radius: 0.5rem;
  }

  .iptLogin:hover {
    border: 0.1125rem solid #333333;
    border-radius: 0.5rem;
  }

  .btLogar {
    max-width: 28.25rem;
    width: 100%;
    height: 3.75rem;
    margin-top: 1.1875rem;
    margin-bottom: 1.1875rem;
    background-color: #b8860b;
    border-radius: 0.5rem;
    padding: 0rem 2.5rem;
    font-family: "Roboto", sans-serif;
    font-weight: 600;
    font-size: 1rem;
    color: #ffffff;
  }

  .btLogar:hover {
    background: black;
  }

  .messageCreateRegister {
    margin-top: 0.625rem;
    margin-bottom: 1.3125rem;
    width: 100%;
    height: 2.375rem;
    text-align: center;
    line-height: 1.125rem;
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 0.875rem;
    color: #333333;
  }

  .btGoToRegister {
    max-width: 28.25rem;
    width: 100%;
    height: 3.75rem;
    margin-top: 1.1875rem;
    margin-bottom: 1.1875rem;
    background-color: black;
    border-radius: 0.5rem;
    padding: 0rem 2.5rem;
    font-family: "Roboto", sans-serif;
    font-weight: 600;
    font-size: 1rem;
    color: #ffffff;
  }

  .btGoToRegister:hover {
    background-color: #b8860b;
    color: #000000;
    border: 0.063rem solid #343b41;
  }

  .secApresentation {
    max-width: 31.25rem;
    width: 100%;
    height: 34.8125rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1.625rem 1.5rem;
    background-color: black;
  }

  .areaImageAndMessage {
    margin-top: 1.875rem;
    margin-bottom: 1.875rem;
    max-width: 23.5625rem;
    width: 100%;
    height: 5.9375rem;
    display: flex;
    padding: 1.0625rem 0rem 1.125rem 0.875rem;
    gap: 1.1875rem;
    background-color: #ffffff;
    border: 0.0625rem solid #e0e0e0;
    border-radius: 0.3125rem;
  }

  .areaError {
    color: #e60000;
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    font-size: 0.75rem;
  }

  .logo {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 67.5rem) {
    gap: 0rem;
    flex-direction: column-reverse;
    height: auto;

    .secApresentation {
      height: auto;
    }

    .messageCreateRegister {
      margin-top: 0.875rem;
    }
  }

  @media (max-width: 28.125rem) {
    .messageCreateRegister {
      margin-left: 1rem;
      width: 89%;
    }
  }
`;
