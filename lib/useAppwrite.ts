import { Alert } from "react-native";
import { useEffect, useState } from "react";

const useAppwrite = <T>(callback: () => Promise<T>) => {
  const [data, setData] = useState<T | null>(null); 
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await callback();
      setData(res);
    } catch (error) {
      Alert.alert("Error", (error as Error).message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => fetchData();

  return { data, loading, refetch };
};

export default useAppwrite;
