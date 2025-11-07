import Layout from '../components/Layout';

export default function ICareGuide() {
  const headerProps = {
    title: '✅ 매주 해야하는 일',
    subtitle: '순모임 후 필수 체크리스트',
    showBackButton: true,
    logoSize: 'small'
  };

  const footerProps = {
    title: 'SNS 13기 순장사관학교 - 매주 해야하는 일',
    subtitle: '온누리교회 | 문서는 지속적으로 업데이트됩니다'
  };

  return (
    <Layout headerProps={headerProps} footerProps={footerProps}>
      <div className="info-banner">
        <h2>📢 중요 안내</h2>
        <p>
          <strong>순모임 후 반드시 아래 2가지를 완료해주세요!</strong><br />
          순원들을 잘 케어하고 순모임 현황을 공유하기 위해 꼭 필요한 작업입니다.
        </p>
      </div>

      {/* 첫 번째 필수 작업: 순모임 출첵 링크 */}
      <div className="content-section" style={{ background: 'linear-gradient(135deg, #E3F2FD 0%, #BBDEFB 100%)', padding: '30px', borderRadius: '12px', marginBottom: '30px' }}>
        <h2>📝 1. 순모임 출첵 링크 작성</h2>
        <p style={{ color: '#666', lineHeight: '1.8', marginBottom: '20px', fontSize: '16px' }}>
          순모임이 끝난 후 <strong>출석 체크 설문조사</strong>를 작성해주세요.<br />
          이 링크를 통해 순모임 참석 현황을 빠르게 공유할 수 있습니다.
        </p>
        
        <div className="download-section" style={{ background: 'white', padding: '25px', borderRadius: '8px', marginTop: '20px' }}>
          <h3 style={{ marginTop: 0 }}>🔗 출석 체크 링크</h3>
          <p style={{ marginBottom: '20px', color: '#666' }}>
            <strong style={{ color: '#FF6B6B' }}>⏳ 13기 출석 체크 링크는 현재 준비 중입니다.</strong><br />
            곧 업데이트될 예정이니 조금만 기다려주세요!
          </p>
          <button
            disabled
            className="btn"
            style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '10px', 
              fontSize: '16px', 
              fontWeight: 'bold',
              opacity: 0.5,
              cursor: 'not-allowed',
              background: '#ccc'
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ width: '24px', height: '24px' }}>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            준비 중
          </button>
        </div>
      </div>

      {/* 두 번째 필수 작업: iCare */}
      <div className="content-section">
        <h2>📱 2. iCare 정보 등록</h2>
        <p style={{ color: '#666', lineHeight: '1.8', marginBottom: '20px' }}>
          iCare는 온누리교회에서 제공하는 순모임 관리 시스템입니다.<br />
          순장님들은 순모임 후 다음 4가지 정보를 등록해주셔야 합니다.
        </p>

        <div className="features-grid">
          <div className="feature-card">
            <h3>✅ 출석체크</h3>
            <p>순모임 참석 순원들의 출석을 기록합니다.</p>
            <ul>
              <li>순원별 출석 여부 체크</li>
              <li>결석 사유 기록</li>
            </ul>
          </div>

          <div className="feature-card">
            <h3>🙏 기도제목</h3>
            <p>순모임에서 나눈 기도제목을 등록합니다.</p>
            <ul>
              <li>순원들의 기도 요청</li>
              <li>순모임 공동 기도제목</li>
            </ul>
          </div>

          <div className="feature-card">
            <h3>📊 순모임 현황</h3>
            <p>순모임 전반적인 상황을 기록합니다.</p>
            <ul>
              <li>순모임 분위기 및 진행상황</li>
              <li>참석 인원 및 현황</li>
            </ul>
          </div>

          <div className="feature-card">
            <h3>📝 특이사항</h3>
            <p>순모임 중 발생한 특별한 사항을 기록합니다.</p>
            <ul>
              <li>순원들의 중요한 소식</li>
              <li>관심이 필요한 사항</li>
            </ul>
          </div>
        </div>

        <div className="download-section" style={{ marginTop: '30px', background: 'linear-gradient(135deg, #E8F5E9 0%, #C8E6C9 100%)', padding: '25px', borderRadius: '8px' }}>
          <h3 style={{ marginTop: 0 }}>🔗 iCare 바로가기</h3>
          <p style={{ marginBottom: '20px' }}>아래 버튼을 클릭하여 iCare 시스템에 접속하세요:</p>
          <a
            href="https://www.ionnuri.org/index.do"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
            style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '10px', 
              fontSize: '16px', 
              fontWeight: 'bold',
              background: '#6B8E23'
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ width: '24px', height: '24px' }}>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            iCare 시스템 접속하기
          </a>
        </div>

        <div className="download-section" style={{ marginTop: '30px' }}>
          <h3>📥 iCare 상세 가이드 자료</h3>
          <p><strong>참고:</strong> 12기 자료를 임시로 열람 가능합니다. (13기 자료 준비 중)</p>
          <a
            href="/assets/documents/SNS 12기 _순장사관학교_서기 says (공유용).pdf"
            download
            className="btn"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            가이드 문서 다운로드
          </a>
          <a
            href="/assets/documents/SNS 12기 _순장사관학교_서기 says (공유용).pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            새 탭에서 보기
          </a>
        </div>
      </div>

      <div className="help-section">
        <h3>❓ 도움이 필요하신가요?</h3>
        <p>
          📧 순모임 출석 체크나 iCare 사용 중 궁금한 점이 있으면 서기에게 문의해주세요.
        </p>
        <p style={{ marginTop: '15px', paddingTop: '15px', borderTop: '1px solid #e0e0e0' }}>
          💡 <strong>Tip:</strong> 매주 순모임 후 이 페이지를 방문하여 2가지 필수 작업을 완료하세요!
        </p>
      </div>
    </Layout>
  );
}
