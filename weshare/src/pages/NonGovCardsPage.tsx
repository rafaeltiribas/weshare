import { useParams } from "react-router-dom";
import useNongovByCategorySlug from "../hooks/useNongovByCategorySlug";
import Card from "../components/Card";

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
      <div className="row">
        {nongovs?.map((nongov) => (
          <div className="col-lg-2 col-md-3 col-sm-4 col-6">
            <Card
              image={nongov.image}
              title={nongov.name}
              category={nongov.category.name}
              footer={<input type="button" className="btn btn-primary btn-sm w-100" value="Contribute" />}
            />
          </div>
        ))}
      </div>
    </>
  );
};
export default NonGovCardsPage;
