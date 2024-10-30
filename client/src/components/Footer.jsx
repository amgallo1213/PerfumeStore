import React from 'react'

import { GiDelicatePerfume } from "react-icons/gi";

const Footer = () => {
  return (
    <div className=' w-full m-8 font-primary flex flex-row justify-around'>
      <hr />
      <h4>Not Strangers  <span><GiDelicatePerfume /></span></h4>
      <div id="address">
          <p class="address">123 Arch Street</p>
          <p class="address">Philadelphia, PA 19123</p>
          <p class="address">215/222-2222</p>
          <p class="address"><a href="mailto:hello@notstrangers.com" id="email">hello@notstrangers.com</a></p>
      </div>
    </div>
  )
}

export default Footer