import { useCallback } from "react";
import { useConnection } from "../context/connection";
import { calculateGasMargin, getCrowdfundContract } from "../utils";

const useContributeCampaign = () => {
  const { isActive, provider } = useConnection();
  const contributeCampaign = useCallback(
    async (contribution, id) => {
      console.log(contribution, id)
      if (!contribution)
        return alert("Please enter contribution amount");
      if (!isActive) return alert("please, connect");
      const contract = await getCrowdfundContract(provider, true);
      const estimatedGas = await contract.contributeEth.estimateGas(
        contribution
      );

      // console.log(estimatedGas)

      return contract.contributeEth(id, {
        gasLimit: calculateGasMargin(estimatedGas),
        value: contribution,
      });
    },
    [isActive, provider]
  );

  return contributeCampaign;
};

export default useContributeCampaign;
