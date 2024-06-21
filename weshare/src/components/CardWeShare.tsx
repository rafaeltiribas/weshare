import { ReactNode } from "react";

interface Props {
  id?: number;
  image: string;
  title: string;
  category: string;
  footer: ReactNode;
  className?: string; // Adiciona uma prop para classes adicionais
}

const Card = ({ image, title, category, footer, className }: Props) => {
  return (
    <div className={`card h-100 border-0 ${className}`}>
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
