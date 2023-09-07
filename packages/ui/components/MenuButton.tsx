import { cn } from 'lib/utils/util'

type MenuButtonProps = {
  // eslint-disable-next-line react/require-default-props
  icon?: { icon: React.ComponentType }
  onClick: () => void
  activeMenuState: boolean
  index: number
  disabled: boolean
  children: React.ReactNode
}
export const MenuButton = (props: MenuButtonProps) => {
  const { icon, onClick, activeMenuState, index, disabled, children, ...rest } =
    props

  const buttonClass = cn(
    'inline-flex w-full items-center px-4 py-2 text-left text-sm',
    {
      'border-t border-gray-100': index !== 0,
      'cursor-not-allowed text-gray-300': disabled,
      'bg-gray-100 text-gray-900': !disabled && activeMenuState,
      'text-gray-700': !disabled && !activeMenuState,
    },
  )
  return (
    <button
      {...rest}
      onClick={onClick}
      type="button"
      className={cn(buttonClass)}
    >
      {icon && (
        <icon.icon
          // className={`mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500 ${icon.className} `}
          aria-hidden="true"
        />
      )}

      {children}
    </button>
  )
}
