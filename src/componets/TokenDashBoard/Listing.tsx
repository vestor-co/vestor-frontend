import { ethers } from "ethers";
import { useEffect, useState } from "react";
import { AiFillProfile, AiOutlineUsb } from "react-icons/ai";
import { Link } from "react-router-dom";
import { getdata } from "../../controllers/blockchain";
import { useVestedTokesn } from "../../hooks/useVestedTokens";

interface VestedToken {
  name: string;
  tokenAddress: string;
  ammount: string;
  cliffamount: string;
  time: string;
  id: string;
}

export const AssetHead = () => {
  return (
    <div className="grid grid-cols-6 p-5">
      <div className="col-start-1 col-span-1 grid grid-cols-2 ">
        <div className=" col-start-1 col-span-1 flex justify-center items-center">
          <p className="text-sm text-text-faded">TOKEN</p>
        </div>
      </div>
      <div className="col-start-2 col-span-1    flex justify-center">
        <p className="text-xs text-text-faded">VESTING</p>
      </div>
      <div className="col-start-3 col-span-1 flex justify-center  ">
        <p className="text-xs text-text-faded">AMOUNT</p>
      </div>
      <div className="col-start-4 col-span-1  flex justify-center ">
        <p className="text-xs text-text-faded">UNLOCK Date</p>
      </div>
      <div className="col-start-5 col-span-1 flex justify-center  ">
        <p className="text-xs text-text-faded">TOKEN ADDRESS</p>
      </div>
      <div className="col-start-6 col-span-1 flex justify-center  ">
        <p className="text-xs text-text-faded">Action</p>
      </div>
    </div>
  );
};

const AssetComponet = ({
  name,
  ammount,
  cliffamount,
  time,
  tokenAddress,
  id,
}: VestedToken) => {
  return (
    <>
      <div className="grid grid-cols-6 p-5 bg-primaryDark items-center rounded-xl">
        <div className="col-start-1  col-span-1 grid grid-cols-2 ">
          <div className=" w-full col-start-1 col-span-2 flex items-center">
            <div className="rounded-full w-12 h-12 flex justify-center items-center">
              <AiFillProfile className="rounded-full" />
            </div>
            <div className=" flex-grow">
              <p className="text-sm w-full">{name}</p>
            </div>
          </div>
        </div>
        <div className="col-start-2 col-span-1   text-text-faded flex justify-center">
          <p className="text-xs">12 months</p>
        </div>
        <div className="col-start-3 col-span-1 flex justify-center  ">
          <p className="text-xs">{ethers.utils.formatUnits(cliffamount, 18)}</p>
        </div>
        <div className="col-start-4 col-span-1  flex justify-center ">
          <div className="flex flex-col justify-center items-center">
            <p className="text-xs">invalid Date</p>
          </div>
        </div>
        <div className="col-start-5 col-span-1 flex justify-center  ">
          <p className="text-xs text-text-faded">{tokenAddress.slice(0, 10)}</p>
        </div>
        <div className="col-start-6 col-span-1 flex justify-center  ">
          <Link to={`tokendetails/${name}`}>
            <button className="text-xs bg-PrimaryBlue px-4 py-1 rounded-xl transition transform scale-95">
              View
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export const ListingScal = () => {
  return (
    <div className="grid grid-cols-5 p-5 bg-primaryDark items-center rounded-x my-2 rounded-xl">
      <div className="col-start-1 col-span-1 grid grid-cols-2 rounded-lg ">
        <div className="w-full flex items-center space-x-4">
          <div className="rounded-full w-8 h-8 bg-secondaryDark"></div>
          <div>
            <p className="bg-secondaryDark p-4 animate-pulse rounded-lg"></p>
          </div>
        </div>
      </div>
      <div className="col-start-2 col-span-1   text-text-faded flex justify-center animate-pulse">
        <p className="bg-secondaryDark w-full mx-3 p-4 animate-pulse rounded-lg"></p>
      </div>
      <div className="col-start-3 col-span-1 flex justify-center  ">
        <p className="bg-secondaryDark w-full mx-3 p-4 animate-pulse rounded-lg"></p>
      </div>
      <div className="col-start-4 col-span-1  flex justify-center ">
        <p className="bg-secondaryDark w-full mx-3 p-4 animate-pulse rounded-lg"></p>
      </div>
      <div className="col-start-5 col-span-1 flex justify-center  ">
        <p className="bg-secondaryDark w-full mx-3 p-4 animate-pulse rounded-lg"></p>
      </div>
    </div>
  );
};

export const TokenListing = () => {
  const { tokens } = useVestedTokesn();
  console.log("tokensis good", tokens);

  return (
    <div className="  w-full p-5 rounded-xl">
      <AssetHead />
      {tokens.length > 0 ? (
        tokens.map((token: any) => {
          return (
            <AssetComponet
              id={token.id}
              ammount={token.amount._hex}
              name={token.name}
              cliffamount={token.cliffamount._hex}
              time={token.time}
              tokenAddress={token.tokenaddress}
            />
          );
        })
      ) : (
        <div className="">
          <ListingScal />
          <ListingScal />
          <ListingScal />
          <ListingScal />
          <ListingScal />
        </div>
      )}
    </div>
  );
};
