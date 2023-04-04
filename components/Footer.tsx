import Logo from "./Logo"
import DownloadButton from "./DownloadButton"

export default function Footer() {
    return (
    <footer className="flex items-center justify-center w-full min-h-screen mt-24 bg-black ">
        <div className="flex flex-col w-full px-4 text-white md:w-2/3">
          <div className="w-full font-bold text-7xl">
            <h1 className="w-full md:w-2/3">How can I help you? Get
              in touch</h1>
          </div>
          <div className="flex flex-col mt-8 md:flex-row md:justify-between">
            <p className="w-full text-gray-400 md:w-2/3">This site is built on React and NextJS v13 using React Spring for the animations.</p>
            <div className="pt-6 w-44 md:pt-0">
            <DownloadButton />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-col items-center justify-between gap-4 mt-24 mb-12 md:flex-row">
              <Logo />
              <a className="text-gray-600 uppercase cursor-pointer hover:text-white" href="mailto:sbalbalosa@gmail.com" title="sbalbalos@gmail.com">sbalbalosa@gmail.com</a>
              <a className="text-gray-600 uppercase cursor-pointer hover:text-white" href="https://www.linkedin.com/in/balbalosasharlon" target="_blank">Linkedin</a>
              <a className="text-gray-600 uppercase cursor-pointer hover:text-white" href="https://github.com/sbalbalosa" target="_blank">Github</a>
              <a className="text-gray-600 uppercase cursor-pointer hover:text-white" href="https://twitter.com/sbalbalosa" target="_blank">Twitter</a>
            </div>
            <hr className="border-gray-600" />
            <p className="w-full my-12 text-center text-gray-600">
              Copyright © {(new Date()).getFullYear()} Sharlon Balbalosa
            </p>
          </div>
        </div>
      </footer>
    )
}