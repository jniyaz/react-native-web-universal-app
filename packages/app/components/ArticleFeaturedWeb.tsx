import ArticleCardWeb from './ArticleCardWeb'

const ArticleFeaturedWeb = () => {
    return (
        <>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Featured Articles</h2>
            <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                {[1, 2, 3, 4].map((item, i) => <ArticleCardWeb key={i} />)}
            </div>
        </>
    )
}

export default ArticleFeaturedWeb