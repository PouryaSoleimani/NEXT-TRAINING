import React from 'react'

function FlexBox() {
    return (
        <>
            <div id='FLEX____CONTAINER' className='w-[95%] py-16 bg-zinc-800 mx-auto mt-16 flex'>

                {/* ORDER */}
                <div className="FLEX____ITEM sm:order-4">1</div>
                <div className="FLEX____ITEM sm:order-3">2</div>
                <div className="FLEX____ITEM sm:order-2">3</div>
                <div className="FLEX____ITEM sm:order-1">4</div>
            </div>


            {/* ALIGN CONTENT */}
            <div id="FLEX____CONTAINER2" className='w-[95%] bg-zinc-950 mx-auto mt-16'>
                <div className="FLEX____ITEM2">ABOUT</div>
                <div className="FLEX____ITEM2">GALLERY</div>
                <div className="FLEX____ITEM2">CART</div>
                <div className="FLEX____ITEM2">LOGOUT</div>
            </div>


            {/* GROW AND SIZE */}
            <div id="FLEX____CONTAINER3" className='w-[95%] py-16 bg-zinc-700 mx-auto mt-16 flex'>
                <div className="FLEX____ITEM3 size-44 grow">1</div>
                <div className="FLEX____ITEM3 size-44 grow">2</div>
                <div className="FLEX____ITEM3 size-44 grow">3</div>
                <div className="FLEX____ITEM3 size-44 grow">5</div>
                <div className="FLEX____ITEM3 size-44 grow">6</div>
                <div className="FLEX____ITEM3 size-44 grow">7</div>
                <div className="FLEX____ITEM3 size-44 grow">8</div>
                <div className="FLEX____ITEM3 size-44 grow">9</div>
                <div className="FLEX____ITEM3 size-44 grow">10</div>
            </div>
        </>
    )
}

export default FlexBox