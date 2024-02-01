import React, { useState } from 'react'


export default function UserLister(userList) {
    const [compList, setCompList] = useState(userList)
    return (
        <div className="userListerWrapper">
            <p className="userNamer"></p>
            <p className="userIder"></p>
            <p className="userFirstPetNamer"></p>
        </div>
    )
}