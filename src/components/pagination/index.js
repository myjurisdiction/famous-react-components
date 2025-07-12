/*

We are working on a back-office application that displays products available for purchase on our company's website.

We would like to add pagination to the ListProducts page. The list should only show 10 products at a time, and the page should have links or buttons for navigating backwards and forwards in the list.

*/
import { useEffect, useState, useCallback } from "react";

const useFetch = (url, method) => {
  const [state, setState] = useState({
    data: null,
    loading: true,
    error: "",
  });

  useEffect(() => {
    (async () => {
      let response = await fetch(url, { method });
      if (!response.ok) {
        setState({
          data: null,
          loading: false,
          error: "An error occurred",
        });
      }
      let data = await response.json();

      setState({
        data,
        loading: false,
        error: "",
      });
    })();
  }, [url, method]);

  return state;
};

const ViewProduct = ({ id }) => {
  const { data, error, loading } = useFetch(
    "https://dummyjson.com/products/" + id
  );

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error!</div>;

  return (
    <>
      <h1>{data.title}</h1>
      <div>Category: {data.category}</div>
      <div>Price: ${data.price.toFixed(2)}</div>
      <div>Description: {data.description}</div>
      <div>
        <img src={data.thumbnail} />
      </div>
    </>
  );
};

const ListProducts = ({ changeLocation }) => {
  const { loading, error, data } = useFetch("https://dummyjson.com/products");

  const pageSize = 10;
  const [paginatedData, setPaginatedData] = useState([]);
  const [offSet, setOffset] = useState(0);

  useEffect(() => {
    if (data?.products?.length) {
      const currentPaginatedData = data.products.slice(
        offSet,
        offSet + pageSize
      );
      setPaginatedData(currentPaginatedData);
    }
  }, [data, offSet]);

  const handlePrevClick = () => {
    setOffset((prev) => Math.max(0, prev - pageSize));
  };

  const handleNextClick = () => {
    setOffset((prev) => prev + pageSize);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error!</div>;

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {paginatedData.map((product, index) => (
          <li key={index}>
            <a
              className="link"
              onClick={() => changeLocation("view", { id: product.id })}
            >
              {product.title}
            </a>
          </li>
        ))}
      </ul>
      <div>
        <button onClick={handlePrevClick}>prev</button>
        <button onClick={handleNextClick}>next</button>
      </div>
    </div>
  );
};

const PaginatedView = () => {
  const [location, setLocation] = useState({ page: "list", params: {} });

  const changeLocation = useCallback(
    (page, params) => {
      setLocation({ page, params: params || {} });
    },
    [setLocation]
  );

  return (
    <div className="App">
      {location.page === "list" && (
        <ListProducts changeLocation={changeLocation} />
      )}
      {location.page === "view" && <ViewProduct id={location.params.id} />}
      {location.page !== "list" && (
        <div>
          <a onClick={() => changeLocation("list")}>Return to list</a>
        </div>
      )}
    </div>
  );
};

export default PaginatedView;
