import { useRouter } from "next/router";

const Category = () => {
    const router = useRouter();
    const {slug} = router.query;

  return (
    <div>
      <h1>Category</h1>
        <ul>
            {Array.isArray(slug) ? slug.map((slug) => <li key={slug}>{slug}</li>) : <li>{slug}</li>}
        </ul>

    </div>
  );
}

export default Category;