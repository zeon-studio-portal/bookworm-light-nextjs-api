import SearchResults from "@layouts/partials/SearchResults";
import { Suspense } from "react";

const SearchPage = async ({ searchParams }) => {
  const { key } = await searchParams;
  const query = key || "";
  return (
    <>
      <div className="section">
        <div className="container">
          <Suspense
            fallback={
              <h1 className="h2 mb-8 text-center">
                Searching <span className="text-primary">...</span>
              </h1>
            }
          >
            <SearchResults query={query} />
          </Suspense>
        </div>
      </div>
    </>
  );
};

export default SearchPage;
