import { onThirdPartyLogin } from 'lib/utils/supertokensUtilities'
import {
  AppleButton,
  GithubButton,
  GoogleButton,
} from '../../components/SocialButtons'

export const StackedSocialButtons = ({
  platform,
  buttons,
}: {
  platform: 'APP' | 'WEB'
  buttons: ('google' | 'github' | 'apple')[]
}) => (
  <div className="flex flex-col mt-2 space-y-6">
    {buttons.includes('google') && (
      <GoogleButton
        onClick={() =>
          onThirdPartyLogin({
            provider: 'google',
            platform,
          })
        }
      />
    )}
    {buttons.includes('github') && (
      <GithubButton
        onClick={() =>
          onThirdPartyLogin({
            provider: 'github',
            platform,
          })
        }
      />
    )}
    {buttons.includes('apple') && (
      <AppleButton
        onClick={() =>
          onThirdPartyLogin({
            provider: 'apple',
            platform,
          })
        }
      />
    )}
  </div>
)
