import { NotificationNative } from "app/features/notification/native"
import { NotificationWeb } from "app/features/notification/web"
import { isNative, isWeb } from "app/lib/utils"

export function NotificationScreen() {
    return (
        <>
            {/* Native */}
            {isNative() && <NotificationNative />}
            {/* Web */}
            {isWeb() && <NotificationWeb />}
        </>
    )
}
