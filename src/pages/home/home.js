import { useSelector } from 'react-redux'

import { Container } from 'components/container'
import { Image } from 'components/image'
import { Text } from 'components/text'
import { WeddingDate } from 'components/wedding-date'
import { WeddingInvite } from './components/wedding-invite'
import { CovidNotice } from './components/covid-notice'

import styles from './home.css'

export const Home = () => {
  const docId = useSelector(state => state.database.docId)

  return (
    <Container container={`large`}>
      <Image
        ratio={[1729, 861]}
        src={`em-chris-spain-narrow.jpg`}
      />
      <Container
        container={`small`}
        padded
      >
        <main className={styles.main}>
          <div className={styles.border} />
          <div className={styles.card}>
            {renderContent()}
          </div>
          <CovidNotice />
        </main>
      </Container>
    </Container>
  )

  function renderContent() {
    if (docId) {
      return (
        <WeddingInvite />
      )
    }

    return (
      <>
        <Text
          family={`secondary`}
          size={18}
          tag={`h1`}
          textAlign={`center`}
        >
          {`We're getting married!`}
        </Text>
        <WeddingDate />
      </>
    )
  }
}
