import ArticleCardWeb from './ArticleCardWeb'
import { ActivityIndicator } from 'react-native'
import { usePosts } from 'app/hooks/Blog/usePosts'

const ArticleFeaturedWeb = () => {
    const { posts, isLoading, isError } = usePosts()

    if (isLoading) return <ActivityIndicator />
    if (isError) return <p className='text-red-500'>Something went wrong.</p>
    
    const filteredPosts = posts?.filter((p, i) => i < 4)

    return (
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {posts && filteredPosts.map((item, i) => <ArticleCardWeb key={i} post={item} />)}
        </div>
    )
}

export default ArticleFeaturedWeb