import { useRouter } from "next/router";

const HalamanBlog = () => {
    const {query} = useRouter();
    // console.log(router);
    return (
        <div>
            <h1>Halaman Blog</h1>
            Slug: {query.slug}
        </div>
    )
}

export default HalamanBlog;