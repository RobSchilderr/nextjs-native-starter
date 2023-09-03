/* eslint-disable jsx-a11y/click-events-have-key-events */
import { RadioGroup } from '@headlessui/react'
import RadioGroupOptionDouble, {
  RadioGroupOptionDoubleType,
} from './RadioGroupOptionDouble'

type Props = {
  onChange: any
  radioGroupValue: any
  radioGroupLabel: string
  radioGroupOptions: RadioGroupOptionDoubleType[] | undefined
  radioGroupDescription?: string
  error?: string | undefined
  gridClassName?: string
  radioGroupOptionDoubleCheckboxClassName?: string
  radioGroupDescriptionClassName?: string
  radioGroupLabelClassName?: string
  radioGroupOptionTagDescription?: string
  radioGroupOptionTagColor?: string
}

const CustomRadioGroup: React.FC<Props> = ({
  onChange,
  radioGroupValue,
  radioGroupOptions,
  radioGroupDescription,
  radioGroupOptionDoubleCheckboxClassName,
  radioGroupDescriptionClassName,
  radioGroupLabel,
  radioGroupLabelClassName = 'text-lg',
  error,
  gridClassName,
}) => {
  const gridClass = gridClassName
    ? gridClassName
    : ' grid-cols-1  sm:grid-cols-2'

  return (
    <>
      <RadioGroup
        onChange={(e: any) => {
          onChange(e)
        }}
        value={radioGroupValue}
      >
        <RadioGroup.Label
          className={`${radioGroupLabelClassName} font-medium text-gray-900`}
        >
          {radioGroupLabel}
        </RadioGroup.Label>
        {radioGroupDescription && (
          <p
            className={`text-prose mt-1 max-w-lg text-sm text-gray-500 ${radioGroupDescriptionClassName}`}
          >
            {radioGroupDescription}
          </p>
        )}

        <div className={`mt-4 grid gap-y-6 sm:gap-x-4 ${gridClass}`}>
          {radioGroupOptions &&
            radioGroupOptions.map(radioGroupOption => {
              return (
                <RadioGroupOptionDouble
                  key={radioGroupOption.id}
                  radioGroupOptionDoubleCheckboxClassName={
                    radioGroupOptionDoubleCheckboxClassName
                  }
                  {...radioGroupOption}
                />
              )
            })}
        </div>
      </RadioGroup>
      {error && <div className="mt-2 text-sm text-red-500">{error} </div>}
    </>
  )
}

export default CustomRadioGroup
