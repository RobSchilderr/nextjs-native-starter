import { useState } from 'react'

type EditingState = {
  isEditing: boolean
  startEditing: () => void
  cancelEditing: () => void
}

export function useEditingState(initialValue: boolean): EditingState {
  const [isEditing, setIsEditing] = useState(initialValue)

  const cancelEditing = (): void => setIsEditing(false)
  const startEditing = (): void => setIsEditing(true)

  return { isEditing, startEditing, cancelEditing }
}
