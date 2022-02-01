import "../css/TopFooter.css";

function TopFooter() {
  return (
    <div className="footer-container">
      <div className="footer-links-container">
        <div className="footer-links-first">
          <ul>
            <li>
              <a href="#news">配送方法について</a>
            </li>
            <li>
              <a href="#contact">お支払い方法について</a>
            </li>
            <li>
              <a href="#about">返品、交換について</a>
            </li>
            <li>
              <a href="#about">よくあるご質問</a>
            </li>
          </ul>
        </div>
        <div className="footer-links-second">
          <ul>
            <li>
              <a href="#contact">購入後のお問い合わせ</a>
            </li>
            <li>
              <a href="#company">会社概要</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-company-container">
        <div className="footer-company-info">
          <div className="footer-company-name">(有)タイヨーでんき</div>
          <div className="footer-company-contact">TEL:0796-23-3030</div>
          <div className="company-info-subject">「店舗営業時間」</div>
          <div className="company-info-content">9:00~20:00</div>
          <div className="company-info-subject">「住所」</div>
          <div className="company-info-content">
            〒668-0063
            <br />
            兵庫県豊岡市正法寺
            <br />
            ６３６−１
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopFooter;
