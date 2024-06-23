import React, { useState } from 'react';
import { useParams } from "react-router-dom";
import useNongovByCategorySlug from "../hooks/useNongovByCategorySlug";
import Card from "../components/CardWeShare";
import { useCart } from "../components/CartContext";
import Nongov from "../interfaces/nongov"

const NonGovCardsPage = () => {
  const { slug } = useParams();
  const {
    data: nongovs,
    isPending: loadingNongov,
    error: errornongov,
  } = useNongovByCategorySlug(slug);

  const { addToCart } = useCart();
  const [clickedButtons, setClickedButtons] = useState<{ [key: string]: boolean }>({});

  const handleDonateClick = (nongov : Nongov) => {
    addToCart({ id: nongov.id, name: nongov.name, price: 50 });
    setClickedButtons((prev) => ({ ...prev, [nongov.name]: true }));
  };

  if (loadingNongov) return <h6>Loading...</h6>;
  if (errornongov) throw errornongov;

  return (
    <>
      <h5>{slug ? slug.charAt(0).toUpperCase() + slug.slice(1) : "Non Governmental Organizations"}</h5>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
        {nongovs?.map((nongov) => (
          <div className="col" key={nongov.id}>
            <Card
              image={nongov.image}
              title={nongov.name}
              category={nongov.category.name}
              footer={
                <button 
                  className={`btn btn-sm w-100 d-flex align-items-center justify-content-center ${clickedButtons[nongov.name] ? 'btn-success' : 'btn-warning'}`}
                  onClick={() => handleDonateClick(nongov)}
                >
                  <i className="fa-solid fa-heart me-2"></i> Donate
                </button>
              }
              className="large-card"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default NonGovCardsPage;
