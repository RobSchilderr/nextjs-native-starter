import { useSignout } from 'lib/next-apps/hooks/signout'
import { Container } from 'ui/components/Container'
import { Button } from '../../components/Button'

export const Overview = () => {
  const signOut = useSignout()
  return (
    <div>
      <Container className="mt-20">
        <Button
          onClick={async () => {
            await signOut()
          }}
          type="button"
        >
          Sign out
        </Button>
      </Container>
    </div>
  )
}
