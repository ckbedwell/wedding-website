import * as Sentry from '@sentry/react'

export function sentrySetup() {
  if (!window.location.host.startsWith(`localhost`)) {
    Sentry.init({
      dsn: `https://c711db1f92c346349a6de26391d40bbd@o431097.ingest.sentry.io/5381112`,
    })
  }
}
