import { TextLink } from "solito/link"

const ArticleCardWeb = ({ post }) => {

    return (
        <div className="group relative">
            <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                <img
                    src={post.cover}
                    alt={post.title}
                    className="h-full w-full lg:h-full lg:w-full"
                />
            </div>
            <div className="mt-4 flex justify-between">
                <div>
                    <h3 className="text-sm text-gray-700">
                        <TextLink href={`/articles/${post.id}`}>
                            <span aria-hidden="true" className="absolute inset-0"></span>
                            {post.title}
                        </TextLink>
                    </h3>
                </div>
                <p className="text-sm font-medium text-gray-900">{post.category}</p>
            </div>
        </div>
    )
}

export default ArticleCardWeb