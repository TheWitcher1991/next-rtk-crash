import Image from 'next/image'
import { FC } from 'react'
import {IProduct} from "@/services";
import {useActions, useTypedSelector} from "@/hooks";

const ProductItem: FC<IProduct> = (product) => {
    const actions = useActions()
    const { card } = useTypedSelector(state => state)

    const isExistsInCard = card.some(item => item.id === product.id)

    const addToCard = () => {
        !isExistsInCard && actions.addItem(product)
    }

    return (
        <div
            style={{ width: '48%', backgroundColor: '#E5F0EA' }}
            className='rounded-xl mb-5 p-3 shadow-sm'
        >
            <div className='text-center'>
                <Image
                    src={product.image}
                    alt={product.title}
                    width='100'
                    height='143'
                    className='rounded-xl'
                />
            </div>
            <div className='flex items-center justify-between mt-3'>
                <div className='text-green-900 font-medium text-sm overflow-hidden text-ellipsis whitespace-nowrap mr-5'>
                    {product.title}
                </div>
                <div className='text-sm text-green-600'>${product.price}</div>
            </div>
            <button onClick={addToCard} className='text-sm mt-3 bg-white rounded-xl w-3/4 mx-auto block p-1 hover:bg-green-200'>
                {isExistsInCard ? 'Already in cart' : 'Add to cart'}
            </button>
        </div>
    )
}

export default ProductItem
