export const hierarchyClassnames = {
  primaryText: 'text-lg font-semibold text-gray-900',
  secondaryText: 'text-md text-gray-700',
  tertiaryText: 'text-xs text-gray-500',
  pageHeader:
    'text-2xl font-bold leading-7 text-gray-900 hover:text-gray-900 sm:truncate sm:text-2xl',
  inputDescription: 'text-sm text-gray-500',
}
export type As<Props = any> = React.ElementType<Props>

export type TextProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
> & {
  hierarchyVariant?: keyof typeof hierarchyClassnames
  HtmlElement?: As
  loadingClassname?: string
}

export const Text = ({
  children,
  HtmlElement = 'p',
  hierarchyVariant = 'secondaryText',
  loadingClassname,
  className = '',
  ...props
}: TextProps) => (
  <HtmlElement
    className={`${hierarchyClassnames[hierarchyVariant]} ${className}`}
    {...props}
  >
    {children}
  </HtmlElement>
)
