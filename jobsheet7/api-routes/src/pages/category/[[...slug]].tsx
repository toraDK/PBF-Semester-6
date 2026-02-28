import { useEffect, useState } from "react";
import { useRouter } from "next/router";

type categoryType = {
    id: string;
    name: string;
};

const Category = () => {
    const router = useRouter();
    const {slug} = router.query;

    const [categories, setCategory] = useState([]);

    useEffect(() => {
        fetch("/api/category")
        .then((response) => response.json())
        .then((responsedata) => {
            // console.log("Data produk:", responsedata.data);
            setCategory(responsedata.data);
        })
        .catch((error) => {
            console.error("Error fetching produk:", error);
        });
    }, []);

  return (
    <div>
      <h1>Category: </h1>
      
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
        {categories.map((category: categoryType) => (
          <ol key={category.id}>
            <li>{category.name}</li>
          </ol>
        ))}
      </div>
    )}

    </div>
  );
}

export default Category;