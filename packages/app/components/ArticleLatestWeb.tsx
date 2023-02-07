import ArticleCardWeb from './ArticleCardWeb'

const ArticleLatestWeb = () => {
    return (
        <>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 py-10 sm:py-8">Latest Articles</h2>
            <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, i) => <ArticleCardWeb key={i} />)}
            </div>
        </>
    )
}

export default ArticleLatestWeb