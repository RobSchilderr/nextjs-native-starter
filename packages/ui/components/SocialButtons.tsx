import FacebookIcon from 'ui/icons/FacebookIcon'
import GoogleIcon from 'ui/icons/GoogleIcon'
import AppleIcon from 'ui/icons/AppleIcon'
import GithubIcon from '../icons/GithubIcon'

export const GoogleButton = ({ onClick }: { onClick: () => void }) => (
  <button
    type="button"
    onClick={onClick}
    className="inline-flex justify-center items-center px-4 py-3 text-sm font-medium  bg-white border border-gray-300 rounded-full shadow-sm hover:bg-gray-50"
  >
    <span className="sr-only">Continue with Google</span>
    <GoogleIcon />
    <span className="ml-2 font-medium text-xl">Continue with Google</span>
  </button>
)

export const FacebookButton = ({ onClick }: { onClick: () => void }) => (
  <button
    type="button"
    onClick={onClick}
    className="inline-flex justify-center px-4 py-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full shadow-sm hover:bg-gray-50"
  >
    <span className="sr-only">Continue with Facebook</span>
    <FacebookIcon />
  </button>
)

export const AppleButton = ({ onClick }: { onClick: () => void }) => (
  <button
    type="button"
    onClick={onClick}
    className="inline-flex items-center rounded-full justify-center px-4 py-3 text-sm font-medium bg-white border border-gray-300 shadow-sm hover:bg-gray-50"
  >
    <span className="sr-only">Continue with Apple</span>
    <AppleIcon />
    <span className="ml-2 font-medium text-xl">Continue with Apple</span>
  </button>
)

export const GithubButton = ({ onClick }: { onClick: () => void }) => (
  <button
    type="button"
    onClick={onClick}
    className="inline-flex items-center rounded-full justify-center px-4 py-3 text-sm font-medium bg-white border border-gray-300 shadow-sm hover:bg-gray-50"
  >
    <GithubIcon />
    <span className="ml-2 font-medium text-xl">Continue with Github</span>
  </button>
)
