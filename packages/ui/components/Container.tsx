import { cn } from 'lib/utils/util'

export type ContainerProps = {
  className?: string
  paddingMobile?: string
  children: React.ReactNode
}
export const Container = ({
  className,
  paddingMobile,
  ...props
}: ContainerProps) => (
  <div
    className={cn(
      `${className || ''} mx-auto max-w-7xl ${
        paddingMobile || 'px-4'
      } sm:px-6 lg:px-8 `,
    )}
    {...props}
  />
)

Container.defaultProps = {
  className: undefined,
}
