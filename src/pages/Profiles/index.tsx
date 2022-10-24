import "./Profiles.css";
import "./ProfileAvatars.css";

const Profiles = () => {
  return (
    <>
      <div className="profile-page-container">
        <header>
          <h1>
            Mia<span>Play</span>
          </h1>
        </header>

        <main className="profile-selection-container">
          <div className="profile-selection-row">
            <h2 className="profile-selection-title">select profile</h2>
          </div>

          <div className="profile-selection-row">
            <div className="profile-selection-avatar-list-container">
              <div className="profile-selection-avatar-container">
                <div className="profile-selection-avatar profile-selection-avatar-1"></div>
                <div className="profile-selection-avatar-name">CAMILA</div>
              </div>

              <div className="profile-selection-avatar-container">
                <div className="profile-selection-avatar profile-selection-avatar-2"></div>
                <div className="profile-selection-avatar-name">FULANA</div>
              </div>

              <div className="profile-selection-avatar-container">
                <div className="profile-selection-avatar profile-selection-avatar-3"></div>
                <div className="profile-selection-avatar-name">FULANA 2</div>
              </div>

              <div className="profile-selection-avatar-container">
                <div className="profile-selection-avatar profile-selection-avatar-4"></div>
                <div className="profile-selection-avatar-name">FULANA 3</div>
              </div>

              <div className="profile-selection-new">
                <div className="profile-selection-new-icon clickable">
                  <i className="bi bi-plus-circle"></i>
                </div>
              </div>
            </div>
          </div>

          <div className="profile-selection-row">
            <div className="profile-selection-edit-icon clickable">
              <i className="bi bi-pencil"></i>
            </div>
          </div>
        </main>

        <footer className="profile-page-footer">
          <h1 className="footer-title">
            Mia<span>Play</span>
          </h1>
          <div className="profile-page-footer-logout clickable">
            <i className="bi bi-x-circle"></i>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Profiles;
