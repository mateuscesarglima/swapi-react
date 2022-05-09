import "./HomeCard.css";
import LinkButton from "../linkButton/LinkButton";

const HomeCard = ({title, number, description, img, alt, content,to }) => {
  return (
    <>
      <div className="card-text-box">
        <p className="card-number">{number}</p>
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        <p className="know-more">Would you like know more about {title}?</p>
        <LinkButton to={to} customClass="small-font">{content}</LinkButton>
      </div>
      <figure className="step-img-box">
        <img src={img} alt={alt} className="step-img" />
      </figure>
    </>
  );
};

export default HomeCard;
