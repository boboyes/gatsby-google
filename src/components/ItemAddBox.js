import React from 'react'
import * as item from './itemBox.module.css'

export default function ItemBox({addBtn,state,setstate,settitle,setdialog}) {
  const handleEdit =  (flag,e) => {
    e.preventDefault()
    setstate(flag)
  }
  const editItem = (e) => {
    e.preventDefault()
    addBtn()
  }
  const remove = (e) => {
    e.preventDefault()
  }
  return (
    <a className={item.box} href="javascript:void(0)" onClick={editItem}>
      <div className={item.icon}><img className={item.logo} src="/static/add.svg"/></div>
      <div className={item.name} title="添加快捷方式">添加快捷方式</div>
    </a>
  )
}
