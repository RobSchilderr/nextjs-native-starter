/* eslint-disable jsx-a11y/click-events-have-key-events */
import { RadioGroup } from '@headlessui/react'
import { CheckCircleIcon } from '@heroicons/react/24/solid'
import { cn } from 'lib/utils/util'

export type RadioGroupOptionDoubleType = {
  id: number
  title: string
  value: any
  description?: string
  radioGroupOptionDoubleCheckboxClassName?: string
  radioGroupOptionTagDescription?: string
  radioGroupOptionDisabled?: boolean
}

export const RadioGroupOptionDouble = ({
  value,
  title,
  description,
  radioGroupOptionDoubleCheckboxClassName,
  id,
  radioGroupOptionTagDescription,
  radioGroupOptionDisabled,
}: RadioGroupOptionDoubleType) => (
  <RadioGroup.Option
    value={value}
    key={id}
    disabled={radioGroupOptionDisabled}
    className={({ checked, active }) =>
      cn(
        radioGroupOptionDisabled
          ? 'cursor-not-allowed opacity-50'
          : 'cursor-pointer',
        checked ? 'border-transparent' : 'border-gray-300',
        active ? 'ring-2 ring-indigo-500' : '',
        'relative flex cursor-pointer rounded-lg border bg-white p-4 shadow-sm focus:outline-none',
      )
    }
  >
    {({ checked, active }) => (
      <>
        <div className="flex flex-1 w-80">
          <div className="flex flex-col w-full">
            <RadioGroup.Description
              as="span"
              className={cn(
                description ? 'text-sm font-medium' : 'text-md',
                'inset-x-0 flex items-center pr-0 text-gray-900',
              )}
            >
              <span className="w-full break-words sm:w-full sm:break-normal">
                {title}
              </span>
              {radioGroupOptionTagDescription && (
                <span
                  className={`inline-flex items-center rounded bg-green-100 px-3 py-0.5 text-xs font-medium text-green-800 sm:whitespace-nowrap `}
                >
                  {radioGroupOptionTagDescription}{' '}
                </span>
              )}
            </RadioGroup.Description>

            <RadioGroup.Description
              as="span"
              className="flex items-center mt-1 text-sm text-gray-500"
            >
              {description}
            </RadioGroup.Description>
          </div>
        </div>
        {checked ? (
          <CheckCircleIcon
            className={`h-5 w-5 text-indigo-600 ${radioGroupOptionDoubleCheckboxClassName}`}
            aria-hidden="true"
          />
        ) : null}
        <div
          className={cn(
            active ? 'border' : 'border-2',
            checked ? 'border-indigo-500' : 'border-transparent',
            'pointer-events-none absolute -inset-px rounded-lg',
          )}
          aria-hidden="true"
        />
      </>
    )}
  </RadioGroup.Option>
)
