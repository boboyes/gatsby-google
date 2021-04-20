import React,{ useState } from 'react'
import * as item from './ItemBox.module.css'

export default function ItemBox({removeItem,ite,state,setstate,settitle,setdialog,showEdit,goEdit}) {
  const handleEdit =  (flag,ite,e) => {
    e.preventDefault()
    setstate(flag)
    showEdit(ite)
  }
  const editItem = (e,ite) => {
    e.preventDefault()
    goEdit(ite)
  }
  const remove = (e,ite) => {
    e.preventDefault()
    console.log(ite,'999999999999')
    removeItem(ite)
  }
  const [url, seturl] = useState(ite.url + '/favicon.ico')
  const setImageUrl = (e) => {
    console.log(e,9999999999)
    // seturl('http://www.google.com/s2/favicons?domain='+ite.url)
    const id = parseInt(Math.random() * 100) % 3
    seturl('/static/default' + id + '.png')
  }
  return (
    <a className={item.box} href={ite.url}>
      {/* <div className={item.icon}><img className={item.logo} src={ite.url + '/favicon.ico'||'http://www.google.com/s2/favicons?domain='+ite.url}/></div> */}
      <div className={item.icon}><img className={item.logo} src={url} onError={(e)=> setImageUrl(e)}/></div>
      <div className={item.name} title={ite.name}>{ite.name}</div>
      <div className={item.btnBox} onClick={e => handleEdit(true,ite,e)}></div>
      {
          !ite.status ? '':(<div className={item.editBox}>
          <button className={item.editBtn} onClick={e => editItem(e,ite)}>修改快捷方式</button>
          <button className={item.editBtn} onClick={e => remove(e, ite)}>移除</button>
        </div>)
        }
    </a>
  )
}
