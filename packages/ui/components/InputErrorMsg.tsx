import React from 'react'

type InputErrorMsgProps = {
  children: React.ReactNode
}

const InputErrorMsg = ({ children }: InputErrorMsgProps) => (
  <div className="flex text-red-600" data-testid="input-error-msg">
    {children}
  </div>
)

export default InputErrorMsg
