import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { StyledHomePage } from "./style";
import { ContactCard } from "../../components/ContactCard";
import { ContactContext } from "../../contexts/ContactContext";
import { RegisterContactModal } from "../../components/RegisterContactModal";
import { EditContactModal } from "../../components/EditContactModal";
import { ContactsModal } from "../../components/ContactsModal";
import "react-toastify/dist/ReactToastify.css";
import logo from "../../images/logo.png";

export const Dashboard = () => {
  const { client, newLoading } = useContext(AuthContext);
  const {
    modalIsOpen,
    handleModal,
    modalIsEditOpen,
    modalIsContactsOpen,
    handleContactsModal,
  } = useContext(ContactContext);

  const navigate = useNavigate();

  const goLoginClick = () => {
    navigate("/");
    client.client = null;
    localStorage.removeItem("@TOKEN");
    localStorage.removeItem("@TOKENCLIENT");
  };

  const goProfilePage = () => {
    navigate("/profile");
  };
  return (
    <>
      {newLoading && <div>Carregando...</div>}
      {client && (
        <StyledHomePage>
          <img src={logo} alt="logo contact viewer" className="logoKenziHub" />
          <header className="headerHome">
            <button className="btComeBackLogin" onClick={goLoginClick}>
              Sair
            </button>
          </header>

          <div className="areaUser">
            <div className="hello">
              <h2 className="areaWelcome">Olá, {client.client.name}!</h2>
            </div>
            <div className="areaImageClient">
              <button className="btViewProfile" onClick={goProfilePage}>
                {" "}
                Ver perfil
              </button>
            </div>
          </div>

          <div className="areaInformation">
            <div className="areaContact">
              <button
                className="bTContactHome"
                onClick={() => handleContactsModal()}
              >
                Visualizar Contatos
              </button>
              <button
                type="button"
                className="btOpenModal"
                onClick={() => handleModal()}
              >
                +
              </button>
            </div>
            {client.contacts && client.contacts.length > 0 ? (
              <ul className="ulCardContact">
                {client.contacts.map((elem) => (
                  <ContactCard key={elem.id} elem={elem} />
                ))}
              </ul>
            ) : (
              <div className="areaNoContact">
                <h1 className="freseNoContact">
                  Você não ainda possui contatos cadastrados.
                </h1>
              </div>
            )}
          </div>
          {modalIsOpen && <RegisterContactModal />}
          {modalIsEditOpen && <EditContactModal />}
          {modalIsContactsOpen && <ContactsModal />}
        </StyledHomePage>
      )}
    </>
  );
};
