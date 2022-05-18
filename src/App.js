import { Form } from "antd"
import { useState } from "react"

const App = () => {
  // 1a. Cho mảng số nguyên chưa được sắp xếp. Viết hàm xếp 5 số lớn nhất ra đầu mảng
  const findMax5 = (arr) => {
    let newArray = [...arr].sort((a, b) => b - a).slice(0, 5)
    return newArray
  }

  // Test case 1a
  console.log(findMax5([3,4,5,3,2,3,10,11]))
  console.log(findMax5([14,12,38,17,10,36,12,29,45,34,48,22]));
  console.log(findMax5([10,11,2,30,22,6,8,9,11,12,22]));

  // 1b. Viết hàm nhận vào 1 mảng và trả ra phần tử xuất hiện nhiều lần nhất trong mảng.
  const findFrequent = (arr) => {
    let count = 0
    let item
    let maxCount = 1
    for(let i = 0; i < arr.length; i++) {
        for(let j = i; j < arr.length; j++) {
            if(arr[i] === arr[j]) {
                count++
            }
            if(maxCount < count) {
                maxCount = count
                item = arr[i]
            }
        }
        count = 0
    }
    return item
  }

  // Test case 1b
  console.log(findFrequent([3, 7, 3]))
  console.log(findFrequent([null, "hello", true, null]))
  console.log(findFrequent([false, "up", "down", "left", "right", true, false]));

  /////////////////////////////////////////////////////////////////////////////
  
  const [form] = Form.useForm()
  const [list_data, set_list_data] = useState([])

  const submit = (value) => {
    set_list_data(prev => [...prev, value])
  }

  return (
    <div className="px-[30%] text-center">
      <h1 className="text-3xl font-bold mb-8 mt-4">Fire Group Internship Test</h1>
      <Form
        form={form}
        onFinish={submit}
        autoComplete="off"
      >
        <div className="flex">
          <p className="w-3/12 text-left mt-1">Họ và tên:</p>
          <div className="w-9/12 text-left">
            <Form.Item
              name={"full_name"}
              rules={[
                { required: true, message: 'Vui lòng nhập họ và tên!' }
              ]}
            >
              <input placeholder="Nhập họ và tên" className="border w-full py-1 px-2" />
            </Form.Item>
          </div>
        </div>
        <div className="flex">
          <p className="w-3/12 text-left mt-1">Email:</p>
          <div className="w-9/12 text-left">
            <Form.Item
              name={"email"}
              rules={[
                { required: true, message: 'Vui lòng nhập email!' },
                {
                  pattern: /^(([^<>()[\]\\.,;:$%^&*\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: 'Email không hợp lệ!',
                },
              ]}
            >
              <input placeholder="Nhập email" className="border w-full py-1 px-2" />
            </Form.Item>
          </div>
        </div>
        <div className="flex">
          <p className="w-3/12 text-left mt-1">Số điện thoại:</p>
          <div className="w-9/12 text-left">
            <Form.Item
              name={"phone"}
              rules={[
                { required: true, message: 'Vui lòng nhập số điện thoại!' }
              ]}
            >
              <input placeholder="Nhập số điện thoại" className="border w-full py-1 px-2" />
            </Form.Item>
          </div>
        </div>
        <div className="flex">
          <p className="w-3/12 text-left">Nội dung liên hệ:</p>
          <div className="w-9/12">
            <Form.Item
              name={"contact"}
            >
              <textarea placeholder="Nhập nội dung liên hệ" rows={5} className="border w-full py-1 px-2 resize-none" />
            </Form.Item>
          </div>
        </div>
        <button type="submit" className="px-8 py-2 mr-4 border hover:bg-slate-300 transition-all ease-linear duration-3000 uppercase">Submit</button>
        <button className="px-8 py-2 border hover:bg-slate-300 transition-all ease-linear duration-3000 uppercase" onClick={(e) => {e.preventDefault(); form.resetFields()}}>Clear</button>
      </Form>
      <table className="border w-full mt-8">
        <thead>
          <tr>
            <th className="border py-2 px-4">STT</th>
            <th className="border py-2 px-4">Họ và tên</th>
            <th className="border py-2 px-4">Email</th>
            <th className="border py-2 px-4">Số điện thoại</th>
            <th className="border py-2 px-4">Nội dung liên hệ</th>
          </tr>
        </thead>
        <tbody>
          {list_data.map((item, index) => (
            <tr key={index}>
              <td className="border py-2 px-4">{index + 1}</td>
              <td className="border py-2 px-4">{item?.full_name}</td>
              <td className="border py-2 px-4">{item?.email}</td>
              <td className="border py-2 px-4">{item?.phone}</td>
              <td className="border py-2 px-4">{item?.contact}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default App