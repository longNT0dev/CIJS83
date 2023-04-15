import React from 'react'
import SideBar from './SideBar/SideBar'
import Header from './Header/Header'
import ContactList from './ContactList/ContactList'
import MessageContainer from './MessageContainer/MessageContainer'
import UtilBar from './UtilBar/UtilBar'

function SS3() {
    return (
        <div style={{ width: '100vw', height: '100vh', display: 'flex', backgroundColor: '#4f4646' }}>
            <SideBar></SideBar>

            <div style={{ width: '90%' }}>
                <Header></Header>

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