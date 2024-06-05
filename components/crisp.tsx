import { useEffect } from 'react'
//.CRISP_WEBSITE_ID="b0fb2deb-d4f0-4376-848f-baf2cf23ff76"
declare global {
  interface Window {
    $crisp: any
    CRISP_WEBSITE_ID: string
  }
}

const Crisp = () => {
  useEffect(() => {
    window.$crisp = []
    window.CRISP_WEBSITE_ID = '2758fb28-fd7f-40dc-b6a5-bd21a44f41ef'
    ;(() => {
      const d = document
      const s: any = d.createElement('script')
      s.src = 'https://client.crisp.chat/l.js'
      s.async = 1
      d.getElementsByTagName('body')[0].appendChild(s)
    })()
  })
  return null
}
export default Crisp
