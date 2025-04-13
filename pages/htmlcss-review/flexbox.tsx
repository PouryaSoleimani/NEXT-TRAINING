import React from 'react'

function FlexBox() {
    return (
        <>
            <div id='FLEX____CONTAINER' className='w-[95%] h-[59ren] py-16 bg-zinc-800 mx-auto mt-16'>
                <div className="FLEX____ITEM">ABOUT</div>
                <div className="FLEX____ITEM">GALLERY</div>
                <div className="FLEX____ITEM">CART</div>
                <div className="FLEX____ITEM">LOGOUT</div>
            </div>

            <div id="FLEX____CONTAINER2" className='w-[95%] bg-zinc-800 mx-auto mt-16'>
                <div className="FLEX____ITEM2">ABOUT</div>
                <div className="FLEX____ITEM2">GALLERY</div>
                <div className="FLEX____ITEM2">CART</div>
                <div className="FLEX____ITEM2">LOGOUT</div>
            </div>

        </>
    )
}

export default FlexBox