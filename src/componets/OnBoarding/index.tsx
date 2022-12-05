import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAccount } from "wagmi";
import { Button, Card } from "./Card";

export const ObBoarding = () => {
  const naviage = useNavigate();
  const { isConnected } = useAccount();

  return (
    <div className="w-full   min-h-screen p-5 flex justify-around items-center content-center flex-wrap ">
      <Card
        title="Vesting"
        text="Click Here to lock and vest tokens for your investors in a easy no code way   "
        link={"/select"}
      />
      <Card
        title="Staking"
        text="Make token staking pools for users to stake your tokens and earn apy"
        Btn={Button}
      />
      <Card
        title="Airdropper"
        text="Airdrop Your tokens to users and community members in the most simple and easy way possible"
        Btn={Button}
      />
      <Card
        title="IDO/ICO"
        text="launch your Idos and icos to raise funds for your project in exchange for tokens"
        Btn={Button}
      />
      <Card
        title="vested Token Dashboard"
        text="Claim your vested tokens in the most simple and easy way"
        Btn={Button}
      />
      <Card
        title="liquidty Vaults"
        text="Click Here to lock your liqudity tokens in the vaults with a timelock to asssure yout users aganist rugpulls"
        Btn={Button}
      />
    </div>
  );
};
