import { FC } from 'react'
import CartDropdown from './CardDropdown'
import ProductItem from './ProductItem'
import {useGetProductsQuery} from '@/services'

export const Home: FC = () => {
    const {isLoading, error, data} = useGetProductsQuery()

    return (
        <div>
            <div className='flex justify-between items-center mb-10'>
                <h1 className='text-2xl text-green-900 font-medium'>
                    Let&apos;s find your products!
                </h1>
                <CartDropdown />
            </div>

            {isLoading ? 'Loading...' : error ? <div className={'text-red'}>{error}</div> : (
                <div className='flex flex-wrap justify-between'>
                    {data?.map((product) => (
                        <ProductItem key={product.id} {...product} />
                    ))}
                </div>
            )}


        </div>
    )
}
