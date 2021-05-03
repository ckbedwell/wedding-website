import { Box } from 'components/box'
import { Section } from 'components/section'
import { Desktop, TabletMobile } from 'components/responsive'
 
import { QuestionAndAnswer } from 'pages/faqs/components'

import data from 'data/faqs.json'

import styles from './faqs.css'

export const Faqs = () => {
  return data.map(({ question, answer }, i) => {
    return (
      <Section
        key={question}
        style={{
          backgroundColor: i % 2 === 0 ? `rgb(250, 255, 232)` : `rgb(243 255 200)`,
        }}
      >
        <QuestionAndAnswer
          answer={answer}
          question={question}
        />
      </Section>
    )})
}
