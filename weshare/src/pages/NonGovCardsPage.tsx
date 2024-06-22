import { useParams } from "react-router-dom";
import useNongovByCategorySlug from "../hooks/useNongovByCategorySlug";
import Card from "../components/CardWeShare";

const NonGovCardsPage = () => {
  const { slug } = useParams();
  const {
    data: nongovs,
    isPending: loadingNongov,
    error: errornongov,
  } = useNongovByCategorySlug(slug);

  if (loadingNongov) return <h6>Loading...</h6>;
  if (errornongov) throw errornongov;

  return (
    <>
      <h5>{slug ? slug.charAt(0).toUpperCase() + slug.slice(1) : "Non Governmental Organizations"}</h5>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
        {nongovs?.map((nongov) => (
          <div className="col">
            <Card
              image={nongov.image}
              title={nongov.name}
              category={nongov.category.name}
              footer={<input type="button" className="btn btn-warning btn-sm w-100" value="Donate" />}
              className="large-card"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default NonGovCardsPage;
