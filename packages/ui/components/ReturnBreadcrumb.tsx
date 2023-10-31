import { useRouter } from 'next/navigation'
import { ArrowLeftIcon } from '@heroicons/react/20/solid'
import { ButtonLink } from './ButtonLink'

export const ReturnBreadcrumb: React.FC = () => {
  const router = useRouter()

  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex">
        <li>
          <ButtonLink
            onClick={() => {
              router.back()
            }}
            type="button"
            className="text-blue-500 hover:text-blue-700 group-hover:text-blue-700 inset-0 flex items-center border-2 p-2.5 text-sm font-medium no-underline shadow-sm"
          >
            <ArrowLeftIcon
              className="h-5 w-5 flex-shrink-0 text-gray-600 hover:text-gray-700"
              aria-hidden="true"
            />
          </ButtonLink>
        </li>
      </ol>
    </nav>
  )
}
