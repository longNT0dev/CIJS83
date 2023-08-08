import React, { useEffect, useMemo, useRef, useState } from 'react'
import SideBar from './SideBar/SideBar'
import Header from './Header/Header'
import ContactList from './ContactList/ContactList'
import MessageContainer from './MessageContainer/MessageContainer'
import UtilBar from './UtilBar/UtilBar'

function SS3() {

    const inputRef = useRef()

    const [test, setTest] = useState(['a', 'ab', 'cd', 'ae', 'fe'])
    const [searchText, setSearchText] = useState("")
    

    // const filterData = useMemo(() => test.filter(data => data.toLowerCase().includes(searchText.toLowerCase()), 
    // [test,searchText]))

    const filterData = test.filter(data => data.toLowerCase().includes(searchText.toLocaleLowerCase()))





    const handleFilterValue = (e) => {
        setSearchText(e.target.value)
        // let filterValue = test.filter(el => el.includes(e.target.value))

        // setFilterData(filterValue)

        // setTest()
    }


    useEffect(() => {
        console.log(inputRef)

        // inputRef.current.focus()

        // forwardRef
    }, [])

    return (
        <div style={{ width: '100vw', height: '100vh', display: 'flex', backgroundColor: '#4f4646' }}>



            <div>
                <input type="text" value={searchText} onChange={handleFilterValue} />
                {/* {
                    test.map(e => (
                        <span>{e}   </span>
                    ))
                } */}

                {
                    !searchText ?
                        test.map(e => (
                            <span>{e}   </span>
                        ))
                        :
                        filterData.map(e => (
                            <span>{e}    </span>
                        ))
                }
            </div>

            <SideBar></SideBar>

            <div style={{ width: '90%' }}>
                <Header></Header>

                <input type="text" placeholder="Enter something" ref={inputRef} />

                <div style={{ height: '90%', display: 'flex' }}>
                    <ContactList></ContactList>

                    <MessageContainer></MessageContainer>

                    <UtilBar></UtilBar>
                </div>
            </div>
        </div>
    )
}

export default SS3