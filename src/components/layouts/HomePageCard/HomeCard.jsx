import planetImg from "../../../img/planets/tatooine.webp";
import "./HomeCard.css"

const HomeCard = () => {
  return (
    <div className="card">
      <div className="img-box">
        <img src={planetImg} alt={planetImg} className="card-img" />
      </div>
      <div className="card-content">
        <h1 className="card-title">Planets</h1>
      </div>
    </div>
  );
};

export default HomeCard;
