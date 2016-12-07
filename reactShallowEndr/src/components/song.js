import React, { Component } from 'react'

export const Song = (props) => {
  return (
    <li album_id={props.album_id} mb_id={props.mb_id}>{props.name}</li>
  )
}
