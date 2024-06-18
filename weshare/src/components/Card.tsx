import { ReactNode } from "react";

interface Props {
  id?: number;
  image: string;
  title: string;
  category: string;
  footer: ReactNode;
}

const Card = ({ image, title, category, footer }: Props) => {
  return (
    <div className="card h-100 border-0">
      <img src={image} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{category}</p>
      </div>
      <div className="card-footer border-0 p-0">{footer}</div>
    </div>
  );
};
export default Card;