import { Section } from 'components/section'

import emilyGuestList from 'data/emily-guests.json'
import chrisGuestList from 'data/chris-guests.json'

export const Emails = () => {
  return (
    <Section>
      {[
        ...Object.values(emilyGuestList),
        ...Object.values(chrisGuestList),
      ].map(email => {
        return (
          <div key={email}>
            {email}
          </div>
        )})
      }
    </Section>
  )
}
