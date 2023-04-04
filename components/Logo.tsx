import Image from "next/image"
import logo from '../public/logo.png'

export default function Logo() {
    return (
        <Image
            className='inline-block w-20 h-20'
            src={logo}
            alt="Picture of Sharlon Balbalosa"
          />
    )
}