import React, { useState } from 'react'

export default function Movie({ name, price, id }) {


    return (
        <div >
            <h3>
                {
                    `Name is ${name} and Price is ${price} and id is ${id}`
                }

            </h3>

        </div>
    )

}