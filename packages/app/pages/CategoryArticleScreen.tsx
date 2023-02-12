import { isNative, isWeb } from "app/lib/utils";
import { CategoryArticlesNative } from 'app/features/category/native'

export function CategoryArticleScreen() {
    return (
        <>
            {/* Native */}
            {isNative() && <CategoryArticlesNative />}
            {/* Web */}
            {/* {isWeb() && <ArticleDetailsWeb />} */}
        </>
    )
}
