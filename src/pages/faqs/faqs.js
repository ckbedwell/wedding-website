import { Section } from 'components/section'
 
import { QuestionAndAnswer } from 'pages/faqs/components'

import data from 'data/faqs.json'

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
