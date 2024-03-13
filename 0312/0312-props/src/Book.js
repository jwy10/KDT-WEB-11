export default function Book({ title, author, price, type }) {
  return (
    <div className="bookSec">
      <h2 className="bookheader">이번주 베스트셀러</h2>
      <img className="bookcover" src="0430img.jpg" alt="책 표지" />
      <h2 className="booktitle">{title}</h2>
      <div className="bookinfo">저자 : {author}</div>
      <div className="bookinfo">판매가 : {price}</div>
      <div className="bookinfo">구분 : {type}</div>
    </div>
  );
}

Book.defaultProps = {
  title: '나의 하루는 4시30분에 시작된다',
  author: '김유진',
  price: '13,500원',
  type: '자기계발서',
};
