import { Link } from 'react-router-dom';

export default function Header({ title, subtitle, showBackButton = false, logoSize = 'large' }) {
  return (
    <header>
      {showBackButton && (
        <Link to="/" className="nav-back">← 메인으로 돌아가기</Link>
      )}
      <img
        src="/assets/images/S_03.png"
        alt="SEED Logo"
        className={`logo ${logoSize === 'small' ? 'logo-small' : ''}`}
      />
      <h1>{title}</h1>
      <p className={`subtitle ${logoSize === 'small' ? 'subtitle-small' : ''}`}>
        {subtitle}
      </p>
    </header>
  );
}
