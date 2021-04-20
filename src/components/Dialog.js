import React from 'react'
import useInput from '../hooks/useInput'
import * as dialog from './dialog.module.css'

export default function Dialog({title,setdialog,addList,current}) {
  console.log(current)
  const name = useInput(current.name || "")
  const url = useInput(current.url||"")

  const editEnd = (e) => {
    const nameValue = name.input.value
    const urlValue = url.input.value
    // console.log(nameValue, urlValue,'urlValue')
    if (!urlValue) return

    addList({
      name: nameValue ? nameValue : urlValue,
      url: (urlValue.startsWith('https://') ||urlValue.startsWith('http://')) ? urlValue : ('https://' + urlValue),
      id: current.id || new Date().getTime(),
      status: false
    })
  }
  return (
    <div className={dialog.Mask}>
      <div className={dialog.dialogBox}>
        <div className={dialog.title}>{title}快捷方式</div>
        <div className={dialog.body}>
          <div className={dialog.label}>名称</div>
          <div className={dialog.inputBox}>
            <input className={dialog.input} {...name.input} id="input" part="input"/>
            <div className={dialog.bottomLine}></div>
          </div>
          <div className={dialog.label}>网址</div>
          <div className={dialog.inputBox}>
            <input className={dialog.input} {...url.input} id="input2" part="input"/>
            <div className={dialog.bottomLine}></div>
          </div>
        </div>
        <div className={dialog.btnContainer}>
          <button className={dialog.cancel} onClick={()=>setdialog(false)}>取消</button>
          <button className={dialog.confirm} onClick={editEnd}>完成</button>
        </div>
      </div>
    </div>
  )
}
