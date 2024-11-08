import { ApiJSONResponseType } from "@/types/ApiResponseType";
import { ReservationType } from "@/types/ReservationType";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";

export default function useReservation() {

  const [reservations, setReservations] = useState<ReservationType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const getData = useCallback(() => {
    axios.get(`${process.env.EXPO_PUBLIC_API_URL}/api/reservations`)
      .then(res => {
        // console.log("RESERVATION STATUS", res.status);
        const data = res.data as ApiJSONResponseType<ReservationType>;
        setReservations(data["hydra:member"]);
      })
      .catch(err => {
        console.log("ERROR ", err);
        setError(err);
      })
      .finally(() => setIsLoading(false));
  }, []);

  useEffect(() => {
    setIsLoading(true);
    getData();
  }, [])

  return { reservations, isLoading, error, getData }

}