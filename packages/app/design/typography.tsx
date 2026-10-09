import { ComponentProps, forwardRef } from 'react'
import { Text as NativeText, Platform, Linking } from 'react-native'
import { TextLink as SolitoTextLink } from 'solito/link'

export const Text = NativeText

export const P = (props: any) => (
  <NativeText {...props} className={`text-base text-black my-4 ${props.className || ''}`} />
)

export const H1 = (props: any) => (
  <NativeText
    accessibilityLevel={1}
    accessibilityRole="header"
    {...props}
    className={`text-3xl font-extrabold my-4 ${props.className || ''}`}
  />
)

export interface AProps extends ComponentProps<typeof NativeText> {
  href?: string
  target?: '_blank'
}

export const A = forwardRef<NativeText, AProps>(function A(
  { className = '', href, target, ...props },
  ref
) {
  const nativeAProps = Platform.select<Partial<AProps>>({
    web: {
      href,
      target,
    },
    default: {
      onPress: (event: any) => {
        props.onPress && props.onPress(event)
        if (Platform.OS !== 'web' && href !== undefined) {
          Linking.openURL(href)
        }
      },
    },
  })

  return (
    <NativeText
      accessibilityRole="link"
      className={`text-blue-500 hover:underline ${className}`}
      {...props}
      {...nativeAProps}
      ref={ref}
    />
  )
})

export const TextLink = (props: any) => (
  <SolitoTextLink
    {...props}
    className={`text-base font-bold hover:underline text-blue-500 ${props.className || ''}`}
  />
)
