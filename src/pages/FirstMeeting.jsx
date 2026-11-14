import Layout from '../components/Layout';

export default function FirstMeeting() {
  const handleShare = async (title, url) => {
    const shareUrl = window.location.origin + url;
    const shareText = `${title} - CROSS SEED 3기`;

    if (navigator.share) {
      try {
        await navigator.share({
          title: shareText,
          text: `${shareText}\n\n`,
          url: shareUrl
        });
      } catch (error) {
        if (error.name !== 'AbortError') {
          console.error('공유 실패:', error);
          copyToClipboard(shareUrl, title);
        }
      }
    } else {
      copyToClipboard(shareUrl, title);
    }
  };

  const copyToClipboard = (url, title) => {
    navigator.clipboard.writeText(url).then(() => {
      alert(`${title} 링크가 클립보드에 복사되었습니다!\n\n카카오톡이나 다른 앱에 붙여넣기 하여 공유하세요.`);
    }).catch(() => {
      alert('링크 복사에 실패했습니다. 다시 시도해주세요.');
    });
  };

  const headerProps = {
    title: '💝 설레는 첫만남',
    subtitle: '첫 순모임을 위한 가이드',
    showBackButton: true,
    logoSize: 'small'
  };

  const footerProps = {
    title: 'CROSS SEED 3기 - 첫 순모임 가이드',
    subtitle: '온누리교회 | 서로를 알아가는 소중한 시간'
  };

  return (
    <Layout headerProps={headerProps} footerProps={footerProps}>
      <div className="info-banner">
        <h2>💝 첫 순모임을 준비하시나요?</h2>
        <p>
          <strong>서로를 알아가고 친밀해지는 특별한 시간!</strong><br />
          아래 가이드를 활용하여 순원들과 깊이 있는 나눔을 시작해보세요.
        </p>
      </div>

      {/* 나는 어떤 사람인가요? */}
      <div className="content-section">
        <h2>✨ 나는 어떤 사람인가요?</h2>
        <p style={{ color: '#666', lineHeight: '1.8', marginBottom: '20px' }}>
          서로를 알아가기 위한 기본 질문들입니다. 편안하게 자신을 소개해주세요!
        </p>

        <div style={{ display: 'grid', gap: '20px', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', marginBottom: '20px' }}>
          <img
            src={`${import.meta.env.BASE_URL}resources/firstShare1.jpg`}
            alt="나는 어떤 사람인가요 1"
            style={{
              width: '100%',
              height: 'auto',
              borderRadius: '8px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
            }}
          />
          <img
            src={`${import.meta.env.BASE_URL}resources/firstShare2.jpeg`}
            alt="나는 어떤 사람인가요 2"
            style={{
              width: '100%',
              height: 'auto',
              borderRadius: '8px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
            }}
          />
        </div>
      </div>
      
      {/* 추가 질문 */}
      <div className="content-section">
        <h2>💭 추가 질문</h2>
        <p style={{ color: '#666', lineHeight: '1.8', marginBottom: '20px' }}>
          순모임에 대한 기대와 바람을 나눠주세요!
        </p>

        <div className="features-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
          <div className="feature-card" style={{ background: 'linear-gradient(135deg, #E8F5E9 0%, #C8E6C9 100%)' }}>
            <h3>🎯 질문 1</h3>
            <p>이번 순/다락방에서 기대하는 것과 하고 싶은 것이 있다면?</p>
          </div>

          <div className="feature-card" style={{ background: 'linear-gradient(135deg, #E3F2FD 0%, #BBDEFB 100%)' }}>
            <h3>🎉 질문 2</h3>
            <p>나중에 아웃팅하면 하고 싶은 것?</p>
          </div>
        </div>
      </div>

      {/* 순모임 십계명 */}
      <div className="content-section" style={{ background: 'linear-gradient(135deg, #F3E5F5 0%, #E1BEE7 100%)', padding: '30px', borderRadius: '12px' }}>
        <h2>📜 SNS/CROSS 순모임 십계명</h2>
        <p style={{ color: '#666', lineHeight: '1.8', marginBottom: '20px' }}>
          건강한 순모임을 위한 약속들을 함께 확인해보세요!
        </p>

        <ol style={{ lineHeight: '1.8', fontSize: '15px', paddingLeft: '20px', color: '#333' }}>
          <li style={{ marginBottom: '16px' }}>
            <strong>주일 예배를 드린 후 순모임에 참여합니다.</strong>
            <p style={{ margin: '6px 0 0', color: '#666' }}>예배 없이 순모임에만 참석하는 것은 지양합니다.</p>
          </li>
          <li style={{ marginBottom: '16px' }}>
            <strong>약속된 순모임 시간을 지킵니다.</strong>
            <p style={{ margin: '6px 0 0', color: '#666' }}>참여가 어렵거나 늦게 참석하거나 일찍 자리를 떠나야 하는 경우에는 미리 순장님께 알려주세요.</p>
          </li>
          <li style={{ marginBottom: '16px' }}>
            <strong>말씀 중심의 묵상과 삶을 나눕니다.</strong>
            <p style={{ margin: '6px 0 0', color: '#666' }}>기도로 시작하고, 말씀을 통해 받은 은혜와 삶을 함께 나누어주세요. 마무리에는 서로를 위해 기도해주세요. 순모임 시간에는 불필요한 휴대폰 사용은 자제해 주세요.</p>
          </li>
          <li style={{ marginBottom: '16px' }}>
            <strong>순모임 중에는 서로를 배려해주세요.</strong>
            <p style={{ margin: '6px 0 0', color: '#666' }}>서로의 나눔에 귀를 기울이고, 모든 순원이 고르게 나눌 수 있도록 배려해주세요. 순모임에서 나눈 개인적인 이야기와 기도제목은 모임 밖으로 옮기지 말아주세요. 공격적인 언행과 비난은 삼가주세요.</p>
          </li>
          <li style={{ marginBottom: '16px' }}>
            <strong>이성 간에 오해의 소지가 있는 언행은 삼가주세요.</strong>
            <p style={{ margin: '6px 0 0', color: '#666' }}>밤 10시 이후에는 개인적인 연락을 지양하고, 순모임 안팎에서 서로에게 오해나 부담을 줄 수 있는 언행은 삼가주세요.</p>
          </li>
          <li style={{ marginBottom: '16px' }}>
            <strong>순모임은 모두가 함께 준비합니다.</strong>
            <p style={{ margin: '6px 0 0', color: '#666' }}>순모임 세팅 및 정리, 간식 준비가 한 사람에게 책임이 집중되지 않도록 자발적으로 참여하고 기쁘게 협력해 주세요.</p>
          </li>
          <li style={{ marginBottom: '16px' }}>
            <strong>순 단톡방은 순장님이 운영합니다.</strong>
            <p style={{ margin: '6px 0 0', color: '#666' }}>순장님의 공지와 안내에 적극적으로 응답해주세요. 공동체 공지 외에 정보나 자료를 공유하고자 할 때에는 사전에 순장님의 동의를 받아주세요.</p>
          </li>
          <li style={{ marginBottom: '16px' }}>
            <strong>순과 공동체 안에서 금전 거래를 하지 않습니다.</strong>
            <p style={{ margin: '6px 0 0', color: '#666' }}>개인 판매, 보험 및 다단계 가입 권유, 금전 대여와 차용, 보증 등 모든 종류의 금전 거래를 하지 않습니다.</p>
          </li>
          <li style={{ marginBottom: '16px' }}>
            <strong>장기 무단결석 시 공동체 운영 기준을 따릅니다.</strong>
            <p style={{ margin: '6px 0 0', color: '#666' }}>순장님께 명확한 사유를 알리지 않은 채 5주 이상 순모임에 무단결석하고 순장님의 연락에도 응답하지 않을 경우, 순 단톡방 퇴장 및 제적 등 공동체의 후속 안내를 따라주세요.</p>
            <p style={{ margin: '6px 0 0', color: '#666' }}>제적 후 6개월 이내에는 공동체에 재등록할 수 없습니다. 다만 순장, 다락방장, 그룹장, 교역자, 양육MC 전원이 동의한 경우에는 예외적으로 재등록할 수 있습니다.</p>
          </li>
          <li>
            <strong>공동체 리더십과 교역자의 안내를 따라주세요.</strong>
            <p style={{ margin: '6px 0 0', color: '#666' }}>하나님 안에서 아름답고 질서 있는 공동체를 함께 만들어주세요.</p>
          </li>
        </ol>
      </div>

      {/* WE. 너와 내가 하나되는 시간 - QR은 바로 스캔되도록 크게 인라인 노출 */}
      <div className="content-section" style={{ textAlign: 'center' }}>
        <h2>🔗 WE. 너와 내가 하나되는 시간</h2>
        <p style={{ color: '#666', lineHeight: '1.8', marginBottom: '20px' }}>
          QR코드를 스캔하거나, 아래 버튼으로 바로 접속해서 참여해보세요.
        </p>
        <img
          src={`${import.meta.env.BASE_URL}assets/images/we-qr.jpeg`}
          alt="WE. 너와 내가 하나되는 시간 QR"
          style={{ maxWidth: '320px', width: '100%', height: 'auto', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
        />
        <div style={{ marginTop: '15px' }}>
          <a
            href="https://m.site.naver.com/2kqng"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
            style={{ background: '#4A90E2' }}
          >
            🔗 바로 접속하기
          </a>
        </div>
      </div>

      {/* 순장사관학교 자료 - 유효기간 있는 한시 자료라 별도 안내 */}
      <div className="content-section" style={{ background: 'linear-gradient(135deg, #FFF3E0 0%, #FFE0B2 100%)', padding: '30px', borderRadius: '12px' }}>
        <h2>⏳ 순장사관학교 자료 (한시 제공)</h2>
        <p style={{ color: '#666', lineHeight: '1.8', marginBottom: '20px' }}>
          순장사관학교 1주차 자료입니다. <strong style={{ color: '#E64A19' }}>유효기간: ~2026. 11. 28</strong>까지만 제공되니 기간 내에 꼭 받아두세요.
        </p>
        <div style={{ background: 'white', padding: '20px', borderRadius: '8px' }}>
          <a href={`${import.meta.env.BASE_URL}resources/순장사관학교 1주차.pdf`} download className="btn-download">
            📥 다운로드
          </a>
          <a href={`${import.meta.env.BASE_URL}resources/순장사관학교 1주차.pdf`} target="_blank" rel="noopener noreferrer" className="btn-view">
            👁️ 열어보기
          </a>
          <button
            onClick={() => handleShare('순장사관학교 1주차', `${import.meta.env.BASE_URL}resources/순장사관학교 1주차.pdf`)}
            className="btn-view"
            style={{ background: '#1EC800', color: 'white' }}
          >
            💬 공유하기
          </button>
        </div>
      </div>

      {/* 순모임 ABC (순모임 콘텐츠에서 이동) */}
      <div className="content-section">
        <h2>📚 순모임 ABC</h2>
        <p style={{ color: '#666', lineHeight: '1.8', marginBottom: '20px' }}>
          순모임의 기본을 담은 가이드북입니다. 순모임 운영의 기초를 다지는 데 도움이 됩니다.
        </p>
        <div className="resources-grid">
          <div className="resource-item">
            <div className="resource-icon">📚</div>
            <span className="resource-type">PDF</span>
            <h3>순모임 ABC</h3>
            <p>순모임의 기본을 담은 가이드북입니다. 순모임 운영의 기초를 다지는 데 도움이 됩니다.</p>
            <a href={`${import.meta.env.BASE_URL}resources/순모임ABC.pdf`} download className="btn-download">
              📥 다운로드
            </a>
            <a href={`${import.meta.env.BASE_URL}resources/순모임ABC.pdf`} target="_blank" rel="noopener noreferrer" className="btn-view">
              👁️ 열어보기
            </a>
            <button
              onClick={() => handleShare('순모임 ABC', `${import.meta.env.BASE_URL}resources/순모임ABC.pdf`)}
              className="btn-view"
              style={{ background: '#1EC800', color: 'white' }}
            >
              💬 공유하기
            </button>
          </div>
        </div>
      </div>

      {/* 순장님을 위한 팁 */}
      <div className="help-section">
        <h3>💡 순장님을 위한 팁</h3>
        <ul style={{ lineHeight: '2', color: '#666' }}>
          <li>✅ 모든 질문에 답할 필요는 없습니다. 편안한 분위기를 만들어주세요.</li>
          <li>✅ 순장님이 먼저 솔직하게 나누면 순원들도 마음을 열기 쉽습니다.</li>
          <li>✅ 경청하고 공감하며, 판단하지 않는 안전한 공간을 만들어주세요.</li>
          <li>✅ 시간 배분을 잘 해서 모든 순원이 골고루 나눌 수 있도록 해주세요.</li>
          <li>✅ 첫 만남이 부담스럽지 않도록 즐겁고 편안한 분위기를 유지해주세요!</li>
        </ul>
      </div>
    </Layout>
  );
}

