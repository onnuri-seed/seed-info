import Layout from '../components/Layout';

export default function SoonmoimLocation() {
  const base = import.meta.env.BASE_URL;

  const layoutImages = [
    { src: `${base}assets/images/순모임배치도.jpg`, alt: '순모임 배치도' },
    { src: `${base}assets/images/소극장배치도.jpg`, alt: '소극장 배치도' },
  ];

  const locationPhotos = [
    { src: `${base}assets/images/로케이션-외관.jpg`, alt: '온누리청소년센터 외관' },
    { src: `${base}assets/images/로케이션-2층갤러리카페-복도.png`, alt: '2층 갤러리카페 가는 길' },
    { src: `${base}assets/images/로케이션-2층갤러리카페1.png`, alt: '2층 갤러리카페1' },
    { src: `${base}assets/images/로케이션-3층소극장.png`, alt: '3층 소극장' },
    { src: `${base}assets/images/로케이션-3층프로그램실-복도.png`, alt: '3층 청소년 프로그램실 가는 길' },
    { src: `${base}assets/images/로케이션-3층프로그램실1.png`, alt: '3층 청소년 프로그램실1' },
  ];

  const headerProps = {
    title: '📍 순모임 장소',
    subtitle: 'CROSS SEED 3기 순모임 장소 안내',
    showBackButton: true,
    logoSize: 'small'
  };

  const footerProps = {
    title: 'CROSS SEED 3기 - 순모임 장소',
    subtitle: '온누리교회 | 장소 배정 및 로테이션 안내'
  };

  return (
    <Layout headerProps={headerProps} footerProps={footerProps}>
      <div className="info-banner">
        <h2>📍 3기 순모임 장소 안내</h2>
        <p>
          <strong>각 순별 순모임 장소 배정 및 로테이션 일정을 확인하세요!</strong><br />
          원활한 순모임 운영을 위해 장소 정보를 숙지해주시기 바랍니다.
        </p>
      </div>

      {/* 순모임 배치도 */}
      <div className="content-section" style={{ marginBottom: '30px' }}>
        <h2>🗺️ 순모임 배치도</h2>
        <p style={{ color: '#666', lineHeight: '1.8', marginBottom: '20px' }}>
          순 배정표와 소극장 좌석 배치도입니다. 이미지를 눌러 크게 확인하세요.
        </p>
        <div style={{ display: 'grid', gap: '20px', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }}>
          {layoutImages.map((img) => (
            <a
              key={img.src}
              href={img.src}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'block', background: 'white', padding: '12px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
            >
              <img
                src={img.src}
                alt={img.alt}
                style={{ width: '100%', height: 'auto', borderRadius: '8px', display: 'block' }}
              />
              <p style={{ textAlign: 'center', margin: '10px 0 0', color: '#666', fontSize: '14px' }}>{img.alt} 🔍</p>
            </a>
          ))}
        </div>
      </div>

      {/* 장소 안내 사진 */}
      <div className="content-section" style={{ marginBottom: '30px' }}>
        <h2>📸 장소 찾아가는 길</h2>
        <p style={{ color: '#666', lineHeight: '1.8', marginBottom: '20px' }}>
          순모임 장소를 찾기 어려우시면 아래 사진을 참고해주세요. 이미지를 눌러 크게 확인하세요.
        </p>
        <div style={{ display: 'grid', gap: '16px', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))' }}>
          {locationPhotos.map((img) => (
            <a
              key={img.src}
              href={img.src}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'block', background: 'white', padding: '8px', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}
            >
              <img
                src={img.src}
                alt={img.alt}
                style={{ width: '100%', height: '140px', objectFit: 'cover', borderRadius: '6px', display: 'block' }}
              />
              <p style={{ textAlign: 'center', margin: '8px 0 0', color: '#666', fontSize: '13px' }}>{img.alt}</p>
            </a>
          ))}
        </div>
      </div>

      {/* 순장님을 위한 안내 */}
      <div className="help-section">
        <h3>💡 순장님께 안내드립니다</h3>
        <ul style={{ lineHeight: '2', color: '#666' }}>
          <li>✅ 순모임 전 배정된 장소를 미리 확인해주세요.</li>
          <li>✅ 로테이션 일정이 있는 순은 변경 시점을 꼭 기억해주세요.</li>
          <li>✅ 장소를 이동할 때는 정리정돈을 부탁드립니다.</li>
          <li>✅ 순원들에게 장소 변경 사항을 미리 공지해주세요.</li>
          <li>✅ 장소 관련 문의사항은 다락방장에게 연락주세요.</li>
        </ul>
      </div>
    </Layout>
  );
}
