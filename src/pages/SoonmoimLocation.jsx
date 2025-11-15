import Layout from '../components/Layout';


export default function SoonmoimLocation() {
  const imgUrl = import.meta.env.BASE_URL + 'assets/images/seed11m-2.png';
  const imgUrl2 = import.meta.env.BASE_URL + 'assets/images/3f.png';

  const headerProps = {
    title: '📍 순모임 장소',
    subtitle: 'SNS 13기 순모임 장소 안내',
    showBackButton: true,
    logoSize: 'small'
  };

  const footerProps = {
    title: 'SNS SEED 13기 - 순모임 장소',
    subtitle: '온누리교회 | 장소 배정 및 로테이션 안내'
  };

  return (
    <Layout headerProps={headerProps} footerProps={footerProps}>
      <div className="info-banner">
        <h2>📍 13기 순모임 장소 안내</h2>
        <p>
          <strong>각 순별 순모임 장소 배정 및 로테이션 일정을 확인하세요!</strong><br />
          원활한 순모임 운영을 위해 장소 정보를 숙지해주시기 바랍니다.
        </p>
      </div>

      {/* 순모임 장소 맵 이미지 */}
      <div className="content-section" style={{ textAlign: 'center', marginBottom: '30px' }}>
        <h2>🗺️ 순모임 장소 맵</h2>
        <div style={{ 
          background: 'white', 
          padding: '20px', 
          borderRadius: '12px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          marginTop: '20px'
        }}>
          <img 
            src={imgUrl} 
            alt="순모임 장소 맵" 
            style={{ 
              maxWidth: '100%', 
              height: 'auto', 
              borderRadius: '8px'
            }} 
          />
          <div style={{ marginTop: '15px' }}>
            <a 
              href={imgUrl} 
              download="순모임장소맵.jpg"
              className="btn"
              style={{ marginRight: '10px' }}
            >
              📥 이미지 다운로드
            </a>
            <a 
              href={imgUrl} 
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              🔍 크게 보기
            </a>
          </div>
        </div>
          <img 
            src={imgUrl2} 
            alt="순모임 장소 맵" 
            style={{ 
              maxWidth: '100%', 
              height: 'auto', 
              borderRadius: '8px'
            }} 
          />
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

