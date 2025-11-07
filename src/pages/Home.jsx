import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

export default function Home() {
  const headerProps = {
    title: '🌱 SNS 13기 순장사관학교',
    subtitle: '순장님들을 위한 자료 허브',
    showBackButton: false,
    logoSize: 'large'
  };

  return (
    <Layout headerProps={headerProps}>
      <div className="welcome-section">
        <h2>순장님, 환영합니다! 👋</h2>
        <p>
          SNS 13기 순장님들께 필요한 모든 자료와 가이드를 한 곳에서 만나보세요.<br />
          순모임을 효과적으로 이끌어갈 수 있도록 다양한 자료를 제공합니다.
        </p>
      </div>

      <div className="resources-grid">
        <Link 
          to="/about-seed" 
          className="resource-card"
          style={{ background: 'linear-gradient(135deg, #F1F8E9 0%, #DCEDC8 100%)' }}
        >
          <div className="resource-card-icon">🌱</div>
          <h3>About SEED</h3>
          <p>SEED 그룹 소개, 순장의 역할, 순모임 진행 흐름 등 핵심 정보</p>
          <span className="resource-card-status">바로가기</span>
        </Link>

        <Link 
          to="/first-meeting" 
          className="resource-card"
          style={{ background: 'linear-gradient(135deg, #FFE8F5 0%, #FFD1E8 100%)' }}
        >
          <div className="resource-card-icon">💝</div>
          <h3>첫 순모임 가이드</h3>
          <p>설레는 첫만남! 순원들과 친밀해지기 위한 질문과 활동 가이드</p>
          <span 
            className="resource-card-status"
            style={{ background: 'rgba(233, 30, 99, 0.15)', color: '#C2185B' }}
          >
            NEW
          </span>
        </Link>

        <Link to="/icare-guide" className="resource-card">
          <div className="resource-card-icon">✅</div>
          <h3>매주 해야하는 일</h3>
          <p>순모임 후 필수 체크리스트: 출석 체크 & iCare 정보 등록</p>
          <span className="resource-card-status">바로가기</span>
        </Link>

        <Link 
          to="/soonmoim-location" 
          className="resource-card"
          style={{ background: 'linear-gradient(135deg, #E3F2FD 0%, #BBDEFB 100%)' }}
        >
          <div className="resource-card-icon">📍</div>
          <h3>순모임 장소</h3>
          <p>13기 순모임 장소 맵과 층별 배정, 로테이션 정보를 확인하세요</p>
          <span className="resource-card-status">바로가기</span>
        </Link>

        <Link
          to="/events"
          className="resource-card"
          style={{ background: 'linear-gradient(135deg, #FFF3E0 0%, #FFE0B2 100%)' }}
        >
          <div className="resource-card-icon">📅</div>
          <h3>행사 정보</h3>
          <p>생일 파티, 특별 행사 등 순장님들과 함께하는 일정을 확인하세요.</p>
          <span
            className="resource-card-status"
            style={{ background: 'rgba(255, 87, 34, 0.15)', color: '#E64A19' }}
          >
            상시 진행
          </span>
        </Link>
        
        <Link to="/soonmoim-contents" className="resource-card">
          <div className="resource-card-icon">🎯</div>
          <h3>순모임 콘텐츠</h3>
          <p>순모임 10계명, ABC 가이드, 순원서약서 등 필수 자료를 제공합니다.</p>
          <span className="resource-card-status">바로가기</span>
        </Link>
      </div>
{/* 
      <div className="quick-links">
        <h3>🔗 빠른 링크</h3>
        <ul>
          <li>
            <Link to="/about-seed">
              🌱 About SEED (그룹 소개, 순장 역할)
            </Link>
          </li>
          <li>
            <Link to="/first-meeting">
              💝 첫 순모임 가이드 (설레는 첫만남)
            </Link>
          </li>
          <li>
            <Link to="/soonmoim-location">
              📍 순모임 장소 (맵, 층별 배정, 로테이션)
            </Link>
          </li>
          <li>
            <Link to="/soonmoim-contents">
              🎯 순모임 콘텐츠 (10계명, ABC, 서약서)
            </Link>
          </li>
          <li>
            <Link to="/events">
              📅 행사 정보 (생일 파티, 특별 행사)
            </Link>
          </li>
          <li>
            <a href="https://bit.ly/sns-12th-sunday-soon-moim" target="_blank" rel="noopener noreferrer">
              📝 일요일 순모임 설문조사
            </a>
          </li>
          <li>
            <a href="https://www.ionnuri.org" target="_blank" rel="noopener noreferrer">
              🏛️ 온누리교회 홈페이지
            </a>
          </li>
          <li>
            <Link to="/icare-guide">
              ✅ 매주 해야하는 일 (출석 체크 & iCare)
            </Link>
          </li>
        </ul>
      </div> */}
    </Layout>
  );
}
