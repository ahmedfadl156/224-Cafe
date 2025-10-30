import { useQuery } from "@tanstack/react-query";
import { getMenuData } from "./menu";

export function useMenu(){
    const {data: MenuData , isPending , error} = useQuery({
        queryKey: ["menu"],
        queryFn: getMenuData,
    })
    return {MenuData , isPending , error}
}