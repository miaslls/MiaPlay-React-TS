import "./Account.css";
import "./AccountAvatars.css";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

const Account = () => {
  return (
    <>
      <div className="generic-page-container">
        <div className="wrapper">
          <Header />

          <main className="account-container">
            <section className="account-section">
              <div className="account-section-header">
                <h2>account</h2>
              </div>

              <div className="account-info">
                <div className="account-info-row">
                  <h3 className="account-name">Camila Salles</h3>
                  <div className="account-permission-icon">
                    <i className="bi bi-person-check"></i>
                  </div>
                </div>

                <div className="account-info-row">
                  <div className="account-info-icon">
                    <i className="bi bi-person-badge"></i>
                  </div>
                  <div className="account-info-text">351.476.378-00</div>
                </div>

                <div className="account-info-wrapper">
                  <div className="account-info-row">
                    <div className="account-info-icon">
                      <i className="bi bi-key"></i>
                    </div>
                    <input
                      className="account-password-input"
                      name="oldPassword"
                      type="password"
                      placeholder="old password"
                    />
                  </div>

                  <div className="account-info-row">
                    <div className="account-info-icon">
                      <i className="bi bi-key-fill"></i>
                    </div>
                    <input
                      className="account-password-input"
                      name="newPassword"
                      type="password"
                      placeholder="new password"
                    />

                    <div className="account-password-options">
                      <div className="account-info-icon clickable">
                        <i className="bi bi-check-circle"></i>
                      </div>
                      <div className="account-info-icon clickable">
                        <i className="bi bi-x-circle"></i>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="account-info-row">
                  <div className="account-info-icon">
                    <i className="bi bi-envelope"></i>
                  </div>
                  <div className="account-info-text">
                    camilasalles@gmail.com
                  </div>
                  <div className="account-info-icon clickable">
                    <i className="bi bi-pencil"></i>
                  </div>
                </div>
              </div>
            </section>

            <section className="account-section">
              <div className="account-section-header">
                <h2>profiles</h2>
                <div className="account-section-edit-icon clickable">
                  <i className="bi bi-pencil"></i>
                </div>
              </div>

              <div className="account-avatar-list-container">
                <div className="account-avatar-container">
                  <div className="account-avatar account-avatar-1"></div>
                  <div className="account-avatar-name">CAMILA</div>
                </div>

                <div className="account-avatar-container">
                  <div className="account-avatar account-avatar-2"></div>
                  <div className="account-avatar-name">FULANA</div>
                </div>

                <div className="account-avatar-container">
                  <div className="account-avatar account-avatar-3"></div>
                  <div className="account-avatar-name">FULANA 2</div>
                </div>

                <div className="account-avatar-container">
                  <div className="account-avatar account-avatar-4"></div>
                  <div className="account-avatar-name">FULANA 3</div>
                </div>

                <div className="account-new-profile">
                  <div className="account-new-profile-icon clickable">
                    <i className="bi bi-plus-circle"></i>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Account;
