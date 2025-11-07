import Layout from '../components/Layout';

export default function FirstMeeting() {
  const headerProps = {
    title: '💝 설레는 첫만남',
    subtitle: '첫 순모임을 위한 가이드',
    showBackButton: true,
    logoSize: 'small'
  };

  const footerProps = {
    title: 'SNS 13기 순장사관학교 - 첫 순모임 가이드',
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

        <div className="features-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
          <div className="feature-card">
            <h3>1️⃣ 이름</h3>
            <p>본명과 선호하는 호칭을 소개해주세요</p>
          </div>

          <div className="feature-card">
            <h3>2️⃣ 나이 (출생년도)</h3>
            <p>출생년도나 나이대를 공유해주세요</p>
          </div>

          <div className="feature-card">
            <h3>3️⃣ 사는 곳 / 본가</h3>
            <p>현재 거주지(구 까지)와 본가 위치를 알려주세요</p>
          </div>

          <div className="feature-card">
            <h3>4️⃣ 전공 / 직업군</h3>
            <p>학업이나 직장에서 하고 있는 일을 소개해주세요</p>
          </div>

          <div className="feature-card">
            <h3>5️⃣ 나의 성격은?</h3>
            <p>자신의 성격을 자유롭게 표현해주세요</p>
          </div>

          <div className="feature-card">
            <h3>6️⃣ 취미 & 특기</h3>
            <p>좋아하는 것, 잘하는 것을 나눠주세요</p>
          </div>

          <div className="feature-card">
            <h3>7️⃣ 장점 & 단점</h3>
            <p>솔직하게 자신을 돌아보는 시간</p>
          </div>

          <div className="feature-card">
            <h3>8️⃣ 스트레스 해소법</h3>
            <p>나만의 힐링 방법을 공유해주세요</p>
          </div>
        </div>
      </div>

      {/* 나의 신앙과 하나님 */}
      <div className="content-section" style={{ background: 'linear-gradient(135deg, #FFF9E6 0%, #FFE8CC 100%)', padding: '30px', borderRadius: '12px' }}>
        <h2>🙏 나의 신앙과 하나님</h2>
        <p style={{ color: '#666', lineHeight: '1.8', marginBottom: '20px' }}>
          <strong>아래 7가지 질문 중 원하는 것 1개만 선택하여</strong> 나눠주세요!
        </p>

        <div style={{ background: 'white', padding: '25px', borderRadius: '8px' }}>
          <ul style={{ lineHeight: '2.2', fontSize: '15px' }}>
            <li><strong>1.</strong> SNS 청년부에 언제 왔는지? 어떻게 오게 되었는지?</li>
            <li><strong>2.</strong> SNS 청년부는 나에게 어떤 곳인가요?</li>
            <li><strong>3.</strong> 나에게 예수님은 ___입니다. (이유와 함께)</li>
            <li><strong>4.</strong> 예수님을 처음 만난 순간 or 교회에 처음 나온 계기</li>
            <li><strong>5.</strong> 최근(2025년 중) 내가 가장 행복했던 순간</li>
            <li><strong>6.</strong> 13기 동안 신앙적으로 성장하고 싶은 영역은?</li>
            <li><strong>7.</strong> 하나님께 감사한 일 or 기도 응답 받은 경험</li>
          </ul>
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
        <h2>📜 순모임 십계명</h2>
        <p style={{ color: '#666', lineHeight: '1.8', marginBottom: '20px' }}>
          건강한 순모임을 위한 약속들을 함께 확인해보세요!
        </p>
        
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <img 
            src="/resources/%EC%88%9C%EB%AA%A8%EC%9E%84%2010%EA%B3%84%EB%AA%85.jpg" 
            alt="순모임 십계명" 
            style={{ 
              maxWidth: '100%', 
              height: 'auto', 
              borderRadius: '8px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
            }} 
          />
        </div>
      </div>

      {/* 추천 활동 */}
      <div className="content-section">
        <h2>🌟 추천 활동: 장점 맞추기 게임</h2>
        <p style={{ color: '#666', lineHeight: '1.8', marginBottom: '20px' }}>
          작년 순사관학교에서 매우 좋았던 활동을 추천합니다!
        </p>

        <div style={{ background: '#F5F5F5', padding: '25px', borderRadius: '8px' }}>
          <h3 style={{ marginTop: 0, color: '#6B8E23' }}>🎮 진행 방법</h3>
          <ol style={{ lineHeight: '2', fontSize: '15px', paddingLeft: '20px' }}>
            <li>
              <strong>준비 단계:</strong> 각자 핸드폰으로 자신의 장점 3가지를 적습니다
              <ul style={{ marginTop: '8px', color: '#666' }}>
                <li>예: "배려심이 많다", "긍정적이다", "유머 감각이 있다"</li>
              </ul>
            </li>
            <li>
              <strong>게임 진행:</strong> 돌아가면서 한 명씩 진행합니다
              <ul style={{ marginTop: '8px', color: '#666' }}>
                <li>다른 순원들이 그 사람의 장점을 맞춰봅니다</li>
                <li>본인이 적은 장점을 공개하고 이야기를 나눕니다</li>
              </ul>
            </li>
            <li>
              <strong>나눔:</strong> 서로의 장점을 발견하고 격려하는 시간을 가집니다
            </li>
          </ol>

          <div style={{ 
            marginTop: '20px', 
            padding: '15px', 
            background: 'white', 
            borderRadius: '8px',
            borderLeft: '4px solid #6B8E23'
          }}>
            <p style={{ margin: 0, color: '#333' }}>
              💡 <strong>효과:</strong> 서로의 긍정적인 면을 발견하고, 친밀감을 높이며, 
              순원들이 서로를 더 깊이 이해하는 계기가 됩니다!
            </p>
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

