import { Container } from 'components/container'
import { Image } from 'components/image'
import { Text } from 'components/text'
import { WeddingDate } from 'components/wedding-date'

import styles from './home.css'

export const Home = () => {
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
            <Text
              family={`secondary`}
              size={15}
              tag={`h1`}
              textAlign={`center`}
            >
              {`We're getting married!`}
            </Text>
            <WeddingDate />
          </div>
        </main>
      </Container>
    </Container>
  )
}
