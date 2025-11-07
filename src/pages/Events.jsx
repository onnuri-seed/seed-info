import Layout from '../components/Layout';

export default function Events() {
  const headerProps = {
    title: '📅 행사 정보',
    subtitle: '함께하는 특별한 순간들',
    showBackButton: true,
    logoSize: 'small'
  };

  const footerProps = {
    title: 'SNS 13기 순장사관학교 - 행사 정보',
    subtitle: '온누리교회 | 함께 축하하고 기도하는 공동체'
  };

  return (
    <Layout headerProps={headerProps} footerProps={footerProps}>
      <div className="page-title">
        <h2>SNS 13기 행사 정보</h2>
        <p>생일 파티, 특별 행사 등 순장님들과 함께하는 일정을 안내합니다</p>
      </div>

      <div className="events-list">
        {/* 생일 파티 이벤트 */}
        <div className="event-card">
          <div className="event-header">
            <div className="event-icon">🎂</div>
            <div className="event-title-group">
              <h3>생일 파티 이벤트</h3>
              <span className="event-status">상시 진행</span>
            </div>
          </div>

          <div className="event-content">
            <p>
              리더십 여러분의 소중한 생일을 함께 축하하는 특별한 이벤트입니다.
              기도 마니또 시스템을 통해 서로를 위해 기도하고 축복하는 시간을 가져요! 🙏✨
            </p>

            <h4>🎂 진행 흐름</h4>

            <div className="flow-step">
              <div className="flow-step-title">1️⃣ 생일 카드 업로드</div>
              <div className="flow-step-content">
                생일자 소속 다락방장님이 생일 기도 카드를 업로드하며 축하와 함께 생일을 알려드립니다!
              </div>
            </div>

            <div className="flow-step">
              <div className="flow-step-title">2️⃣ 기도 마니또 매칭</div>
              <div className="flow-step-content">
                <p>
                  모든 리더십분들은 한 텀 동안{' '}
                  <strong>"자신의 다락방이 아닌 다른 다락방의 리더십 3분"</strong>을 위해 짧은 생일
                  축복/축하 기도 메시지를 리더십 단톡방에 남기게 됩니다.
                </p>

                <div className="flow-step-note">
                  <strong>📌 안내사항</strong>
                  <br />
                  • 보안을 위해, 기도 마니또는 축하해야 하는 순장님의 생일 당일에 개별 안내될 예정입니다.
                  <br />• 개인톡을 받으시면, 생일 카드에 적힌 기도제목을 가지고 각자의 자리에서 함께
                  기도해주시고, 단톡방에 축하/기도 메시지를 남겨주세요 🙏✨
                </div>
              </div>
            </div>

            <div className="highlight-box">
              <strong>🎁 세 분의 기도 마니또 모두 기도를 완료해야 생일 선물이 전달됩니다!</strong>
            </div>

            <div className="flow-step">
              <div className="flow-step-title">3️⃣ 순장님 자기소개</div>
              <div className="flow-step-content">
                <p>
                  순장님은 (생일 기도 카드 업로드 후) 질문 5가지 중 하나를 선택해 답변과 함께 자기소개
                  메시지를 전체 리더십 단톡방에 남깁니다.
                </p>

                <div className="flow-step-note">
                  <strong>📌 안내</strong>
                  <br />
                  생일인 순장님께는 관련 내용이 개별 안내될 예정입니다.
                </div>
              </div>
            </div>

            <h4>💝 이벤트 의미</h4>
            <p>
              이 이벤트는 단순한 생일 축하를 넘어, 서로를 위해 기도하고 알아가는 소중한 기회입니다.
              리더십 공동체가 더욱 깊이 연결되는 특별한 시간이 되길 바랍니다.
            </p>
          </div>
        </div>

        {/* 향후 행사 안내 */}
        <div
          className="event-card"
          style={{
            background: 'linear-gradient(135deg, #FFF8E1 0%, #FFECB3 100%)',
            borderColor: '#FFD54F'
          }}
        >
          <div className="event-header">
            <div className="event-icon">📅</div>
            <div className="event-title-group">
              <h3>다음 행사를 기대해주세요!</h3>
              <span className="event-status upcoming">준비중</span>
            </div>
          </div>

          <div className="event-content">
            <p style={{ color: '#666' }}>
              앞으로 순장님들과 함께할 더 많은 특별한 행사들이 준비될 예정입니다. 기대해주세요! 🌟
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
