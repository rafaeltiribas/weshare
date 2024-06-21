import { ReactNode } from "react";

interface Props {
  id?: number;
  image: string;
  title: string;
  category: string;
  footer: ReactNode;
  description: string;
  link: string;
}

const Card = ({ image, title, category, footer, link }: Props) => {
  return (
    <div className="col-lg-4 col-md-6">
      <div className="card mb-3">
        <img src={image} alt={title} />
        <div className="card-body">
          <div className="text-center">
            <h5 className="card-title">
              <a href={link}>{title}</a>
            </h5>
            <p className="text-warning font-weight-bold">{category}</p>
          </div>
          <p className="card-text text-justify"></p>
        </div>
        <div className="card-footer border-0 p-0">{footer}</div>
      </div>
    </div>
  );
};

export default Card;
