import Layout from '../components/Layout';

export default function SoonmoimContents() {
  const headerProps = {
    title: '🎯 순모임 콘텐츠',
    subtitle: '순모임 운영을 위한 필수 자료',
    showBackButton: true,
    logoSize: 'small'
  };

  const footerProps = {
    title: 'SNS 13기 순장사관학교 - 순모임 콘텐츠',
    subtitle: '온누리교회 | 더 많은 자료가 계속 추가됩니다'
  };

  const handleShare = async (title, url) => {
    const shareUrl = window.location.origin + url;
    const shareText = `${title} - SNS 13기 순장사관학교`;

    // Web Share API 지원 확인
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
      // Web Share API 미지원 시 클립보드 복사
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

  return (
    <Layout headerProps={headerProps} footerProps={footerProps}>
      <div className="page-intro">
        <h2>순모임을 효과적으로 이끌어가세요</h2>
        <p>
          순장님들께 순모임을 운영하는 데 필요한 핵심 자료들을 제공합니다.
          <br />
          순모임 10계명부터 ABC 가이드, 순원서약서까지, 각 자료를 다운로드하거나 확인하여 순모임에 활용해보세요.
        </p>
      </div>

      <div className="resources-grid">
        {/* 순모임 10계명 */}
        <div className="resource-item">
          <div className="resource-icon">📜</div>
          <span className="resource-type">이미지</span>
          <h3>순모임 10계명</h3>
          <p>건강한 순모임을 위한 10가지 원칙입니다. 순원들과 함께 공유하고 실천해보세요.</p>
          <a href="/resources/순모임 10계명.jpg" download className="btn-download">
            📥 다운로드
          </a>
          <a
            href="/resources/순모임 10계명.jpg"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-view"
          >
            👁️ 미리보기
          </a>
          <button
            onClick={() => handleShare('순모임 10계명', '/resources/순모임 10계명.jpg')}
            className="btn-view"
            style={{ background: '#1EC800', color: 'white' }}
          >
            💬 공유하기
          </button>
        </div>

        {/* 순모임ABC */}
        <div className="resource-item">
          <div className="resource-icon">📚</div>
          <span className="resource-type">PDF</span>
          <h3>순모임 ABC</h3>
          <p>순모임의 기본을 담은 가이드북입니다. 순모임 운영의 기초를 다지는 데 도움이 됩니다.</p>
          <a href="/resources/순모임ABC.pdf" download className="btn-download">
            📥 다운로드
          </a>
          <a href="/resources/순모임ABC.pdf" target="_blank" rel="noopener noreferrer" className="btn-view">
            👁️ 열어보기
          </a>
          <button
            onClick={() => handleShare('순모임 ABC', '/resources/순모임ABC.pdf')}
            className="btn-view"
            style={{ background: '#1EC800', color: 'white' }}
          >
            💬 공유하기
          </button>
        </div>

        {/* 순원서약서 */}
        <div className="resource-item">
          <div className="resource-icon">✍️</div>
          <span className="resource-type">이미지</span>
          <h3>순원서약서</h3>
          <p>순원으로서의 다짐과 약속을 담은 서약서입니다. 순원들과 함께 작성하고 공유할 수 있습니다.</p>
          <a href="/resources/순원서약서.jpg" download className="btn-download">
            📥 다운로드
          </a>
          <a href="/resources/순원서약서.jpg" target="_blank" rel="noopener noreferrer" className="btn-view">
            👁️ 미리보기
          </a>
          <button
            onClick={() => handleShare('순원서약서', '/resources/순원서약서.jpg')}
            className="btn-view"
            style={{ background: '#1EC800', color: 'white' }}
          >
            💬 공유하기
          </button>
        </div>
      </div>

      <div className="info-section">
        <h3>💡 활용 팁</h3>
        <p>
          이 자료들은 순모임 시간에 함께 나누고, 순원들과 공유할 수 있습니다. <br />
          <strong>💬 공유하기</strong> 버튼을 누르면 카카오톡, 문자 등으로 쉽게 공유할 수 있으며, <br />
          다운로드 후 인쇄하거나 단톡방에 직접 공유하여 활용하세요.
        </p>
      </div>

      <div className="usage-tips">
        <h3>📋 자료 활용 가이드</h3>
        <ul>
          <li>
            <strong>순모임 10계명</strong>: 순모임 첫 시간이나 오리엔테이션 때 함께 읽고 다짐하기
          </li>
          <li>
            <strong>순모임 ABC</strong>: 새로 들어온 순원이나 순장 교육 자료로 활용하기
          </li>
          <li>
            <strong>순원서약서</strong>: 순원 등록 시 함께 작성하고 서로의 다짐 나누기
          </li>
          <li>정기적으로 자료를 다시 확인하며 순모임 점검하기</li>
          <li>순원들과 함께 토론하고 적용 방법 논의하기</li>
        </ul>
      </div>
    </Layout>
  );
}
