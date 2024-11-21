import React from 'react'

const Heading = (props) => {
  let patternt = /#([^#]+)#/g
  let findtext = props.text.replace(patternt, "<span class='one'>$1</span>");
    return (
      <props.as className={props.className} dangerouslySetInnerHTML={{ __html: findtext }}></props.as>
    )
  }

export default Heading