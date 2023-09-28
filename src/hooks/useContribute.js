import { useCallback } from "react";
import { useConnection } from "../context/connection";
import { calculateGasMargin, getCrowdfundContract } from "../utils";

const useContributeCampaign = () => {
  const { isActive, provider } = useConnection();
  const contributeCampaign = useCallback(
    async (contribution, id) => {
      if (!contribution)
        return alert("Please enter contribution amount");
      if (!isActive) return alert("please, connect");
      const contract = await getCrowdfundContract(provider, true);
      return contract.contributeEth(id, {
        value: contribution,
      });
    },
    [isActive, provider]
  );

  return contributeCampaign;
};

export default useContributeCampaign;
