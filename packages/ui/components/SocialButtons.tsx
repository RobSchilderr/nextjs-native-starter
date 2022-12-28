import FacebookIcon from 'ui/icons/FacebookIcon'
import GoogleIcon from 'ui/icons/GoogleIcon'
import AppleIcon from 'ui/icons/AppleIcon'

export const GoogleButton = ({ onClick }: { onClick: () => void }) => (
  <button
    type="button"
    onClick={onClick}
    className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50"
  >
    <span className="sr-only">Sign in with Google</span>
    <GoogleIcon />
  </button>
)

export const FacebookButton = ({ onClick }: { onClick: () => void }) => (
  <button
    type="button"
    onClick={onClick}
    className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50"
  >
    <span className="sr-only">Sign in with Facebook</span>
    <FacebookIcon />
  </button>
)

export const AppleButton = ({ onClick }: { onClick: () => void }) => (
  <button
    type="button"
    onClick={onClick}
    className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50"
  >
    <span className="sr-only">Sign in with Facebook</span>
    <AppleIcon />
  </button>
)
