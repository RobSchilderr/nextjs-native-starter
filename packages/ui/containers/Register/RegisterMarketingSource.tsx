import { Controller } from 'react-hook-form'
import { InsertPersonProps } from './register.types'
import CustomRadioGroup from 'ui/components/Form/CustomRadioGroup/CustomRadioGroup'

const marketingSourceData = [
  {
    id: 0,
    title: 'Through LinkedIn',
    value: 'through_linkedin',
  },
  {
    id: 1,
    title: 'Through Google/Bing/DuckDuckGo',
    value: 'through_search',
  },
  {
    id: 2,
    title: 'Through a friend, family member or acquintance',
    value: 'through_personal_contacts',
  },
  {
    id: 3,
    title: 'Through Facebook',
    value: 'through_facebook',
  },
  {
    id: 4,
    title: 'Through my work or network',
    value: 'through_network',
  },
  {
    id: 5,
    title: 'App Store search',
    value: 'through_app_store',
  },
  {
    id: 6,
    title: 'Twitter',
    value: 'through_twitter',
  },
  {
    id: 7,
    title: 'Other',
    value: 'other',
  },
]

const PickMarketingSource = ({
  control,
  formState: { errors },
}: InsertPersonProps) => (
  <Controller
    control={control}
    name="marketing_source"
    render={({ field: { onChange, value } }) => (
      <CustomRadioGroup
        onChange={onChange}
        radioGroupValue={value}
        gridClassName="grid-cols-1 sm:grid-cols-2"
        error={errors?.marketing_source?.message}
        radioGroupOptions={marketingSourceData}
        radioGroupLabel="How did you find us?"
      />
    )}
  />
)

export default PickMarketingSource
