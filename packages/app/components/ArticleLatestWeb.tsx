import { ActivityIndicator } from 'react-native'
import { usePosts } from 'app/hooks/Blog/usePosts'
import ArticleCardWeb from './ArticleCardWeb'

const ArticleLatestWeb = () => {
    const { posts, isLoading, isError } = usePosts()

    if (isLoading) return <ActivityIndicator />
    if (isError) return <p>Something went wrong.</p>
    return (
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {posts && posts.map((item, i) => <ArticleCardWeb key={i} post={item} />)}
        </div>
    )
}

export default ArticleLatestWeb