import React, { useState } from 'react'

function SS4() {

    // useState trả về 1 mảng [Giá trị của state, Hàm dùng để thay đổi giá trị của state]
    const [count, setCount] = useState(0)

    const increaseCount = () => {
        // Đây là cách gọi setCount nhiều lần trong 1 hàm và luôn lấy giá trị mới nhất 
        setCount(count + 1)
        setCount((prev) => prev + 1)
        setCount((prev) => prev + 1)
        setCount((prev) => prev + 1)
    }

    return (
        <>
            <div style={{ color: 'black' }}>{count}</div>
            <button className="test-module" onClick={() => increaseCount()}>Tăng</button>
        </>
    )
}

export default SS4