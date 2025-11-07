export default function Footer({ title, subtitle }) {
  return (
    <footer>
      <p><strong>{title || 'SNS 13기 순장사관학교'}</strong></p>
      <p style={{ marginTop: '8px' }}>
        {subtitle || '온누리교회 | 순장님들과 함께 성장하는 공동체'}
      </p>
      {!title && (
        <p style={{ marginTop: '15px', fontSize: '0.85rem', color: '#999' }}>
          문의사항이 있으시면 서기에게 연락주세요 📧
        </p>
      )}
    </footer>
  );
}
