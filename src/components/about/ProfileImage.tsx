import './About.css';

export function ProfileImage() {
  return (
    <div className="profile-image-container">
      <div className="profile-image-wrapper">
        <div className="profile-image-frame">
          <img
            src={import.meta.env.BASE_URL + 'assets/profile.jpeg'}
            alt="Dong-You Tsou"
            className="profile-image"
          />
        </div>
      </div>
    </div>
  );
}
