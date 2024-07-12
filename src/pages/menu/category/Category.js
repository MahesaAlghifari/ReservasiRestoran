import React from 'react'
import Card from './components/Card'

export default function Category() {
    return (
        <div>
            <div className='container container-lg pb-48'>
                <div className="text-center pt-20">
                    <p className="text-xl underline tracking-tight text-gray-900 lg:text-5xl">
                        CATEGORIES ALA CARTE
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
                        fugiat veniam occaecat fugiat aliqua.
                    </p>
                </div>
                <Card/>
            </div>
        </div>
    )
}
