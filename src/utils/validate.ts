export const validators = {
  validateString: (string: string) => {
    const val = string.trim()
    if (val.length > 10) {
      return { error: 'Max 10 symbols', text: val }
    }
    return { text: val }
  },
}
