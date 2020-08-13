import React from 'react'

import { Section } from 'components/section'
import { Polaroid } from 'components/polaroid'
import { Text } from 'components/text'
import { Svg } from 'components/svg'

import styles from './ceremony.css'
// import data from 'data/about.json'

export const Ceremony = () => {
  // const {
  //   items,
  // } = data

  return (
    <>
      <Section
        style={{
          backgroundColor: `rgb(255 245 239)`,
        }}
      >
        <div className={styles.imageAndText}>
          <div className={styles.polaroidWrapper}>
            <Polaroid
              image={{
                ratio: [1920, 1440],
                src: `st-andrews-church.jpg`,
              }}
              rotate={-2}
              text={`St Andrews Church`}
            />
          </div>
          <div>
            <Text
              family={`secondary`}
              size={10}
              tag={`h1`}
            >
              {`St Andrews Church`}
            </Text>
            <Text>
              {`We'll be getting married at St Andrews Church.`}
            </Text>
          </div>
        </div>
      </Section>
      <Section>
        <div className={styles.imageAndText}>
          <div>
            <Text
              family={`secondary`}
              size={10}
              tag={`h1`}
            >
              {`St Andrews Church`}
            </Text>
            <Text>
              {`We'll be getting married at St Andrews Church.`}
            </Text>
          </div>
          <div className={styles.polaroidWrapper}>
            <div className={styles.infoArrow}>
              <div className={styles.arrowWrapper}>
                <Svg
                  color={`black`}
                  icon={`drawn-arrow`}
                  size={[`25rem`]}
                />
              </div>
              <Text
                className={styles.arrowNote}
                family={`handwriting`}
                size={5}
              >
                {`Em's parents got married here x years ago!`}
              </Text>
            </div>
            <Polaroid
              image={{
                ratio: [600, 800],
                src: ``,
              }}
              rotate={-2}
              text={`St Andrews Church`}
            />
          </div>
        </div>
      </Section>
    </>
  )
}
