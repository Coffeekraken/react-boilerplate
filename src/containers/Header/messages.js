import { defineMessages } from "react-intl"

// scope
export const scope = "header"

// messages
export default defineMessages({
  home: {
    id: `${scope}.home`,
    defaultMessage: "Home"
  },
  counter: {
    id: `${scope}.counter`,
    defaultMessage: "Counter"
  }
})
