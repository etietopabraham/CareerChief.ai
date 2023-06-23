import React from 'react'
import styled from 'styled-components'

const AnnouncementStyled = styled('div')`
    height: 68px;
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #DD5D56;
`

const Announcements = () => {
  return (
    <AnnouncementStyled>
        <p>Announcements come here!</p>
    </AnnouncementStyled>
  )
}

export default Announcements