const USSD = {}

USSD.initiationResponse = (args) => {
  console.log(typeof args)
  return "Hello"
}

export { USSD }