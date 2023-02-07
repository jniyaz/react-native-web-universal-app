import { isWeb, isNative } from 'app/lib/utils';
import { HomeWeb } from 'app/features/home/web';
import { HomeNative } from 'app/features/home/native';

export function HomeScreen() {
    return (
        <>
            {/* Native */}
            {isNative() && <HomeNative />}
            {/* Web */}
            {isWeb() && <HomeWeb />}
        </>
    )
}
