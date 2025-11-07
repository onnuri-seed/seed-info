import Layout from '../components/Layout';

export default function SoonmoimLocation() {
  const headerProps = {
    title: '📍 순모임 장소',
    subtitle: 'SNS 13기 순모임 장소 안내',
    showBackButton: true,
    logoSize: 'small'
  };

  const footerProps = {
    title: 'SNS 13기 순장사관학교 - 순모임 장소',
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
            src="/assets/images/seed11m.jpg" 
            alt="순모임 장소 맵" 
            style={{ 
              maxWidth: '100%', 
              height: 'auto', 
              borderRadius: '8px'
            }} 
          />
          <div style={{ marginTop: '15px' }}>
            <a 
              href="/assets/images/seed11m.jpg" 
              download="순모임장소맵.jpg"
              className="btn"
              style={{ marginRight: '10px' }}
            >
              📥 이미지 다운로드
            </a>
            <a 
              href="/assets/images/seed11m.jpg" 
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              🔍 크게 보기
            </a>
          </div>
        </div>
      </div>

      {/* 층별 상세 안내 */}
      <div className="content-section">
        <h2>🏢 층별 상세 안내</h2>
        <p style={{ color: '#666', lineHeight: '1.8', marginBottom: '20px' }}>
          온누리교회 건물 내 순모임 장소는 2층, 3층, 4층에 배치되어 있습니다.
        </p>

        <div className="features-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
          {/* 2층 */}
          <div className="feature-card" style={{ background: 'linear-gradient(135deg, #E3F2FD 0%, #BBDEFB 100%)' }}>
            <h3>📍 2층</h3>
            <ul style={{ textAlign: 'left', lineHeight: '2', fontSize: '15px' }}>
              <li><strong>갤러리카페 1:</strong> 1다락</li>
              <li><strong>갤러리카페 2:</strong> 부부 다락방 고정</li>
            </ul>
          </div>

          {/* 3층 */}
          <div className="feature-card" style={{ background: 'linear-gradient(135deg, #E8F5E9 0%, #C8E6C9 100%)' }}>
            <h3>📍 3층</h3>
            <ul style={{ textAlign: 'left', lineHeight: '2', fontSize: '15px' }}>
              <li><strong>3층 소극장:</strong> 2다락 + 4개순</li>
              <li><strong>청소년 프로그램실 1:</strong> 1다락</li>
              <li><strong>청소년 프로그램실 2:</strong> 2다락 + 3개순 (5/4/6)</li>
            </ul>
          </div>

          {/* 4층 */}
          <div className="feature-card" style={{ background: 'linear-gradient(135deg, #FFF3E0 0%, #FFE0B2 100%)' }}>
            <h3>📍 4층</h3>
            <ul style={{ textAlign: 'left', lineHeight: '2', fontSize: '15px' }}>
              <li><strong>동아리활동실:</strong> 4개순</li>
            </ul>
          </div>
        </div>
      </div>

      {/* 로테이션 안내 */}
      <div className="content-section" style={{ background: 'linear-gradient(135deg, #F3E5F5 0%, #E1BEE7 100%)', padding: '30px', borderRadius: '12px' }}>
        <h2>🔄 로테이션 안내</h2>
        <p style={{ color: '#666', lineHeight: '1.8', marginBottom: '20px' }}>
          앞으로 로테이션을 돌리기 편하도록 아래와 같이 순별 장소를 배정했습니다.
        </p>

        <div style={{ background: 'white', padding: '25px', borderRadius: '8px' }}>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '15px'
          }}>
            <div style={{ padding: '15px', background: '#F5F5F5', borderRadius: '8px' }}>
              <h4 style={{ margin: '0 0 10px 0', color: '#6B8E23' }}>A순</h4>
              <p style={{ margin: 0 }}>📍 갤러리카페 1</p>
            </div>

            <div style={{ padding: '15px', background: '#F5F5F5', borderRadius: '8px' }}>
              <h4 style={{ margin: '0 0 10px 0', color: '#6B8E23' }}>B순, C순</h4>
              <p style={{ margin: 0 }}>📍 3층 소극장</p>
            </div>

            <div style={{ padding: '15px', background: '#F5F5F5', borderRadius: '8px' }}>
              <h4 style={{ margin: '0 0 10px 0', color: '#6B8E23' }}>D순</h4>
              <p style={{ margin: 0 }}>📍 청소년 프로그램실 1</p>
            </div>

            <div style={{ padding: '15px', background: '#F5F5F5', borderRadius: '8px' }}>
              <h4 style={{ margin: '0 0 10px 0', color: '#6B8E23' }}>E순, F순</h4>
              <p style={{ margin: 0 }}>📍 청소년 프로그램실 2</p>
            </div>

            <div style={{ padding: '15px', background: '#F5F5F5', borderRadius: '8px' }}>
              <h4 style={{ margin: '0 0 10px 0', color: '#6B8E23' }}>G순</h4>
              <p style={{ margin: 0 }}>📍 3층 소극장 (4개순)</p>
              <p style={{ margin: '5px 0 0 0', fontSize: '14px', color: '#666' }}>
                → 청소년 프로그램실 2 (2개순)
              </p>
            </div>

            <div style={{ padding: '15px', background: '#F5F5F5', borderRadius: '8px' }}>
              <h4 style={{ margin: '0 0 10px 0', color: '#6B8E23' }}>H순</h4>
              <p style={{ margin: 0 }}>📍 청소년 프로그램실 2 (2개순)</p>
              <p style={{ margin: '5px 0 0 0', fontSize: '14px', color: '#666' }}>
                → 동아리활동실 (4개순)
              </p>
            </div>
          </div>
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
          <li>✅ 장소 관련 문의사항은 서기에게 연락주세요.</li>
        </ul>
      </div>
    </Layout>
  );
}

