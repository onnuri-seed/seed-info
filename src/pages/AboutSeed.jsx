import Layout from '../components/Layout';

export default function AboutSeed() {
  const headerProps = {
    title: '🌱 About SEED',
    subtitle: 'SEED 그룹 소개',
    showBackButton: true,
    logoSize: 'small'
  };

  const footerProps = {
    title: 'SNS 13기 순장사관학교 - About SEED',
    subtitle: '온누리교회 | 믿음으로 산을 옮기는 그룹'
  };

  return (
    <Layout headerProps={headerProps} footerProps={footerProps}>
      {/* SEED 그룹이란? */}
      <div className="info-banner">
        <h2>🌱 SEED 그룹이란?</h2>
        <p style={{ fontSize: '18px', lineHeight: '1.8', marginTop: '20px' }}>
          <strong style={{ color: '#6B8E23', fontSize: '20px' }}>"믿음으로 산을 옮기는 그룹"</strong>
        </p>
        <p style={{ marginTop: '15px', fontSize: '15px', color: '#555', fontStyle: 'italic' }}>
          너희에게 거저 시 한 얼만 한 믿음이 있어도<br />
          이 산을 향해 '여기서 저기로 옮겨 가거라'하면 옮겨 갈 것이요,<br />
          너희가 못할 일이 없을 것이다. (마 17:20)
        </p>
      </div>

      {/* 순장의 역할 */}
      <div className="content-section" style={{ background: 'linear-gradient(135deg, #FFF9E6 0%, #FFE8CC 100%)', padding: '30px', borderRadius: '12px' }}>
        <h2>👨‍🏫 순장의 역할</h2>
        <p style={{ color: '#666', lineHeight: '1.8', marginBottom: '25px' }}>
          순장님은 SEED 그룹의 핵심 리더로서 세 가지 중요한 역할을 담당합니다.
        </p>

        <div style={{ background: 'white', padding: '25px', borderRadius: '8px', marginBottom: '20px' }}>
          <h3 style={{ color: '#6B8E23', marginTop: 0 }}>🙏 순모임 인도</h3>
          <p style={{ color: '#555', lineHeight: '1.8' }}>
            주일 순모임을 준비하고 인도합니다.<br />
            순모임은 한주간 삶에서 각자 드린 예배와 주일 교회에 함께 모여 드린 예배의 연장선입니다.
          </p>
        </div>

        <div style={{ background: 'white', padding: '25px', borderRadius: '8px', marginBottom: '20px' }}>
          <h3 style={{ color: '#6B8E23', marginTop: 0 }}>📖 QT & 기도</h3>
          <p style={{ color: '#555', lineHeight: '1.8' }}>
            매일 말씀(QT)과 기도로 하나님과 교제하며 살기<br />
            <strong>GQS (Group QT Sharing)</strong>으로 QT나눔을 꼭! 함께 나눕니다.
          </p>
        </div>

        <div style={{ background: 'white', padding: '25px', borderRadius: '8px' }}>
          <h3 style={{ color: '#6B8E23', marginTop: 0 }}>✨ 예센스</h3>
          <p style={{ color: '#555', lineHeight: '1.8' }}>
            목요일 에센스 티칭 및 나눔 참석하기<br />
            * 참여 어려울 시, 당일 3시까지 다락방장에게 사유와 함께 연락 & 예센스Q 제출 필수<br />
            * 주일 순모임 인도가 어려울 경우, 부순장이 대신 참석<br />
          </p>
        </div>
      </div>

      {/* 순모임 진행 흐름 */}
      <div className="content-section">
        <h2>🔄 순모임 진행 흐름</h2>
        <p style={{ color: '#666', lineHeight: '1.8', marginBottom: '25px' }}>
          순원들 참여여부 사전 확인 (토요일까지)
        </p>

        <div style={{ background: '#F5F5F5', padding: '25px', borderRadius: '8px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {/* 단계 1 */}
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: '#6B8E23', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', fontWeight: 'bold', flexShrink: 0 }}>1</div>
                <div style={{ width: '3px', height: '40px', background: '#C8E6C9', margin: '8px 0' }}></div>
              </div>
              <div style={{ paddingTop: '12px', flex: 1 }}>
                <h4 style={{ margin: '0 0 5px 0', color: '#6B8E23', fontSize: '17px' }}>시작기도</h4>
                <p style={{ margin: 0, color: '#666', fontSize: '14px' }}>순모임을 하나님께 맡기며 시작합니다</p>
              </div>
            </div>

            {/* 단계 2 */}
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: '#6B8E23', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', fontWeight: 'bold', flexShrink: 0 }}>2</div>
                <div style={{ width: '3px', height: '40px', background: '#C8E6C9', margin: '8px 0' }}></div>
              </div>
              <div style={{ paddingTop: '12px', flex: 1 }}>
                <h4 style={{ margin: '0 0 5px 0', color: '#6B8E23', fontSize: '17px' }}>한주간의 삶 나눔</h4>
                <p style={{ margin: 0, color: '#666', fontSize: '14px' }}>지난 한 주간의 삶과 은혜를 나눕니다</p>
              </div>
            </div>

            {/* 단계 3 */}
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: '#6B8E23', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', fontWeight: 'bold', flexShrink: 0 }}>3</div>
                <div style={{ width: '3px', height: '40px', background: '#C8E6C9', margin: '8px 0' }}></div>
              </div>
              <div style={{ paddingTop: '12px', flex: 1 }}>
                <h4 style={{ margin: '0 0 5px 0', color: '#6B8E23', fontSize: '17px' }}>말씀묵상</h4>
                <p style={{ margin: 0, color: '#666', fontSize: '14px' }}>주일 말씀을 함께 읽고 묵상합니다</p>
              </div>
            </div>

            {/* 단계 4 */}
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: '#6B8E23', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', fontWeight: 'bold', flexShrink: 0 }}>4</div>
                <div style={{ width: '3px', height: '40px', background: '#C8E6C9', margin: '8px 0' }}></div>
              </div>
              <div style={{ paddingTop: '12px', flex: 1 }}>
                <h4 style={{ margin: '0 0 5px 0', color: '#6B8E23', fontSize: '17px' }}>목상나눔</h4>
                <p style={{ margin: 0, color: '#666', fontSize: '14px' }}>말씀을 통해 받은 은혜와 깨달음을 나눕니다</p>
              </div>
            </div>

            {/* 단계 5 */}
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: '#6B8E23', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', fontWeight: 'bold', flexShrink: 0 }}>5</div>
                <div style={{ width: '3px', height: '40px', background: '#C8E6C9', margin: '8px 0' }}></div>
              </div>
              <div style={{ paddingTop: '12px', flex: 1 }}>
                <h4 style={{ margin: '0 0 5px 0', color: '#6B8E23', fontSize: '17px' }}>기도제목 나눔</h4>
                <p style={{ margin: 0, color: '#666', fontSize: '14px' }}>서로의 기도제목을 나누고 함께 기도합니다</p>
              </div>
            </div>

            {/* 단계 6 */}
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: '#6B8E23', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', fontWeight: 'bold', flexShrink: 0 }}>6</div>
              </div>
              <div style={{ paddingTop: '12px', flex: 1 }}>
                <h4 style={{ margin: '0 0 5px 0', color: '#6B8E23', fontSize: '17px' }}>마무리기도</h4>
                <p style={{ margin: 0, color: '#666', fontSize: '14px' }}>순모임을 감사하며 마무리합니다</p>
              </div>
            </div>
          </div>

          <div style={{ marginTop: '25px', padding: '20px', background: 'white', borderRadius: '8px', borderLeft: '4px solid #6B8E23' }}>
            <p style={{ margin: 0, color: '#333', lineHeight: '1.8' }}>
              💡 <strong>온누리 순모임은 GQS (Group QT Sharing)</strong>으로 QT나눔을 꼭!<br />
              최소 1시간 이상 충분한 나눔이 이루어질 수 있도록 인도해주세요!
            </p>
          </div>
        </div>
      </div>

    </Layout>
  );
}

