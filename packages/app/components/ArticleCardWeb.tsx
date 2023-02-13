import { dateHumanize } from "app/lib/date"
import { TextLink } from "solito/link"

const ArticleCardWeb = ({ post }) => {

    return (
        <div className="group relative">
            <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                <img
                    src={post.jetpack_featured_media_url !== '' ? post.jetpack_featured_media_url : 'https://niyaz.vercel.app/default.png'}
                    alt={post.title.rendered}
                    className="object-cover  h-full w-full lg:h-full lg:w-full"
                />
            </div>
            <div className="mt-4 flex justify-between">
                <div>
                    <h3 className="text-sm text-gray-700">
                        <TextLink href={`/articles/${post.id}`}>
                            <span aria-hidden="true" className="absolute inset-0"></span>
                            {post.title.rendered}
                        </TextLink>
                    </h3>
                    <p className="text-sm text-gray-900">{dateHumanize(post.modified)}</p>
                </div>
                {/* <p className="text-sm font-medium text-gray-900">{post.modified}</p> */}
            </div>
        </div>
    )
}

export default ArticleCardWeb