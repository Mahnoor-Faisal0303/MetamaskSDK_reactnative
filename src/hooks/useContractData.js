import { useQuery } from "@tanstack/react-query";
import {
  getDepositAmount,
  getGameDuration,
  getTopFame,
} from "../api/function";

const useContractData = () => {
  const { data: depositAmount } = useQuery({
    queryKey: ["deposit"],
    queryFn: getDepositAmount,
  });
  const { data: gameDuration } = useQuery({
    queryKey: ["game"],
    queryFn: getGameDuration,
  });
  const { data: topValue } = useQuery({
    queryKey: ["topfame"],
    queryFn: getTopFame,
  });

  return {
    depositAmount,
    gameDuration,
    topValue,
  };
};

export default useContractData;
