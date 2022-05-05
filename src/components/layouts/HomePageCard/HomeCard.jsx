import "./HomeCard.css";

const HomeCard = ({ title, number, description, img, alt }) => {
  return (
    <>
      <div className="card-text-box">
        <p className="card-number">{number}</p>
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
      </div>
      <figure className="step-img-box">
        <img src={img} alt={alt} className="step-img" />
      </figure>
    </>
  );
};

export default HomeCard;
