const urls = Object.freeze({
  prod: "https://gorest.co.in",
  dev: "https://gorest.co.in",
})

const baseUrl = __DEV__ ? urls.dev : urls.prod

export const constants = Object.freeze({
  baseURL: baseUrl,
  apiURL: `${baseUrl}/api`,
  googleMapsURL: "https://maps.googleapis.com/maps/api",

  HTTPStatusCode: {
    100: "Continue",
    101: "Switching Protocols",
    102: "Processing",
    200: "OK",
    201: "Created",
    202: "Accepted",
    203: "Non-Authoritative Information",
    204: "No Content",
    205: "Reset Content",
    206: "Partial Content",
    300: "Multiple Choices",
    301: "Moved Permanently",
    302: "Found",
    303: "See Other",
    304: "Not Modified",
    305: "Use Proxy",
    306: "Unused",
    307: "Temporary Redirect",
    308: "Permanent Redirect",
    400: "Bad Request",
    401: "Unauthorized",
    402: "Payment Required",
    403: "Forbidden",
    404: "Not Found",
    405: "Method Not Allowed",
    406: "Not Acceptable",
    407: "Proxy Authentication Required",
    408: "Request Timeout",
    409: "Conflict",
    410: "Gone",
    411: "Length Required",
    412: "Precondition Failed",
    413: "Request Entity Too Large",
    414: "Request-URI Too Long",
    415: "Unsupported Media Type",
    416: "Requested Range Not Satisfiable",
    417: "Expectation Failed",
    418: "I'm a teapot",
    422: "Unprocessable Entity",
    428: "Precondition Required",
    429: "Too Many Requests",
    431: "Request Header Fields Too Large",
    451: "Unavailable For Legal Reasons",
    500: "Internal Server Error",
    501: "Not Implemented",
    502: "Bad Gateway",
    503: "Service Unavailable",
    504: "Gateway Timeout",
    505: "HTTP Version Not Supported",
    511: "Network Authentication Required",
    520: "Web server is returning an unknown error",
    522: "Connection timed out",
    524: "A timeout occurred",
  },
  themeOptions: {
    "#2fbe74": {
      pri50: "#e4f6eb",
      pri500: "#00b25c",
      pri700: "#009145",
      pri800: "#007f39",
      sec700: "#be2f79",
      sec900: "#802764",
    },
    "#8b50da": {
      pri50: "#f0e7fa",
      pri500: "#752dd3",
      pri700: "#5d1ec4",
      pri800: "#4f17bd",
      sec700: "#679f00",
      sec900: "#256b00",
    },
    "#f69400": {
      pri50: "#fef2e0",
      pri500: "#f28800",
      pri700: "#e66900",
      pri800: "#dd4f00",
      sec700: "#0062f6",
      sec900: "#203ed7",
    },
    "#000000": {
      pri50: "#f5f5f5",
      pri500: "#555555",
      pri700: "#262626",
      pri800: "#000000",
      sec700: "#434343",
      sec900: "#000000",
    },
  },
})

export default constants