import { ActivityIndicator } from 'react-native'
import { usePostsByCategory } from 'app/hooks/Blog/usePostsByCategory'
import ArticleCardWeb from './ArticleCardWeb'

const ArticleGeneralWeb = () => {
    const { posts, isLoading, isError } = usePostsByCategory(54, 8)

    if (isLoading) return <ActivityIndicator />
    if (isError) return <p>Something went wrong.</p>
    return (
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {posts && posts.map((item, i) => <ArticleCardWeb key={i} post={item} />)}
        </div>
    )
}

export default ArticleGeneralWeb