import LoginNative from "app/features/user/login/native";
import { isNative, isWeb } from "app/lib/utils";

export function LoginScreen() {
    return (
        <>
            {/* Native */}
            {isNative() && < LoginNative/>}
            {/* Web */}
            {/* {isWeb() && <ArticleDetailsWeb />} */}
        </>
    )
}
