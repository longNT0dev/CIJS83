import React from 'react'
import './SS2.module.css'

function SS2() {
    const text = "Thêm"
    let count = 0

    const add = () => {
        // console.log("Xin chào, bạn vừa bấm vào nút nào đó" + str)
        count++
        console.log("Count", count)
    }


    return (
        <div className="form">
            <button className="test-module">Hello</button>
            <div className="header">
                <div className="header_nav">
                    <input type="text" placeholder="Tên" className="inputname" />
                    <input type="text" placeholder="Điện thoại" className="inputnumber" />
                    <button onClick={() => add("Long")}>{count}</button>
                </div>
                <div className="header_error"></div>
            </div>
            <div className="line"></div>
            <div className="content">
                <div className="content_header">
                    <input type="text" placeholder="Tìm kiếm" className="inputsearch" />
                    <button onClick="search()">tìm</button>
                    <button onClick="del()">xoá trùng</button>
                </div>
                <div className="noti_search"></div>
                <div className="content_text">
                    <div className="text">
                        <section className="username">blice</section>
                        <section className="usernumber">(816)-403-5456</section>
                    </div>
                    <div className="text">
                        <section className="username">aob</section>
                        <section className="usernumber">(572)-566-2397</section>
                    </div>
                    <div className="text">
                        <section className="username">dris</section>
                        <section className="usernumber">(846)-309-4841</section>
                    </div>
                    <div className="text">
                        <section className="username">eaniel</section>
                        <section className="usernumber">(816)-403-5456</section>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SS2
