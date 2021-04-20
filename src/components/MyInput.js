import React from 'react'
import * as inputContainer from './input.module.css'
console.log(inputContainer, 1111)
export default function MyInput() {
  return (
    <div className={inputContainer.box}>
      <input className={inputContainer.input} id="input" type="search" placeholder="在 Google 上搜索，或者输入一个网址"></input>
      <div className={inputContainer.search}></div>
      <div className={inputContainer.radio}></div>
    </div>
  )
}
