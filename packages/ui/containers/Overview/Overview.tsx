import { navLinks } from 'lib/utils/navLinks'
import { useSignout } from 'lib/next-apps/hooks/signout'
import { useUserStore } from 'ui/global-stores/useUserStore'
import { PageLayout } from 'ui/containers/Layout/PageLayout'
import { PageHeader } from 'ui/containers/PageHeader/PageHeader'
import { Container } from 'ui/components/Container'
import { Text } from 'ui/components/Text'
import { AppNav } from 'ui/components/AppNav/AppNav'
import { Button } from '../../components/Button'

export const Overview = () => {
  const user = useUserStore(state => state.user)
  const signOut = useSignout()
  return (
    <PageLayout>
      <PageHeader title="Hallo" />
      <Container className="space-y-6">
        <Text>Logged in as: {user?.given_name}</Text>
      </Container>

      <div className="mt-6">{navLinks && <AppNav items={navLinks} />}</div>

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
    </PageLayout>
  )
}
