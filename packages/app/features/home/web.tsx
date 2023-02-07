import Appbar from 'app/components/Appbar';
import ArticleFeaturedWeb from 'app/components/ArticleFeaturedWeb';
import ArticleLatestWeb from 'app/components/ArticleLatestWeb';

export function HomeWeb() {
  return (
    <>
      <Appbar />
      <div className="bg-white">
        <div className="mx-auto max-w-2xl py-10 px-4 sm:py-8 sm:px-6 lg:max-w-7xl lg:px-8">
          {/* FeaturedRow */}
          <ArticleFeaturedWeb />
          {/* Latest */}
          <ArticleLatestWeb />
        </div>
      </div>
    </>
  )
}
