import SearchForm from "../components/SearchForm/SearchForm";
import StartupCard from "../components/StartupCard";

export default async function Home({
  searchParams,
}: {
  searchParams?: { query?: string };
}) {
  const query = (await searchParams)?.query;

  const posts = [
    {
      _createdAt: new Date(),
      views: 55,
      author: { _id: 1, name: "Keanu" },
      _id: 1,
      description: "This is a descrption",
      imageSmall: "/touch_640.jpg",
      imageMedium: "/touch_1280.jpg",
      category: "Robots",
      title: "We Robots",
    },
  ];

  return (
    <>
      <section className="pink_container">
        <h1 className="heading max-w-3xl ">
          Its time to learn, <br /> Feel the burn!
        </h1>
        <p className="sub-heading max-w-2xl">
          "I want to make a good, solid kung fu movie." - Keanu Reeves
        </p>
        <SearchForm query={query} />
      </section>
      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : "All sections"}
        </p>

        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post, index: number) => (
              <StartupCard key={post?._id} post={post} />
            ))
          ) : (
            <p className="no-results">No sections found</p>
          )}
        </ul>
      </section>
    </>
  );
}
