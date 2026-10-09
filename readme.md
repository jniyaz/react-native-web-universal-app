# React Native Web Universal Blog App 🚀

A modern, high-performance universal monorepo application powered by **Next.js 15+**, **Expo SDK 52**, **React Native 0.76+**, **NativeWind v4**, **Solito**, and **Turborepo 2.x**.

This project shares 100% of business logic, WordPress REST API integration (via SWR), navigation patterns, and UI design primitives across **Web**, **iOS**, and **Android**.

---

## 🌟 Tech Stack

| Technology | Description |
| :--- | :--- |
| **[Turborepo 2.x](https://turbo.build/)** | High-performance build system and monorepo workspace orchestration |
| **[Next.js 15+](https://nextjs.org/)** | Web application framework with Server-Side Rendering (SSR) & Static Generation |
| **[Expo SDK 52](https://expo.dev/)** | Cross-platform native mobile development framework |
| **[React Native 0.76+](https://reactnative.dev/)** | Cross-platform native framework (New Architecture compatible) |
| **[NativeWind v4](https://www.nativewind.dev/)** | Utility-first universal styling using Tailwind CSS |
| **[Solito 4.x](https://solito.dev/)** | Universal routing bridge between Next.js and React Navigation |
| **[SWR](https://swr.vercel.app/)** | React hooks for remote data fetching, caching, and revalidation |
| **Yarn Workspaces** | Monorepo package management and dependency isolation |

---

## 📁 Repository Structure

```text
react-native-web-universal-app/
├── apps/
│   ├── next/                  # Next.js 15 Web application (@myapp/next)
│   └── expo/                  # Expo SDK 52 Mobile application (@myapp/expo)
├── packages/
│   ├── app/                   # Universal core: UI components, features, hooks & state
│   │   ├── components/        # Universal UI components (Cards, Feeds, Headers)
│   │   ├── design/            # NativeWind v4 design primitives (View, Text, Layout)
│   │   ├── features/          # Feature screens (Home, Details, Categories, Notifications)
│   │   ├── hooks/             # WordPress API data fetching hooks (SWR)
│   │   ├── lib/               # Utility functions, date humanizer & fetcher
│   │   ├── navigation/        # React Navigation native stacks
│   │   └── pages/             # Platform-split screen entries (.web.tsx / .native.tsx)
│   ├── typescript-config/     # Shared tsconfig bases (@myapp/typescript-config)
│   └── eslint-config/         # Shared ESLint rules (@myapp/eslint-config)
├── turbo.json                 # Turborepo task pipeline definition
└── package.json               # Root monorepo scripts & yarn resolutions
```

---

## 🚀 Quick Start

### Prerequisites

- **Node.js**: `>= 18.0.0`
- **Package Manager**: `Yarn 1.22.x`
- **Java JDK**: **JDK 17** (required for Android Gradle builds)
- **Xcode** (for iOS simulator, macOS only)
- **Android Studio / Emulator** (for Android testing)

---

### Installation

1. Clone the repository and install dependencies:
   ```bash
   yarn install
   ```

---

## 💻 Development Commands

| Command | Action |
| :--- | :--- |
| `yarn dev` | Run both Web and Mobile dev servers concurrently via Turborepo |
| `yarn web` | Start the Next.js 15 web dev server (`http://localhost:3000`) |
| `yarn native` | Start the Expo Metro bundler for mobile app development |
| `yarn native:go` | Start Expo Metro bundler in **Expo Go** mode (`expo start --go`) |
| `yarn android` | Build & run the local Android native app on a connected emulator/device |
| `yarn typecheck` | Run TypeScript type checks across all monorepo packages |
| `yarn lint` | Run ESLint checks across all monorepo packages |
| `yarn build` | Create production builds for Next.js Web and Expo JS bundles |
| `yarn clean` | Clean all build caches (`.next`, `.expo`, Turborepo cache) |

---

## 📱 Running the Mobile App

### Option A: Expo Go (Fast Testing)
To test instantly in Expo Go without compiling native code:
```bash
yarn native:go
```
Press `a` to launch on Android Emulator, or `i` for iOS Simulator.

### Option B: Local Native Development Build
To compile and launch the custom native app (`com.blogapp.app`) with full native module support:
1. Ensure your Android Emulator is running and `JAVA_HOME` is set to JDK 17.
2. Run:
   ```bash
   yarn android
   ```

---

## 🌐 Running the Web App

Start the Next.js development server:
```bash
yarn web
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🎨 Universal Styling & Platform Splitting

### NativeWind v4
Components are styled with Tailwind CSS utility classes using NativeWind v4:
```tsx
import { Text, View } from 'app/design'

export function MyComponent() {
  return (
    <View className="flex-1 bg-white p-4 items-center justify-center">
      <Text className="text-xl font-bold text-gray-900">Universal Styling</Text>
    </View>
  )
}
```

### Clean Platform Extensions
Screens in `packages/app/pages/` utilize platform extensions (`.web.tsx` vs `.native.tsx`). Next.js compiles `.web.tsx` for optimal web bundle size and SSR performance, while Expo Metro resolves `.native.tsx` for native performance on mobile devices.

---

## 🔌 API Integration

Data fetching is powered by **SWR** fetching from the WordPress REST API endpoint specified in your environment variables (`NEXT_PUBLIC_WP_BASE_URL` / `EXPO_PUBLIC_WP_BASE_URL`):
- `usePosts()`: Fetch latest blog articles
- `usePost(id)`: Fetch detailed article data by ID
- `usePostsByCategory(categoryId)`: Fetch articles filtered by category ID

---

## ⚙️ Verification & Quality Assurance

To verify the codebase before submitting changes, run:
```bash
# Type check all packages
yarn typecheck

# Lint all packages
yarn lint

# Build production bundles
yarn build
```
