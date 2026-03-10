import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import useSWR from "swr";
import fetcher from "../utils/swr/fetcher";

type categoryType = {
    id: string;
    name: string;
};

const Category = () => {
    const router = useRouter();
    const {slug} = router.query;

    const [categories, setCategory] = useState([]);

    // useEffect(() => {
    //     fetch("/api/category")
    //     .then((response) => response.json())
    //     .then((responsedata) => {
    //         // console.log("Data produk:", responsedata.data);
    //         setCategory(responsedata.data);
    //     })
    //     .catch((error) => {
    //         console.error("Error fetching produk:", error);
    //     });
    // }, []);
    const { data, error, isLoading, mutate } = useSWR( "/api/produk", fetcher);

    const handleRefresh = () => {
      // fetch("/api/category")
      // .then((response) => response.json())
      // .then((responsedata) => {
      //   console.log("Data category:", responsedata.data);
      //   setCategory(responsedata.data);
      // })
      // .catch((error) => {
      //   console.error("Error fetching produk:", error);
      // });
      mutate();
    };

  return (
    <div>
      <h1>Category: </h1>
      <button onClick={handleRefresh}>Refresh data</button>

      {slug ? (
      <ul>
        {Array.isArray(slug) ? (
          slug.map((item) => <li key={item}>{item}</li>)
        ) : (
          <li>{slug}</li>
        )}
      </ul>
    ) : (
      <div>
        <h1>Daftar Category</h1>
        {data?.data?.map((item: categoryType) => (
          <ol key={item.id}>
            <li>{item.name}</li>
          </ol>
        ))}
      </div>
    )}

    </div>
  );
}

export default Category;