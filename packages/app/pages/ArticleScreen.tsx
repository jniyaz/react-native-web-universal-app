import { ArticleDetailsNative } from 'app/features/details/native';
import ArticleDetailsWeb from "app/features/details/web";
import { isNative, isWeb } from "app/lib/utils"

export function ArticleScreen() {
    return (
        <>
            {/* Native */}
            {isNative() && <ArticleDetailsNative />}
            {/* Web */}
            {isWeb() && <ArticleDetailsWeb />}
        </>
    )
}
