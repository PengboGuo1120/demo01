import { v4 as uuidv4 } from 'uuid'
// 生成随机字符串，每次执行不能发生变化 且持久存储
export const getUUID = () => {
  // 确认本地存储是否存在uuid
  let uuid_token = localStorage.getItem('UUIDTOKEN')
  if (!uuid_token) {
    //生成临时身份
    uuid_token = uuidv4()
    localStorage.setItem('UUIDTOKEN', uuid_token)
  }
  return uuid_token
}
