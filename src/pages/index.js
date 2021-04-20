import React, { useState } from "react"
import Dialog from "../components/Dialog"
import ItemBox from "../components/ItemBox"
import ItemAddBox from "../components/ItemAddBox"
import MyInput from "../components/MyInput"
import * as main from "./index.module.css"
console.log(main,'--------')

export default function Home() {
  const [state, setstate] = useState(false)
  const [dialog, setdialog] = useState(false)
  const [title, settitle] = useState('修改')
  const [urlList, seturlList] = useState([])
  const [current, setcurrent] = useState({})
  const closeDialog = () => {
    setstate(false)
    let index = urlList.findIndex(item => item.status)
    if (index >= 0) {
      urlList[index].status = false
      seturlList(urlList)
    }
  }
  const addList = (item) => {
    let index = urlList.findIndex(ite => ite.id === item.id)
    if (index >=0 ) {
      urlList[index] = item
    } else {
      urlList.push(item)
    }
    setdialog(false)
    seturlList(urlList)
  }
  const showEdit = (ite) => {
    ite.status = true
    seturlList(urlList)
  }
  const goEdit = (ite) => {
    setstate(false)
    settitle('编辑')
    setdialog(true)
    ite.status = false
    setcurrent(ite)
    seturlList(urlList)
  }
  const removeItem = (ite) => {
    console.log(removeItem)
    let index = urlList.findIndex(item => item.id === ite.id)
    urlList.splice(index,1)
    setstate(false)
    ite.status = false
    seturlList(urlList)
  }
  const addBtn = () => {
    setcurrent({})
    settitle('添加')
    setdialog(true)
  }
  return <div className={main.container}>
    <div id="logo" className={main.logo}></div>
    <MyInput />
    <div className={main.listBox}>
      {
        urlList.map(item => (
          <ItemBox showEdit={showEdit} removeItem={removeItem} key={item.id} ite={item} settitle={settitle} setdialog={setdialog} state={state} setstate={setstate} goEdit={goEdit} />
        ))
      }
      {
        urlList.length >= 10 ? '':(<ItemAddBox settitle={settitle} setdialog={setdialog} addBtn={addBtn} state={state} setstate={setstate} />)
      }
    </div>
    {
      state ? (<div className={main.dialogMask} onClick={closeDialog}></div>):''
    }
    {
      dialog ? (<Dialog title={title} current={current} setdialog={setdialog} addList={addList}/>) : ''
    }
    
  </div>
}
