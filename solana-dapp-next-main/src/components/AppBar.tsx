import { FC } from 'react';
import Link from "next/link";

import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useAutoConnect } from '../contexts/AutoConnectProvider';

export const AppBar: FC = props => {
  const { autoConnect, setAutoConnect } = useAutoConnect();

  return (
    <div className="flex-none px-0 pb-4 pt-4 w-fit absolute ">

      {/* NavBar / Header */}
      <div className="navbar mb-2  gradient-transparency text-neutral-content">
        <div className="px-2 mx-2 navbar-start">
          {/* <label htmlFor="my-drawer" className="btn btn-square btn-ghost">

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </label> */}
          <div className="p-2">
           
          </div>
        </div>

        {/* Nav Links */}
        <div className="navbar-end lg:flex text-xl ">
          <div className="flex items-stretch ">
          <Link href="/store">
              <p className="btn btn-ghost btn-sm rounded-btn text-md normal-case font-thin">Galeria</p>
            </Link>
            <Link href="/">
              <p className="btn btn-ghost btn-sm rounded-btn text-md normal-case font-thin">Inicio</p>
            </Link>
            
            <Link href="/whitepaper">
              <p className="btn btn-ghost btn-sm rounded-btn text-md normal-case font-thin">Whitepaper</p>
            </Link>

            <Link href="/">
              <p className="btn btn-ghost btn-sm rounded-btn text-md normal-case font-thin border-2 border-lime-600 rounded-md">Mint NFT</p>
            </Link>
           
            {/* <Link href="/">
              <a className="btn btn-ghost btn-sm rounded-btn text-xl">Home</a>
            </Link>
            <Link href="/basics">
              <a className="btn btn-ghost btn-sm rounded-btn text-xl">Basics</a>
            </Link>
            <Link href="/token">
              <a className="btn btn-ghost btn-sm rounded-btn text-xl">Token</a>
            </Link>
            <Link href="/nft">
              <a className="btn btn-ghost btn-sm rounded-btn text-xl">NFT</a>
            </Link> */}
          </div>
        </div>

        {/* Wallet & Settings */}
        <div className="navbar-end bordered">
          <div className="dropdown">
            <div tabIndex={0} className="btn btn-square btn-ghost">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <ul tabIndex={0} className="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52">
              <li>
                <div className="form-control">
                  <label className="cursor-pointer label">
                    <a>Autoconnect</a>
                    <input type="checkbox" checked={autoConnect} onChange={(e) => setAutoConnect(e.target.checked)} className="toggle" />
                  </label>
                </div>
              </li>
              <li>
                <a>Slippage (pending)</a>
              </li>
              <li>
                <a>Setting 3</a>
              </li>
            </ul>
          </div>
          <WalletMultiButton className="btn btn-ghost mr-2" />
        </div>
      </div>
      {props.children}
    </div>
  );
};
